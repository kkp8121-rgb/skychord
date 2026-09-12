export const CHARACTERS = [
  {
    id: 'mira', name: '미라', role: '공격·템포', bio: '첫 신호를 두고 떠나지 못하는 전직 철도 지휘자입니다.', color: '#ef766b', portrait: 'assets/mira.png', voice: 'ember', baseHp: 120,
    skills: [
      { id: 'baton-strike', name: '박자 베기', description: '단일 적에게 강한 불꽃 피해', kind: 'attack', power: 23, note: 'ember' },
      { id: 'rising-beat', name: '고조 박자', description: '모든 적에게 안정적인 피해', kind: 'attackAll', power: 13, note: 'star' },
      { id: 'tempo-guard', name: '템포 수호', description: '이번 적 행동 동안 아군 전체에 방패 18', kind: 'shield', power: 18, note: 'tide' }
    ]
  },
  {
    id: 'sena', name: '세나', role: '브레이크·수호', bio: '부서진 노선 속 패턴을 듣는 관측소 음악가입니다.', color: '#67c9c4', portrait: 'assets/sena.png', voice: 'tide', baseHp: 108,
    skills: [
      { id: 'string-shot', name: '현의 관통', description: '단일 적에게 파도 피해 · 약점 피해 증가', kind: 'attack', power: 19, note: 'tide' },
      { id: 'ward-string', name: '결계현', description: '이번 적 행동 동안 아군 전체에 방패 28', kind: 'shield', power: 28, note: 'ember' },
      { id: 'mute-arrow', name: '무음 화살', description: '충전·회복·침묵을 취소, 그 외 예고 위력 절반', kind: 'mute', power: 1, note: 'star' }
    ]
  },
  {
    id: 'noa', name: '노아', role: '회복·공명', bio: '불완전한 조각을 노래로 엮는 기록관입니다.', color: '#a98bdd', portrait: 'assets/noa.png', voice: 'star', baseHp: 100,
    skills: [
      { id: 'key-burst', name: '건반 파동', description: '단일 적에게 별빛 피해', kind: 'attack', power: 16, note: 'star' },
      { id: 'restoring-chord', name: '회복 화음', description: '체력 비율이 가장 낮은 생존 동료를 회복', kind: 'heal', power: 30, note: 'tide' },
      { id: 'resonant-pulse', name: '공명 맥동', description: '생존 동료 모두의 체력을 12 회복', kind: 'healAll', power: 12, note: 'ember' }
    ]
  }
];

const path = (x1, z1, x2, z2, width = 3.5) => ({ x1, z1, x2, z2, width });
const battleNode = (id, name, x, z, encounterId) => ({ id, type: 'battle', name, x, z, encounterId });
const bossNode = (id, name, x, z, encounterId) => ({ id, type: 'boss', name, x, z, encounterId });

export const CAST = [
  { id: 'mira', bio: '첫 신호를 두고 떠나지 못하는 전직 철도 지휘자입니다.' },
  { id: 'sena', bio: '부서진 노선 속 패턴을 듣는 관측소 음악가입니다.' },
  { id: 'noa', bio: '불완전한 조각을 노래로 엮는 기록관입니다.' }
];

export const NARRATIVE = {
  opening: [
    { speaker: '미라', text: '마지막 릴레이가 침묵했어. 네 음을 되찾으면 철도가 다시 움직일 거야.' },
    { speaker: '세나', text: '먼저 들어요. 힘으로 열 수 없는 길도 다른 음이면 열 수 있어요.' },
    { speaker: '노아', text: '제가 기록할게요. 실패한 화음도 다음 음을 가르쳐 줄 테니까요.' }
  ],
  finale: [
    { speaker: '미라', text: '네 신호를 확인했어. 드디어 밤에도 방향이 생겼네.' },
    { speaker: '세나', text: '서로의 소리를 들었기에 길이 열렸어요.' },
    { speaker: '노아', text: '이 기록의 제목은 첫 번째 완성 화음으로 할게요.' },
    { speaker: '기록', text: '조금 빠른 건반과 조금 늦은 발걸음 사이에서, 일행은 기다리던 사람들을 향해 출발합니다.' }
  ]
};

