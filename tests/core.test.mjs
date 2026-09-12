import test from 'node:test';
import assert from 'node:assert/strict';
import { CHARACTERS, REGIONS, ENCOUNTERS, QUESTS } from '../src/content.js';
import { createBattle, act, encore, legalActions } from '../src/combat.js';
import { createCampaign, finishBattle, interact, maxHp, upgradeHero, upgradeCost, serialize, deserialize, questProgress, objective } from '../src/campaign.js';

test('authored content covers the complete campaign', () => {
  assert.equal(CHARACTERS.length, 3); assert.equal(CHARACTERS.every(hero => hero.skills.length === 3), true);
  assert.equal(REGIONS.length, 4); assert.equal(Object.keys(ENCOUNTERS).length, 16);
  assert.equal(Object.values(ENCOUNTERS).filter(encounter => encounter.boss).length, 4); assert.equal(QUESTS.length, 6);
  assert.equal(new Set(REGIONS.flatMap(region => region.nodes.map(node => node.id))).size, 32);
  for (const region of REGIONS) assert.ok(region.nodes.every(node => node.x >= region.bounds.minX && node.x <= region.bounds.maxX && node.z >= region.bounds.minZ && node.z <= region.bounds.maxZ));
});

test('combat exposes legal actions and distinct notes create one BREAK', () => {
  const battle = createBattle(createCampaign(), 'ss-boss'); assert.ok(legalActions(battle).length > 10);
  act(battle, 0, 0, 0); act(battle, 1, 0, 0); const result = act(battle, 2, 0, 0);
  assert.equal(result.ok, true); assert.ok(result.events.some(entry => entry.type === 'chord' && entry.note === 'break'));
  assert.equal(battle.notes.length, 0); assert.ok(result.events.some(entry => entry.status === 'interrupted' || entry.status === 'staggered'));
});

test('ECHO is finite recovery, mute skips an intent, and phase is visible', () => {
  const battle = createBattle(createCampaign(), 'so-boss'); battle.heroes[0].hp = 20;
  act(battle, 2, 2, 0); act(battle, 0, 0, 0); act(battle, 1, 1, 0);
  assert.equal(battle.lastChord.every(note => note === 'ember'), true); assert.ok(battle.heroes[0].hp > 20);
  battle.heroes.forEach(hero => { hero.used = false; }); const mute = act(battle, 1, 2, 0); assert.ok(mute.events.some(entry => entry.status === 'muted'));
  battle.enemies[0].hp = Math.floor(battle.enemies[0].maxHp / 2); battle.heroes.forEach(hero => { hero.used = false; });
  act(battle, 0, 0, 0); act(battle, 1, 0, 0); const phase = act(battle, 2, 0, 0); assert.ok(phase.events.some(entry => entry.status === 'phase') || battle._phase === 2);
});

test('weakness changes damage and guard preserves explicit zero power', () => {
  const weak = createBattle(createCampaign(), 'ss-encounter-1'); const normal = createBattle(createCampaign(), 'ss-encounter-1');
  weak.enemies[0].weakness = 'ember'; normal.enemies[0].weakness = 'tide';
  const weakHit = act(weak, 0, 0, 0).events.find(entry => entry.type === 'hit').amount; const normalHit = act(normal, 0, 0, 0).events.find(entry => entry.type === 'hit').amount;
  assert.ok(weakHit > normalHit); weak.enemies[0].hp = 500; weak.enemies[0].maxHp = 500; weak.enemies[0].intent = { type: 'guard', power: 0, name: 'guard' };
  weak.heroes.forEach(hero => { hero.used = false; }); act(weak, 0, 0, 0); act(weak, 1, 0, 0); const guarded = act(weak, 2, 0, 0);
  assert.equal(guarded.events.find(entry => entry.type === 'shield')?.amount, 0);
});

test('party shield protects the current enemy round and then expires', () => {
  const battle = createBattle(createCampaign(), 'ss-encounter-1');
  battle.enemies[0].hp = 200; battle.enemies[0].maxHp = 200;
  act(battle, 0, 2, 0); act(battle, 1, 0, 0); const result = act(battle, 2, 0, 0);
  assert.ok(result.events.some(entry => entry.type === 'hit' && entry.side === 'enemy'));
  assert.ok(battle.heroes.every(hero => hero.shield === 0));
  assert.equal(battle.heroes[2].hp, 100);
});

test('healing ignores the selected enemy target and chooses lowest living ratio', () => {
  const battle = createBattle(createCampaign(), 'tg-encounter-2');
  battle.heroes[0].hp = 0; battle.heroes[1].hp = 35;
  const result = act(battle, 2, 1, 1);
  assert.equal(result.ok, true); assert.ok(battle.heroes[1].hp > 35); assert.equal(battle.heroes[0].hp, 0);
});

