import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { add, box, cylinder, createEnemyModel, createHeroModel, createLamp, createNPCModel, material, palette, sphere, torus } from './models.js';
import { createDistrictLandmark } from './landmarks.js';

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const colorOf = (value, fallback) => { try { return new THREE.Color(value || fallback); } catch (_) { return new THREE.Color(fallback); } };
const typeColor = { battle: palette.coral, boss: 0xd15e58, npc: palette.cyan, chest: palette.gold, camp: palette.leaf, gate: palette.ivory, finale: palette.violet };

function disposeGroup(group) {
  if (!group) return;
  group.traverse(object => {
    if (object.geometry) object.geometry.dispose();
  });
  group.clear();
}

function lineBetween(a, b, width, color, height = width) {
  const mid = a.clone().add(b).multiplyScalar(.5), length = a.distanceTo(b);
  const result = box(width, height, length, color, { metalness: .18 });
  result.position.copy(mid); result.lookAt(b); return result;
}

export class GameScene {
  constructor(canvas, { onError } = {}) {
    this.canvas = canvas; this.onError = onError; this.elapsed = 0; this.mode = 'title'; this.cameraYaw = .35;
    this.currentRegion = null; this.campaign = null; this.localWorld = null; this.nodeMeshes = [];
    this.fx = []; this.heroParty = []; this.enemyParty = []; this.districtIndex = 0;
    try {
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
      const gl = this.renderer.getContext(), debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      this.softwareRenderer = /swiftshader|llvmpipe|software/i.test(debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '');
      this.maxRenderPixels = this.softwareRenderer ? 300000 : 2400000;
      this.renderer.setPixelRatio(this.pixelRatio(canvas.clientWidth || 960, canvas.clientHeight || 540));
      this.renderer.setSize(canvas.clientWidth || 960, canvas.clientHeight || 540, false);
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure = .88;
      this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.scene = new THREE.Scene(); this.scene.background = new THREE.Color(0x9ccbd0); this.scene.fog = new THREE.Fog(0x9ccbd0, 35, 90);
      this.camera = new THREE.PerspectiveCamera(54, 16 / 9, .1, 190); this.camera.position.set(0, 14, 24);
      this.world = new THREE.Group(); this.scene.add(this.world);
      this.actorRoot = new THREE.Group(); this.world.add(this.actorRoot);
      this.fxRoot = new THREE.Group(); this.world.add(this.fxRoot);
      this.selectionRoot = new THREE.Group(); this.world.add(this.selectionRoot); this.heroSelection = this.makeSelectionRing(palette.cyan); this.targetSelection = this.makeSelectionRing(palette.coral); this.selectionRoot.add(this.heroSelection, this.targetSelection);
      this.addLighting(); this.addSky(); this.addCloudOcean(); this.createHeroes(); this.setMode('title');
    } catch (error) {
      if (this.onError) this.onError(error); else throw error;
    }
  }

