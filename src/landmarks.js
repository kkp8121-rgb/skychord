import * as THREE from 'three';
import { add, box, cylinder, createTree, material, palette, sphere, torus } from './models.js';

// Landmark meshes are deliberately authored as small, readable silhouettes.  They
// share the model palette, so a district still feels like one illustrated place.
const front = (group, object, z) => { object.position.z = z; group.add(object); return object; };
const prismRoof = (width, depth, height, color) => {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, 0); shape.lineTo(0, height); shape.lineTo(width / 2, 0); shape.closePath();
  return new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false }), material(color));
};
const archWindow = (parent, x, y, z, color = palette.gold, scale = 1) => {
  const frame = torus(.31 * scale, .055 * scale, color); frame.position.set(x, y, z); parent.add(frame);
  const pane = box(.5 * scale, .48 * scale, .035 * scale, palette.glass, { opacity: .82, emissive: palette.cyan, emissiveIntensity: .12 }); pane.position.set(x, y - .11 * scale, z); parent.add(pane);
};
const roof = (parent, x, y, z, width, depth, height, color) => {
  const r = prismRoof(width, depth, height, color); r.position.set(x, y, z - depth / 2); parent.add(r); return r;
};

function carriage(parent, x, z, engine = false) {
  const car = new THREE.Group(); car.position.set(x, 0, z);
  add(car, box(3.8, 1.8, 2.4, palette.ivory), [0, 1.3, 0]);
  add(car, box(3.82, .34, 2.44, palette.navy), [0, .62, 0]);
  add(car, cylinder(1.26, 1.26, 3.9, palette.coral, 10), [0, 2.34, 0], [0, 0, Math.PI / 2]);
  for (const zFace of [-1.225, 1.225]) {
    for (const wx of [-1.35, -.45, .45, 1.35]) {
      const pane = box(.5, .5, .045, palette.gold, { emissive: palette.gold, emissiveIntensity: .18 }); pane.position.set(wx, 1.55, zFace); car.add(pane);
      const mullion = box(.045, .56, .06, palette.ink); mullion.position.set(wx, 1.55, zFace + (zFace > 0 ? .01 : -.01)); car.add(mullion);
    }
    for (const dx of [-1.72, 1.72]) front(car, box(.12, 1.32, .06, palette.coral), zFace + (zFace > 0 ? .03 : -.03)).position.x = dx;
  }
  for (const zFace of [-1.31, 1.31]) for (const wx of [-1.1, 1.1]) {
    const wheel = cylinder(.35, .35, .16, palette.ink, 12); wheel.position.set(wx, .37, zFace); wheel.rotation.x = Math.PI / 2; car.add(wheel);
  }
  if (engine) {
    add(car, cylinder(.3, .38, .66, palette.ink, 10), [-.6, 2.85, 0]);
    add(car, cylinder(.17, .26, .23, palette.gold, 10), [-.6, 3.3, 0]);
    add(car, box(.22, .72, 1.9, palette.coral), [1.36, 1.62, 0]);
  }
  parent.add(car); return car;
}