export const REGIONS = [
  {
    id: 'sunset-station', name: '노을역', subtitle: '멈춘 출발선', description: '구름 바다 위에 매달린 오래된 승강장입니다.',
    palette: { sky: '#ef9a7a', ground: '#393b55', accent: '#ffcf88' }, spawn: { x: 0, z: 5 }, bounds: { minX: -28, maxX: 28, minZ: -24, maxZ: 24 },
    nodes: [
      { id: 'ss-camp', type: 'camp', name: '작은 야영지', x: -2, z: 5 },
      battleNode('ss-battle-1', '표류 까마귀', 5, 4, 'ss-encounter-1'),
      { id: 'ss-chest-1', type: 'chest', name: '승강장 보관함', x: 10, z: 1, reward: { shards: 24 } },
      battleNode('ss-battle-2', '레일 늑대', 14, -3, 'ss-encounter-2'),
      { id: 'ss-npc', type: 'npc', name: '신호수 라라', x: 2, z: -8, dialogue: [{ speaker: '라라', text: '아이들이 돌아오면 여기를 만남의 장소로 삼기로 했어요. 시계가 멈췄다고 약속까지 멈춘 건 아니잖아요.' }, { speaker: '미라', text: '시간표가 기다리는 사람을 결정하게 두지 말자.' }, { speaker: '라라', text: '이 표를 가져가요. 다음 신호가 끊긴 곳이 표시돼 있어요.' }] },
      battleNode('ss-battle-3', '고장난 표식기', 18, 8, 'ss-encounter-3'),
      bossNode('ss-boss', '첫 번째 지휘자', 23, 0, 'ss-boss'),
      { id: 'ss-gate', type: 'gate', name: '정원행 신호문', x: 27, z: 0, requires: ['ss-boss'], destination: 1 }
    ],
    paths: [path(0, 5, 5, 4), path(5, 4, 10, 1), path(10, 1, 14, -3), path(14, -3, 18, 8), path(18, 8, 23, 0), path(2, -8, 18, 8), path(23, 0, 27, 0)]
  },
  {
    id: 'tidal-gardens', name: '조수정원', subtitle: '물이 기억하는 박자', description: '수로와 유리 온실 사이로 철길이 굽이칩니다.',
    palette: { sky: '#70b7bd', ground: '#274755', accent: '#b4f1d5' }, spawn: { x: -26, z: 0 }, bounds: { minX: -28, maxX: 28, minZ: -24, maxZ: 24 },
    nodes: [
      { id: 'tg-camp', type: 'camp', name: '물가 캠프', x: -26, z: 0 },
      battleNode('tg-battle-1', '수초 사냥꾼', -18, -4, 'tg-encounter-1'),
      { id: 'tg-npc', type: 'npc', name: '정원사 모아', x: -14, z: 9, dialogue: [{ speaker: '모아', text: '수호자들은 모든 파도를 같은 높이로 맞추려 해요. 하지만 물은 각자 다른 길로 흘러야 정원에 닿죠.' }, { speaker: '세나', text: '한 음을 고집하면 물길도 막혀요. 서로 다른 박자를 들어야 해요.' }, { speaker: '모아', text: '정원의 씨앗을 챙겨요. 오래된 문을 여는 데 필요할 거예요.' }] },
      { id: 'tg-chest-1', type: 'chest', name: '온실 상자', x: -7, z: 13, reward: { shards: 30 } },
      battleNode('tg-battle-2', '청록 감시자', -5, 3, 'tg-encounter-2'),
      battleNode('tg-battle-3', '파도 전령', 7, -7, 'tg-encounter-3'),
      bossNode('tg-boss', '두 번째 지휘자', 17, 4, 'tg-boss'),
      { id: 'tg-gate', type: 'gate', name: '공장행 수문', x: 26, z: 4, requires: ['tg-boss'], destination: 2 }
    ],
    paths: [path(-26, 0, -18, -4), path(-18, -4, -5, 3), path(-14, 9, -7, 13), path(-5, 3, 7, -7), path(7, -7, 17, 4), path(17, 4, 26, 4), path(-18, -4, -14, 9)]
  },
  {
    id: 'brass-foundry', name: '황동공장', subtitle: '과열된 심장', description: '톱니와 증기 사이에서 오래된 엔진이 잠들지 못합니다.',
    palette: { sky: '#9b8067', ground: '#423534', accent: '#e4b06d' }, spawn: { x: -25, z: -5 }, bounds: { minX: -28, maxX: 28, minZ: -24, maxZ: 24 },
    nodes: [
      { id: 'bf-camp', type: 'camp', name: '보일러 캠프', x: -25, z: -5 },
      battleNode('bf-battle-1', '황동 사냥개', -17, -8, 'bf-encounter-1'),
      { id: 'bf-chest-1', type: 'chest', name: '부품 상자', x: -10, z: -13, reward: { shards: 34 } },
      battleNode('bf-battle-2', '증기 센티널', -6, -4, 'bf-encounter-2'),
      { id: 'bf-npc', type: 'npc', name: '기술자 루크', x: 0, z: 10, dialogue: [{ speaker: '루크', text: '나는 박자를 톱니처럼 맞추면 고장이 사라질 줄 알았어요. 그런데 엔진은 빈틈이 있어야 숨을 쉽니다.' }, { speaker: '노아', text: '빠진 부품도 약점이 아니라 선택일 수 있어요.' }, { speaker: '루크', text: '이 회로도를 가져가요. 마지막 문은 힘이 아니라 순서로 열립니다.' }] },
      battleNode('bf-battle-3', '용광로 합창단', 8, 3, 'bf-encounter-3'),
      bossNode('bf-boss', '세 번째 지휘자', 18, -4, 'bf-boss'),
      { id: 'bf-gate', type: 'gate', name: '전망대 승강기', x: 27, z: -4, requires: ['bf-boss'], destination: 3 }
    ],
    paths: [path(-25, -5, -17, -8), path(-17, -8, -6, -4), path(-10, -13, 0, 10), path(-6, -4, 8, 3), path(8, 3, 18, -4), path(18, -4, 27, -4), path(-6, -4, 0, 10)]
  },
  {
    id: 'starlit-observatory', name: '별빛 관측소', subtitle: '마지막 선로', description: '별을 향한 마지막 역에서 네 목소리가 하나의 길을 엽니다.',
    palette: { sky: '#202c55', ground: '#303247', accent: '#c9b5ff' }, spawn: { x: -26, z: 2 }, bounds: { minX: -28, maxX: 28, minZ: -24, maxZ: 24 },
    nodes: [
      { id: 'so-camp', type: 'camp', name: '별빛 캠프', x: -26, z: 2 },
      battleNode('so-battle-1', '별가루 새', -18, 8, 'so-encounter-1'),
      { id: 'so-chest-1', type: 'chest', name: '관측기 보관함', x: -11, z: 13, reward: { shards: 40 } },
      battleNode('so-battle-2', '공허 늑대', -7, 4, 'so-encounter-2'),
      { id: 'so-npc', type: 'npc', name: '천문학자 이안', x: 1, z: -10, dialogue: [{ speaker: '이안', text: '관측소는 완벽한 화음만 기록하려다 모든 목소리를 지워 버렸어요.' }, { speaker: '미라', text: '불완전해서 멈춘 게 아니야. 멈추기로 했기 때문에 멈춘 거지.' }, { speaker: '이안', text: '그 기록을 되돌려 들려주세요. 그러면 관측소가 답할 겁니다.' }] },
      battleNode('so-battle-3', '무음 탑', 8, -2, 'so-encounter-3'),
      bossNode('so-boss', '마지막 지휘자', 18, 5, 'so-boss'),
      { id: 'so-finale', type: 'finale', name: '새벽 관측실', x: 26, z: 5, requires: ['so-boss'] }
    ],
    paths: [path(-26, 2, -18, 8), path(-18, 8, -7, 4), path(-11, 13, 1, -10), path(-7, 4, 8, -2), path(8, -2, 18, 5), path(18, 5, 26, 5), path(-7, 4, 1, -10)]
  }
];

