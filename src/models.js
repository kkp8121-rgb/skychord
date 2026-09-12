import * as THREE from 'three';

const palette = {
  ink: 0x101a34, ivory: 0xf2ead7, coral: 0xef826f, scarf: 0x4fb8c6,
  silver: 0x9bd8d1, navy: 0x20345d, cyan: 0x56d7d2, violet: 0x8e6ad1,
  cream: 0xf3e4c7, gold: 0xf5c979, brass: 0xc88b4f, cloud: 0xd9eff1,
  leaf: 0x5d9c78, leafDark: 0x2f665e, rust: 0xa95246, glass: 0x95d8d2,
};

const matCache = new Map();
function material(color, options = {}) {
  const key = `${color}:${options.emissive || 0}:${options.opacity || 1}:${options.metalness || 0}`;
  if (matCache.has(key)) return matCache.get(key);
  const params = {
    color,
  };
  if (options.emissive) { params.emissive = options.emissive; params.emissiveIntensity = options.emissiveIntensity ?? .35; }
  if (options.opacity && options.opacity < 1) { params.transparent = true; params.opacity = options.opacity; }
  const mat = new THREE.MeshToonMaterial(params); mat.flatShading = options.flatShading ?? true; mat.needsUpdate = true; matCache.set(key, mat); return mat;
}
function mesh(geometry, mat) { return new THREE.Mesh(geometry, mat); }
function box(w, h, d, color, options) { return mesh(new THREE.BoxGeometry(w, h, d), material(color, options)); }
function sphere(r, color, options, scale) { const m = mesh(new THREE.SphereGeometry(r, 12, 8), material(color, options)); if (scale) m.scale.set(...scale); return m; }
function cylinder(rt, rb, h, color, radial = 10, options) { return mesh(new THREE.CylinderGeometry(rt, rb, h, radial), material(color, options)); }
function add(parent, child, position, rotation) { if (position) child.position.set(...position); if (rotation) child.rotation.set(...rotation); parent.add(child); return child; }

function face(group, skin = 0xf1b89d) {
  add(group, sphere(.31, skin, undefined, [1, 1.06, .9]), [0, 1.98, 0]);
  add(group, sphere(.038, palette.ink, undefined, [1, 1, .5]), [-.105, 2.03, -.277]);
  add(group, sphere(.038, palette.ink, undefined, [1, 1, .5]), [.105, 2.03, -.277]);
  add(group, sphere(.022, 0xd97470), [0, 1.91, -.286]);
}
function coat(group, color, accent, cloak = false) {
  add(group, box(.72, .78, .44, color), [0, 1.25, 0]);
  if (cloak) add(group, mesh(new THREE.ConeGeometry(.58, 1.18, 6), material(color)), [0, 1.18, .03], [0, Math.PI, 0]);
  articulatedArm(group, -.42, accent, -.1); articulatedArm(group, .42, accent, .1);
  add(group, mesh(new THREE.ConeGeometry(.16, .42, 3), material(accent)), [-.18, 1.51, -.25], [0, 0, Math.PI]);
  add(group, mesh(new THREE.ConeGeometry(.16, .42, 3), material(accent)), [.18, 1.51, -.25], [0, 0, Math.PI]);
  add(group, box(.52, .1, .08, palette.gold), [0, 1.54, -.25]);
  add(group, box(.08, .42, .035, accent), [-.28, 1.22, -.24]); add(group, box(.08, .42, .035, accent), [.28, 1.22, -.24]);
  articulatedLeg(group, -.18); articulatedLeg(group, .18);
}
function articulatedArm(group, x, color, lean) {
  const arm = new THREE.Group(); arm.name = x < 0 ? 'arm-left' : 'arm-right'; arm.position.set(x, 1.49, 0); arm.rotation.z = lean;
  arm.userData.limb = true; arm.userData.side = x < 0 ? -1 : 1;
  add(arm, box(.13, .34, .16, color), [0, -.16, 0]); add(arm, sphere(.105, 0xf1b89d), [0, -.38, -.02]); group.add(arm);
  group.userData.arms ||= {}; group.userData.arms[x < 0 ? 'left' : 'right'] = arm;
}
function articulatedLeg(group, x) {
  const leg = new THREE.Group(); leg.name = x < 0 ? 'leg-left' : 'leg-right'; leg.position.set(x, .86, 0);
  leg.userData.limb = true; leg.userData.side = x < 0 ? -1 : 1;
  add(leg, cylinder(.13, .14, .84, palette.ink, 8), [0, -.42, 0]); add(leg, box(.27, .18, .44, palette.ink), [0, -.77, -.08]); group.add(leg);
}
function hairBob(group) {
  add(group, sphere(.37, palette.coral, undefined, [1.08, .94, 1.02]), [0, 2.12, .13]);
  add(group, box(.18, .46, .42, palette.coral), [-.33, 1.93, 0]);
  add(group, box(.18, .46, .42, palette.coral), [.33, 1.93, 0]);
  for (const x of [-.2, 0, .2]) add(group, mesh(new THREE.ConeGeometry(.11, .22, 4), material(palette.coral)), [x, 2.26, -.25], [0, 0, Math.PI]);
}
function hairLong(group) {
  add(group, sphere(.37, palette.silver, undefined, [1.08, .96, 1.03]), [0, 2.12, .13]);
  add(group, box(.17, .86, .32, palette.silver), [-.34, 1.78, .04]);
  add(group, box(.17, .86, .32, palette.silver), [.34, 1.78, .04]);
  add(group, box(.08, .5, .28, palette.cyan), [-.38, 1.7, -.1]);
  add(group, box(.08, .5, .28, palette.cyan), [.38, 1.7, -.1]);
  add(group, sphere(.23, palette.silver, undefined, [.75, 1.2, .72]), [0, 1.76, .37]); add(group, torus(.12, .035, palette.cyan), [0, 1.76, .19]);
}
function hairMessy(group) {
  add(group, sphere(.4, palette.violet, undefined, [1.08, .96, 1.04]), [0, 2.15, .13]);
  for (const [x, z, r] of [[-.31, -.15, .13], [.31, -.1, .14], [-.12, -.28, .16], [.12, -.3, .16]]) add(group, sphere(r, palette.violet), [x, 2.39, z]);
}

