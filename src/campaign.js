import { CHARACTERS, REGIONS, ENCOUNTERS, QUESTS, NARRATIVE } from './content.js';

const VERSION = 1;
const nodes = REGIONS.flatMap((region, regionIndex) => region.nodes.map(node => ({ ...node, region: regionIndex })));
const findNode = id => nodes.find(node => node.id === id);
const findBattleNode = encounterId => nodes.find(node => (node.type === 'battle' || node.type === 'boss') && node.encounterId === encounterId);
const has = (state, id) => state.cleared.includes(id) || state.collected.includes(id) || state.talked.includes(id);
const mark = (array, id) => { if (!array.includes(id)) array.push(id); };

function awardXp(state, amount) {
  state.xp += Number.isFinite(amount) ? amount : 0;
  while (state.xp >= state.level * 100) { state.xp -= state.level * 100; state.level++; }
}

export function createCampaign() {
  return { version: VERSION, region: 0, position: { x: 0, z: 5 }, level: 1, xp: 0, shards: 0, upgrades: [0, 0, 0], hp: CHARACTERS.map(hero => hero.baseHp), cleared: [], collected: [], talked: [], questDone: [], playSeconds: 0, finished: false };
}

export function maxHp(state, heroIndex) {
  const hero = CHARACTERS[heroIndex];
  if (!hero) return 0;
  return hero.baseHp + (state.level - 1) * 8 + (state.upgrades[heroIndex] || 0) * 20;
}

export function upgradeCost(state, heroIndex) {
  const rank = state.upgrades[heroIndex] || 0;
  return rank >= 3 ? Infinity : 24 + rank * 28;
}

function claimQuests(state) {
  let claimed = 0;
  for (const quest of QUESTS) {
    if (state.questDone.includes(quest.id) || !quest.requires.every(id => has(state, id))) continue;
    mark(state.questDone, quest.id); state.shards += quest.reward.shards || 0; awardXp(state, quest.reward.xp); claimed++;
  }
  return claimed;
}

export function upgradeHero(state, heroIndex) {
  if (!CHARACTERS[heroIndex]) return { ok: false, message: '알 수 없는 동료입니다.' };
  const cost = upgradeCost(state, heroIndex);
  if (!Number.isFinite(cost)) return { ok: false, message: '이 동료의 강화가 끝났습니다.' };
  if (state.shards < cost) return { ok: false, message: `조각이 ${cost - state.shards}개 부족합니다.` };
  const oldMax = maxHp(state, heroIndex); state.shards -= cost; state.upgrades[heroIndex]++;
  const newMax = maxHp(state, heroIndex); state.hp[heroIndex] = Math.min(newMax, Math.ceil((state.hp[heroIndex] / oldMax) * newMax));
  return { ok: true, message: `${CHARACTERS[heroIndex].name}의 강화 단계가 ${state.upgrades[heroIndex]}이 되었습니다.` };
}

export function interact(state, nodeId) {
  const node = findNode(nodeId);
  if (!node) return { type: 'toast', message: '알 수 없는 장소입니다.' };
  if (node.region !== state.region) return { type: 'toast', message: '다른 지역의 장소입니다.' };
  if (node.type === 'battle' || node.type === 'boss') {
    if (state.cleared.includes(node.id)) return { type: 'toast', message: '이미 정리한 전투입니다.' };
    return { type: 'battle', encounterId: node.encounterId };
  }
  if (node.type === 'chest') {
    if (state.collected.includes(node.id)) return { type: 'toast', message: '상자가 비어 있습니다.' };
    mark(state.collected, node.id); const reward = node.reward || { shards: 0, xp: 0 };
    state.shards += reward.shards || 0; awardXp(state, reward.xp); const claimed = claimQuests(state);
    return { type: 'toast', message: `상자를 열었습니다. 조각 +${reward.shards || 0}.${claimed ? ` 의뢰 ${claimed}개를 완료했습니다.` : ''}` };
  }
  if (node.type === 'camp') {
    state.hp = CHARACTERS.map((hero, index) => maxHp(state, index)); mark(state.talked, node.id); const claimed = claimQuests(state);
    return { type: 'toast', message: `야영지에서 동료를 회복했습니다.${claimed ? ` 의뢰 ${claimed}개를 완료했습니다.` : ''}` };
  }
  if (node.type === 'npc') {
    mark(state.talked, node.id); const claimed = claimQuests(state);
    return { type: 'dialogue', lines: [...(node.dialogue || []), ...(claimed ? [{ speaker: '기록', text: `의뢰 ${claimed}개를 완료했습니다.` }] : [])] };
  }
  if (node.type === 'gate') {
    if (!node.requires.every(id => state.cleared.includes(id))) return { type: 'toast', message: '문이 아직 잠겨 있습니다.' };
    state.region = node.destination; state.position = { ...REGIONS[state.region].spawn }; return { type: 'travel', region: state.region };
  }
  if (node.type === 'finale') {
    if (!node.requires.every(id => state.cleared.includes(id))) return { type: 'toast', message: '마지막 릴레이가 아직 어둡습니다.' };
    state.finished = true;
    const lines = [...NARRATIVE.finale];
    if (QUESTS.every(quest => state.questDone.includes(quest.id))) lines.push({ speaker: '기록', text: '승객들의 부탁도 모두 전해졌습니다. 기다리던 사람들과 함께 노래가 이어집니다.' });
    return { type: 'ending', lines };
  }
  return { type: 'toast', message: '아직 아무 일도 일어나지 않습니다.' };
}

