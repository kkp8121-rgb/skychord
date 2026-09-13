import { CHARACTERS, REGIONS, QUESTS, ENCOUNTERS, NARRATIVE } from './content.js';
import { createCampaign, interact, finishBattle, objective, questProgress, serialize, deserialize, upgradeHero, upgradeCost } from './campaign.js';
import { createBattle, act, encore } from './combat.js';
import { GameScene } from './scene.js';
import { SkyUI } from './ui.js';
import { SkyAudio } from './audio.js';

const SAVE_KEY = 'skychord.save.v1';
const opening = NARRATIVE.opening;
const noteLabel = { ember: '불꽃', tide: '파도', star: '별빛' };

function safeJson(value, fallback = null) {
  try { return JSON.parse(JSON.stringify(value)); } catch (_) { return fallback; }
}

function boot() {
  const ui = new SkyUI(document);
  const audio = new SkyAudio();
  const canvas = document.getElementById('game');
  let scene = null;
  let sceneErrorReported = false;
  function sceneFailure(error) {
    const message = `3D 장면을 준비하지 못했습니다: ${error?.message || '브라우저 호환성'}`;
    document.getElementById('webgl-fallback')?.classList.remove('hidden');
    const fallback = document.getElementById('webgl-fallback'); if (fallback) fallback.textContent = message;
    document.querySelectorAll('[data-action="new-game"], [data-action="continue"]').forEach((button) => { button.disabled = true; });
    ui.toast(message);
    if (!sceneErrorReported) { sceneErrorReported = true; console.error(error); }
  }
  try { scene = new GameScene(canvas, { onError: sceneFailure }); }
  catch (error) { sceneFailure(error); }

  let campaign = loadCampaign() || createCampaign();
  let battle = null;
  let encounterId = null;
  let screen = 'title';
  let beforePause = 'explore';
  let dialogueLines = [];
  let dialogueIndex = 0;
  let dialogueAfter = null;
  let showOpeningToast = false;
  let pendingVictory = null;
  let selectedHero = 0;
  let selectedSkill = 0;
  let selectedTarget = 0;
  let actionLockUntil = 0;
  let pendingBattleResolution = false;
  let battleEpoch = 0;
  let held = Object.create(null);
  const heldSources = {
    up: new Set(), down: new Set(), left: new Set(), right: new Set(), sprint: new Set(),
    rotateLeft: new Set(), rotateRight: new Set()
  };
  let toast = '';
  let toastUntil = 0;
  let previous = performance.now();
  let musicClock = 0;
  let saveClock = 0;
  const reducedMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  function resizeScene() { try { scene?.resize?.(); } catch (error) { sceneFailure(error); } }

  function loadCampaign() {
    try { return deserialize(localStorage.getItem(SAVE_KEY) || ''); } catch (_) { return null; }
  }
  function saveCampaign() {
    if (battle && !['victory', 'defeat'].includes(screen)) return;
    try { localStorage.setItem(SAVE_KEY, serialize(campaign)); } catch (_) {}
  }
  function region() { return REGIONS[campaign.region] || REGIONS[0]; }
  function viewCampaign() {
    return Object.assign({}, campaign, { regionData: region(), objective: objective(campaign), upgradeCosts: CHARACTERS.map((_, i) => upgradeCost(campaign, i)) });
  }
  function unlockAudio() { try { const value = audio.unlock(); if (value?.catch) value.catch(() => {}); } catch (_) {} }

  function setScreen(next) {
    clearHeld();
    screen = next;
    if (next === 'pause') ui.show('pause');
    else if (next === 'journal') ui.journal(viewCampaign(), CHARACTERS, questProgress(campaign), 'map');
    else if (next === 'title') ui.title(campaign.finished ? null : (campaign.playSeconds > 0 || campaign.cleared?.length || campaign.collected?.length || campaign.talked?.length) ? { regionName: region().name, playSeconds: campaign.playSeconds } : null);
    else if (next === 'dialogue') ui.dialogue(dialogueLines, dialogueIndex, CHARACTERS);
    else if (next === 'explore') renderExplore();
    else if (next === 'battle') renderBattle();
    else if (next === 'victory') ui.show('victory');
    else if (next === 'defeat') ui.show('defeat');
    else if (next === 'ending') ui.ending(campaign, { battles: campaign.cleared?.length || 0 });
    if (scene) {
      try {
        if (next === 'title' || next === 'dialogue') scene.setMode('title');
        else if (next === 'battle') scene.setMode('battle', battle);
        else if (next === 'ending') scene.setMode('ending');
        else if (next === 'pause') scene.setMode(beforePause === 'battle' ? 'battle' : 'explore', battle);
        else scene.setMode('explore');
      } catch (error) { sceneFailure(error); }
    }
    audio.setMode(next === 'battle' ? 'battle' : next === 'ending' ? 'ending' : next === 'title' || next === 'dialogue' ? 'title' : next === 'pause' || next === 'journal' ? 'paused' : 'explore', campaign.region || 0);
  }

  function newGame() {
    unlockAudio();
    campaign = createCampaign(); battle = null; encounterId = null; pendingBattleResolution = false; actionLockUntil = 0; battleEpoch++;
    if (scene) { try { scene.setRegion(region(), campaign); } catch (error) { sceneFailure(error); } }
    saveCampaign();
    dialogueLines = opening; dialogueIndex = 0; dialogueAfter = 'explore'; showOpeningToast = true;
    setScreen('dialogue');
  }
  function continueGame() {
    unlockAudio();
    if (!campaign || campaign.finished) return newGame();
    battle = null; pendingBattleResolution = false; actionLockUntil = 0; battleEpoch++;
    if (scene) { try { scene.setRegion(region(), campaign); } catch (error) { sceneFailure(error); } }
    setScreen('explore');
  }
  function title() { clearHeld(); battle = null; pendingBattleResolution = false; actionLockUntil = 0; battleEpoch++; saveCampaign(); setScreen('title'); }

  function renderExplore() {
    const nearby = scene?.getNearby(campaign) || null;
    ui.explore(viewCampaign(), scene, nearby, performance.now() < toastUntil ? toast : '');
  }
  function renderBattle(preview = '') {
    if (!battle) return;
    const living = livingEnemies();
    if (living.length && !living.includes(selectedTarget)) selectedTarget = living[0];
    const hero = battle.heroes?.[selectedHero];
    const skill = hero?.skills?.[selectedSkill];
    const note = hero?.muted ? null : skill?.note || '';
    const notes = [...(battle.notes || []), note].slice(-3);
    const valid = notes.filter((item) => noteLabel[item]);
    const chord = notes.length === 3 && valid.length === 3 && new Set(valid).size === 1 ? 'ECHO · 체력/보호막 +8' : notes.length === 3 && valid.length === 3 && new Set(valid).size === 3 ? 'BREAK · 충전 공격 취소' : '';
    const previewNotes = notes.map((item) => itemLabel(item)).join(' · ') || '새 음표를 선택하십시오.';
    renderBattlePreview(preview || (chord ? `${chord} · ${previewNotes}` : `${previewNotes} · 화음 미리보기`));
  }
  function itemLabel(item) { return noteLabel[item] || (item === null || item === undefined ? '침묵' : ''); }
  function renderBattlePreview(preview) {
    ui.battle(battle, CHARACTERS, selectedHero, selectedSkill, selectedTarget, preview, performance.now() < actionLockUntil, ENCOUNTERS[battle.encounterId]);
  }

  function advanceDialogue() {
    if (dialogueIndex < dialogueLines.length - 1) { dialogueIndex++; ui.dialogue(dialogueLines, dialogueIndex, CHARACTERS); return; }
    const after = dialogueAfter || 'explore'; dialogueAfter = null;
    if (after === 'start-boss') {
      battleEpoch++; actionLockUntil = 0; battle = createBattle(campaign, encounterId); selectedHero = 0; selectedSkill = 0; selectedTarget = 0; setScreen('battle'); return;
    }
    if (after === 'boss-victory') {
      const outcome = pendingVictory; pendingVictory = null; setScreen('victory');
      if (outcome) ui.victory(`${region().subtitle || region().name} · ${campaign.region + 1} / ${REGIONS.length} 신호 복원`, outcome.rewards);
      return;
    }
    if (after === 'ending') { setScreen('ending'); return; }
    setScreen('explore');
    if (showOpeningToast) { showOpeningToast = false; ui.toast('첫 목표: 역의 릴레이를 찾아 F로 조사하십시오.'); }
  }
  function interactNearby() {
    if (!scene) return;
    const nearby = scene.getNearby(campaign);
    if (!nearby) { notify('가까운 신호나 동료가 없습니다.'); renderExplore(); return; }
    const result = interact(campaign, nearby.id);
    if (!result) return;
    if (result.type === 'battle') {
      encounterId = result.encounterId;
      saveCampaign();
      const boss = nearby.type === 'boss' || /-boss$/.test(encounterId);
      if (boss) {
        const encounter = ENCOUNTERS[encounterId];
        dialogueLines = encounter?.intro ? [{ speaker: encounter.name || '수호자', text: encounter.intro }] : [];
        dialogueIndex = 0; dialogueAfter = 'start-boss'; setScreen('dialogue');
      } else {
        battleEpoch++; actionLockUntil = 0; battle = createBattle(campaign, encounterId); selectedHero = 0; selectedSkill = 0; selectedTarget = 0; setScreen('battle');
      }
    } else if (result.type === 'dialogue') { dialogueLines = result.lines || []; dialogueIndex = 0; dialogueAfter = 'explore'; showOpeningToast = false; setScreen('dialogue'); saveCampaign(); }
    else if (result.type === 'travel') { if (scene) { try { scene.setRegion(region(), campaign); } catch (error) { sceneFailure(error); } } saveCampaign(); notify('새 구역의 선로가 연결되었습니다.'); renderExplore(); }
    else if (result.type === 'ending') { campaign.finished = true; dialogueLines = result.lines || []; dialogueIndex = 0; dialogueAfter = 'ending'; saveCampaign(); setScreen('dialogue'); }
    else { notify(result.message || '신호가 응답했습니다.'); saveCampaign(); renderExplore(); }
  }

  function livingHeroes() { return (battle?.heroes || []).map((hero, i) => hero.hp > 0 ? i : -1).filter((i) => i >= 0); }
  function livingEnemies() { return (battle?.enemies || []).map((enemy, i) => enemy.hp > 0 ? i : -1).filter((i) => i >= 0); }
  function selectHero(delta = 1) {
    const choices = livingHeroes().filter((i) => !battle.heroes[i].used);
    if (!choices.length) return;
    const index = Math.max(0, choices.indexOf(selectedHero)); selectedHero = choices[(index + delta + choices.length) % choices.length];
    selectedSkill = Math.min(selectedSkill, (battle.heroes[selectedHero].skills || []).length - 1); renderBattle();
  }
  function selectTarget(delta = 1) {
    const choices = livingEnemies(); if (!choices.length) return;
    const index = Math.max(0, choices.indexOf(selectedTarget)); selectedTarget = choices[(index + delta + choices.length) % choices.length]; renderBattle();
  }
  function chooseSkill(index) { if (!battle?.heroes?.[selectedHero]?.skills?.[index]) return; selectedSkill = index; renderBattle(); }
  function executeBattle(useEncore = false) {
    if (!battle || performance.now() < actionLockUntil || screen !== 'battle') return;
    const actionBattle = battle, actionEpoch = battleEpoch;
    unlockAudio();
    const result = useEncore ? encore(battle) : act(battle, selectedHero, selectedSkill, selectedTarget);
    if (!result?.ok) { toast = result?.message || '지금은 그 행동을 할 수 없습니다.'; renderBattle(toast); return; }
    actionLockUntil = performance.now() + 400;
    scene?.playEvents(result.events || []);
    for (const event of result.events || []) audio.event(event.type);
    renderBattle(result.message || '선율이 부딪혔습니다.');
    if (!useEncore) {
      const available = livingHeroes().filter((index) => !battle.heroes[index].used);
      if (available.length) { selectedHero = available[0]; selectedSkill = 0; renderBattle(result.message || ''); }
    }
    window.setTimeout(() => {
      if (battle !== actionBattle || battleEpoch !== actionEpoch) return;
      if (screen === 'pause') { pendingBattleResolution = true; return; }
      if (screen !== 'battle') return;
      renderBattle(); resolveBattleAction(actionBattle, actionEpoch);
    }, 420);
  }
  function resolveBattleAction(expectedBattle = battle, expectedEpoch = battleEpoch) {
    if (!battle || battle !== expectedBattle || battleEpoch !== expectedEpoch || (screen !== 'battle' && screen !== 'pause')) return;
    pendingBattleResolution = false;
    if (battle.result === 'win') {
      const outcome = finishBattle(campaign, battle);
      const boss = /-boss$/.test(encounterId || ''); battle = null; saveCampaign();
      if (boss && ENCOUNTERS[encounterId]?.outro) {
        const outro = ENCOUNTERS[encounterId].outro, separator = outro.indexOf(':');
        pendingVictory = outcome; dialogueLines = [{ speaker: separator > 0 ? outro.slice(0, separator).trim() : (ENCOUNTERS[encounterId].name || '수호자'), text: separator > 0 ? outro.slice(separator + 1).trim() : outro }]; dialogueIndex = 0; dialogueAfter = 'boss-victory'; setScreen('dialogue');
      } else { setScreen('victory'); ui.victory(`${region().subtitle || region().name} · ${campaign.region + 1} / ${REGIONS.length} 신호 복원`, outcome.rewards); }
    } else if (battle.result === 'lose') {
      finishBattle(campaign, battle); battle = null; pendingBattleResolution = false; saveCampaign(); setScreen('defeat'); ui.defeat('예고된 파동이 열차를 덮쳤습니다. 다시 조율할 수 있습니다.');
    } else renderBattle();
  }
  function retryBattle() { if (!encounterId) return; battleEpoch++; pendingBattleResolution = false; actionLockUntil = 0; battle = createBattle(campaign, encounterId); selectedHero = 0; selectedSkill = 0; selectedTarget = 0; setScreen('battle'); }
  function resumeFromVictory() { setScreen('explore'); saveCampaign(); }
  function clearHeld() { Object.values(heldSources).forEach((sources) => sources.clear()); held = Object.create(null); document.querySelectorAll('[data-hold]').forEach((button) => button.classList.remove('held')); }
  function setHeld(action, source, active) { const sources = heldSources[action]; if (!sources) return; if (active) sources.add(source); else sources.delete(source); if (sources.size) held[action] = true; else delete held[action]; }
  function pause() { if (screen === 'title' || screen === 'dialogue' || screen === 'ending') return; beforePause = screen; clearHeld(); setScreen('pause'); }
  function resume() { const next = beforePause === 'pause' ? 'explore' : beforePause; setScreen(next); if (pendingBattleResolution && next === 'battle') resolveBattleAction(); }
  function openJournal(tab = 'map') { if (battle) { notify('전투 중에는 기록을 열 수 없습니다.'); return; } if (screen !== 'pause') beforePause = screen; clearHeld(); ui.journal(viewCampaign(), CHARACTERS, questProgress(campaign), tab); screen = 'journal'; if (scene) scene.setMode('explore'); audio.setMode('paused', campaign.region || 0); }
  function closeJournal() { setScreen(beforePause === 'battle' ? 'battle' : 'explore'); }
  function notify(message) { toast = message || ''; toastUntil = performance.now() + 3000; }

  function keydown(event) {
    const key = event.key.toLowerCase();
    if (key === 'm' && !event.repeat) { audio.setMuted(!audio.muted); return; }
    if (key === 'escape' && !event.repeat) { if (screen === 'pause') resume(); else if (screen === 'journal') closeJournal(); else if (screen !== 'title' && screen !== 'dialogue' && screen !== 'ending' && screen !== 'victory' && screen !== 'defeat') pause(); event.preventDefault(); return; }
    if (screen === 'dialogue' && (key === 'enter' || key === ' ')) { if (!event.repeat) advanceDialogue(); event.preventDefault(); return; }
    if (screen === 'journal') { if (key === 'tab') { closeJournal(); event.preventDefault(); } return; }
    if (screen === 'victory' || screen === 'defeat') { if (key === 'enter' && !event.repeat) { screen === 'victory' ? resumeFromVictory() : retryBattle(); event.preventDefault(); } return; }
    if (screen === 'ending') { if (key === 'enter' && !event.repeat) { newGame(); event.preventDefault(); } return; }
    if (screen === 'battle') {
      if (key === 'q' && !event.repeat) selectHero(-1);
      else if (key === 'e' && !event.repeat) selectHero(1);
      else if (!event.repeat && (key === '1' || key === '2' || key === '3')) chooseSkill(Number(key) - 1);
      else if (key === 'tab' && !event.repeat) { selectTarget(1); event.preventDefault(); }
      else if ((key === ' ' || key === 'enter') && !event.repeat) { executeBattle(false); event.preventDefault(); }
      else if (key === 'f' && !event.repeat) executeBattle(true);
      return;
    }
    if (screen !== 'explore') return;
    if (key === 'tab' && !event.repeat) { openJournal(); event.preventDefault(); return; }
    if ((key === 'f' || key === 'enter') && !event.repeat) { interactNearby(); event.preventDefault(); return; }
    if (key === 'shift') { setHeld('sprint', 'key:shift', true); event.preventDefault(); return; }
    const movement = { w: 'up', arrowup: 'up', s: 'down', arrowdown: 'down', a: 'left', arrowleft: 'left', d: 'right', arrowright: 'right' };
    if (movement[key]) { setHeld(movement[key], 'key:' + key, true); event.preventDefault(); }
    if (key === 'q') { setHeld('rotateLeft', 'key:q', true); event.preventDefault(); }
    if (key === 'e') { setHeld('rotateRight', 'key:e', true); event.preventDefault(); }
  }
  function keyup(event) {
    const key = event.key.toLowerCase();
    const movement = { w: 'up', arrowup: 'up', s: 'down', arrowdown: 'down', a: 'left', arrowleft: 'left', d: 'right', arrowright: 'right' };
    if (key === 'shift') setHeld('sprint', 'key:shift', false);
    if (movement[key]) setHeld(movement[key], 'key:' + key, false);
    if (key === 'q') setHeld('rotateLeft', 'key:q', false);
    if (key === 'e') setHeld('rotateRight', 'key:e', false);
  }

  function bind() {
    ui.on('new-game', newGame).on('continue', continueGame).on('dialogue-next', advanceDialogue).on('interact', interactNearby)
      .on('pause', pause).on('resume', resume).on('menu', title).on('mute', () => { unlockAudio(); audio.setMuted(!audio.muted); }).on('journal', () => openJournal()).on('journal-close', closeJournal)
      .on('next', resumeFromVictory).on('retry', retryBattle).on('replay', newGame).on('execute', () => executeBattle(false)).on('encore', () => executeBattle(true))
      .on('battle-hero', (button) => { selectedHero = Number(button.dataset.hero); renderBattle(); })
      .on('battle-skill', (button) => chooseSkill(Number(button.dataset.skill)))
      .on('battle-target', (button) => { selectedTarget = Number(button.dataset.target); renderBattle(); })
      .on('journal-tab', (button) => openJournal(button.dataset.tab))
      .on('upgrade', (button) => { const result = upgradeHero(campaign, Number(button.dataset.hero)); notify(result.message); saveCampaign(); openJournal('party'); });
    document.addEventListener('keydown', keydown, { passive: false });
    document.addEventListener('keyup', keyup);
    window.addEventListener('blur', () => { clearHeld(); if (screen === 'explore' || screen === 'battle') pause(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden) { clearHeld(); if (screen === 'explore' || screen === 'battle') pause(); } });
    document.querySelectorAll('[data-hold]').forEach((button) => {
      const action = button.dataset.hold;
      const pointers = new Set();
      button.addEventListener('pointerdown', (event) => { event.preventDefault(); unlockAudio(); const source = 'pointer:' + event.pointerId; pointers.add(source); setHeld(action, source, true); button.classList.add('held'); try { button.setPointerCapture(event.pointerId); } catch (_) {} });
      const release = (event) => { event.preventDefault(); const source = 'pointer:' + event.pointerId; pointers.delete(source); setHeld(action, source, false); if (!pointers.size) button.classList.remove('held'); };
      button.addEventListener('pointerup', release); button.addEventListener('pointercancel', release); button.addEventListener('lostpointercapture', release);
    });
  }

  function frame(now) {
    const dt = Math.min(.05, Math.max(0, (now - previous) / 1000)); previous = now;
    const paused = screen === 'pause' || screen === 'journal' || screen === 'dialogue' || screen === 'title' || screen === 'victory' || screen === 'defeat';
    if (!paused && (screen === 'explore' || screen === 'battle' || screen === 'ending')) {
      const move = { x: (held.right ? 1 : 0) - (held.left ? 1 : 0), z: (held.down ? 1 : 0) - (held.up ? 1 : 0) };
      try { scene?.update(dt, { campaign, battle, move, sprint: !!held.sprint, rotate: (held.rotateRight ? 1 : 0) - (held.rotateLeft ? 1 : 0), selectedHero, target: selectedTarget, paused: false, reducedMotion }); }
      catch (error) { sceneFailure(error); }
      if (screen === 'explore' || screen === 'battle') {
        campaign.playSeconds = (campaign.playSeconds || 0) + dt; saveClock += dt;
        if (saveClock > 8) { saveClock = 0; saveCampaign(); }
        if (screen === 'explore' && Math.floor(now / 100) % 2 === 0) renderExplore();
      }
    }
    musicClock += dt; if (!paused) audio.update(musicClock);
    try { scene?.render(); } catch (error) { sceneFailure(error); }
    requestAnimationFrame(frame);
  }

  Object.defineProperties(window, {
    __skychord: { configurable: false, enumerable: true, get: () => ({
      get state() { return safeJson(campaign); },
      get battle() { return safeJson(battle); },
      get screen() { return screen; },
      get nearby() { return safeJson(scene?.getNearby(campaign)); },
      get sceneStats() { return safeJson(scene?.getStats?.() || {}); }
    }) }
  });
  bind();
  if (scene) { try { scene.setRegion(region(), campaign); } catch (error) { sceneFailure(error); } }
  resizeScene();
  window.addEventListener('resize', resizeScene, { passive: true });
  if (window.ResizeObserver && canvas) new ResizeObserver(resizeScene).observe(canvas);
  ui.title(campaign.finished ? null : (campaign.playSeconds > 0 || campaign.cleared?.length || campaign.collected?.length || campaign.talked?.length) ? { regionName: region().name, playSeconds: campaign.playSeconds } : null);
  setScreen('title');
  requestAnimationFrame(frame);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
else boot();