export function createHeroModel(id) {
  const group = new THREE.Group(); group.name = `hero-${id}`; group.userData.heroId = id;
  if (id === 'mira') {
    coat(group, palette.ivory, palette.scarf);
    hairBob(group); face(group);
    add(group, box(.75, .11, .12, palette.scarf), [0, 1.76, -.26], [0, 0, -.08]);
    add(group.userData.arms.right, cylinder(.028, .028, .88, palette.gold, 8), [.06, -.21, -.08], [0, 0, -.32]);
    add(group.userData.arms.right, sphere(.09, palette.coral, { emissive: palette.coral, emissiveIntensity: .55 }), [.07, .24, -.08]);
  } else if (id === 'sena') {
    coat(group, palette.navy, palette.cyan); hairLong(group); face(group, 0xedb49c);
    const bow = new THREE.Group(); add(group.userData.arms.right, bow, [.14, .03, -.08], [0, 0, -.45]);
    const arc = new THREE.Mesh(new THREE.TorusGeometry(.43, .045, 6, 18, Math.PI), material(palette.cyan)); arc.rotation.z = Math.PI / 2; bow.add(arc);
    add(bow, box(.07, .78, .07, palette.gold), [0, 0, 0]); add(bow, box(.025, .86, .025, palette.ivory), [0, 0, -.04]);
  } else {
    coat(group, palette.cream, palette.violet, true); hairMessy(group); face(group, 0xe7ad94);
    add(group, torus(.11, .018, palette.gold), [-.12, 2.04, -.3]); add(group, torus(.11, .018, palette.gold), [.12, 2.04, -.3]);
    add(group.userData.arms.right, box(.56, .1, .36, palette.ink), [.03, -.19, -.17], [0, -.15, -.12]);
    add(group.userData.arms.right, box(.48, .035, .3, palette.cream), [.03, -.13, -.19], [0, -.15, -.12]);
    for (let i = -2; i <= 2; i++) add(group.userData.arms.right, box(.045, .018, .24, palette.gold), [.03 + i * .09, -.12, -.22]);
  }
  group.traverse(obj => { if (obj.isMesh) { obj.castShadow = true; obj.receiveShadow = true; } });
  return group;
}

function torus(major, tube, color) { return mesh(new THREE.TorusGeometry(major, tube, 6, 12), material(color)); }

