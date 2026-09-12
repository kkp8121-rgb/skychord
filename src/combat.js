import { CHARACTERS, ENCOUNTERS } from './content.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const event = (type, data = {}) => ({ type, ...data });
const living = unit => unit.hp > 0;

function intentFor(enemy, round, phase) {
  const pattern = enemy.pattern || [{ name: '공격', type: 'attack', power: 8 }];
  const base = pattern[(round - 1) % pattern.length];
  if (phase > 1 && base.type === 'attack') return { ...base, name: `${base.name} · 2단계`, power: base.power + 4 };
  return { ...base };
}

export function createBattle(campaign, encounterId) {
  const definition = ENCOUNTERS[encounterId];
  if (!definition) throw new Error(`알 수 없는 전투: ${encounterId}`);
  const heroes = CHARACTERS.map((hero, index) => ({ id: hero.id, name: hero.name, hp: Math.max(0, campaign.hp[index]), maxHp: hero.baseHp + (campaign.level - 1) * 8 + (campaign.upgrades[index] || 0) * 20, attack: 10 + campaign.level * 2 + (campaign.upgrades[index] || 0) * 2, used: false, shield: 0, muted: 0, skills: hero.skills.map(skill => ({ ...skill })) }));
  const enemies = definition.enemies.map(enemy => ({ ...enemy, pattern: enemy.pattern.map(p => ({ ...p })), hp: enemy.hp, maxHp: enemy.hp, shield: 0, stagger: 0, muted: 0, intent: intentFor(enemy, 1, 1) }));
  return { encounterId, round: 1, phase: 'command', heroes, enemies, notes: [], lastChord: null, resonance: 0, log: [definition.intro || `${definition.name} 전투가 시작되었습니다.`], events: [], result: null, actions: 0, _phase: 1 };
}

function pushLog(battle, text) { battle.log.push(text); if (battle.log.length > 18) battle.log.shift(); }
function damage(unit, amount) {
  amount = Math.round(amount);
  const absorbed = Math.min(unit.shield || 0, amount); unit.shield -= absorbed; unit.hp = Math.max(0, unit.hp - (amount - absorbed)); return amount - absorbed;
}
function finishCheck(battle, events) {
  if (!battle.enemies.some(living)) { battle.phase = 'won'; battle.result = 'win'; events.push(event('victory', { text: '적의 음이 잦아들었습니다.' })); pushLog(battle, '승리했습니다.'); return true; }
  if (!battle.heroes.some(living)) { battle.phase = 'lost'; battle.result = 'lose'; events.push(event('defeat', { text: '모든 동료가 쓰러졌습니다.' })); pushLog(battle, '패배했습니다.'); return true; }
  return false;
}

function chord(battle, events) {
  if (battle.notes.length < 3) return;
  const notes = battle.notes.splice(0, 3);
  battle.lastChord = [...notes];
  const validNotes = notes.filter(note => note === 'ember' || note === 'tide' || note === 'star');
  if (validNotes.length === 3 && new Set(validNotes).size === 3) {
    battle.resonance = clamp(battle.resonance + 42, 0, 100);
    for (const enemy of battle.enemies) if (living(enemy) && enemy.intent.type === 'charge') {
      enemy.stagger = 1;
      enemy.intent = { ...enemy.intent, type: 'interrupted', power: 0, name: '충전 중단' };
    }
    events.push(event('chord', { text: 'BREAK 화음: 충전 공격을 끊었습니다.', note: 'break' }));
    pushLog(battle, '서로 다른 세 음이 BREAK를 만들었습니다.');
  } else if (validNotes.length === 3 && new Set(validNotes).size === 1) {
    battle.resonance = clamp(battle.resonance + 24, 0, 100);
    for (const hero of battle.heroes) if (living(hero)) { hero.hp = Math.min(hero.maxHp, hero.hp + 8); hero.shield += 8; }
    events.push(event('chord', { text: 'ECHO 화음: 체력과 방패가 돌아옵니다.', note: notes[0] }));
    pushLog(battle, '같은 음 세 개가 ECHO를 만들어 회복시킵니다.');
  } else {
    battle.resonance = clamp(battle.resonance + 16, 0, 100);
  }
}