function station() {
  const root = new THREE.Group(); root.name = 'landmark-station';
  // Three linked carriages sit beyond the station path, with a clear front-facing side.
  for (let i = 0; i < 3; i++) carriage(root, 1 + i * 4.05, -15, i === 0);
  for (const x of [2.98, 7.03]) {
    add(root, cylinder(.12, .12, .36, palette.ink, 8), [x, .7, -15], [0, 0, Math.PI / 2]);
    add(root, box(.28, .1, .16, palette.brass), [x, .7, -15]);
  }
  // Station hall and its pitched coral cap.
  add(root, box(10, 4, 5, palette.cream), [-10, 2, -13]);
  roof(root, -10, 4, -13, 10.8, 5.5, 2.1, palette.coral);
  for (const x of [-13.6, -11.2, -8.8, -6.4]) archWindow(root, x, 2.5, -10.46, palette.gold, .9);
  for (const x of [-11.35, -8.65]) add(root, box(1.05, 1.8, .12, palette.navy), [x, 1.02, -10.46]);
  add(root, box(.08, 2.05, .14, palette.gold), [-10, 1.03, -10.55]);
  // Tower face is XY, so the clock reads from the camera side (+Z).
  add(root, box(2.4, 6.7, 2.4, palette.cream), [-16.3, 3.35, -10.8]);
  add(root, cylinder(1.72, 1.72, 2.7, palette.coral, 4), [-16.3, 7.15, -10.8], [0, Math.PI / 4, 0]);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(.86, 28), material(palette.ivory)); disc.position.set(-16.3, 5.9, -9.53); root.add(disc);
  const rim = torus(.9, .1, palette.gold); rim.position.set(-16.3, 5.9, -9.49); root.add(rim);
  add(root, box(.08, .58, .05, palette.ink), [-16.3, 6.14, -9.42]);
  add(root, box(.48, .07, .05, palette.ink), [-16.08, 5.9, -9.42], [0, 0, -.35]);
  // Foreground dressing frames the routes without occupying node coordinates.
  for (const [x, z] of [[-20, -3], [-15, -3], [-4, -3], [12, -9]]) {
    add(root, box(2.1, .16, .7, palette.rust), [x, .16, z]);
    for (let i = 0; i < 4; i++) add(root, sphere(.11, i % 2 ? palette.gold : palette.coral), [x - .7 + i * .45, .42, z]);
  }
  for (const [x, z] of [[-5, -1], [12, -8]]) {
    add(root, box(1.9, .15, .5, palette.brass), [x, .58, z]); add(root, box(.12, .6, .12, palette.ink), [x - .75, .28, z]); add(root, box(.12, .6, .12, palette.ink), [x + .75, .28, z]);
  }
  for (const x of [-22, -19, 15]) { const awning = box(2.2, .12, 1.2, palette.coral); awning.position.set(x, 2.4, -4); awning.rotation.x = -.16; root.add(awning); add(root, cylinder(.06, .06, 1.8, palette.brass, 7), [x - .8, 1.45, -4]); add(root, cylinder(.06, .06, 1.8, palette.brass, 7), [x + .8, 1.45, -4]); }
  return root;
}

function greenhouse(parent, x, z, scale = 1) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(scale);
  add(g, box(6, 2.8, 4, palette.glass, { opacity: .34, emissive: palette.cyan, emissiveIntensity: .12 }), [0, 1.55, 0]);
  roof(g, 0, 2.95, 0, 6.3, 4.3, 1.45, palette.brass);
  for (const xx of [-2.5, -1.25, 0, 1.25, 2.5]) add(g, cylinder(.055, .055, 3.4, palette.brass, 6), [xx, 1.65, -2.03]);
  for (const zz of [-1.5, 0, 1.5]) add(g, box(6.05, .05, .045, palette.brass), [0, 1.55, zz]);
  parent.add(g);
}
function gardens() {
  const root = new THREE.Group(); root.name = 'landmark-gardens';
  add(root, box(5.2, .16, 27, palette.glass, { opacity: .85, emissive: palette.cyan, emissiveIntensity: .16 }), [12, .16, -7]);
  add(root, box(.9, .5, 28, palette.ivory), [8.95, .35, -7]); add(root, box(.9, .5, 28, palette.ivory), [15.05, .35, -7]);
  greenhouse(root, -8, -11, 1); greenhouse(root, 5, -14, .86);
  for (const [x, z, autumn] of [[-22, -12, false], [-20, 12, true], [20, -12, false], [22, 12, true], [-2, 18, false]]) {
    const tree = createTree(1.45, autumn); tree.position.set(x, 0, z); root.add(tree);
    for (let i = 0; i < 5; i++) add(root, sphere(.1, i % 2 ? palette.coral : palette.gold), [x - .8 + i * .4, .18, z + (i % 2 ? .5 : -.5)]);
  }
  for (const z of [-20, -5, 10, 20]) { add(root, box(6, .18, 1.35, palette.brass), [-4, .35, z]); add(root, box(6.4, .12, .25, palette.leafDark), [-4, .52, z - .55]); }
  return root;
}

