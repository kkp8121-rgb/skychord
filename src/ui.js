const $ = (selector, root = document) => root.querySelector(selector);
const noteLabel = { ember: '불꽃', tide: '파도', star: '별빛' };

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function portrait(character) {
  return `<img class="portrait" src="${esc(character.portrait || `assets/${character.id}.webp`)}" alt="${esc(character.name)} 초상" onerror="this.classList.add('missing')">`;
}

export class SkyUI {
  constructor(root = document) {
    this.root = root;
    this.app = $('#app', root);
    this.screen = 'title';
    this.handlers = new Map();
    this.app.addEventListener('click', (event) => {
      const target = event.target.closest('[data-action]');
      if (!target || target.disabled) return;
      const action = target.dataset.action;
      const handler = this.handlers.get(action);
      if (handler) { event.preventDefault(); handler(target, event); }
    });
  }

  on(action, handler) { this.handlers.set(action, handler); return this; }

  show(screen) {
    this.screen = screen;
    this.app.dataset.screen = screen;
    for (const panel of this.root.querySelectorAll('[data-screen]')) panel.classList.toggle('hidden', panel.dataset.screen !== screen);
    const canvas = $('#game', this.root);
    if (canvas) canvas.setAttribute('aria-hidden', screen === 'title' || screen === 'dialogue' ? 'true' : 'false');
  }

  title(saved) {
    const continueButton = $('#continue-button', this.root);
    if (continueButton) continueButton.classList.toggle('hidden', !saved);
    const saveCopy = $('#save-copy', this.root);
    if (saveCopy) saveCopy.textContent = saved ? `기록 ${saved.regionName || ''} · ${saved.playSeconds ? this.time(saved.playSeconds) : '새 여정'}` : '세 목소리가 마지막 열차를 기다립니다.';
    this.show('title');
  }

  dialogue(lines, index = 0, characters = []) {
    const line = lines[index] || lines[lines.length - 1] || { speaker: '', text: '' };
    const speaker = $('#dialogue-speaker', this.root);
    const text = $('#dialogue-text', this.root);
    const count = $('#dialogue-count', this.root);
    if (speaker) speaker.textContent = line.speaker || 'SKYCHORD';
    if (text) text.textContent = line.text || '';
    if (count) count.textContent = `${Math.min(index + 1, lines.length)} / ${lines.length}`;
    const speakerCharacter = characters.find((character) => character.name === line.speaker);
    const portraitNode = $('#dialogue-portrait', this.root);
    if (portraitNode) {
      portraitNode.classList.toggle('hidden', !speakerCharacter);
      if (speakerCharacter) { portraitNode.src = speakerCharacter.portrait || `assets/${speakerCharacter.id}.webp`; portraitNode.alt = `${speakerCharacter.name} 초상`; }
    }
    this.show('dialogue');
  }

  explore(campaign, scene, nearby, toast = '') {
    const objective = campaign.objective || {};
    const region = campaign.regionData || {};
    $('#region-name', this.root).textContent = region.name || `구역 ${Number(campaign.region || 0) + 1}`;
    $('#objective-title', this.root).textContent = objective.title || '다음 선율';
    const objectiveNode = (region.nodes || []).find((node) => node.id === objective.nodeId);
    let direction = '';
    if (objectiveNode && campaign.position) {
      const dx = objectiveNode.x - campaign.position.x, dz = objectiveNode.z - campaign.position.z;
      const distance = Math.hypot(dx, dz).toFixed(1);
      direction = ` · ${distance}m · ${Math.abs(dx) > Math.abs(dz) ? (dx > 0 ? '동쪽' : '서쪽') : (dz > 0 ? '남쪽' : '북쪽')}`;
    }
    $('#objective-text', this.root).textContent = (objective.text || '빛나는 철로를 따라 이동하십시오.') + direction;
    $('#nearby', this.root).textContent = nearby ? `F  ${nearby.name || '상호작용'}` : '';
    $('#toast', this.root).textContent = toast;
    $('#level-value', this.root).textContent = `Lv.${campaign.level || 1}`;
    $('#shard-value', this.root).textContent = `${campaign.shards || 0} SHARD`;
    $('#play-time', this.root).textContent = this.time(campaign.playSeconds || 0);
    this.show('explore');
  }