function resolveEnemyRound(battle, events) {
  battle.phase = 'enemy'; battle.round++;
  for (const hero of battle.heroes) hero.used = false;
  for (const hero of battle.heroes) hero.muted = Math.max(0, hero.muted - 1);
  for (const enemy of battle.enemies) {
    if (!living(enemy)) continue;
    const intent = enemy.intent || intentFor(enemy, battle.round, battle._phase);
    const enemyIndex = battle.enemies.indexOf(enemy);
    if (intent.type === 'interrupted') {
      enemy.stagger = 0;
      events.push(event('enemy', { side: 'enemy', source: enemyIndex, index: enemyIndex, status: 'interrupted', text: `${enemy.name}의 충전 공격이 끊겼습니다.` }));
      continue;
    }
    if (enemy.stagger > 0) {
      enemy.stagger--;
      pushLog(battle, `${enemy.name}이 비틀거립니다.`);
      events.push(event('enemy', { side: 'enemy', source: enemyIndex, index: enemyIndex, status: 'staggered', text: '적이 이번 턴을 쉽니다.' }));
      continue;
    }
    if (intent.type === 'muted') {
      const originalType = intent.mutedType || 'attack';
      if (originalType === 'charge' || originalType === 'heal' || originalType === 'mute') {
        events.push(event('enemy', { side: 'enemy', source: enemyIndex, index: enemyIndex, status: 'interrupted', text: `${enemy.name}의 특수 의도가 무음 처리되었습니다.` }));
        continue;
      }
      if (originalType === 'guard') {
        const shield = Math.ceil((intent.originalPower ?? 12) * 0.5); enemy.shield += shield;
        events.push(event('shield', { side: 'enemy', source: enemyIndex, index: enemyIndex, status: 'weak', amount: shield, text: `${enemy.name}의 방어가 약화되었습니다.` }));
        continue;
      }
      const aliveHeroes = battle.heroes.filter(living);
      const targets = originalType === 'all' || intent.target === 'all' ? aliveHeroes : [aliveHeroes[(battle.round + enemyIndex) % Math.max(1, aliveHeroes.length)]];
      for (const target of targets) if (target) { const amount = Math.ceil((intent.originalPower ?? enemy.attack) * 0.5); events.push(event('hit', { side: 'enemy', source: enemyIndex, index: battle.heroes.indexOf(target), amount: damage(target, amount), status: 'weak', text: intent.name })); }
    } else if (intent.type === 'guard') {
      const shield = intent.power ?? 12; enemy.shield += shield; events.push(event('shield', { side: 'enemy', source: enemyIndex, index: enemyIndex, amount: shield, text: `${enemy.name}이 방어합니다.` }));
    } else if (intent.type === 'heal') {
      const target = battle.enemies.filter(living).sort((a, b) => a.hp - b.hp)[0]; if (target) { const amount = Math.round(intent.power ?? 10); target.hp = Math.min(target.maxHp, target.hp + amount); events.push(event('heal', { side: 'enemy', source: enemyIndex, index: battle.enemies.indexOf(target), amount })); }
    } else if (intent.type === 'mute') {
      const target = battle.heroes.find(living); if (target) { target.muted = 1; events.push(event('enemy', { side: 'enemy', source: enemyIndex, index: battle.heroes.indexOf(target), status: 'muted', text: `${target.name}의 음이 잠겼습니다.` })); }
    } else {
      const aliveHeroes = battle.heroes.filter(living);
      const targets = intent.type === 'all' || intent.target === 'all' ? aliveHeroes : [aliveHeroes[(battle.round + battle.enemies.indexOf(enemy)) % Math.max(1, aliveHeroes.length)]];
      for (const target of targets) if (target) { const amount = Math.round(intent.power ?? enemy.attack); events.push(event('hit', { side: 'enemy', source: enemyIndex, index: battle.heroes.indexOf(target), amount: damage(target, amount), text: intent.name })); }
    }
    if (finishCheck(battle, events)) return;
  }
  for (const hero of battle.heroes) hero.shield = 0;
  const previousPhase = battle._phase;
  const definition = ENCOUNTERS[battle.encounterId];
  battle._phase = definition?.boss && battle.enemies[0]?.hp > 0 && battle.enemies[0].hp <= battle.enemies[0].maxHp / 2 ? 2 : battle._phase;
  if (battle._phase !== previousPhase) { const text = '수호자 2단계 · 단일 공격 위력 +4'; events.push(event('enemy', { side: 'enemy', status: 'phase', phase: battle._phase, text })); pushLog(battle, text); }
  for (const enemy of battle.enemies) if (living(enemy)) enemy.intent = intentFor(enemy, battle.round, battle._phase);
  battle.phase = battle.result ? battle.phase : 'command'; events.push(event('round', { text: `라운드 ${battle.round}` }));
}