export function createEnemyModel(kind = 'sentinel', color = palette.rust) {
  const group = new THREE.Group(); group.name = `enemy-${kind}`;
  const bodyColor = kind === 'bird' ? palette.ink : kind === 'wolf' ? palette.violet : kind === 'tower' ? palette.brass : kind === 'conductor' ? palette.navy : color;
  const eye = (x, y, z, c = palette.gold) => add(group, sphere(.07, c, { emissive: c, emissiveIntensity: .65 }), [x, y, z]);
  if (kind === 'bird') {
    add(group, sphere(.42, bodyColor, undefined, [1.25, .78, .88]), [0, 1.05, .04]);
    add(group, sphere(.25, palette.ink, undefined, [.9, .85, .82]), [0, 1.28, -.32]);
    add(group, mesh(new THREE.ConeGeometry(.17, .46, 4), material(palette.gold)), [0, 1.25, -.66], [-Math.PI / 2, 0, 0]);
    for (const side of [-1, 1]) { add(group, mesh(new THREE.ConeGeometry(.28, .76, 4), material(side < 0 ? palette.brass : palette.rust)), [side * .48, 1.05, .02], [0, 0, side * .55]); add(group, cylinder(.055, .07, .42, palette.brass, 6), [side * .2, .42, .02]); add(group, box(.24, .07, .32, palette.gold), [side * .2, .12, -.08]); eye(side * .12, 1.39, -.55, palette.coral); }
    for (const side of [-1, 1]) add(group, mesh(new THREE.ConeGeometry(.2, .62, 4), material(palette.ink)), [side * .19, .95, .53], [side * .5, 0, 0]);
  } else if (kind === 'wolf') {
    add(group, sphere(.5, bodyColor, undefined, [1.4, .72, .76]), [0, .85, .06]);
    add(group, sphere(.31, bodyColor, undefined, [1, 1, .8]), [.34, 1.12, -.36]);
    add(group, sphere(.18, palette.ink, undefined, [.9, .7, 1.2]), [.34, 1.04, -.62]);
    for (const side of [-1, 1]) { add(group, mesh(new THREE.ConeGeometry(.2, .44, 4), material(bodyColor)), [.34 + side * .2, 1.48, -.38]); eye(.23 + side * .12, 1.22, -.62, palette.coral); }
    for (const x of [-.31, .31]) { for (const z of [-.03, .32]) add(group, cylinder(.105, .13, .7, palette.ink, 7), [x, .35, z]); add(group, box(.26, .12, .38, palette.ink), [x, .07, -.12]); }
    const tail = cylinder(.12, .2, .82, bodyColor, 7); tail.position.set(-.55, .94, .48); tail.rotation.x = -.72; group.add(tail);
  } else if (kind === 'tower') {
    add(group, cylinder(.38, .5, .95, palette.brass, 8, { metalness: .4 }), [0, .78, 0]);
    add(group, sphere(.27, palette.glass, { emissive: palette.cyan, emissiveIntensity: .6 }), [0, 1.42, -.08]);
    for (const [x, z] of [[-.42, .2], [.42, .2], [0, -.34]]) { const leg = cylinder(.1, .15, .72, palette.ink, 7); leg.position.set(x, .36, z); leg.rotation.z = x * .55; group.add(leg); add(group, torus(.21, .055, palette.gold), [x, .28, z]); }
    for (const [x, z] of [[-.48, 0], [0, -.12], [.48, 0]]) { add(group, mesh(new THREE.ConeGeometry(.22, .35, 8), material(palette.gold)), [x, 1.18, z]); add(group, torus(.21, .04, palette.coral), [x, 1.03, z]); }
    for (const x of [-.28, -.09, .1, .29]) add(group, cylinder(.055, .08, .95 + Math.abs(x) * .4, palette.ivory, 7), [x, 1.77, .08]);
    add(group, torus(.54, .035, palette.gold), [0, 1.42, 0]); add(group, torus(.54, .035, palette.cyan), [0, 1.42, 0], [Math.PI / 2, .25, 0]); group.scale.setScalar(.95); group.position.y = .06;
  } else if (kind === 'conductor') {
    add(group, mesh(new THREE.ConeGeometry(.62, 1.38, 6), material(palette.navy)), [0, .87, .02], [0, Math.PI, 0]);
    add(group, box(.62, .12, .42, palette.brass, { metalness: .4 }), [0, 1.45, -.08]);
    add(group, sphere(.34, palette.ink, undefined, [1, 1.05, .82]), [0, 1.78, -.02]);
    add(group, box(.42, .12, .045, palette.coral, { emissive: palette.coral, emissiveIntensity: .25 }), [0, 1.78, -.31]);
    for (const side of [-1, 1]) { const arm = cylinder(.1, .13, .8, palette.navy, 8); arm.position.set(side * .58, 1.33, 0); arm.rotation.z = side * 1.08; group.add(arm); add(group, sphere(.12, palette.brass), [side * .94, 1.66, -.02]); add(group, box(.26, .14, .34, palette.ink), [side * .2, .14, 0]); }
    add(group, cylinder(.03, .03, .85, palette.gold, 7), [.96, 1.77, -.08], [0, 0, -.3]);
    add(group, torus(.56, .06, palette.gold), [0, 2.32, 0]); add(group, sphere(.09, palette.coral, { emissive: palette.coral, emissiveIntensity: .7 }), [0, 2.32, 0]); group.scale.setScalar(.77);
  } else {
    add(group, box(.68, .92, .52, bodyColor), [0, .64, 0]);
    add(group, box(.78, .2, .62, palette.brass, { metalness: .4 }), [0, 1.2, 0]);
    add(group, box(.68, .5, .56, palette.ink), [0, 1.58, 0]);
    add(group, box(.48, .12, .04, palette.cyan, { emissive: palette.cyan, emissiveIntensity: .9 }), [0, 1.62, -.3]);
    for (const side of [-1, 1]) { add(group, box(.24, .18, .66, palette.brass), [side * .52, 1.18, 0]); const arm = cylinder(.1, .13, .65, bodyColor, 8); arm.position.set(side * .58, .8, 0); arm.rotation.z = side * .12; group.add(arm); add(group, sphere(.16, palette.gold), [side * .58, .42, -.02]); add(group, cylinder(.14, .16, .58, palette.ink, 7), [side * .2, .32, 0]); add(group, box(.28, .12, .4, palette.ink), [side * .2, .12, -.08]); }
    add(group, cylinder(.12, .12, .34, palette.gold, 7), [0, 2.02, 0]); eye(-.13, 1.64, -.31, palette.coral); eye(.13, 1.64, -.31, palette.coral);
  }
  group.traverse(obj => { if (obj.isMesh) obj.castShadow = true; });
  return group;
}