  battle(battle, characters, selectedHero, selectedSkill, selectedTarget, preview = '', locked = false, definition = null) {
    const hero = characters[selectedHero] || characters[0];
    const enemy = battle.enemies?.[selectedTarget] || battle.enemies?.find((item) => item.hp > 0);
    $('#battle-name', this.root).textContent = definition?.name || battle.name || battle.encounterId || '공명 전투';
    $('#battle-round', this.root).textContent = `ROUND ${battle.round || 1}`;
    $('#battle-preview', this.root).textContent = preview;
    $('#battle-resonance', this.root).textContent = `${Math.max(0, Math.floor(battle.resonance || 0))}%`;
    const intentEnemy = battle.enemies?.[selectedTarget]?.hp > 0 ? battle.enemies[selectedTarget] : battle.enemies?.find((item) => item.hp > 0);
    const intent = intentEnemy?.intent;
    const pendingHeroes = (battle.heroes || []).filter((item) => item.hp > 0 && !item.used).length;
    const turnOrder = pendingHeroes ? `동료 행동 ${pendingHeroes}회 후 적 차례` : '곧 적 차례';
    $('#enemy-intent', this.root).textContent = intent ? `선택 대상 ${intentEnemy.name} · 예고 ${intent.name || intent.type || '공격'} ${intent.power ? `· ${intent.power}` : ''} · ${turnOrder}` : `적의 움직임이 멎었습니다. · ${turnOrder}`;
    $('#battle-log', this.root).innerHTML = (battle.log || []).slice(-5).map((line) => `<li>${esc(typeof line === 'string' ? line : line.text || line.message || '')}</li>`).join('');
    $('#battle-enemies', this.root).innerHTML = (battle.enemies || []).map((item, i) => {
      const maxHp = Math.max(1, Number(item.maxHp) || 1), hp = Math.max(0, Number(item.hp) || 0), ratio = Math.max(0, Math.min(100, hp / maxHp * 100));
      const notes = { ember: '불꽃', tide: '파도', star: '별빛' };
      const status = [item.weakness ? `약점 ${notes[item.weakness] || item.weakness}` : '', item.shield ? `보호막 ${item.shield}` : '', item.muted ? '침묵' : '', item.stagger ? '비틀거림' : ''].filter(Boolean).join(' · ');
      return `<button class="enemy-card ${i === selectedTarget ? 'selected' : ''} ${hp <= 0 ? 'fallen' : ''}" data-action="battle-target" data-target="${i}" ${hp <= 0 ? 'disabled' : ''}><span>${esc(item.name)}</span><strong>${hp} / ${maxHp}</strong><div class="enemy-hp" aria-label="HP ${hp} / ${maxHp}"><i style="width:${ratio}%"></i></div><small>${esc(item.intent?.name || item.intent?.type || '대기')}${item.intent?.target === 'all' ? ' · 전체' : ''}${item.intent?.power ? ` · ${item.intent.power}` : ''}${status ? ` · ${esc(status)}` : ''}</small></button>`;
    }).join('');
    $('#battle-heroes', this.root).innerHTML = characters.map((character, i) => {
      const current = battle.heroes?.[i] || {};
      const maxHp = Math.max(1, Number(current.maxHp) || character.baseHp), hp = Math.max(0, Number(current.hp) || 0), ratio = Math.max(0, Math.min(100, hp / maxHp * 100));
      const status = [current.shield ? `보호막 ${current.shield}` : '', current.muted ? '침묵' : ''].filter(Boolean).join(' · ');
      return `<button class="hero-card ${i === selectedHero ? 'selected' : ''} ${hp <= 0 ? 'fallen' : ''} ${current.used ? 'used' : ''}" data-action="battle-hero" data-hero="${i}" ${hp <= 0 || current.used ? 'disabled' : ''}>${portrait(character)}<span class="hero-copy"><b>${esc(character.name)}${current.used ? ' · 행동 완료' : ''}</b><small>${esc(character.role)}</small><div class="hero-hp" aria-label="HP ${hp} / ${maxHp}"><i style="width:${ratio}%"></i></div><em>${hp} / ${maxHp}${status ? ` · ${esc(status)}` : ''}</em></span></button>`;
    }).join('');
    $('#battle-skills', this.root).innerHTML = (hero.skills || []).map((skill, i) => `<button class="skill-card ${i === selectedSkill ? 'selected' : ''}" data-action="battle-skill" data-skill="${i}"><b>${i + 1} · ${esc(skill.name)}</b><small>${esc(skill.description || '')}</small><em class="note-label note-${esc(skill.note)}">${esc(noteLabel[skill.note] || '')}</em></button>`).join('');
    const selected = hero.skills?.[selectedSkill];
    $('#skill-detail', this.root).textContent = selected ? `${selected.name}: ${selected.description || ''} · ${noteLabel[selected.note] || ''} 음` : '스킬을 골라 행동을 준비하십시오.';
    const noteSlots = $('#chord-slots', this.root);
    if (noteSlots) {
      const labels = { ember: '불꽃', tide: '파도', star: '별빛' }, notes = (battle.notes || []).slice(-3);
      noteSlots.innerHTML = `<span>CURRENT NOTES</span>` + notes.map((note) => `<i class="${note ? `filled note-${esc(note)}` : 'silent'}" title="${note ? labels[note] || note : '침묵'}">${note ? esc(labels[note] || note) : '침묵'}</i>`).join('') + Array.from({ length: Math.max(0, 3 - notes.length) }, () => '<i></i>').join('');
    }
    const chordResult = $('#chord-result', this.root);
    if (chordResult) { const labels = { ember: '불꽃', tide: '파도', star: '별빛' }; chordResult.textContent = battle.lastChord?.length ? `최근 화음 · ${battle.lastChord.map((note) => note ? labels[note] || note : '침묵').join(' · ')}` : '최근 화음 없음 · 음표를 세 번 모으면 화음이 됩니다.'; }
    const encore = $('#encore-button', this.root);
    if (encore) { encore.disabled = locked || Number(battle.resonance || 0) < 100; encore.textContent = `F 앙코르 · ${Math.floor(battle.resonance || 0)}%`; }
    const execute = $('#execute-button', this.root);
    if (execute) {
      const selectedTargetName = enemy?.name || '선택 대상';
      let targetLabel = selectedTargetName;
      if (selected?.kind === 'attackAll') targetLabel = '전체 적';
      else if (selected?.kind === 'healAll' || selected?.kind === 'shield') targetLabel = '전체 동료';
      else if (selected?.kind === 'heal') {
        const recipient = battle.heroes?.filter((item) => item.hp > 0).sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
        targetLabel = `자동 회복 · ${recipient?.name || '동료'}`;
      }
      execute.textContent = `SPACE · ${hero.name}의 ${selected?.name || '행동'} → ${targetLabel}`;
      execute.disabled = locked || !battle.phase || battle.phase !== 'command' || !!battle.heroes?.[selectedHero]?.used;
    }
    this.show('battle');
  }