const enemy = (id, name, kind, hp, attack, weakness, pattern) => ({ id, name, kind, hp, attack, weakness, pattern });
const attack = (name, power, target = 'single') => ({ name, type: target === 'all' ? 'all' : 'attack', power, target });
const patterns = {
  bird: [attack('날개 베기', 8), attack('쪼기', 10)], wolf: [attack('물어뜯기', 10), { name: '포효', type: 'charge', power: 18 }],
  sentinel: [{ name: '조준', type: 'charge', power: 20 }, attack('광선', 14)], conductor: [{ name: '불협화음', type: 'charge', power: 22 }, { name: '지휘봉', type: 'all', power: 9 }], tower: [{ name: '무음 파동', type: 'mute', power: 1 }, { name: '붕괴음', type: 'all', power: 15 }]
};
const encounter = (id, name, region, boss, enemies, xp, shards, intro) => ({ id, name, region, boss, enemies, reward: { xp, shards }, intro, outro: boss ? '지휘자의 음이 잦아들었습니다.' : '선로가 다시 이어집니다.' });

export const ENCOUNTERS = {};
const regionKinds = [
  ['ss', [['bird'], ['wolf', 'bird'], ['sentinel', 'bird']]],
  ['tg', [['wolf'], ['bird', 'sentinel'], ['sentinel', 'wolf']]],
  ['bf', [['sentinel'], ['wolf', 'tower'], ['sentinel', 'tower']]],
  ['so', [['bird', 'tower'], ['tower', 'conductor'], ['bird', 'conductor', 'tower']]]
];
const encounterNames = {
  ss: ['첫 빛의 승강장', '신호 마당의 늑대들', '부서진 전환기'],
  tg: ['수문 건너기', '물속의 등불', '귀 기울이는 정원'],
  bf: ['차가운 용광로 순찰', '두 톱니, 한 박자', '침묵의 조립장'],
  so: ['궤도를 도는 까마귀', '별 사이의 무음', '마지막 보정']
};
const enemyNames = { bird: '신호 까마귀', wolf: '정전기 사냥개', sentinel: '황동 감시자', tower: '무음 탑', conductor: '릴레이 지휘자' };
const regionIndexFor = prefix => REGIONS.findIndex(r => r.id.startsWith(prefix === 'ss' ? 'sunset' : prefix === 'tg' ? 'tidal' : prefix === 'bf' ? 'brass' : 'starlit'));
for (const [prefix, kinds] of regionKinds) {
  for (let i = 1; i <= 3; i++) {
    const region = regionIndexFor(prefix);
    const enemies = kinds[i - 1].map((kind, enemyIndex) => enemy(`${prefix}-enemy-${i}-${enemyIndex}`, enemyNames[kind], kind, region === 0 && i === 1 ? 130 : 94 + region * 26 + i * 10 + enemyIndex * 12, 12 + region * 5, kind === 'bird' ? 'tide' : kind === 'wolf' ? 'ember' : 'star', patterns[kind].map(intent => ({ ...intent, power: intent.type === 'mute' ? 1 : intent.power + region * 6 + i * 2 }))));
    ENCOUNTERS[`${prefix}-encounter-${i}`] = encounter(`${prefix}-encounter-${i}`, encounterNames[prefix][i - 1], region, false, enemies, 42 + region * 12 + i * 8, 12 + region * 4 + i * 3, '앞에서 릴레이가 울립니다. 약점을 찌르는 음을 고르세요.');
  }
}
const bosses = [
  ['ss-boss', '첫 릴레이 수호자', 0, 'conductor', '길도, 지연도, 망설임도 없다. 첫 릴레이는 다시 움직이지 않는다.', '미라: 승객 없는 시간표는 미래가 아니야.'],
  ['tg-boss', '조수 릴레이 수호자', 1, 'tower', '큰 음 하나가 정원을 삼킨다. 물은 침묵에만 복종한다.', '세나: 거센 물살도 함께 탈 수 있는 흐름이야.'],
  ['bf-boss', '용광로 릴레이 수호자', 2, 'sentinel', '모든 결함은 제품이 되고, 모든 목소리는 부품이 된다.', '노아: 빠진 부품은 약점이 아니었어요. 선택이었죠.'],
  ['so-boss', '별빛 릴레이 수호자', 3, 'conductor', '모든 메아리는 소음이다. 완벽한 신호만 이곳을 떠날 수 있다.', '미라: 완벽한 노래는 필요 없어. 다음의 정직한 음이면 돼.']
];
const bossPatterns = [
  [{ name: '출발 거부 · 충전', type: 'charge', power: 48, target: 'all' }, attack('시간표의 족쇄', 26, 'all'), attack('지휘봉 낙하', 36)],
  [attack('만조', 32, 'all'), { name: '큰 파도 · 충전', type: 'charge', power: 62, target: 'all' }, { name: '역류', type: 'heal', power: 46 }],
  [attack('과열', 36, 'all'), { name: '용광로 개방 · 충전', type: 'charge', power: 68, target: 'all' }, attack('압착', 54)],
  [{ name: '완전한 침묵', type: 'mute', power: 1 }, { name: '신호 삭제 · 충전', type: 'charge', power: 76, target: 'all' }, attack('절대 정적', 42, 'all'), attack('궤도 붕괴', 48, 'all')]
];
for (const [id, name, region, kind, intro, outro] of bosses) {
  ENCOUNTERS[id] = encounter(id, name, region, true, [
    enemy(`${id}-main`, name, kind, [570, 730, 870, 1080][region], 24 + region * 6, region % 2 ? 'tide' : 'ember', bossPatterns[region]),
    enemy(`${id}-guard`, '신호 수호체', region === 1 ? 'bird' : 'wolf', 140 + region * 24, 18 + region * 5, 'star', [attack('호위 신호', 18 + region * 5), { name: '공명 증폭 · 충전', type: 'charge', power: 30 + region * 8 }]),
    ...(region >= 2 ? [enemy(`${id}-chorus`, '조율 장치', 'tower', 130 + region * 20, 20, 'tide', [{ name: '수호음', type: 'heal', power: 24 }, attack('잡음', 14 + region * 3, 'all')])] : [])
  ], 90 + region * 20, 42 + region * 8, intro);
  ENCOUNTERS[id].outro = outro;
}

