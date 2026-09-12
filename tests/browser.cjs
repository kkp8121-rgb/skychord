const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
const { createServer } = require('../tools/server.cjs');
const root = path.resolve(__dirname, '..');
const artifacts = path.join(root, 'artifacts');
fs.mkdirSync(artifacts, {recursive:true});

async function main() {
  const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser=await chromium.launch({headless:true});
  const report=[];
  try {
    const urls=process.env.SKYCHORD_URL ? [process.env.SKYCHORD_URL] : [pathToFileURL(path.join(root,'index.html')).href,`http://127.0.0.1:${server.address().port}/skychord/`];
    for(let i=0;i<urls.length;i++) {
      const context=await browser.newContext({viewport:{width:1440,height:900}});
      const page=await context.newPage();const errors=[],failed=[],external=[];
      page.on('pageerror',e=>errors.push(e.message));
      page.on('response',r=>{if(r.status()>=400)failed.push([r.status(),r.url()]);});
      page.on('requestfailed',r=>failed.push([r.failure()?.errorText,r.url()]));
      page.on('request',r=>{if(r.url().startsWith('http')&&!r.url().startsWith(new URL(urls[i]).origin))external.push(r.url());});
      await page.addInitScript(()=>{
        const Native=window.AudioContext||window.webkitAudioContext;
        window.__audioEvidence={contexts:[],oscillators:0};
        if(Native)window.AudioContext=class extends Native{constructor(...args){super(...args);window.__audioEvidence.contexts.push(this);this.__meter=this.createAnalyser();this.__meter.fftSize=512;const createGain=this.createGain.bind(this);this.createGain=()=>{const gain=createGain(),connect=gain.connect.bind(gain);gain.connect=(destination,...args)=>{if(destination===this.destination)connect(this.__meter);return connect(destination,...args);};return gain;};const create=this.createOscillator.bind(this);this.createOscillator=(...args)=>{const o=create(...args),start=o.start.bind(o);o.start=(...args)=>{window.__audioEvidence.oscillators++;return start(...args)};return o;};}};
      });
      await page.goto(urls[i]);
      await page.waitForFunction(()=>window.__skychord,{timeout:10000}).catch(async error=>{await page.screenshot({path:path.join(artifacts,`boot-error-${i}.png`)});throw new Error(`${error.message}; page errors: ${errors.join('; ')}`);});
      await page.screenshot({path:path.join(artifacts,`title-${i}.png`)});
      await page.locator('[data-action="new-game"]').click();
      for(let n=0;n<12&&await page.evaluate(()=>window.__skychord.screen==='dialogue');n++)await page.keyboard.press('Enter');
      assert.equal(await page.evaluate(()=>window.__skychord.screen),'explore');
      await page.waitForTimeout(150);
      const before=await page.evaluate(()=>window.__skychord.state.position);
      await page.keyboard.down('d');await page.waitForTimeout(350);await page.keyboard.up('d');
      const after=await page.evaluate(()=>window.__skychord.state.position);
      assert.ok(Math.hypot(after.x-before.x,after.z-before.z)>.3,'movement changes position');
      await page.screenshot({path:path.join(artifacts,`explore-${i}.png`)});
      await page.keyboard.press('Escape');
      const paused=await page.evaluate(()=>window.__skychord.state);
      await page.keyboard.down('w');await page.waitForTimeout(200);await page.keyboard.up('w');
      assert.deepEqual(await page.evaluate(()=>window.__skychord.state.position),paused.position,'pause freezes movement');
      await page.keyboard.press('Escape');
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(()=>window.__skychord.screen),'journal');
      await page.screenshot({path:path.join(artifacts,`journal-${i}.png`)});
      await page.locator('[data-action="journal-tab"][data-tab="party"]').click();
      await page.screenshot({path:path.join(artifacts,`party-${i}.png`)});
      assert.equal(await page.locator('.journal-hero .portrait').count(),3);
      await page.locator('[data-action="journal-close"]').click();
      await page.keyboard.press('m');await page.keyboard.press('m');
      const audio=await page.evaluate(()=>({states:window.__audioEvidence.contexts.map(c=>c.state),oscillators:window.__audioEvidence.oscillators}));
      audio.signal=await page.evaluate(()=>new Promise(resolve=>{const context=window.__audioEvidence.contexts[0],samples=new Float32Array(512);let frames=0,peak=0,energy=0;const timer=setInterval(()=>{context.__meter.getFloatTimeDomainData(samples);for(const value of samples){peak=Math.max(peak,Math.abs(value));energy+=value*value;}if(++frames>=30){clearInterval(timer);resolve({peak,rms:Math.sqrt(energy/(frames*samples.length))});}},30);}));
      const imageState=await page.evaluate(()=>[...document.images].filter(img=>img.src.includes('/assets/')).map(img=>({src:img.getAttribute('src'),loaded:img.complete&&img.naturalWidth>0})));
      assert.ok(imageState.length>=3&&imageState.every(img=>img.loaded),'portraits all load');
      assert.ok(audio.states.includes('running')&&audio.oscillators>0,'audio starts after gesture');
      assert.ok(audio.signal.peak>.00001&&audio.signal.peak<1,'real non-clipping audio signal');
      const stats=await page.evaluate(()=>window.__skychord.sceneStats);
      assert.ok(stats.triangles>1000,'real 3D rendering');
      assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);assert.deepEqual(external,[]);
      report.push({url:urls[i],errors,failed,external,audio,stats,images:imageState});
      await context.close();
    }
    fs.writeFileSync(path.join(artifacts,'browser-report.json'),JSON.stringify(report,null,2));
    console.log(JSON.stringify(report,null,2));
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
