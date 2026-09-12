import fs from 'node:fs';
import { REGIONS, ENCOUNTERS } from '../src/content.js';
import { createCampaign, interact, finishBattle, upgradeHero } from '../src/campaign.js';
import { createBattle, act, encore } from '../src/combat.js';
import { playBattle } from './tactics.mjs';

function blind(battle) {
  for (let i = 0; i < 300 && !battle.result; i++) {
    if (battle.resonance >= 100) { encore(battle); continue; }
    const hero = battle.heroes.findIndex(h => h.hp > 0 && !h.used);
    const target = battle.enemies.findIndex(e => e.hp > 0);
    act(battle, hero, 0, target);
  }
  return battle;
}

export function campaignBalance({ log = false } = {}) {
  const campaign = createCampaign(), report = [];
  for (const region of REGIONS) for (const node of region.nodes) {
    const result = interact(campaign, node.id);
    if (result.type === 'battle') {
      const battle = createBattle(campaign, result.encounterId);
      const control = blind(structuredClone(battle));
      const entry = { id: result.encounterId, level: campaign.level, upgrades: [...campaign.upgrades], startHP: [...campaign.hp], blind: { result: control.result, round: control.round, hp: control.heroes.map(h => h.hp) } };
      const commands = playBattle(battle);
      Object.assign(entry, { result: battle.result, round: battle.round, hp: battle.heroes.map(h => h.hp), commands: commands.length, skills: [...new Set(commands.filter(c => !c.encore).map(c => `${c.hero}/${c.skill}`))] });
      report.push(entry);
      if (log) console.log(JSON.stringify(entry));
      if (battle.result !== 'win') break;
      finishBattle(campaign, battle);
    }
    if (node.type === 'chest' || node.type === 'boss') for (let hero = 0; hero < 3; hero++) upgradeHero(campaign, hero);
  }
  return { report, campaign };
}

if (process.argv[1]?.replaceAll('\\', '/').endsWith('/balance.mjs')) {
  fs.mkdirSync('artifacts', { recursive: true });
  const result = campaignBalance({ log: true });
  fs.writeFileSync('artifacts/balance-report.json', JSON.stringify(result, null, 2));
  if (!result.campaign.finished || result.report.length !== Object.keys(ENCOUNTERS).length || result.report.some(b => b.result !== 'win')) process.exitCode = 1;
}