  addLighting() {
    const ambient = new THREE.HemisphereLight(0xdff8ed, 0x293555, 1.05); this.scene.add(ambient);
    const key = new THREE.DirectionalLight(0xffe4bc, 1.9); key.position.set(-12, 18, 8); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.camera.left = -34; key.shadow.camera.right = 34; key.shadow.camera.top = 34; key.shadow.camera.bottom = -34; this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x83d6dd, 1.05); rim.position.set(14, 7, -14); this.scene.add(rim);
  }

  addSky() {
    const skyGeometry = new THREE.SphereGeometry(105, 24, 12);
    const skyMaterial = new THREE.ShaderMaterial({
      uniforms: { top: { value: new THREE.Color(0x32466e) }, bottom: { value: new THREE.Color(0x9ccbd0) } },
      vertexShader: 'varying float worldY; void main(){ worldY = (modelMatrix * vec4(position,1.0)).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying float worldY; void main(){ float t = smoothstep(-12.0,55.0,worldY); gl_FragColor = vec4(mix(bottom,top,t),1.0);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}',
      side: THREE.BackSide, depthWrite: false, depthTest: false,
    });
    this.skyDome = new THREE.Mesh(skyGeometry, skyMaterial); this.skyDome.name = 'sky-gradient'; this.scene.add(this.skyDome);
    const sun = new THREE.Mesh(new THREE.CircleGeometry(3.4, 32), new THREE.MeshBasicMaterial({ color: 0xffdb9b, transparent: true, opacity: .72, depthWrite: false }));
    sun.position.set(17, 24, -46); this.scene.add(sun); this.sunDisk = sun;
  }

  addCloudOcean() {
    const cloudGroup = new THREE.Group(); cloudGroup.name = 'cloud-ocean';
    const geometry = new THREE.SphereGeometry(3.8, 10, 6); const cloudMat = material(palette.cloud, { opacity: .76, flatShading: true }); const clouds = new THREE.InstancedMesh(geometry, cloudMat, 24), dummy = new THREE.Object3D();
    for (let i = 0; i < 24; i++) { dummy.position.set(((i * 17.7) % 90) - 45, -6.3 + (i % 3) * .45, ((i * 29.1) % 84) - 42); dummy.scale.set(1 + (i % 4) * .3, .48 + (i % 3) * .12, .7 + (i % 5) * .16); dummy.updateMatrix(); clouds.setMatrixAt(i, dummy.matrix); }
    clouds.instanceMatrix.needsUpdate = true; cloudGroup.add(clouds);
    const highClouds = new THREE.InstancedMesh(geometry, cloudMat, 16);
    for (let i = 0; i < 16; i++) { dummy.position.set(-55 + ((i * 23.3) % 110), -2.2 + (i % 2) * .35, -58 + ((i * 31.7) % 116)); dummy.scale.set(1.2 + (i % 3) * .35, .32 + (i % 2) * .1, .6 + (i % 4) * .2); dummy.updateMatrix(); highClouds.setMatrixAt(i, dummy.matrix); }
    highClouds.instanceMatrix.needsUpdate = true; cloudGroup.add(highClouds); this.scene.add(cloudGroup); this.cloudGroup = cloudGroup; this.cloudMesh = clouds; this.highCloudMesh = highClouds; this.cloudGeometry = geometry;
    const far = new THREE.Group(); const islandGeometry = new THREE.CylinderGeometry(1, 1, .9, 7), islands = new THREE.InstancedMesh(islandGeometry, material(0x638f99), 7);
    for (let i = 0; i < 7; i++) { dummy.position.set(-42 + i * 15, -2.3 + (i % 2) * .6, -24 - (i % 3) * 7); dummy.scale.set(2 + i % 3, 1, 3.4 + i % 2); dummy.updateMatrix(); islands.setMatrixAt(i, dummy.matrix); }
    islands.instanceMatrix.needsUpdate = true; far.add(islands); this.scene.add(far); this.farIslands = far;
  }

  createHeroes() {
    for (const id of ['mira', 'sena', 'noa']) { const hero = createHeroModel(id); hero.rotation.y = Math.PI; hero.userData.home = hero.position.clone(); this.actorRoot.add(hero); this.heroParty.push(hero); }
  }
  makeSelectionRing(color) { const ring = new THREE.Mesh(new THREE.TorusGeometry(.62, .035, 6, 18), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .9 })); ring.rotation.x = Math.PI / 2; ring.visible = false; return ring; }

  setRegion(region, campaign) {
    this.campaign = campaign || this.campaign; this.currentRegion = region; this.districtIndex = Math.max(0, (region && region.id ? [...region.id].reduce((a, c) => a + c.charCodeAt(0), 0) : 0) % 4);
    if (this.localWorld) { this.world.remove(this.localWorld); disposeGroup(this.localWorld); }
    this.localWorld = new THREE.Group(); this.localWorld.name = `district-${region?.id || 'unknown'}`; this.world.add(this.localWorld); this.nodeMeshes = [];
    if (!region) return;
    const ground = colorOf(region.palette?.ground, 0x9b806b), accent = colorOf(region.palette?.accent, 0xe88a72), sky = colorOf(region.palette?.sky, 0x9ccbd0);
    this.scene.background.copy(sky); if (this.scene.fog) this.scene.fog.color.copy(sky);
    if (this.skyDome) { this.skyDome.material.uniforms.bottom.value.copy(sky); this.skyDome.material.uniforms.top.value.copy(sky).multiplyScalar(.44); }
    this.buildIsland(region, ground); this.buildPaths(region, ground, accent); this.buildDistrictDetails(region, ground, accent); this.batchStaticWorld(); this.buildNodes(region, campaign);
    this.updateActorsFromCampaign(campaign);
  }

  buildIsland(region, ground) {
    const b = region.bounds || { minX: -28, maxX: 28, minZ: -28, maxZ: 28 }; const w = b.maxX - b.minX, d = b.maxZ - b.minZ;
    const island = box(w, 1.5, d, ground.getHex(), { roughness: .92 }); island.position.set((b.minX + b.maxX) / 2, -.8, (b.minZ + b.maxZ) / 2); island.receiveShadow = true; this.localWorld.add(island);
    const terrace = box(Math.max(8, w - 3.5), .22, Math.max(8, d - 3.5), ground.getHex()); terrace.position.set((b.minX + b.maxX) / 2, -.11, (b.minZ + b.maxZ) / 2); terrace.receiveShadow = true; this.localWorld.add(terrace);
    const rim = box(w + 1.4, .2, d + 1.4, 0x315968, { opacity: .64 }); rim.position.y = -.22; this.localWorld.add(rim);
    const grass = new THREE.InstancedMesh(new THREE.ConeGeometry(.065, .34, 4), material(0x376b65), 150); const blade = new THREE.Object3D(); for (let i = 0; i < 150; i++) { blade.position.set(b.minX + 1.5 + ((i * 17) % Math.max(4, w - 3)), .22, b.minZ + 1.5 + ((i * 23) % Math.max(4, d - 3))); blade.rotation.y = i * .7; blade.scale.setScalar(.65 + (i % 4) * .12); blade.updateMatrix(); grass.setMatrixAt(i, blade.matrix); } grass.instanceMatrix.needsUpdate = true; this.localWorld.add(grass);
    for (let i = 0; i < 28; i++) {
      const size = 2 + (i % 4) * 1;
      const shard = new THREE.Mesh(new THREE.DodecahedronGeometry(size * .5, 0), material(i % 3 ? 0x567d91 : 0x456878));
      const side = i % 4;
      shard.position.set(side === 0 ? b.minX - .7 - (i % 3) * .35 : side === 1 ? b.maxX + .7 + (i % 3) * .35 : b.minX + 2 + ((i * 13) % Math.max(4, w - 4)), -1.9 - (i % 3) * .45, side === 2 ? b.minZ - .7 - (i % 3) * .35 : side === 3 ? b.maxZ + .7 + (i % 3) * .35 : b.minZ + 2 + ((i * 19) % Math.max(4, d - 4)));
      shard.rotation.set(i * .21, i * .47, i * .13); this.localWorld.add(shard);
    }
  }

  buildPaths(region, ground, accent) {
    const paths = region.paths || []; for (const path of paths) {
      const a = new THREE.Vector3(path.x1, .05, path.z1), b = new THREE.Vector3(path.x2, .05, path.z2); const road = lineBetween(a, b, path.width || 2.2, 0xa69b86, .04); this.localWorld.add(road);
      const distance = a.distanceTo(b), angle = Math.atan2(b.x - a.x, b.z - a.z);
      const offset = new THREE.Vector3(Math.cos(angle) * .55, .10, -Math.sin(angle) * .55);
      const railA = lineBetween(a.clone().add(offset), b.clone().add(offset), .065, palette.ivory);
      offset.x *= -1; offset.z *= -1;
      const railB = lineBetween(a.clone().add(offset), b.clone().add(offset), .065, palette.ivory); this.localWorld.add(railA, railB);
      for (let d = 0; d <= distance; d += .9) { const t = distance ? d / distance : 0, sleeper = box(1.7, .055, .19, palette.brass); sleeper.position.lerpVectors(a, b, t); sleeper.position.y = .10; sleeper.rotation.y = angle; this.localWorld.add(sleeper); }
    }
  }

  batchStaticWorld() {
    this.localWorld.updateMatrixWorld(true);
    const buckets = new Map();
    this.localWorld.traverse(object => {
      if (!object.isMesh || object.isInstancedMesh || object.material.transparent || Array.isArray(object.material)) return;
      const geometry = object.geometry.index ? object.geometry.toNonIndexed() : object.geometry.clone();
      geometry.applyMatrix4(object.matrixWorld);
      if (!buckets.has(object.material)) buckets.set(object.material, []);
      buckets.get(object.material).push({ object, geometry });
    });
    for (const [mat, parts] of buckets) {
      const geometry = mergeGeometries(parts.map(part => part.geometry), false);
      if (!geometry) throw new Error('Static world geometry could not be combined.');
      const combined = new THREE.Mesh(geometry, mat); combined.receiveShadow = true;
      for (const { object, geometry: source } of parts) { object.removeFromParent(); object.geometry.dispose(); source.dispose(); }
      this.localWorld.add(combined);
    }
  }

  buildDistrictDetails(region, ground, accent) {
    const id = region.id || ''; const root = this.localWorld;
    root.add(createDistrictLandmark(id));
    // Small repeating flags make the four districts readable even when viewed from afar.
    for (let i = 0; i < 9; i++) { const pole = cylinder(.025, .025, 1.8, palette.ivory, 6); pole.position.set(-22 + i * 5.5, .9, 22 - (i % 2) * 4); root.add(pole); add(root, box(.56, .28, .03, i % 2 ? palette.cyan : accent.getHex()), [-22 + i * 5.5 + .26, 1.55, 22 - (i % 2) * 4]); }
  }

  buildNodes(region, campaign) {
    for (const node of region.nodes || []) {
      const group = new THREE.Group(); group.name = `node-${node.id}`; group.position.set(node.x, 0, node.z); group.userData.nodeId = node.id; group.userData.node = node;
      const color = typeColor[node.type] || palette.ivory; add(group, cylinder(.36, .48, .25, palette.ink, 8), [0, .13, 0]);
      if (node.type === 'battle' || node.type === 'boss') {
        add(group, torus(.52, .055, color), [0, .45, 0], [Math.PI / 2, 0, 0]); const foe = createEnemyModel(node.type === 'boss' ? 'tower' : 'sentinel', color); foe.scale.setScalar(.48); foe.position.y = .2; add(group, foe);
      } else if (node.type === 'npc') {
        const npc = createNPCModel(color); npc.scale.setScalar(.62); npc.position.y = .12; add(group, npc);
      } else if (node.type === 'chest') {
        const chest = new THREE.Group(); add(chest, box(.72, .42, .52, palette.brass, { metalness: .5 }), [0, .36, 0]); add(chest, box(.76, .1, .55, palette.gold, { metalness: .6 }), [0, .59, 0]); add(chest, box(.09, .52, .58, palette.ink, { metalness: .4 }), [0, .47, 0]); add(chest, sphere(.08, palette.coral, { emissive: palette.coral, emissiveIntensity: .6 }), [0, .5, -.31]); add(group, chest);
      } else if (node.type === 'camp') {
        add(group, torus(.68, .1, palette.brass), [0, .16, 0], [Math.PI / 2, 0, 0]); for (const angle of [0, Math.PI / 3, Math.PI * 2 / 3]) { const log = box(.62, .12, .12, palette.rust); log.position.set(Math.cos(angle) * .24, .22, Math.sin(angle) * .24); log.rotation.y = angle; add(group, log); } add(group, sphere(.16, palette.coral, { emissive: palette.coral, emissiveIntensity: .8 }), [0, .6, 0]);
      } else if (node.type === 'gate' || node.type === 'finale') {
        const gate = new THREE.Group(); add(gate, cylinder(.13, .16, 2.2, palette.ivory, 8), [-.72, 1.1, 0]); add(gate, cylinder(.13, .16, 2.2, palette.ivory, 8), [.72, 1.1, 0]); add(gate, torus(.74, .09, color), [0, 1.62, 0], [Math.PI / 2, 0, 0]); add(gate, sphere(.12, color, { emissive: color, emissiveIntensity: .8 }), [0, 1.62, 0]); add(group, gate);
      } else add(group, createLamp(color));
      group.userData.hidden = this.isNodeHidden(node, campaign); group.visible = !group.userData.hidden; this.localWorld.add(group); this.nodeMeshes.push(group);
    }
  }

  isNodeHidden(node, campaign) { if (!campaign) return false; if (node.type === 'battle' || node.type === 'boss') return (campaign.cleared || []).includes(node.id); if (node.type === 'chest') return (campaign.collected || []).includes(node.id); return false; }

  setMode(mode, battle = null) {
    if ((mode === 'battle' && battle !== this.battle) || (this.mode === 'battle' && mode !== 'battle')) this.clearEffects();
    this.mode = mode; this.battle = battle; if (mode !== 'explore') this.isMoving = false;
    if (mode === 'battle') {
      this.actorRoot.position.set(0, .13, 0); this.heroParty.forEach((hero, i) => { hero.visible = true; hero.position.set(-2.3 + i * 2.3, 0, 3.2); hero.rotation.y = 0; }); this.buildBattleEnemies(battle);
      if (this.enemyRoot) this.enemyRoot.visible = true; this.camera.position.set(0, 7.8, 16.5); this.camera.lookAt(0, 1.1, 0);
    } else if (mode === 'title') {
      if (this.enemyRoot) this.enemyRoot.visible = false;
      this.heroParty.forEach((hero, i) => { hero.visible = i === 0; hero.position.set(-2.2 + i * 1.3, 0, -1.8 + i * .5); hero.rotation.y = Math.PI; }); this.camera.position.set(0, 6.3, 11); this.camera.lookAt(0, 1.5, -3);
    } else if (mode === 'ending') { if (this.enemyRoot) this.enemyRoot.visible = false; this.heroParty.forEach((hero, i) => { hero.visible = true; hero.position.set(-2.4 + i * 2.4, 0, -2); hero.rotation.y = 0; }); this.camera.position.set(0, 8.5, 15); this.camera.lookAt(0, 1.1, -3); }
    else { this.heroParty.forEach(hero => { hero.visible = true; }); if (this.enemyRoot) this.enemyRoot.visible = false; if (this.heroSelection) this.heroSelection.visible = false; if (this.targetSelection) this.targetSelection.visible = false; this.updateCamera(0, 0, 0); }
  }

  buildBattleEnemies(battle) {
    if (this.enemyRoot) { this.world.remove(this.enemyRoot); disposeGroup(this.enemyRoot); }
    this.enemyRoot = new THREE.Group(); this.world.add(this.enemyRoot); this.enemyParty = [];
    (battle?.enemies || []).forEach((enemy, i) => { const model = createEnemyModel(enemy.kind, i % 2 ? palette.violet : palette.rust); const boss = i === 0 && battle.encounterId.endsWith('-boss'); model.scale.setScalar(boss ? 1.6 : 1); model.position.set((i - (battle.enemies.length - 1) / 2) * 3.4, .13, boss ? -2.5 : -1.4); model.rotation.y = Math.PI; this.enemyRoot.add(model); this.enemyParty.push(model); });
  }

  update(dt, { campaign, battle, move = { x: 0, z: 0 }, sprint = false, rotate = 0, selectedHero = 0, target = 0, paused = false, reducedMotion = false } = {}) {
    if (paused) return;
    const delta = Math.max(0, Math.min(.08, Number(dt) || 0)); this.elapsed += delta; this.campaign = campaign || this.campaign;
    if (this.mode === 'explore' && campaign && this.currentRegion) {
      this.nodeMeshes.forEach(mesh => { const node = mesh.userData.node; mesh.userData.hidden = this.isNodeHidden(node, campaign); mesh.visible = !mesh.userData.hidden; });
      this.cameraYaw += (Number(rotate) || 0) * delta * 1.8;
      const inputX = clamp(Number(move.x) || 0, -1, 1), inputZ = clamp(Number(move.z) || 0, -1, 1); const len = Math.hypot(inputX, inputZ) || 1;
      const speed = sprint ? 8.1 : 4.7; const forward = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw)); const right = new THREE.Vector3(Math.cos(this.cameraYaw), 0, -Math.sin(this.cameraYaw));
      const velocity = right.multiplyScalar(inputX / len).add(forward.multiplyScalar(-inputZ / len)).multiplyScalar(speed * delta); const b = this.currentRegion.bounds || { minX: -28, maxX: 28, minZ: -28, maxZ: 28 };
      this.isMoving = Math.hypot(inputX, inputZ) > .05; this.moveVelocity = velocity; if (this.isMoving) this.travelYaw = Math.atan2(-velocity.x, -velocity.z); campaign.position.x = clamp((campaign.position.x || 0) + velocity.x, b.minX + 1, b.maxX - 1); campaign.position.z = clamp((campaign.position.z || 0) + velocity.z, b.minZ + 1, b.maxZ - 1); this.updateActorsFromCampaign(campaign); if (this.isMoving) this.heroParty.forEach(hero => { hero.rotation.y = this.travelYaw; }); this.updateCamera(delta, velocity.x, velocity.z);
    } else if (this.mode === 'battle') { this.updateBattle(delta, battle); this.updateSelection(selectedHero, target); }
    this.animateHeroes(delta, reducedMotion); this.animateClouds(delta, reducedMotion); this.updateFx(delta, reducedMotion); if (this.mode === 'battle' && this.shake && !reducedMotion) { this.camera.position.x += Math.sin(this.elapsed * 91) * this.shake; this.camera.position.y += Math.cos(this.elapsed * 113) * this.shake * .35; }
  }

  updateActorsFromCampaign(campaign) {
    if (!campaign?.position) return; this.actorRoot.position.set(campaign.position.x, .13, campaign.position.z); this.heroParty[0].position.set(0, 0, 0);
    const yaw = this.travelYaw ?? this.cameraYaw; const backward = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)), right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw)); this.heroParty[1].position.copy(backward.clone().multiplyScalar(1.35)).addScaledVector(right, -.72); this.heroParty[2].position.copy(backward.clone().multiplyScalar(2.55)).addScaledVector(right, .72);
    this.heroParty.forEach(hero => { hero.userData.moving = !!this.isMoving; });
  }

  updateCamera(dt, dx = 0, dz = 0) {
    this.cameraYaw = this.cameraYaw ?? .35; const forward = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw)); const target = this.actorRoot.position.clone().addScaledVector(forward, 2.5).add(new THREE.Vector3(0, 1.15, 0)); const desired = this.actorRoot.position.clone().add(new THREE.Vector3(0, 8.5, 0)).add(new THREE.Vector3(Math.sin(this.cameraYaw) * 13, 0, Math.cos(this.cameraYaw) * 13));
    if (this.shake) desired.add(new THREE.Vector3(Math.sin(this.elapsed * 91) * this.shake, Math.cos(this.elapsed * 113) * this.shake * .5, 0)); this.camera.position.lerp(desired, dt ? Math.min(1, dt * 7) : 1); this.camera.lookAt(target);
  }

  animateHeroes(dt, reduced) {
    this.heroParty.forEach((hero, i) => { if (!hero.visible) return; const fallen = this.mode === 'battle' && this.battle?.heroes[i]?.hp <= 0; const moving = this.mode === 'explore' && hero.userData.moving; const phase = this.elapsed * 10 + i * 1.7; hero.position.y = (moving && !reduced) ? Math.abs(Math.sin(phase)) * .055 : 0; hero.rotation.z = fallen ? Math.PI / 2 : moving && !reduced ? Math.sin(phase) * .018 : 0; hero.traverse(part => { if (!part.userData?.limb) return; const side = part.userData.side || 1, arm = part.name.startsWith('arm'); part.rotation.x = moving && !reduced ? Math.sin(phase) * .38 * side * (arm ? -1 : 1) : 0; }); });
  }
  animateClouds(dt, reduced) { if (!this.cloudGroup || reduced || !this.cloudMesh) return; const dummy = new THREE.Object3D(); for (let i = 0; i < 24; i++) { dummy.position.set(((i * 17.7) % 90) - 45 + this.elapsed * (.12 + (i % 3) * .04), -6.3 + (i % 3) * .45, ((i * 29.1) % 84) - 42); if (dummy.position.x > 52) dummy.position.x -= 104; dummy.scale.set(1 + (i % 4) * .3, .48 + (i % 3) * .12, .7 + (i % 5) * .16); dummy.updateMatrix(); this.cloudMesh.setMatrixAt(i, dummy.matrix); } this.cloudMesh.instanceMatrix.needsUpdate = true; if (this.highCloudMesh) { for (let i = 0; i < 16; i++) { dummy.position.set(-55 + ((i * 23.3) % 110) + this.elapsed * .06, -2.2 + (i % 2) * .35, -58 + ((i * 31.7) % 116)); if (dummy.position.x > 58) dummy.position.x -= 116; dummy.scale.set(1.2 + (i % 3) * .35, .32 + (i % 2) * .1, .6 + (i % 4) * .2); dummy.updateMatrix(); this.highCloudMesh.setMatrixAt(i, dummy.matrix); } this.highCloudMesh.instanceMatrix.needsUpdate = true; } }

  updateBattle(dt, battle) {
    if (!battle) return; this.camera.position.set(0, 7.8, 16.5); this.camera.lookAt(0, 1.1, 0); (battle.enemies || []).forEach((enemy, i) => { if (this.enemyParty[i]) { this.enemyParty[i].visible = enemy.hp > 0; this.enemyParty[i].position.y = enemy.hp > 0 ? .13 + Math.sin(this.elapsed * 2 + i) * .05 : -.2; } });
  }

  updateSelection(selectedHero = 0, target = 0) {
    const hero = this.heroParty[selectedHero] || this.heroParty[0], enemy = this.enemyParty[target] || this.enemyParty[0];
    if (hero && this.heroSelection) { this.heroSelection.visible = true; this.heroSelection.position.copy(hero.getWorldPosition(new THREE.Vector3())).add(new THREE.Vector3(0, .08, 0)); this.heroSelection.scale.setScalar(1 + Math.sin(this.elapsed * 4) * .05); }
    if (enemy && this.targetSelection) { this.targetSelection.visible = enemy.visible; this.targetSelection.position.copy(enemy.getWorldPosition(new THREE.Vector3())).add(new THREE.Vector3(0, .08, 0)); this.targetSelection.scale.setScalar(1 + Math.sin(this.elapsed * 4 + 1) * .06); }
  }

  render() { if (this.renderer && this.scene && this.camera) this.renderer.render(this.scene, this.camera); }

  getNearby(campaign = this.campaign) {
    if (!this.currentRegion || !campaign?.position) return null; let nearest = null, best = 2.6 * 2.6;
    for (const node of this.currentRegion.nodes || []) { if (this.isNodeHidden(node, campaign)) continue; const dx = node.x - campaign.position.x, dz = node.z - campaign.position.z, distance = dx * dx + dz * dz; if (distance <= best) { best = distance; nearest = node; } }
    return nearest;
  }

  project(x, y, z) {
    const point = new THREE.Vector3(x, y, z).project(this.camera); const width = this.canvas.clientWidth || this.canvas.width, height = this.canvas.clientHeight || this.canvas.height; return { x: (point.x + 1) * .5 * width, y: (1 - point.y) * .5 * height, visible: point.z > -1 && point.z < 1 && Math.abs(point.x) <= 1.05 && Math.abs(point.y) <= 1.05 };
  }

  playEvents(events = []) {
    const labelRows = new Map();
    const label = (actor, text, color) => { if (!actor) return; const row = labelRows.get(actor) || 0; labelRows.set(actor, row + 1); const at = actor.getWorldPosition(new THREE.Vector3()); at.y += 2.4 + row * .55; this.spawnLabel(at, text, color); };
    for (const event of events) {
      const isEnemy = event.side === 'enemy'; const index = Number.isInteger(event.index) ? event.index : 0;
      const attacker = isEnemy ? this.enemyParty[event.source ?? 0] : this.heroParty[event.source ?? 0];
      const target = isEnemy ? this.heroParty[index] : this.enemyParty[index];
      const beneficiary = isEnemy ? this.enemyParty[index] : this.heroParty[index];
      const targetPosition = target ? target.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(0, 1, 0);
      if (event.type === 'hit') {
        label(target, event.amount ? `−${event.amount}` : '방어', isEnemy ? '#ffb6a1' : '#fff1c9');
        this.spawnBurst(targetPosition, isEnemy ? palette.coral : palette.gold, 9);
        if (attacker && target) {
          const attackerPosition = attacker.getWorldPosition(new THREE.Vector3());
          const direction = targetPosition.sub(attackerPosition).setY(0).normalize();
          this.startLunge(attacker, direction);
        }
        if (target) target.userData.recoil = { time: .2, base: target.position.clone() };
        this.shake = .16;
      }
      else if (event.type === 'heal') { const position = beneficiary ? beneficiary.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(0, 1, 0); this.spawnRing(position, palette.leaf, .75); if (event.amount) label(beneficiary, `+${event.amount}`, '#b2f1ce'); }
      else if (event.type === 'shield') { const position = beneficiary ? beneficiary.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(0, 1, 0); this.spawnRing(position, palette.cyan, .9); label(beneficiary, `수호 ${event.amount}`, '#b9f4ff'); }
      else if (event.type === 'chord' || event.type === 'encore') { this.spawnRing(new THREE.Vector3(0, 1.2, 0), event.type === 'encore' ? palette.gold : palette.violet, 1.3); this.spawnLabel(new THREE.Vector3(0, 4.8, 0), event.type === 'encore' ? 'ENCORE' : event.note === 'break' ? 'BREAK' : 'ECHO', '#ffe2a8', 3.5); }
      else if (event.type === 'victory') this.spawnBurst(new THREE.Vector3(0, 1, 0), palette.gold, 24);
      else if (event.type === 'defeat') this.spawnBurst(new THREE.Vector3(0, 1, 0), palette.rust, 14);
    }
  }

  clearEffects() {
    for (const object of this.fx) { object.removeFromParent(); if (!object.isSprite) object.geometry.dispose(); object.material.map?.dispose(); object.material.dispose(); }
    this.fx.length = 0; this.shake = 0;
    for (const actor of [...this.heroParty, ...this.enemyParty]) { delete actor.userData.lunge; delete actor.userData.recoil; }
  }

  spawnLabel(position, text, color, width = 2.2) {
    const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 80;
    const ctx = canvas.getContext('2d'); ctx.font = 'bold 44px "Malgun Gothic", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineWidth = 7; ctx.strokeStyle = '#1b2432'; ctx.strokeText(text, 128, 40); ctx.fillStyle = color; ctx.fillText(text, 128, 40);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false }));
    sprite.position.copy(position); sprite.scale.set(width, width * 80 / 256, 1); sprite.userData.fx = { life: 1.15, max: 1.15, velocity: new THREE.Vector3(0, .7, 0) }; this.fxRoot.add(sprite); this.fx.push(sprite);
  }

  spawnBurst(position, color, count) { for (let i = 0; i < count; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(.055, 6, 4), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 })); p.position.copy(position); p.position.y += .2; p.userData.fx = { life: .7, max: .7, velocity: new THREE.Vector3(Math.sin(i * 7) * .9, .6 + (i % 3) * .25, Math.cos(i * 5) * .9) }; this.fxRoot.add(p); this.fx.push(p); } }
  spawnRing(position, color, scale) { const ring = new THREE.Mesh(new THREE.TorusGeometry(.7, .045, 6, 16), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 })); ring.position.copy(position); ring.position.y += .25; ring.userData.fx = { life: .8, max: .8, ring: true, speed: scale }; this.fxRoot.add(ring); this.fx.push(ring); }
  startLunge(actor, direction) { actor.userData.lunge = { time: .24, base: actor.position.clone(), direction: direction.clone() }; }
  updateFx(dt, reduced) {
    this.shake = Math.max(0, (this.shake || 0) - dt * 1.8);
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const object = this.fx[i], fx = object.userData.fx; fx.life -= dt;
      if (fx.ring) { const amount = reduced ? 1 : 1 + (1 - fx.life / fx.max) * fx.speed; object.scale.setScalar(amount); }
      else if (!reduced) { object.position.addScaledVector(fx.velocity, dt); fx.velocity.y -= 1.5 * dt; }
      object.material.opacity = clamp(fx.life / fx.max, 0, 1);
      if (fx.life <= 0) { this.fxRoot.remove(object); if (!object.isSprite) object.geometry.dispose(); object.material.map?.dispose(); object.material.dispose(); this.fx.splice(i, 1); }
    }
    for (const actor of [...this.heroParty, ...this.enemyParty]) {
      const lunge = actor.userData.lunge;
      if (lunge) { lunge.time -= dt; const amount = Math.sin(Math.max(0, lunge.time) / .24 * Math.PI) * .65; actor.position.copy(lunge.base).addScaledVector(lunge.direction, amount); if (lunge.time <= 0) delete actor.userData.lunge; }
      const recoil = actor.userData.recoil;
      if (recoil) { recoil.time -= dt; actor.position.y = recoil.base.y + Math.sin(Math.max(0, recoil.time) / .2 * Math.PI) * .12; if (recoil.time <= 0) { actor.position.copy(recoil.base); delete actor.userData.recoil; } }
    }
  }

  pixelRatio(width, height) { return Math.min(1.5, globalThis.devicePixelRatio || 1, Math.sqrt(this.maxRenderPixels / Math.max(1, width * height))); }
  resize() { if (!this.renderer) return; const width = this.canvas.clientWidth || 960, height = this.canvas.clientHeight || 540; this.renderer.setPixelRatio(this.pixelRatio(width, height)); this.renderer.setSize(width, height, false); this.camera.aspect = width / Math.max(1, height); this.camera.updateProjectionMatrix(); }
  getStats() { return { drawcalls: this.renderer?.info?.render?.calls || 0, triangles: this.renderer?.info?.render?.triangles || 0, geometries: this.renderer?.info?.memory?.geometries || 0, textures: this.renderer?.info?.memory?.textures || 0, width: this.canvas.width, height: this.canvas.height, softwareRenderer: this.softwareRenderer }; }
  dispose() { if (this.localWorld) disposeGroup(this.localWorld); if (this.enemyRoot) disposeGroup(this.enemyRoot); if (this.renderer) this.renderer.dispose(); }
}

export default GameScene;
