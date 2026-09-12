# SKYCHORD — Last Train Home

## Design decision

Candidates considered: first-person freight racing with gravity swaps; four-key rhythm action theatre; isometric ecological management; third-person party RPG with a musical command chain. Choose the RPG: it contrasts AFTERLIGHT in camera, interaction, objectives, progression and fantasy, while using original anime art and genuinely modeled 3D environments. Later productions should choose a different structure.

Theme: three imperfect voices can reopen a world silenced by its demand for perfection.
Hook: Explore a broken railway above the clouds, then weave three companions' moves into chords that cancel foretold enemy attacks.
Fantasy: lead a scrappy band on the last train to the dawn.

Complete scope: four sizable explorable floating districts, three distinctive adult companions, 16 authored encounters including four mechanically distinct bosses, six optional requests, party upgrades, chests, camp dialogue, exploration, cinematic finale, saving, defeat/retry and new game. Aim 30–50 minutes for a new player. No random grinding required. Victory requires the four conductors/relays restored, then final dialogue at the observatory. Provide meaningful tactical choices, not one repeated winning sequence.

Art: warm cel-shaded diorama, ivory/ink/gold interface, coral/teal/violet hero palette, long aerial railways and cloud ocean. Character proportions stylized/chibi but readable clothing, hair and instruments; no capsule-only characters. Portraits are actual ImageGen assets. Scenes must contain architecture, paths, trees/machinery, distant islands, animated details and visible destinations. Keep navigation readable.

Characters: Mira (adult woman, coral bob, ivory conductor coat, blue scarf, baton/sabre; attack/tempo), Sena (adult woman, silver-teal long hair, navy/cyan coat, mechanical bow/strings; break/ward), Noa (adult man, violet messy hair, cream cloak, round glasses, portable keyboard grimoire; heal/resonance). Voices: ember/tide/star. Portraits assets/mira.png, sena.png, noa.png. Title art assets/key-art.png. UI must work before art arrives; root produces and wires final art.

Controls exploration: WASD/arrows move relative to camera, Shift sprint, Q/E rotate camera, F/Enter interact, Tab journal/party, Escape pause, M audio. Battle: Q/E choose available hero, 1/2/3 select skill, Tab choose living enemy target, Space/Enter execute, F use shared encore when ready. Click equivalents and touch joystick/actions where practical. Explicit on-screen hints.

## Ownership

core worker: src/content.js, src/combat.js, src/campaign.js and tests/core.test.mjs. Pure simulation and authored content. No browser or Three dependency.
presentation worker: src/models.js, src/scene.js. 3D world, models, animation, particles, cameras, performance. No DOM UI/game rules.
app worker: src/app.js, src/ui.js, src/audio.js, index.html, style.css. Application, interaction, all screens and music. No core/scene edits.
root: package/build/server/pack, docs, assets, integration, browser verification, commits.

## Shared modules/API (stable; coordinate requested changes through root)

ES modules, compiled with esbuild to classic `game.js`. Node tests import pure ESM.

### content.js
Exports CHARACTERS array, REGIONS array, ENCOUNTERS object, QUESTS array. All text Korean except IDs.
CHARACTERS: `{id,name,role,color,portrait,voice,baseHp,skills:[{id,name,description,kind,power,note,cost?}]}`. 3 heroes, 3 skills each. Voices strings ember/tide/star; each skill note uses one of those (different arrangements produce different chord result). At least one alternate note per hero creates choice.
REGIONS: `{id,name,subtitle,description,palette:{sky,ground,accent},spawn:{x,z},bounds:{minX,maxX,minZ,maxZ},nodes:[{id,type,name,x,z,encounterId?,dialogue?:[{speaker,text}],reward?,requires?:string[],destination?:number}],paths?:[{x1,z1,x2,z2,width}]}`. Node types `battle,boss,npc,chest,camp,gate,finale`. Terrain is level at y=0, bounds around +/-28; node interaction radius 2.6. Nodes have unique IDs across campaign. Ensure paths clear to ALL nodes. Gates require region boss cleared and lead to next region; last finale requires last boss. At least first encounter near spawn, first camp in reach. Four visually distinct regions (sunset station, tidal gardens, brass foundry, starlit observatory).
ENCOUNTERS[id]: `{id,name,region,boss,enemies:[{id,name,kind,hp,attack,weakness,pattern:[{name,type,power,target?}]}],reward:{xp,shards},intro?,outro?}`. enemy kinds support bird,wolf,sentinel,conductor,tower. Intent types attack,all,guard,heal,mute,charge; publish derived intents on combat state.
QUESTS: `{id,name,description,region,requires:string[],reward:{shards,xp}}`; collected/talked/cleared IDs count. Six optional quests, not needed to finish. App displays progress and auto claim via campaign API.

### campaign.js
`createCampaign()` returns `{version:1,region:0,position:{x,z},level:1,xp:0,shards:0,upgrades:[0,0,0],hp:[number,number,number],cleared:[],collected:[],talked:[],questDone:[],playSeconds:0,finished:false}`.
`maxHp(state,heroIndex)`, `upgradeCost(state,heroIndex)` numbers.
`upgradeHero(state,heroIndex)` => `{ok,message}` mutates, spends shards if enough, cap3, restores hero proportionately.
`interact(state,nodeId)` => `{type:'battle',encounterId}` OR `{type:'dialogue',lines:[{speaker,text}]}` OR `{type:'toast',message}` OR `{type:'travel',region}` OR `{type:'ending',lines}`. Mutates chest/dialogue/quest/recovery/gate/finished as appropriate; must enforce gate/finale prerequisites and idempotent rewards. Does NOT check physical distance (app checks it).
`finishBattle(state,battle)` => `{won,rewards?,levelUps?,message}` applies win/defeat once. Defeat allows retry without losing collected progress (full heal at camp or retry). Battle win heals a fraction; no grind required.
`objective(state)` => `{title,text,nodeId}` points toward next main quest node/encounter/gate/finale.
`questProgress(state)` array `{...quest,current,total,complete,claimed}`. Auto rewards when requirements met.
`serialize(state)` string; `deserialize(string)` validated state or null; reject corrupt/NaN/incompatible data, preserve finished save.

