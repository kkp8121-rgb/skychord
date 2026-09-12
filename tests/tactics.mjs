import { act, encore, legalActions } from '../src/combat.js';

// An external test player: plans one phrase from the same public information
// shown in the battle UI, then submits an ordinary command. Never edits a game.
function score(battle) {
  if (battle.result === 'win') return 1e6 + battle.heroes.reduce((n,h)=>n+h.hp,0);
  if (battle.result === 'lose') return -1e6;
  const party = battle.heroes.reduce((n,h)=>n+(h.hp>0?120:0)+h.hp+Math.min(h.shield||0,45)*.4,0);
  const foes = battle.enemies.reduce((n,e)=>n+(e.hp>0?60:0)+e.hp*.85+Math.min(e.shield||0,35)*.3,0);
  return party-foes+Math.min(100,battle.resonance||0)*.12;
}

export function chooseAction(battle) {
  if(battle.resonance>=100) return {encore:true};
  const horizon=battle.heroes.filter(h=>h.hp>0&&!h.used).length || 1;
  let beam=[{battle:structuredClone(battle),first:null,score:score(battle)}];
  for(let depth=0;depth<horizon;depth++) {
    const next=[];
    for(const candidate of beam) {
      if(candidate.battle.result){next.push(candidate);continue;}
      const unique=new Set();
      for(const action of legalActions(candidate.battle)) {
        const skill=candidate.battle.heroes[action.hero].skills[action.skill];
        const target=['attack','mute'].includes(skill.kind)?action.target:0;
        const key=`${action.hero}/${action.skill}/${target}`;
        if(unique.has(key))continue;unique.add(key);
        const copy=structuredClone(candidate.battle);
        const result=act(copy,action.hero,action.skill,target);
        if(!result.ok)continue;
        next.push({battle:copy,first:candidate.first||{hero:action.hero,skill:action.skill,target},score:score(copy)});
      }
    }
    next.sort((a,b)=>b.score-a.score);
    beam=next.slice(0,50);
    if(!beam.length)throw new Error('No legal battle command');
  }
  return beam[0].first;
}

export function playBattle(battle,limit=500) {
  const commands=[];
  for(let i=0;i<limit&&!battle.result;i++){
    const choice=chooseAction(battle);commands.push(choice);
    const result=choice.encore?encore(battle):act(battle,choice.hero,choice.skill,choice.target);
    if(!result.ok)throw new Error(result.message);
  }
  if(!battle.result)throw new Error('Battle exceeded command limit');
  return commands;
}