test('mute weakens an ordinary attack while interrupting special intents', () => {
  const battle = createBattle(createCampaign(), 'ss-encounter-1');
  act(battle, 1, 2, 0); act(battle, 0, 0, 0); const result = act(battle, 2, 0, 0);
  const weakened = result.events.find(entry => entry.type === 'hit' && entry.side === 'enemy');
  assert.equal(weakened?.status, 'weak'); assert.equal(weakened?.amount, 5);
  const charged = createBattle(createCampaign(), 'ss-boss'); charged.enemies[0].intent = { type: 'charge', power: 40, name: '충전' };
  act(charged, 1, 2, 0); act(charged, 0, 0, 0); const interrupted = act(charged, 2, 0, 0);
  assert.ok(interrupted.events.some(entry => entry.status === 'interrupted'));
});

test('null muted notes never make a BREAK chord', () => {
  const battle = createBattle(createCampaign(), 'ss-boss'); battle.heroes[1].muted = 1;
  act(battle, 0, 0, 0); act(battle, 1, 0, 0); const result = act(battle, 2, 0, 0);
  assert.deepEqual(battle.lastChord, ['ember', null, 'star']); assert.ok(!result.events.some(entry => entry.type === 'chord' && entry.note === 'break'));
});

test('encore costs resonance without consuming a normal turn, and dead heroes skip actions', () => {
  const battle = createBattle(createCampaign(), 'ss-boss'); battle.resonance = 100; battle.heroes[0].used = true;
  const before = { round: battle.round, actions: battle.actions }; const encoreResult = encore(battle);
  assert.equal(encoreResult.ok, true); assert.equal(battle.resonance, 0); assert.deepEqual({ round: battle.round, actions: battle.actions }, before); assert.equal(battle.heroes[0].used, true);
  const dead = createBattle(createCampaign(), 'ss-encounter-1'); dead.heroes[0].hp = 0;
  assert.ok(legalActions(dead).every(action => action.hero !== 0)); act(dead, 1, 0, 0); const result = act(dead, 2, 0, 0);
  assert.ok(result.events.some(entry => entry.type === 'round')); assert.ok(result.events.filter(entry => entry.type === 'hit' && entry.side === 'enemy').every(entry => entry.index !== 0));
});

test('campaign stores node IDs, gates, upgrades, quest rewards, and ending idempotently', () => {
  const state = createCampaign(); interact(state, 'ss-chest-1'); const shards = state.shards; interact(state, 'ss-chest-1'); assert.equal(state.shards, shards);
  state.shards = upgradeCost(state, 0); const oldHp = maxHp(state, 0); assert.equal(upgradeHero(state, 0).ok, true); assert.ok(maxHp(state, 0) > oldHp);
  for (const id of ['ss-encounter-1', 'ss-encounter-2', 'ss-encounter-3', 'ss-boss']) finishBattle(state, { encounterId: id, result: 'win', heroes: [{ hp: 100 }, { hp: 100 }, { hp: 100 }] });
  assert.deepEqual(state.cleared.slice(0, 3), ['ss-battle-1', 'ss-battle-2', 'ss-battle-3']); assert.equal(interact(state, 'ss-gate').type, 'travel');
  assert.equal(objective(state).nodeId, 'tg-battle-1'); const before = serialize(state); finishBattle(state, { encounterId: 'ss-boss', result: 'win', heroes: [{ hp: 1 }, { hp: 1 }, { hp: 1 }] }); assert.equal(serialize(state), before);
  state.cleared.push('tg-boss', 'bf-boss', 'so-boss'); state.region = 3; assert.equal(interact(state, 'so-finale').type, 'ending'); assert.equal(interact(state, 'so-finale').type, 'ending'); assert.equal(state.finished, true);
});

test('defeat preserves progress and save validation rejects corrupt boundaries', () => {
  const state = createCampaign(); state.cleared.push('ss-battle-1'); const result = finishBattle(state, { encounterId: 'ss-boss', result: 'lose' });
  assert.equal(result.won, false); assert.deepEqual(state.cleared, ['ss-battle-1']); assert.ok(state.hp.every((hp, i) => hp === maxHp(state, i))); assert.deepEqual(deserialize(serialize(state)), state);
  const invalid = [{ ...state, level: 0 }, { ...state, hp: [999, 108, 100] }, { ...state, cleared: ['no-such-node'] }, { ...state, collected: ['ss-battle-1'] }, { ...state, position: { x: 999, z: 0 } }, { ...state, finished: 1 }, { ...state, questDone: ['no-such-quest'] }];
  for (const value of invalid) assert.equal(deserialize(JSON.stringify(value)), null); assert.equal(deserialize('{bad'), null); assert.ok(questProgress(state).every(progress => progress.current <= progress.total));
});
