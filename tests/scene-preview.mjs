import { build } from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = fileURLToPath(new URL('..', import.meta.url));
const out = path.join(root, 'artifacts');
await fs.mkdir(out, { recursive: true });
await fs.writeFile(path.join(out, 'scene-preview.html'), '<!doctype html><html><meta charset="utf-8"><style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111}canvas{width:100%;height:100%;display:block}</style><canvas id="view"></canvas><script src="scene-preview.js"></script></html>');
await build({ stdin: { contents: `import { GameScene } from './src/scene.js';
const scene = new GameScene(document.querySelector('canvas')); const campaign={position:{x:0,z:10},cleared:[],collected:[]};
scene.setRegion({id:'station',bounds:{minX:-28,maxX:28,minZ:-28,maxZ:28},palette:{sky:'#719ca8',ground:'#577a76',accent:'#dfb77f'},paths:[{x1:0,z1:22,x2:0,z2:-24,width:3},{x1:-20,z1:0,x2:20,z2:0,width:3}],nodes:[{id:'camp',type:'camp',x:-4,z:7},{id:'battle',type:'battle',x:0,z:0}]},campaign);scene.setMode('explore');scene.resize();
let last=performance.now();function tick(now){scene.update((now-last)/1000,{campaign,move:{x:0,z:0}});last=now;scene.render();requestAnimationFrame(tick)}requestAnimationFrame(tick); window.preview=scene;`, resolveDir: root }, bundle: true, outfile:path.join(out,'scene-preview.js'),format:'iife',logLevel:'silent' });
const browser = await chromium.launch({headless:true});
try {
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.join(out,'scene-preview.html')).href);await page.waitForTimeout(1200);
  await page.screenshot({path:path.join(out,`scene-${process.env.SHOT || 'before'}.png`)});
  console.log(JSON.stringify({errors,stats:await page.evaluate(()=>window.preview.getStats())}));
  if(process.env.BENCH){
    console.log(JSON.stringify(await page.evaluate(async()=>{
      const renderer=window.preview.renderer,gl=renderer.getContext(),ext=gl.getExtension('WEBGL_debug_renderer_info');
      const data={gpu:ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER),trials:[]};
      for(const [shadow,ratio] of [[true,1],[false,1],[false,.75],[false,.5]]){
        renderer.shadowMap.enabled=shadow;renderer.setPixelRatio(ratio);
        const timing=await new Promise(resolve=>{let prev=performance.now(),samples=[];function tick(now){samples.push(now-prev);prev=now;if(samples.length<65)requestAnimationFrame(tick);else{samples=samples.slice(5);resolve(samples.reduce((a,b)=>a+b,0)/samples.length)}}requestAnimationFrame(tick)});
        data.trials.push({shadow,ratio,average:timing,stats:window.preview.getStats()});
      }
      return data;
    })));
  }
}finally{await browser.close();}