export function createNPCModel(color = palette.cyan) {
  const group = new THREE.Group(); group.name = 'district-npc';
  add(group, box(.55, .72, .38, palette.ivory), [0, .95, 0]);
  add(group, sphere(.29, 0xf1b89d, undefined, [1, 1.08, .9]), [0, 1.58, 0]);
  add(group, sphere(.34, color, undefined, [1.08, .55, 1]), [0, 1.77, .08]);
  add(group, box(.62, .08, .1, palette.gold), [0, 1.79, -.2]);
  articulatedLeg(group, -.14); articulatedLeg(group, .14); articulatedArm(group, -.36, color, -.08); articulatedArm(group, .36, color, .08);
  group.traverse(object => { if (object.isMesh) object.castShadow = true; }); return group;
}

export function createLamp(color = palette.gold) {
  const group = new THREE.Group();
  add(group, cylinder(.045, .06, .9, palette.brass, 8), [0, .45, 0]);
  add(group, sphere(.13, color, { emissive: color, emissiveIntensity: .8 }), [0, .95, 0]);
  add(group, torus(.18, .025, palette.brass), [0, .95, 0], [Math.PI / 2, 0, 0]);
  return group;
}

export function createTree(scale = 1, autumn = false) {
  const group = new THREE.Group();
  add(group, cylinder(.16 * scale, .25 * scale, 1.25 * scale, palette.brass, 7), [0, .62 * scale, 0]);
  const color = autumn ? palette.coral : palette.leaf;
  add(group, sphere(.58 * scale, color, undefined, [1, 1.15, .9]), [0, 1.45 * scale, 0]);
  add(group, sphere(.38 * scale, autumn ? palette.gold : palette.leafDark), [.42 * scale, 1.3 * scale, .05]);
  return group;
}

export function createPipe(length = 2.2, color = palette.brass, horizontal = true) {
  return cylinder(.1, .1, length, color, 8, { metalness: .5 });
}

export { palette, material, box, sphere, cylinder, add, torus };