  victory(message, rewards) {
    $('#victory-copy', this.root).textContent = message || '선율이 길을 열었습니다.';
    $('#victory-reward', this.root).textContent = rewards ? `+${rewards.xp || 0} XP · +${rewards.shards || 0} SHARD` : '';
    this.show('victory');
  }

  defeat(message) {
    $('#defeat-copy', this.root).textContent = message || '열차의 불빛이 잠시 흔들립니다.';
    this.show('defeat');
  }

  journal(campaign, characters, quests, tab = 'map') {
    $('#journal-tabs', this.root).querySelectorAll('[data-tab]').forEach((button) => button.classList.toggle('selected', button.dataset.tab === tab));
    const panel = $('#journal-body', this.root);
    if (tab === 'party') {
      panel.innerHTML = `<div class="party-grid">${characters.map((character, i) => {
        const rank = campaign.upgrades?.[i] || 0, rawCost = campaign.upgradeCosts?.[i], cost = Number.isFinite(rawCost) ? rawCost : null;
        const maxed = rank >= 3, affordable = !maxed && cost !== null && Number(campaign.shards || 0) >= cost;
        const label = maxed ? '최대 강화' : affordable ? `강화 · ${cost} SHARD` : `강화 필요 · ${cost ?? '—'} SHARD`;
        return `<article class="journal-hero">${portrait(character)}<div><h3>${esc(character.name)}</h3><p>${esc(character.role)} · ${esc(character.voice)}</p><p>${esc(character.bio || character.skills?.[0]?.description || '각자의 방식으로 침묵을 가릅니다.')}</p><button data-action="upgrade" data-hero="${i}" ${maxed || !affordable ? 'disabled' : ''}>${label} <span>${rank}/3</span></button></div></article>`;
      }).join('')}</div>`;
    } else if (tab === 'quests') {
      panel.innerHTML = `<div class="quest-list">${(quests || []).map((item) => `<article class="quest ${item.complete ? 'complete' : ''}"><b>${esc(item.name)}</b><p>${esc(item.description)}</p><span>${item.current || 0} / ${item.total || item.requires?.length || 1} ${item.complete ? '· 완료' : ''}</span></article>`).join('')}</div>`;
    } else {
      const currentRegion = campaign.regionData || {};
      const bounds = currentRegion.bounds || { minX: -28, maxX: 28, minZ: -28, maxZ: 28 };
      const objectiveId = campaign.objective?.nodeId;
      const dots = (currentRegion.nodes || []).map((node) => {
        const cleared = (campaign.cleared || []).includes(node.id) || (campaign.collected || []).includes(node.id) || (campaign.talked || []).includes(node.id);
        const classes = ['map-dot', node.type, cleared ? 'cleared' : '', node.id === objectiveId ? 'objective' : ''].filter(Boolean).join(' ');
        const left = ((node.x - bounds.minX) / (bounds.maxX - bounds.minX) * 100).toFixed(1), top = ((node.z - bounds.minZ) / (bounds.maxZ - bounds.minZ) * 100).toFixed(1);
        return `<span class="map-node"><span class="${classes}" style="left:${left}%;top:${top}%" aria-label="${esc(node.name)}"></span><b class="map-label" style="left:${left}%;top:${top}%">${esc(node.name)}</b></span>`;
      }).join('');
      const playerX = ((campaign.position?.x - bounds.minX) / (bounds.maxX - bounds.minX) * 100).toFixed(1), playerZ = ((campaign.position?.z - bounds.minZ) / (bounds.maxZ - bounds.minZ) * 100).toFixed(1);
      panel.innerHTML = `<div class="map-card"><p class="eyebrow">SKY RAIL MAP</p><h3>${esc(currentRegion.name || '상공 철도')}</h3><p>${esc(currentRegion.description || '부서진 철로 위에 다음 목적지가 떠 있습니다.')}</p><div class="map-board">${dots}<span class="map-player" style="left:${playerX}%;top:${playerZ}%" aria-label="현재 위치"></span></div><div class="map-legend"><span><i class="legend-objective"></i>다음 목표</span><span><i class="legend-cleared"></i>완료</span><span><i class="legend-player"></i>현재 위치</span></div><small>${campaign.cleared?.length || 0}개의 신호 · ${campaign.collected?.length || 0}개의 상자</small></div>`;
    }
    this.show('journal');
  }

  ending(campaign, stats = {}) {
    $('#ending-copy', this.root).textContent = '세 목소리가 완벽함을 거부하자, 침묵한 세계가 다시 노래하기 시작했습니다.';
    const narrative = $('#ending-narrative', this.root);
    if (narrative) narrative.textContent = '관측소가 깨어났습니다. 남겨 둔 목소리가 집으로 가는 길이 되었습니다.';
    $('#ending-stats', this.root).textContent = `여행 ${this.time(campaign.playSeconds || 0)} · 레벨 ${campaign.level || 1} · 샤드 ${campaign.shards || 0} · 교전 ${stats.battles || 0}`;
    this.show('ending');
  }

  toast(message) { $('#toast', this.root).textContent = message || ''; }

  time(seconds) {
    const value = Math.max(0, Number(seconds) || 0);
    return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  }
}