function gear(parent, x, y, z, radius, color) {
  const g = new THREE.Group(); g.position.set(x, y, z);
  add(g, torus(radius, .18, color)); add(g, cylinder(.2, .2, .18, palette.ink, 10), [0, 0, .02]);
  for (let i = 0; i < 10; i++) { const tooth = box(.22, .42, .22, color); tooth.position.set(Math.cos(i * Math.PI / 5) * radius, Math.sin(i * Math.PI / 5) * radius, 0); tooth.rotation.z = i * Math.PI / 5; g.add(tooth); }
  parent.add(g); return g;
}
function foundry() {
  const root = new THREE.Group(); root.name = 'landmark-foundry';
  add(root, cylinder(3.15, 3.4, 4.2, palette.rust, 12), [0, 2.1, -9]);
  add(root, torus(3.2, .14, palette.brass), [0, 1.1, -9]); add(root, torus(3.2, .14, palette.brass), [0, 3.25, -9]);
  add(root, sphere(.78, palette.ink, { emissive: palette.coral, emissiveIntensity: .65 }), [0, 1.8, -12.18]);
  for (const [x, y, r] of [[-7, 2.1, 2], [7, 3.4, 2.5], [-8, 6, 1.35]]) gear(root, x, y, -8, r, palette.gold);
  for (const x of [-12, -4, 4, 12]) { add(root, cylinder(.52, .7, 5.8, palette.brass, 10), [x, 2.9, -15]); add(root, cylinder(.72, .72, .16, palette.ink, 10), [x, 5.9, -15]); }
  for (const x of [-10, 0, 10]) { const pipe = cylinder(.2, .2, 20, palette.rust, 8); pipe.rotation.x = Math.PI / 2; pipe.position.set(x, 5.5, -3); root.add(pipe); add(root, torus(.34, .07, palette.brass), [x, 5.5, -3], [Math.PI / 2, 0, 0]); }
  for (const [x, z] of [[-15, -4], [15, -4], [-13, 10], [13, 10]]) add(root, sphere(.22, palette.coral, { emissive: palette.coral, emissiveIntensity: .8 }), [x, 1.1, z]);
  return root;
}

function observatory() {
  const root = new THREE.Group(); root.name = 'landmark-observatory';
  add(root, cylinder(7, 7.5, .85, palette.ivory, 16), [0, .42, -8]); add(root, torus(6.5, .16, palette.gold), [0, .9, -8], [Math.PI / 2, 0, 0]);
  const sphereGroup = new THREE.Group(); sphereGroup.position.set(0, 7, -8);
  add(sphereGroup, sphere(.32, palette.gold, { emissive: palette.gold, emissiveIntensity: .3 }));
  add(sphereGroup, torus(2.7, .11, palette.gold)); add(sphereGroup, torus(2.7, .11, palette.coral), undefined, [Math.PI / 2, .25, 0]); add(sphereGroup, torus(2.7, .11, palette.cyan), undefined, [.45, 0, .72]); root.add(sphereGroup);
  for (let i = 0; i < 4; i++) { const angle = i * Math.PI / 2 + Math.PI / 4; const x = Math.cos(angle) * 5.2, z = -8 + Math.sin(angle) * 5.2; add(root, cylinder(.22, .3, 4.2, palette.cream, 8), [x, 2.65, z]); add(root, torus(1.15, .1, palette.coral), [x, 4.9, z], [Math.PI / 2, 0, 0]); }
  const telescope = new THREE.Group(); telescope.position.set(-8, 3.6, -5); telescope.rotation.z = -.32;
  add(telescope, cylinder(.48, .62, 5.2, palette.navy, 10), [0, 0, 0], [0, 0, Math.PI / 2]); add(telescope, cylinder(.7, .7, .45, palette.gold, 10), [2.5, 0, 0], [0, 0, Math.PI / 2]); add(telescope, cylinder(.38, .38, 1.1, palette.cyan, 10), [-2.5, 0, 0], [0, 0, Math.PI / 2]); root.add(telescope);
  for (const [x, z, c] of [[-17, -17, palette.cyan], [-12, 14, palette.violet], [16, -12, palette.gold], [18, 13, palette.cyan], [5, 17, palette.violet]]) { const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(.5, 0), material(c, { emissive: c, emissiveIntensity: .38 })); crystal.position.set(x, .55, z); root.add(crystal); }
  return root;
}

export function createDistrictLandmark(id = '') {
  if (id.includes('station')) return station();
  if (id.includes('garden')) return gardens();
  if (id.includes('foundry')) return foundry();
  return observatory();
}