export const QUESTS = [
  { id: 'quest-lost-ticket', name: '잃어버린 승차권', description: '노을역의 보관함을 열어 승차권을 찾아 주세요.', region: 0, requires: ['ss-chest-1'], reward: { shards: 18, xp: 24 } },
  { id: 'quest-garden-song', name: '정원의 노래', description: '정원사 모아에게 말을 걸어 물의 노래를 들어 주세요.', region: 1, requires: ['tg-npc'], reward: { shards: 20, xp: 28 } },
  { id: 'quest-brass-part', name: '황동 부품', description: '공장 부품 상자를 회수해 루크에게 보여 주세요.', region: 2, requires: ['bf-chest-1', 'bf-npc'], reward: { shards: 26, xp: 32 } },
  { id: 'quest-stargazer', name: '별 관측 기록', description: '관측소의 천문학자에게 말을 걸어 기록을 완성하세요.', region: 3, requires: ['so-npc'], reward: { shards: 30, xp: 38 } },
  { id: 'quest-quiet-camp', name: '조용한 캠프', description: '네 지역의 캠프를 모두 찾아 쉬어 가세요.', region: 0, requires: ['ss-camp', 'tg-camp', 'bf-camp', 'so-camp'], reward: { shards: 44, xp: 46 } },
  { id: 'quest-four-relays', name: '네 개의 릴레이', description: '네 지휘자를 모두 쓰러뜨리세요.', region: 3, requires: ['ss-boss', 'tg-boss', 'bf-boss', 'so-boss'], reward: { shards: 60, xp: 80 } }
];