export function finishBattle(state, battle) {
  if (!battle || !battle.encounterId) return { won: false, message: '전투 기록이 없습니다.' };
  const encounter = ENCOUNTERS[battle.encounterId]; const node = encounter && findBattleNode(encounter.id);
  if (!encounter || !node) return { won: false, message: '알 수 없는 전투입니다.' };
  if (battle.result === 'lose') { state.hp = CHARACTERS.map((hero, index) => maxHp(state, index)); return { won: false, message: '동료들이 물러나 마지막 야영지에서 회복했습니다.' }; }
  if (battle.result !== 'win' || state.cleared.includes(node.id)) return { won: false, message: '이미 처리한 전투입니다.' };
  const previousLevel = state.level; mark(state.cleared, node.id); state.shards += encounter.reward.shards || 0; awardXp(state, encounter.reward.xp);
  state.hp = CHARACTERS.map((hero, index) => Math.min(maxHp(state, index), Math.max(1, Math.ceil((battle.heroes[index]?.hp ?? state.hp[index]) + maxHp(state, index) * 0.2))));
  const claimed = claimQuests(state); const levelUps = state.level - previousLevel;
  return { won: true, rewards: encounter.reward, levelUps, message: `${encounter.name}을 정리했습니다.${claimed ? ` 의뢰 ${claimed}개를 완료했습니다.` : ''}` };
}

export function objective(state) {
  const region = REGIONS[state.region];
  const next = region.nodes.find(node => (node.type === 'battle' || node.type === 'boss') && !state.cleared.includes(node.id)) || region.nodes.find(node => node.type === 'gate' && node.destination != null && node.requires.every(id => state.cleared.includes(id))) || (state.region === REGIONS.length - 1 ? region.nodes.find(node => node.type === 'finale') : null);
  if (!next) return { title: '다음 신호 찾기', text: '표시된 길을 따라가세요.', nodeId: `${region.id}-gate` };
  return { title: next.type === 'boss' ? '릴레이 수호자' : next.name, text: next.type === 'boss' ? '서로 다른 세 음으로 충전 선율을 끊으세요.' : '다음 신호를 따라가세요.', nodeId: next.id };
}

export function questProgress(state) { return QUESTS.map(quest => ({ ...quest, current: quest.requires.filter(id => has(state, id)).length, total: quest.requires.length, complete: quest.requires.every(id => has(state, id)), claimed: state.questDone.includes(quest.id) })); }

function validState(value) {
  if (!value || value.version !== VERSION || !Number.isInteger(value.level) || value.level < 1 || !Number.isFinite(value.xp) || value.xp < 0 || !Number.isFinite(value.shards) || value.shards < 0 || !Number.isFinite(value.playSeconds) || value.playSeconds < 0) return false;
  if (!Number.isInteger(value.region) || value.region < 0 || value.region >= REGIONS.length || !value.position || !Number.isFinite(value.position.x) || !Number.isFinite(value.position.z)) return false;
  if (!Array.isArray(value.upgrades) || value.upgrades.length !== 3 || value.upgrades.some(n => !Number.isInteger(n) || n < 0 || n > 3)) return false;
  if (typeof value.finished !== 'boolean' || !Array.isArray(value.hp) || value.hp.length !== 3 || value.hp.some((n, i) => !Number.isFinite(n) || n < 0 || n > maxHp(value, i))) return false;
  if (!['cleared', 'collected', 'talked', 'questDone'].every(key => Array.isArray(value[key]))) return false;
  if (value.cleared.some(id => !findNode(id) || !['battle', 'boss'].includes(findNode(id).type))) return false;
  if (value.collected.some(id => !findNode(id) || findNode(id).type !== 'chest')) return false;
  if (value.talked.some(id => !findNode(id) || !['camp', 'npc'].includes(findNode(id).type))) return false;
  if (value.questDone.some(id => !QUESTS.some(quest => quest.id === id))) return false;
  const region = REGIONS[value.region]; return value.position.x >= region.bounds.minX && value.position.x <= region.bounds.maxX && value.position.z >= region.bounds.minZ && value.position.z <= region.bounds.maxZ;
}

export function serialize(state) { return JSON.stringify(state); }
export function deserialize(text) { try { const value = JSON.parse(text); return validState(value) ? value : null; } catch { return null; } }