### combat.js
`createBattle(campaign,encounterId)` returns `{encounterId,round:1,phase:'command',heroes:[{id,name,hp,maxHp,attack,used:false,shield:0,muted:0,skills}],enemies:[{...definition,hp,maxHp,shield:0,stagger:0,intent}],notes:[],resonance:0,log:[],events:[],result:null,actions:0}`. No random state; deterministic authored enemy patterns. Skill array resolved from character definitions.
`act(battle,heroIndex,skillIndex,targetIndex)` => `{ok,message,events}` mutates, validates hero available/target; heals target party as specified automatically. Each living hero acts once then enemy round resolves automatically and marks all unused. Keep last chord notes and event log readable. Three consecutive distinct notes trigger BREAK chord (stagger/cancel charged enemy intent); three same notes trigger ECHO chord (damage/heal or shield). Other combinations gain resonance. Balance so swapping skill/note choice matters against advertised intent and weaknesses. A shield/heal tradeoff should sometimes be needed. Battles should last several rounds, not one click. Basic training encounter gentle; later bosses have phase change at half HP and clearly readable charge. Mute prevents notes for a hero briefly, does not block actions.
`encore(battle)` => `{ok,message,events}` spend 100 resonance for cinematic all-party attack + team heal, works if any hero alive, no normal turn cost.
`legalActions(battle)` => array `{hero,skill,target}` for tests/AI; no winning shortcut.
Events use `{type:'hit'|'heal'|'shield'|'chord'|'enemy'|'victory'|'defeat'|'encore'|'round',side?:'hero'|'enemy',index?:number,source?:number,amount?:number,text?:string,note?:string}`. Keep event arrays returned per action; clear old `battle.events` on new action, cap log. result 'win'/'lose' and phase 'won'/'lost' when done. Handle all dead/effect ordering safely.

### scene.js
Export `class GameScene`:
`constructor(canvas,{onError?}={})` builds renderer, scene and camera.
`setRegion(region,campaign)` disposes/replaces local world, keeps reusable geometry where useful; recognizes node state from campaign.
`setMode(mode,battle=null)` where mode 'title','explore','battle','ending'. Sets cinematic camera/world arrangements. `battle` is same mutable object.
`update(dt,{campaign,battle,move:{x,z},sprint,rotate,selectedHero,target,paused,reducedMotion})`: handles collision/movement only in explore, updates campaign.position. Input x,z normalized conventional screen right/forward; app sets forward z=-1. Camera relative. rotate scalar -1/+1. No progress mutation otherwise.
`render()`.
`getNearby(campaign)` returns nearest visible interactable region node within2.6 or null; hide cleared enemies/collected chests; camps/NPCs/gates persist.
`project(x,y,z)` returns `{x,y,visible}` CSS px for world labels.
`playEvents(events)` hit motions, particle/trails, screen shake, chord ring. model impacts should be readable, use dt; reduced motion obeyed.
`resize()`, `dispose()`, `getStats()` => drawcalls/triangles etc. Expose `.renderer` for test, `.camera` if needed. Preserve browser scroll/control behavior from app. Don't load files via fetch; all models procedural Three geometry. Root bundles library. Shadows <=1024, DPR<=1.5, avoid >~250 steady draw calls if possible.

### app.js/UI
Import all core APIs and GameScene. Own current screen 'title','explore','dialogue','battle','victory','defeat','journal','pause','ending'. Browser entry creates application. Always catch WebGL init failure with readable UI. Start begins opening short dialogue with characters and clear first objective then explore. Enter advances dialogue. Battle actions need visible hero and target selection, skill description and note outcome preview, enemy intent and HP, chord slots, resonance, log, keyboard legend. Hero portraits stay visible. Input avoids repeats executing multiple turns; short animation lock (~400ms) per action. Defeat retry reconstructs encounter at full HP OR camp return. Journal includes map/quests/upgrade buttons and character bios. Save locally after meaningful actions and periodically; not while half-resolved battle. Continue reload should restore prebattle safely. Pause freeze timers and movement, blur clears held input. Ending has story and stats and replay.
Render semantic DOM buttons with data-action IDs so keyboard and headless tests can select. `window.__skychord` read-only debug facade (get state/battle/screen/nearby/sceneStats), never cheat mutation helpers. No runtime network; images use relative DOM src. AudioContext created/resumed only on gesture, synth composition with exploration/battle/each region layers, volume/mute persisted and pause managed. Mobile touch controls and responsive battle layout; desktop is primary.

## Root verification

Pure invariant/strategy tests for 16 encounters, chords, predicted attacks, quests, upgrades, serialization, defeat, ending. Browser traverses real map via keys/interact and executes legal actual combat commands through buttons/keys; no teleport or hp/progress writes. Record journey, all bosses, ending, save/resume, screenshots at title/world/battle/journal/finale, responsive viewports and sound. Compare production paths file://, localhost subpath and eventual Pages; all assets local no 404s. Measure normal and throttled performance. No claim passed without current output.
