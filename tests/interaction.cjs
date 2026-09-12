const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const {createServer}=require('../tools/server.cjs');
const root=path.resolve(__dirname,'..'),out=path.join(root,'artifacts');
async function main(){
 const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true});const report=[];
 try{
  for(const settings of [{name:'desktop',viewport:{width:1440,height:900}},{name:'portrait',viewport:{width:390,height:844},hasTouch:true,isMobile:true,deviceScaleFactor:2,reducedMotion:'reduce'},{name:'landscape',viewport:{width:844,height:390},hasTouch:true,isMobile:true}]){
   const {name,...options}=settings;const context=await browser.newContext(options),page=await context.newPage(),errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto(`http://127.0.0.1:${server.address().port}/skychord/`);
   await page.waitForFunction(()=>window.__skychord);
   await page.locator('[data-action="new-game"]').click();
   for(let i=0;i<20&&await page.evaluate(()=>window.__skychord.screen==='dialogue');i++)await page.locator('[data-action="dialogue-next"]').click();
   if(name!=='desktop'){
    const before=await page.evaluate(()=>window.__skychord.state.position);
    const left=page.locator('[data-hold="left"]');await left.dispatchEvent('pointerdown',{pointerId:1});await page.waitForTimeout(250);await left.dispatchEvent('pointerup',{pointerId:1});
    const after=await page.evaluate(()=>window.__skychord.state.position);
    assert.ok(Math.hypot(after.x-before.x,after.z-before.z)>.15,'touch movement');
    assert.ok(await left.isVisible(),'touch controls visible');
   }
   await page.screenshot({path:path.join(out,`interaction-${name}-explore.png`)});
   await page.locator('[data-action="journal"]').first().click();
   await page.locator('[data-action="journal-tab"][data-tab="party"]').click();
   await page.screenshot({path:path.join(out,`interaction-${name}-party.png`)});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'no horizontal overflow');
   await page.locator('[data-action="journal-close"]').click();
   if(name==='desktop'){
    await page.keyboard.down('d');await page.waitForTimeout(250);await page.keyboard.up('d');
    await page.keyboard.press('Escape');
    const frozen=await page.evaluate(()=>window.__skychord.state);
    await page.waitForTimeout(200);
    assert.equal(await page.evaluate(()=>window.__skychord.state.playSeconds),frozen.playSeconds,'paused time stays fixed');
    await page.locator('[data-action="resume"]').click();
    await page.waitForTimeout(8500);
    const saved=await page.evaluate(()=>window.__skychord.state);
    await page.reload();await page.waitForFunction(()=>window.__skychord);
    assert.ok(await page.locator('[data-action="continue"]').isVisible(),'continue visible in first region');
    await page.locator('[data-action="continue"]').click();
    const restored=await page.evaluate(()=>window.__skychord.state);
    assert.equal(restored.region,saved.region);assert.ok(Math.hypot(restored.position.x-saved.position.x,restored.position.z-saved.position.z)<.01,'save restores position');
    // Simulate a real malformed browser save, not an altered campaign for winning.
    await page.evaluate(()=>localStorage.setItem('skychord.save.v1','{broken-json'));
    await page.reload();await page.waitForFunction(()=>window.__skychord);
    assert.equal(await page.evaluate(()=>window.__skychord.state.region),0,'corrupt save starts safely');
   }
   assert.deepEqual(errors,[]);report.push({name,errors});await context.close();
  }
  fs.writeFileSync(path.join(out,'interaction-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
