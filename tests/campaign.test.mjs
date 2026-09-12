import test from 'node:test';
import assert from 'node:assert/strict';
import { campaignBalance } from './balance.mjs';

test('a progressing party finishes all 16 encounters and six quests using legal commands', () => {
  const { report, campaign } = campaignBalance();
  assert.equal(campaign.finished, true);
  assert.equal(campaign.cleared.length, 16);
  assert.equal(campaign.questDone.length, 6);
  assert.equal(report.length, 16);
  assert.ok(report.every(battle => battle.result === 'win'));
  assert.equal(report[0].round, 2, 'first fight demonstrates the enemy response');
  const bosses = report.filter(battle => battle.id.endsWith('-boss'));
  assert.ok(bosses.every(battle => battle.round >= 5 && battle.round <= 20));
  assert.ok(bosses.filter(battle => battle.blind.result === 'lose').length >= 2, 'late bosses require more than repeated basic attacks');
  assert.equal(new Set(report.flatMap(battle => battle.skills)).size, 9, 'the intent-aware route uses all nine skills');
});
