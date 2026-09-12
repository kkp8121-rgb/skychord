const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const {createServer}=require('../tools/server.cjs');
const root=path.resolve(__dirname,'..');
const out=path.join(root,'artifacts');fs.mkdirSync(out,{recursive:true});

async function main(){
 const {REGIONS,ENCOUNTERS}=await import('../src/content.js');
 const {chooseAction}=await import('./tactics.mjs');
 const server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const browser=await chromium.launch({headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:900}});
 const page=await context.newPage();const errors=[],report={battles:[],visits:[],errors};
 page.on('pageerror',e=>errors.push(e.message));
 const state=()=>page.evaluate(()=>({screen:window.__skychord.screen,campaign:window.__skychord.state,battle:window.__skychord.battle,nearby:window.__skychord.nearby}));
 const press=async key=>{await page.keyboard.press(key);await page.waitForTimeout(40);};
 async function hold(key,ms){await page.keyboard.down(key);await page.waitForTimeout(ms);await page.keyboard.up(key);}
 let basis;
 async function calibrate(){
   const a=(await state()).campaign.position;await hold('d',220);const b=(await state()).campaign.position;await hold('a',220);
   const c=(await state()).campaign.position;await hold('w',220);const d=(await state()).campaign.position;await hold('s',220);
   const right={x:(b.x-a.x)/.22,z:(b.z-a.z)/.22},forward={x:(d.x-c.x)/.22,z:(d.z-c.z)/.22};
   assert.ok(Math.hypot(right.x,right.z)>1&&Math.hypot(forward.x,forward.z)>1,'camera movement calibration');basis={right,forward};
 }
 async function walk(node){
   let previous=Infinity,stuck=0;
   for(let step=0;step<160;step++){
     const snapshot=await state();assert.equal(snapshot.screen,'explore');
     const dx=node.x-snapshot.campaign.position.x,dz=node.z-snapshot.campaign.position.z,dist=Math.hypot(dx,dz);
     if(dist<2.15)return;
     if(Math.abs(previous-dist)<.04)stuck++;else stuck=0;previous=dist;
     if(stuck>6)throw new Error(`Navigation stuck reaching ${node.id} at ${JSON.stringify(snapshot.campaign.position)}`);
     const {right:r,forward:f}=basis,det=r.x*f.z-r.z*f.x;
     const right=(dx*f.z-dz*f.x)/det,forward=(r.x*dz-r.z*dx)/det;
     const useRight=Math.abs(right)>Math.abs(forward);
     const seconds=useRight?Math.abs(right):Math.abs(forward);
     const key=useRight?(right>0?'d':'a'):(forward>0?'w':'s');
     await hold(key,Math.min(380,Math.max(65,seconds*1000*.8)));
   }
   throw new Error(`Navigation limit: ${node.id}`);
 }
 async function dialogue(){for(let i=0;i<30&&(await state()).screen==='dialogue';i++)await press('Enter');}
 async function fight(id){
   await dialogue();
   let steps=0;const entry={id,rounds:0,commands:[],boss:ENCOUNTERS[id].boss};
   await page.screenshot({path:path.join(out,`battle-${id}-start.png`)});
   while((await state()).screen==='battle'){
     const battle=(await state()).battle;
     if(battle.result){await page.waitForTimeout(500);continue;}
     entry.rounds=battle.round;
     const choice=chooseAction(battle);entry.commands.push(choice);
     if(choice.encore)await page.locator('[data-action="encore"]').click();
     else{
       await page.locator(`[data-action="battle-hero"][data-hero="${choice.hero}"]`).click();
       await press(String(choice.skill+1));
       const target=page.locator(`[data-action="battle-target"][data-target="${choice.target}"]`);
       if(await target.count()&&await target.isEnabled())await target.click();
       await press('Space');
     }
     if(steps===1||entry.boss&&steps===5)await page.screenshot({path:path.join(out,`battle-${id}-${steps}.png`)});
     await page.waitForTimeout(450);
     if(++steps>500)throw new Error(`Battle command limit ${id}`);
   }
   await dialogue();
   const result=await state();entry.result=result.screen;report.battles.push(entry);
   assert.equal(result.screen,'victory',`won ${id}`);console.log(`${id}: victory in ${entry.rounds} rounds (${entry.commands.length} commands)`);await press('Enter');
 }
 try{
   await page.goto(process.env.SKYCHORD_URL||`http://127.0.0.1:${server.address().port}/skychord/`);
   await page.waitForFunction(()=>window.__skychord);
   await page.locator('[data-action="new-game"]').click();await dialogue();await calibrate();
   for(let region=0;region<REGIONS.length;region++){
     assert.equal((await state()).campaign.region,region);
     for(const node of REGIONS[region].nodes){
       await walk(node);const before=await state();
       assert.equal(before.nearby?.id,node.id,`nearby ${node.id}`);
       await press('f');report.visits.push(node.id);
       if(['battle','boss'].includes(node.type)){await fight(node.encounterId);assert.ok((await state()).campaign.cleared.includes(node.id),`persist ${node.id}`);}
       else if(node.type==='npc')await dialogue();
       else if(node.type==='finale'){await dialogue();assert.equal((await state()).screen,'ending');}
       if(['chest','boss'].includes(node.type)){
         await press('Tab');await page.locator('[data-action="journal-tab"][data-tab="party"]').click();
         for(let h=0;h<3;h++){
           const button=page.locator(`[data-action="upgrade"][data-hero="${h}"]`);
           if(await button.isEnabled())await button.click();
         }
         await page.locator('[data-action="journal-close"]').click();
       }
     }
     await page.screenshot({path:path.join(out,`region-${region}-complete.png`)});
   }
   report.final=(await state()).campaign;
   assert.equal(report.final.finished,true);assert.equal(report.battles.length,16);assert.deepEqual(errors,[]);
   await page.screenshot({path:path.join(out,'campaign-ending.png')});
   await page.reload();await page.waitForFunction(()=>window.__skychord);
   assert.equal((await state()).campaign.finished,true,'ending save survives reload');
   console.log(JSON.stringify({battles:report.battles.map(({commands,...b})=>({...b,commands:commands.length})),final:report.final}));
 }finally{
   fs.writeFileSync(path.join(out,'campaign-browser-report.json'),JSON.stringify(report,null,2));
   await page.screenshot({path:path.join(out,'campaign-last.png')}).catch(()=>{});
   await browser.close();await new Promise(r=>server.close(r));
 }
}
main().catch(e=>{console.error(e);process.exitCode=1;});