export function act(battle, heroIndex, skillIndex, targetIndex = 0) {
  battle.events = [];
  if (battle.result) return { ok: false, message: '전투가 이미 끝났습니다.', events: [] };
  const hero = battle.heroes[heroIndex]; const skill = hero?.skills[skillIndex];
  if (!hero || !skill || !living(hero) || hero.used || battle.phase !== 'command') return { ok: false, message: '지금 사용할 수 없는 행동입니다.', events: [] };
  const targetEnemy = battle.enemies[targetIndex];
  const events = battle.events;
  if (skill.kind === 'attack' && (!targetEnemy || !living(targetEnemy))) return { ok: false, message: '공격할 적을 선택하세요.', events: [] };
  hero.used = true; battle.actions++; battle.notes.push(hero.muted ? null : skill.note); if (battle.notes.length > 3) battle.notes.shift();
  const attackAmount = (enemy, power) => Math.round(power * (enemy.weakness === skill.note ? 1.35 : 1));
  if (skill.kind === 'attack') { const amount = damage(targetEnemy, attackAmount(targetEnemy, skill.power + hero.attack)); events.push(event('hit', { side: 'hero', source: heroIndex, index: targetIndex, amount, note: skill.note, text: skill.name })); }
  if (skill.kind === 'attackAll') for (let i = 0; i < battle.enemies.length; i++) if (living(battle.enemies[i])) { const amount = damage(battle.enemies[i], attackAmount(battle.enemies[i], skill.power + hero.attack / 2)); events.push(event('hit', { side: 'hero', source: heroIndex, index: i, amount, note: skill.note, text: skill.name })); }
  if (skill.kind === 'heal') { const recipient = battle.heroes.filter(living).sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0]; const amount = recipient ? Math.round(Math.min(recipient.maxHp - recipient.hp, skill.power + hero.attack / 2)) : 0; if (recipient) recipient.hp += amount; events.push(event('heal', { side: 'hero', source: heroIndex, index: battle.heroes.indexOf(recipient), amount, note: skill.note, text: skill.name })); }
  if (skill.kind === 'healAll') for (let i = 0; i < battle.heroes.length; i++) if (living(battle.heroes[i])) { const amount = Math.min(battle.heroes[i].maxHp - battle.heroes[i].hp, skill.power); battle.heroes[i].hp += amount; events.push(event('heal', { side: 'hero', source: heroIndex, index: i, amount, note: skill.note, text: skill.name })); }
  if (skill.kind === 'shield') { const targets = battle.heroes.filter(living); for (const target of targets) { target.shield += skill.power; events.push(event('shield', { side: 'hero', source: heroIndex, index: battle.heroes.indexOf(target), amount: skill.power, note: skill.note, text: skill.name })); } }
  if (skill.kind === 'mute') { const target = targetEnemy && living(targetEnemy) ? targetEnemy : battle.enemies.find(living); if (target) { const special = ['charge', 'heal', 'mute'].includes(target.intent.type); target.intent = { ...target.intent, type: 'muted', mutedType: target.intent.type, originalPower: target.intent.power, power: special ? 0 : Math.ceil((target.intent.power ?? target.attack) / 2), name: special ? '무음 · 특수 행동 중단' : `약화 · ${target.intent.name}` }; events.push(event('enemy', { side: 'hero', source: heroIndex, index: battle.enemies.indexOf(target), status: 'muted', text: `${target.name}의 의도를 무음 처리했습니다.` })); } }
  chord(battle, events); pushLog(battle, `${hero.name}: ${skill.name}`);
  if (finishCheck(battle, events)) return { ok: true, message: '행동을 실행했습니다.', events };
  if (battle.heroes.filter(living).every(unit => unit.used)) resolveEnemyRound(battle, events);
  return { ok: true, message: '행동을 실행했습니다.', events };
}

export function encore(battle) {
  battle.events = [];
  if (battle.result || battle.resonance < 100 || !battle.heroes.some(living)) return { ok: false, message: '공명이 아직 충분하지 않습니다.', events: [] };
  battle.resonance = 0; const events = battle.events;
  for (let i = 0; i < battle.enemies.length; i++) if (living(battle.enemies[i])) { const amount = damage(battle.enemies[i], 28); events.push(event('hit', { side: 'hero', index: i, amount, text: '앙코르' })); }
  for (let i = 0; i < battle.heroes.length; i++) if (living(battle.heroes[i])) { const amount = Math.min(battle.heroes[i].maxHp - battle.heroes[i].hp, 14); battle.heroes[i].hp += amount; events.push(event('heal', { side: 'hero', index: i, amount, text: '앙코르' })); }
  events.push(event('encore', { text: '세 목소리가 하나의 앙코르가 되었습니다.' })); finishCheck(battle, events); return { ok: true, message: '앙코르를 연주했습니다.', events };
}

export function legalActions(battle) {
  const actions = [];
  battle.heroes.forEach((hero, heroIndex) => { if (!living(hero) || hero.used || battle.phase !== 'command') return; hero.skills.forEach((skill, skillIndex) => {
    if (skill.kind === 'attack' || skill.kind === 'attackAll' || skill.kind === 'mute') battle.enemies.forEach((enemy, targetIndex) => { if (living(enemy)) actions.push({ hero: heroIndex, skill: skillIndex, target: targetIndex }); });
    else if (battle.heroes.some(living)) actions.push({ hero: heroIndex, skill: skillIndex, target: 0 });
  }); });
  return actions;
}
