const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const { createServer } = require('../tools/server.cjs');

const root = path.resolve(__dirname, '..');
const artifacts = path.join(root, 'artifacts');
const SAVE_KEY = 'skychord.save.v1';
fs.mkdirSync(artifacts, { recursive: true });

async function main() {
  const { createCampaign, serialize } = await import('../src/campaign.js');
  const server = createServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}/skychord/`;
  const browser = await chromium.launch({ headless: true });
  const report = { url, scenarios: [], errors: [], failed: [], external: [] };

  function fixture(position, hp = [120, 108, 100]) {
    const state = createCampaign();
    state.position = position;
    state.hp = hp;
    state.playSeconds = 1;
    return serialize(state);
  }

  async function openPage(save, viewport, mobile = false) {
    console.log('open context', viewport.width, viewport.height);
    const context = await browser.newContext({ viewport, hasTouch: mobile, isMobile: mobile });
    const page = await context.newPage();
    const errors = [], failed = [], external = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('response', response => { if (response.status() >= 400) failed.push([response.status(), response.url()]); });
    page.on('requestfailed', request => failed.push([request.failure()?.errorText || 'request failed', request.url()]));
    page.on('request', request => { if (request.url().startsWith('http') && !request.url().startsWith(new URL(url).origin)) external.push(request.url()); });
    await page.addInitScript(value => {
      if (!sessionStorage.getItem('__skychord_fixture_loaded')) {
        localStorage.setItem('skychord.save.v1', value);
        sessionStorage.setItem('__skychord_fixture_loaded', '1');
      }
    }, save);
    await page.goto(url, { waitUntil: 'load' });
    console.log('page loaded');
    await page.waitForFunction(() => window.__skychord, null, { timeout: 10000 });
    await page.locator('[data-action="continue"]').click();
    await page.waitForFunction(() => window.__skychord.screen === 'explore');
    return { context, page, errors, failed, external };
  }

  async function state(page) { return page.evaluate(() => ({ screen: window.__skychord.screen, campaign: window.__skychord.state, battle: window.__skychord.battle })); }
  async function enterBattle(page) {
    assert.equal((await state(page)).screen, 'explore');
    await page.keyboard.press('f');
    await page.waitForFunction(() => ['battle', 'dialogue'].includes(window.__skychord.screen));
    for (let i = 0; i < 12 && (await state(page)).screen === 'dialogue'; i++) await page.keyboard.press('Enter');
    await page.waitForFunction(() => window.__skychord.screen === 'battle');
  }
  async function command(page, hero, skill, target = 0, wait = 460) {
    await page.locator(`[data-action="battle-hero"][data-hero="${hero}"]`).click();
    await page.locator(`[data-action="battle-skill"][data-skill="${skill}"]`).click();
    const targetButton = page.locator(`[data-action="battle-target"][data-target="${target}"]`);
    if (await targetButton.count() && await targetButton.isEnabled()) await targetButton.click();
    await page.locator('[data-action="execute"]').click();
    if (wait) await page.waitForTimeout(wait);
  }
  async function nextCommand(page, wait = 460) {
    const battle = (await state(page)).battle;
    const hero = battle.heroes.findIndex(unit => unit.hp > 0 && !unit.used);
    const target = battle.enemies.findIndex(unit => unit.hp > 0);
    assert.ok(hero >= 0 && target >= 0, 'battle has a living legal actor and target');
    await command(page, hero, 0, target, wait);
  }
  function record(pageHandle, name, extra = {}) {
    report.scenarios.push({ name, ...extra });
    report.errors.push(...pageHandle.errors.map(message => `${name}: ${message}`));
    report.failed.push(...pageHandle.failed.map(entry => [name, ...entry]));
    report.external.push(...pageHandle.external.map(value => `${name}: ${value}`));
  }

  try {
    console.log('scenario pause begin');
    const pausePage = await openPage(fixture({ x: 5, z: 4 }), { width: 1280, height: 800 });
    await enterBattle(pausePage.page);
    let pausedAfterResult = false;
    for (let i = 0; i < 24 && !pausedAfterResult; i++) {
      console.log('pause command', i);
      const before = await state(pausePage.page);
      if (before.battle?.result) { await pausePage.page.keyboard.press('Escape'); pausedAfterResult = true; break; }
      await nextCommand(pausePage.page, 0);
      await pausePage.page.waitForTimeout(35);
      const after = await state(pausePage.page);
      if (after.battle?.result) { await pausePage.page.keyboard.press('Escape'); pausedAfterResult = true; break; }
      await pausePage.page.waitForTimeout(440);
      if ((await state(pausePage.page)).screen !== 'battle') break;
    }
    assert.equal(pausedAfterResult, true, 'a resolving command reached a pending result');
    await pausePage.page.screenshot({ path: path.join(artifacts, 'battle-flow-pause.png') });
    const frozen = await state(pausePage.page);
    assert.equal(frozen.screen, 'pause');
    await pausePage.page.waitForTimeout(650);
    assert.equal((await state(pausePage.page)).screen, 'pause', 'delayed timer cannot leave pause');
    await pausePage.page.keyboard.press('Escape');
    await pausePage.page.waitForTimeout(500);
    const resumed = await state(pausePage.page);
    assert.equal(resumed.screen, 'victory', 'resume resolves pending victory');
    record(pausePage, 'pause-freezes-pending-victory', { result: 'victory-after-resume' });
    console.log('scenario pause done');
    await pausePage.context.close();

    console.log('scenario menu begin');
    const menuPage = await openPage(fixture({ x: 5, z: 4 }), { width: 1280, height: 800 });
    await enterBattle(menuPage.page); await nextCommand(menuPage.page, 0); await menuPage.page.keyboard.press('Escape');
    assert.equal((await state(menuPage.page)).screen, 'pause');
    await menuPage.page.locator('#pause-screen [data-action="menu"]').click(); await menuPage.page.waitForTimeout(650);
    assert.equal((await state(menuPage.page)).screen, 'title');
    assert.equal((await state(menuPage.page)).battle, null);
    await menuPage.page.reload({ waitUntil: 'networkidle' }); await menuPage.page.waitForFunction(() => window.__skychord);
    await menuPage.page.locator('[data-action="continue"]').click(); await menuPage.page.waitForFunction(() => window.__skychord.screen === 'explore');
    const continued = await state(menuPage.page);
    assert.deepEqual(continued.campaign.cleared, []); assert.equal(continued.campaign.position.x, 5); assert.equal(continued.campaign.position.z, 4);
    record(menuPage, 'pause-to-title-cancels-pending-action', { result: 'prebattle-save-restored' });
    console.log('scenario menu done');
    await menuPage.context.close();

    console.log('scenario defeat begin');
    const defeatPage = await openPage(fixture({ x: 23, z: 0 }, [1, 1, 1]), { width: 1280, height: 800 });
    await enterBattle(defeatPage.page);
    const baselineTextures = await defeatPage.page.evaluate(() => window.__skychord.sceneStats.textures);
    for (let i = 0; i < 30 && (await state(defeatPage.page)).screen === 'battle'; i++) {
      const current = await state(defeatPage.page);
      if (current.battle.result) { await defeatPage.page.waitForTimeout(500); continue; }
      await nextCommand(defeatPage.page);
    }
    await defeatPage.page.waitForFunction(() => window.__skychord.screen === 'defeat', null, { timeout: 5000 });
    await defeatPage.page.locator('[data-action="retry"]').click(); await defeatPage.page.waitForFunction(() => window.__skychord.screen === 'battle');
    const retried = (await state(defeatPage.page)).battle;
    assert.equal(retried.round, 1); assert.ok(retried.heroes.every(hero => hero.hp === hero.maxHp));
    await defeatPage.page.waitForTimeout(100);
    assert.ok(await defeatPage.page.evaluate(() => window.__skychord.sceneStats.textures) <= baselineTextures, 'retry releases damage labels from the previous battle');
    await defeatPage.page.screenshot({ path: path.join(artifacts, 'battle-flow-defeat-retry.png') });
    record(defeatPage, 'defeat-retry-restores-party', { result: 'round-1-full-hp' });
    console.log('scenario defeat done');
    await defeatPage.context.close();

    console.log('scenario mobile begin');
    const portrait = await openPage(fixture({ x: 5, z: 4 }), { width: 390, height: 844 }, true);
    await enterBattle(portrait.page);
    const portraitLayout = await portrait.page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, touch: getComputedStyle(document.querySelector('.touch-bar')).display, guide: !!document.querySelector('#battle-guide summary'), boxes: [...document.querySelectorAll('#battle-enemies button, #battle-heroes button, #battle-skills button, #execute-button')].slice(0, 8).map(node => { const b = node.getBoundingClientRect(); return { left: b.left, right: b.right, top: b.top, bottom: b.bottom, visible: b.width > 0 && b.height > 0 }; }) }));
    assert.ok(portraitLayout.scrollWidth <= portraitLayout.width + 1); assert.equal(portraitLayout.touch, 'none'); assert.equal(portraitLayout.guide, true); assert.ok(portraitLayout.boxes.every(box => box.visible && box.left >= 0 && box.right <= portraitLayout.width));
    await portrait.page.locator('#battle-guide summary').click();
    await portrait.page.screenshot({ path: path.join(artifacts, 'battle-flow-mobile-portrait.png') });
    await portrait.page.setViewportSize({ width: 844, height: 390 });
    const landscapeLayout = await portrait.page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, touch: getComputedStyle(document.querySelector('.touch-bar')).display, boxes: [...document.querySelectorAll('#battle-enemies button, #battle-heroes button, #battle-skills button, #execute-button')].slice(0, 8).map(node => { const b = node.getBoundingClientRect(); return { left: b.left, right: b.right, top: b.top, bottom: b.bottom, visible: b.width > 0 && b.height > 0 }; }) }));
    assert.ok(landscapeLayout.scrollWidth <= landscapeLayout.width + 1); assert.equal(landscapeLayout.touch, 'none'); assert.ok(landscapeLayout.boxes.every(box => box.visible && box.left >= 0 && box.right <= landscapeLayout.width));
    await portrait.page.screenshot({ path: path.join(artifacts, 'battle-flow-mobile-landscape.png') });
    record(portrait, 'mobile-battle-layout', { result: 'portrait-and-landscape-reachable', portrait: portraitLayout, landscape: landscapeLayout });
    console.log('scenario mobile layout done');
    await portrait.context.close();

    console.log('scenario first fight begin');
    const firstFight = await openPage(fixture({ x: 5, z: 4 }), { width: 390, height: 844 }, true);
    await enterBattle(firstFight.page);
    for (let i = 0; i < 80 && (await state(firstFight.page)).screen === 'battle'; i++) {
      const current = await state(firstFight.page);
      if (current.battle.result) { await firstFight.page.waitForTimeout(500); continue; }
      await nextCommand(firstFight.page);
    }
    await firstFight.page.waitForFunction(() => window.__skychord.screen === 'victory', null, { timeout: 5000 });
    await firstFight.page.screenshot({ path: path.join(artifacts, 'battle-flow-first-victory.png') });
    record(firstFight, 'mobile-first-fight-real-controls', { result: 'victory' });
    console.log('scenario first fight done');
    await firstFight.context.close();
  } catch (error) {
    report.failure = error.message;
    throw error;
  } finally {
    fs.writeFileSync(path.join(artifacts, 'battle-flow-report.json'), JSON.stringify(report, null, 2));
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }

  assert.deepEqual(report.errors, []); assert.deepEqual(report.failed, []); assert.deepEqual(report.external, []);
  console.log(JSON.stringify(report, null, 2));
}

main().catch(error => { console.error(error); process.exitCode = 1; });
