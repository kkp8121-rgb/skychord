const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const {createServer}=require('../tools/server.cjs');
const root=path.resolve(__dirname,'..');
async function main(){
 const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true});const results=[];
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  await page.goto(`http://127.0.0.1:${server.address().port}/skychord/`);
  await page.waitForFunction(()=>window.__skychord);
  await page.locator('[data-action="new-game"]').click();
  while(await page.evaluate(()=>window.__skychord.screen==='dialogue'))await page.keyboard.press('Enter');
  const cdp=await page.context().newCDPSession(page);
  for(const rate of [1,4]){
   await cdp.send('Emulation.setCPUThrottlingRate',{rate});
   const timing=await page.evaluate(()=>new Promise(resolve=>{
    const frames=[];let previous=performance.now(),warm=20;
    function next(now){const dt=now-previous;previous=now;if(warm>0)warm--;else frames.push(dt);if(frames.length<150)requestAnimationFrame(next);else{frames.sort((a,b)=>a-b);resolve({average:frames.reduce((a,b)=>a+b,0)/frames.length,p95:frames[Math.floor(frames.length*.95)],max:frames.at(-1),scene:window.__skychord.sceneStats});}}
    requestAnimationFrame(next);
   }));
   results.push({cpuThrottle:rate,...timing});
  }
  await cdp.send('Emulation.setCPUThrottlingRate',{rate:1});
  fs.mkdirSync(path.join(root,'artifacts'),{recursive:true});
  fs.writeFileSync(path.join(root,'artifacts','performance-report.json'),JSON.stringify(results,null,2));
  console.log(JSON.stringify(results,null,2));
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
