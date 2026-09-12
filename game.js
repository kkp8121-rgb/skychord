(()=>{var kt=[{id:"mira",name:"\uBBF8\uB77C",role:"\uACF5\uACA9\xB7\uD15C\uD3EC",bio:"\uCCAB \uC2E0\uD638\uB97C \uB450\uACE0 \uB5A0\uB098\uC9C0 \uBABB\uD558\uB294 \uC804\uC9C1 \uCCA0\uB3C4 \uC9C0\uD718\uC790\uC785\uB2C8\uB2E4.",color:"#ef766b",portrait:"assets/mira.webp",voice:"ember",baseHp:120,skills:[{id:"baton-strike",name:"\uBC15\uC790 \uBCA0\uAE30",description:"\uB2E8\uC77C \uC801\uC5D0\uAC8C \uAC15\uD55C \uBD88\uAF43 \uD53C\uD574",kind:"attack",power:23,note:"ember"},{id:"rising-beat",name:"\uACE0\uC870 \uBC15\uC790",description:"\uBAA8\uB4E0 \uC801\uC5D0\uAC8C \uC548\uC815\uC801\uC778 \uD53C\uD574",kind:"attackAll",power:13,note:"star"},{id:"tempo-guard",name:"\uD15C\uD3EC \uC218\uD638",description:"\uC774\uBC88 \uC801 \uD589\uB3D9 \uB3D9\uC548 \uC544\uAD70 \uC804\uCCB4\uC5D0 \uBC29\uD328 18",kind:"shield",power:18,note:"tide"}]},{id:"sena",name:"\uC138\uB098",role:"\uBE0C\uB808\uC774\uD06C\xB7\uC218\uD638",bio:"\uBD80\uC11C\uC9C4 \uB178\uC120 \uC18D \uD328\uD134\uC744 \uB4E3\uB294 \uAD00\uCE21\uC18C \uC74C\uC545\uAC00\uC785\uB2C8\uB2E4.",color:"#67c9c4",portrait:"assets/sena.webp",voice:"tide",baseHp:108,skills:[{id:"string-shot",name:"\uD604\uC758 \uAD00\uD1B5",description:"\uB2E8\uC77C \uC801\uC5D0\uAC8C \uD30C\uB3C4 \uD53C\uD574 \xB7 \uC57D\uC810 \uD53C\uD574 \uC99D\uAC00",kind:"attack",power:19,note:"tide"},{id:"ward-string",name:"\uACB0\uACC4\uD604",description:"\uC774\uBC88 \uC801 \uD589\uB3D9 \uB3D9\uC548 \uC544\uAD70 \uC804\uCCB4\uC5D0 \uBC29\uD328 28",kind:"shield",power:28,note:"ember"},{id:"mute-arrow",name:"\uBB34\uC74C \uD654\uC0B4",description:"\uCDA9\uC804\xB7\uD68C\uBCF5\xB7\uCE68\uBB35\uC744 \uCDE8\uC18C, \uADF8 \uC678 \uC608\uACE0 \uC704\uB825 \uC808\uBC18",kind:"mute",power:1,note:"star"}]},{id:"noa",name:"\uB178\uC544",role:"\uD68C\uBCF5\xB7\uACF5\uBA85",bio:"\uBD88\uC644\uC804\uD55C \uC870\uAC01\uC744 \uB178\uB798\uB85C \uC5EE\uB294 \uAE30\uB85D\uAD00\uC785\uB2C8\uB2E4.",color:"#a98bdd",portrait:"assets/noa.webp",voice:"star",baseHp:100,skills:[{id:"key-burst",name:"\uAC74\uBC18 \uD30C\uB3D9",description:"\uB2E8\uC77C \uC801\uC5D0\uAC8C \uBCC4\uBE5B \uD53C\uD574",kind:"attack",power:16,note:"star"},{id:"restoring-chord",name:"\uD68C\uBCF5 \uD654\uC74C",description:"\uCCB4\uB825 \uBE44\uC728\uC774 \uAC00\uC7A5 \uB0AE\uC740 \uC0DD\uC874 \uB3D9\uB8CC\uB97C \uD68C\uBCF5",kind:"heal",power:30,note:"tide"},{id:"resonant-pulse",name:"\uACF5\uBA85 \uB9E5\uB3D9",description:"\uC0DD\uC874 \uB3D9\uB8CC \uBAA8\uB450\uC758 \uCCB4\uB825\uC744 12 \uD68C\uBCF5",kind:"healAll",power:12,note:"ember"}]}],gt=(i,e,t,n,s=3.5)=>({x1:i,z1:e,x2:t,z2:n,width:s}),fn=(i,e,t,n,s)=>({id:i,type:"battle",name:e,x:t,z:n,encounterId:s}),Or=(i,e,t,n,s)=>({id:i,type:"boss",name:e,x:t,z:n,encounterId:s});var zr={opening:[{speaker:"\uBBF8\uB77C",text:"\uB9C8\uC9C0\uB9C9 \uB9B4\uB808\uC774\uAC00 \uCE68\uBB35\uD588\uC5B4. \uB124 \uC74C\uC744 \uB418\uCC3E\uC73C\uBA74 \uCCA0\uB3C4\uAC00 \uB2E4\uC2DC \uC6C0\uC9C1\uC77C \uAC70\uC57C."},{speaker:"\uC138\uB098",text:"\uBA3C\uC800 \uB4E4\uC5B4\uC694. \uD798\uC73C\uB85C \uC5F4 \uC218 \uC5C6\uB294 \uAE38\uB3C4 \uB2E4\uB978 \uC74C\uC774\uBA74 \uC5F4 \uC218 \uC788\uC5B4\uC694."},{speaker:"\uB178\uC544",text:"\uC81C\uAC00 \uAE30\uB85D\uD560\uAC8C\uC694. \uC2E4\uD328\uD55C \uD654\uC74C\uB3C4 \uB2E4\uC74C \uC74C\uC744 \uAC00\uB974\uCCD0 \uC904 \uD14C\uB2C8\uAE4C\uC694."}],finale:[{speaker:"\uBBF8\uB77C",text:"\uB124 \uC2E0\uD638\uB97C \uD655\uC778\uD588\uC5B4. \uB4DC\uB514\uC5B4 \uBC24\uC5D0\uB3C4 \uBC29\uD5A5\uC774 \uC0DD\uACBC\uB124."},{speaker:"\uC138\uB098",text:"\uC11C\uB85C\uC758 \uC18C\uB9AC\uB97C \uB4E4\uC5C8\uAE30\uC5D0 \uAE38\uC774 \uC5F4\uB838\uC5B4\uC694."},{speaker:"\uB178\uC544",text:"\uC774 \uAE30\uB85D\uC758 \uC81C\uBAA9\uC740 \uCCAB \uBC88\uC9F8 \uC644\uC131 \uD654\uC74C\uC73C\uB85C \uD560\uAC8C\uC694."},{speaker:"\uAE30\uB85D",text:"\uC870\uAE08 \uBE60\uB978 \uAC74\uBC18\uACFC \uC870\uAE08 \uB2A6\uC740 \uBC1C\uAC78\uC74C \uC0AC\uC774\uC5D0\uC11C, \uC77C\uD589\uC740 \uAE30\uB2E4\uB9AC\uB358 \uC0AC\uB78C\uB4E4\uC744 \uD5A5\uD574 \uCD9C\uBC1C\uD569\uB2C8\uB2E4."}]},an=[{id:"sunset-station",name:"\uB178\uC744\uC5ED",subtitle:"\uBA48\uCD98 \uCD9C\uBC1C\uC120",description:"\uAD6C\uB984 \uBC14\uB2E4 \uC704\uC5D0 \uB9E4\uB2EC\uB9B0 \uC624\uB798\uB41C \uC2B9\uAC15\uC7A5\uC785\uB2C8\uB2E4.",palette:{sky:"#ef9a7a",ground:"#393b55",accent:"#ffcf88"},spawn:{x:0,z:5},bounds:{minX:-28,maxX:28,minZ:-24,maxZ:24},nodes:[{id:"ss-camp",type:"camp",name:"\uC791\uC740 \uC57C\uC601\uC9C0",x:-2,z:5},fn("ss-battle-1","\uD45C\uB958 \uAE4C\uB9C8\uADC0",5,4,"ss-encounter-1"),{id:"ss-chest-1",type:"chest",name:"\uC2B9\uAC15\uC7A5 \uBCF4\uAD00\uD568",x:10,z:1,reward:{shards:24}},fn("ss-battle-2","\uB808\uC77C \uB291\uB300",14,-3,"ss-encounter-2"),{id:"ss-npc",type:"npc",name:"\uC2E0\uD638\uC218 \uB77C\uB77C",x:2,z:-8,dialogue:[{speaker:"\uB77C\uB77C",text:"\uC544\uC774\uB4E4\uC774 \uB3CC\uC544\uC624\uBA74 \uC5EC\uAE30\uB97C \uB9CC\uB0A8\uC758 \uC7A5\uC18C\uB85C \uC0BC\uAE30\uB85C \uD588\uC5B4\uC694. \uC2DC\uACC4\uAC00 \uBA48\uCDC4\uB2E4\uACE0 \uC57D\uC18D\uAE4C\uC9C0 \uBA48\uCD98 \uAC74 \uC544\uB2C8\uC796\uC544\uC694."},{speaker:"\uBBF8\uB77C",text:"\uC2DC\uAC04\uD45C\uAC00 \uAE30\uB2E4\uB9AC\uB294 \uC0AC\uB78C\uC744 \uACB0\uC815\uD558\uAC8C \uB450\uC9C0 \uB9D0\uC790."},{speaker:"\uB77C\uB77C",text:"\uC774 \uD45C\uB97C \uAC00\uC838\uAC00\uC694. \uB2E4\uC74C \uC2E0\uD638\uAC00 \uB04A\uAE34 \uACF3\uC774 \uD45C\uC2DC\uB3FC \uC788\uC5B4\uC694."}]},fn("ss-battle-3","\uACE0\uC7A5\uB09C \uD45C\uC2DD\uAE30",18,8,"ss-encounter-3"),Or("ss-boss","\uCCAB \uBC88\uC9F8 \uC9C0\uD718\uC790",23,0,"ss-boss"),{id:"ss-gate",type:"gate",name:"\uC815\uC6D0\uD589 \uC2E0\uD638\uBB38",x:27,z:0,requires:["ss-boss"],destination:1}],paths:[gt(0,5,5,4),gt(5,4,10,1),gt(10,1,14,-3),gt(14,-3,18,8),gt(18,8,23,0),gt(2,-8,18,8),gt(23,0,27,0)]},{id:"tidal-gardens",name:"\uC870\uC218\uC815\uC6D0",subtitle:"\uBB3C\uC774 \uAE30\uC5B5\uD558\uB294 \uBC15\uC790",description:"\uC218\uB85C\uC640 \uC720\uB9AC \uC628\uC2E4 \uC0AC\uC774\uB85C \uCCA0\uAE38\uC774 \uAD7D\uC774\uCE69\uB2C8\uB2E4.",palette:{sky:"#70b7bd",ground:"#274755",accent:"#b4f1d5"},spawn:{x:-26,z:0},bounds:{minX:-28,maxX:28,minZ:-24,maxZ:24},nodes:[{id:"tg-camp",type:"camp",name:"\uBB3C\uAC00 \uCEA0\uD504",x:-26,z:0},fn("tg-battle-1","\uC218\uCD08 \uC0AC\uB0E5\uAFBC",-18,-4,"tg-encounter-1"),{id:"tg-npc",type:"npc",name:"\uC815\uC6D0\uC0AC \uBAA8\uC544",x:-14,z:9,dialogue:[{speaker:"\uBAA8\uC544",text:"\uC218\uD638\uC790\uB4E4\uC740 \uBAA8\uB4E0 \uD30C\uB3C4\uB97C \uAC19\uC740 \uB192\uC774\uB85C \uB9DE\uCD94\uB824 \uD574\uC694. \uD558\uC9C0\uB9CC \uBB3C\uC740 \uAC01\uC790 \uB2E4\uB978 \uAE38\uB85C \uD758\uB7EC\uC57C \uC815\uC6D0\uC5D0 \uB2FF\uC8E0."},{speaker:"\uC138\uB098",text:"\uD55C \uC74C\uC744 \uACE0\uC9D1\uD558\uBA74 \uBB3C\uAE38\uB3C4 \uB9C9\uD600\uC694. \uC11C\uB85C \uB2E4\uB978 \uBC15\uC790\uB97C \uB4E4\uC5B4\uC57C \uD574\uC694."},{speaker:"\uBAA8\uC544",text:"\uC815\uC6D0\uC758 \uC528\uC557\uC744 \uCC59\uACA8\uC694. \uC624\uB798\uB41C \uBB38\uC744 \uC5EC\uB294 \uB370 \uD544\uC694\uD560 \uAC70\uC608\uC694."}]},{id:"tg-chest-1",type:"chest",name:"\uC628\uC2E4 \uC0C1\uC790",x:-7,z:13,reward:{shards:30}},fn("tg-battle-2","\uCCAD\uB85D \uAC10\uC2DC\uC790",-5,3,"tg-encounter-2"),fn("tg-battle-3","\uD30C\uB3C4 \uC804\uB839",7,-7,"tg-encounter-3"),Or("tg-boss","\uB450 \uBC88\uC9F8 \uC9C0\uD718\uC790",17,4,"tg-boss"),{id:"tg-gate",type:"gate",name:"\uACF5\uC7A5\uD589 \uC218\uBB38",x:26,z:4,requires:["tg-boss"],destination:2}],paths:[gt(-26,0,-18,-4),gt(-18,-4,-5,3),gt(-14,9,-7,13),gt(-5,3,7,-7),gt(7,-7,17,4),gt(17,4,26,4),gt(-18,-4,-14,9)]},{id:"brass-foundry",name:"\uD669\uB3D9\uACF5\uC7A5",subtitle:"\uACFC\uC5F4\uB41C \uC2EC\uC7A5",description:"\uD1B1\uB2C8\uC640 \uC99D\uAE30 \uC0AC\uC774\uC5D0\uC11C \uC624\uB798\uB41C \uC5D4\uC9C4\uC774 \uC7A0\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4.",palette:{sky:"#9b8067",ground:"#423534",accent:"#e4b06d"},spawn:{x:-25,z:-5},bounds:{minX:-28,maxX:28,minZ:-24,maxZ:24},nodes:[{id:"bf-camp",type:"camp",name:"\uBCF4\uC77C\uB7EC \uCEA0\uD504",x:-25,z:-5},fn("bf-battle-1","\uD669\uB3D9 \uC0AC\uB0E5\uAC1C",-17,-8,"bf-encounter-1"),{id:"bf-chest-1",type:"chest",name:"\uBD80\uD488 \uC0C1\uC790",x:-10,z:-13,reward:{shards:34}},fn("bf-battle-2","\uC99D\uAE30 \uC13C\uD2F0\uB110",-6,-4,"bf-encounter-2"),{id:"bf-npc",type:"npc",name:"\uAE30\uC220\uC790 \uB8E8\uD06C",x:0,z:10,dialogue:[{speaker:"\uB8E8\uD06C",text:"\uB098\uB294 \uBC15\uC790\uB97C \uD1B1\uB2C8\uCC98\uB7FC \uB9DE\uCD94\uBA74 \uACE0\uC7A5\uC774 \uC0AC\uB77C\uC9C8 \uC904 \uC54C\uC558\uC5B4\uC694. \uADF8\uB7F0\uB370 \uC5D4\uC9C4\uC740 \uBE48\uD2C8\uC774 \uC788\uC5B4\uC57C \uC228\uC744 \uC27D\uB2C8\uB2E4."},{speaker:"\uB178\uC544",text:"\uBE60\uC9C4 \uBD80\uD488\uB3C4 \uC57D\uC810\uC774 \uC544\uB2C8\uB77C \uC120\uD0DD\uC77C \uC218 \uC788\uC5B4\uC694."},{speaker:"\uB8E8\uD06C",text:"\uC774 \uD68C\uB85C\uB3C4\uB97C \uAC00\uC838\uAC00\uC694. \uB9C8\uC9C0\uB9C9 \uBB38\uC740 \uD798\uC774 \uC544\uB2C8\uB77C \uC21C\uC11C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4."}]},fn("bf-battle-3","\uC6A9\uAD11\uB85C \uD569\uCC3D\uB2E8",8,3,"bf-encounter-3"),Or("bf-boss","\uC138 \uBC88\uC9F8 \uC9C0\uD718\uC790",18,-4,"bf-boss"),{id:"bf-gate",type:"gate",name:"\uC804\uB9DD\uB300 \uC2B9\uAC15\uAE30",x:27,z:-4,requires:["bf-boss"],destination:3}],paths:[gt(-25,-5,-17,-8),gt(-17,-8,-6,-4),gt(-10,-13,0,10),gt(-6,-4,8,3),gt(8,3,18,-4),gt(18,-4,27,-4),gt(-6,-4,0,10)]},{id:"starlit-observatory",name:"\uBCC4\uBE5B \uAD00\uCE21\uC18C",subtitle:"\uB9C8\uC9C0\uB9C9 \uC120\uB85C",description:"\uBCC4\uC744 \uD5A5\uD55C \uB9C8\uC9C0\uB9C9 \uC5ED\uC5D0\uC11C \uB124 \uBAA9\uC18C\uB9AC\uAC00 \uD558\uB098\uC758 \uAE38\uC744 \uC5FD\uB2C8\uB2E4.",palette:{sky:"#202c55",ground:"#303247",accent:"#c9b5ff"},spawn:{x:-26,z:2},bounds:{minX:-28,maxX:28,minZ:-24,maxZ:24},nodes:[{id:"so-camp",type:"camp",name:"\uBCC4\uBE5B \uCEA0\uD504",x:-26,z:2},fn("so-battle-1","\uBCC4\uAC00\uB8E8 \uC0C8",-18,8,"so-encounter-1"),{id:"so-chest-1",type:"chest",name:"\uAD00\uCE21\uAE30 \uBCF4\uAD00\uD568",x:-11,z:13,reward:{shards:40}},fn("so-battle-2","\uACF5\uD5C8 \uB291\uB300",-7,4,"so-encounter-2"),{id:"so-npc",type:"npc",name:"\uCC9C\uBB38\uD559\uC790 \uC774\uC548",x:1,z:-10,dialogue:[{speaker:"\uC774\uC548",text:"\uAD00\uCE21\uC18C\uB294 \uC644\uBCBD\uD55C \uD654\uC74C\uB9CC \uAE30\uB85D\uD558\uB824\uB2E4 \uBAA8\uB4E0 \uBAA9\uC18C\uB9AC\uB97C \uC9C0\uC6CC \uBC84\uB838\uC5B4\uC694."},{speaker:"\uBBF8\uB77C",text:"\uBD88\uC644\uC804\uD574\uC11C \uBA48\uCD98 \uAC8C \uC544\uB2C8\uC57C. \uBA48\uCD94\uAE30\uB85C \uD588\uAE30 \uB54C\uBB38\uC5D0 \uBA48\uCD98 \uAC70\uC9C0."},{speaker:"\uC774\uC548",text:"\uADF8 \uAE30\uB85D\uC744 \uB418\uB3CC\uB824 \uB4E4\uB824\uC8FC\uC138\uC694. \uADF8\uB7EC\uBA74 \uAD00\uCE21\uC18C\uAC00 \uB2F5\uD560 \uAC81\uB2C8\uB2E4."}]},fn("so-battle-3","\uBB34\uC74C \uD0D1",8,-2,"so-encounter-3"),Or("so-boss","\uB9C8\uC9C0\uB9C9 \uC9C0\uD718\uC790",18,5,"so-boss"),{id:"so-finale",type:"finale",name:"\uC0C8\uBCBD \uAD00\uCE21\uC2E4",x:26,z:5,requires:["so-boss"]}],paths:[gt(-26,2,-18,8),gt(-18,8,-7,4),gt(-11,13,1,-10),gt(-7,4,8,-2),gt(8,-2,18,5),gt(18,5,26,5),gt(-7,4,1,-10)]}],Br=(i,e,t,n,s,r,o)=>({id:i,name:e,kind:t,hp:n,attack:s,weakness:r,pattern:o}),on=(i,e,t="single")=>({name:i,type:t==="all"?"all":"attack",power:e,target:t}),zd={bird:[on("\uB0A0\uAC1C \uBCA0\uAE30",8),on("\uCABC\uAE30",10)],wolf:[on("\uBB3C\uC5B4\uB72F\uAE30",10),{name:"\uD3EC\uD6A8",type:"charge",power:18}],sentinel:[{name:"\uC870\uC900",type:"charge",power:20},on("\uAD11\uC120",14)],conductor:[{name:"\uBD88\uD611\uD654\uC74C",type:"charge",power:22},{name:"\uC9C0\uD718\uBD09",type:"all",power:9}],tower:[{name:"\uBB34\uC74C \uD30C\uB3D9",type:"mute",power:1},{name:"\uBD95\uAD34\uC74C",type:"all",power:15}]},hh=(i,e,t,n,s,r,o,a)=>({id:i,name:e,region:t,boss:n,enemies:s,reward:{xp:r,shards:o},intro:a,outro:n?"\uC9C0\uD718\uC790\uC758 \uC74C\uC774 \uC7A6\uC544\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC120\uB85C\uAC00 \uB2E4\uC2DC \uC774\uC5B4\uC9D1\uB2C8\uB2E4."}),tn={},kd=[["ss",[["bird"],["wolf","bird"],["sentinel","bird"]]],["tg",[["wolf"],["bird","sentinel"],["sentinel","wolf"]]],["bf",[["sentinel"],["wolf","tower"],["sentinel","tower"]]],["so",[["bird","tower"],["tower","conductor"],["bird","conductor","tower"]]]],Vd={ss:["\uCCAB \uBE5B\uC758 \uC2B9\uAC15\uC7A5","\uC2E0\uD638 \uB9C8\uB2F9\uC758 \uB291\uB300\uB4E4","\uBD80\uC11C\uC9C4 \uC804\uD658\uAE30"],tg:["\uC218\uBB38 \uAC74\uB108\uAE30","\uBB3C\uC18D\uC758 \uB4F1\uBD88","\uADC0 \uAE30\uC6B8\uC774\uB294 \uC815\uC6D0"],bf:["\uCC28\uAC00\uC6B4 \uC6A9\uAD11\uB85C \uC21C\uCC30","\uB450 \uD1B1\uB2C8, \uD55C \uBC15\uC790","\uCE68\uBB35\uC758 \uC870\uB9BD\uC7A5"],so:["\uADA4\uB3C4\uB97C \uB3C4\uB294 \uAE4C\uB9C8\uADC0","\uBCC4 \uC0AC\uC774\uC758 \uBB34\uC74C","\uB9C8\uC9C0\uB9C9 \uBCF4\uC815"]},Hd={bird:"\uC2E0\uD638 \uAE4C\uB9C8\uADC0",wolf:"\uC815\uC804\uAE30 \uC0AC\uB0E5\uAC1C",sentinel:"\uD669\uB3D9 \uAC10\uC2DC\uC790",tower:"\uBB34\uC74C \uD0D1",conductor:"\uB9B4\uB808\uC774 \uC9C0\uD718\uC790"},Gd=i=>an.findIndex(e=>e.id.startsWith(i==="ss"?"sunset":i==="tg"?"tidal":i==="bf"?"brass":"starlit"));for(let[i,e]of kd)for(let t=1;t<=3;t++){let n=Gd(i),s=e[t-1].map((r,o)=>Br(`${i}-enemy-${t}-${o}`,Hd[r],r,n===0&&t===1?130:94+n*26+t*10+o*12,12+n*5,r==="bird"?"tide":r==="wolf"?"ember":"star",zd[r].map(a=>({...a,power:a.type==="mute"?1:a.power+n*6+t*2}))));tn[`${i}-encounter-${t}`]=hh(`${i}-encounter-${t}`,Vd[i][t-1],n,!1,s,42+n*12+t*8,12+n*4+t*3,"\uC55E\uC5D0\uC11C \uB9B4\uB808\uC774\uAC00 \uC6B8\uB9BD\uB2C8\uB2E4. \uC57D\uC810\uC744 \uCC0C\uB974\uB294 \uC74C\uC744 \uACE0\uB974\uC138\uC694.")}var Wd=[["ss-boss","\uCCAB \uB9B4\uB808\uC774 \uC218\uD638\uC790",0,"conductor","\uAE38\uB3C4, \uC9C0\uC5F0\uB3C4, \uB9DD\uC124\uC784\uB3C4 \uC5C6\uB2E4. \uCCAB \uB9B4\uB808\uC774\uB294 \uB2E4\uC2DC \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uB294\uB2E4.","\uBBF8\uB77C: \uC2B9\uAC1D \uC5C6\uB294 \uC2DC\uAC04\uD45C\uB294 \uBBF8\uB798\uAC00 \uC544\uB2C8\uC57C."],["tg-boss","\uC870\uC218 \uB9B4\uB808\uC774 \uC218\uD638\uC790",1,"tower","\uD070 \uC74C \uD558\uB098\uAC00 \uC815\uC6D0\uC744 \uC0BC\uD0A8\uB2E4. \uBB3C\uC740 \uCE68\uBB35\uC5D0\uB9CC \uBCF5\uC885\uD55C\uB2E4.","\uC138\uB098: \uAC70\uC13C \uBB3C\uC0B4\uB3C4 \uD568\uAED8 \uD0C8 \uC218 \uC788\uB294 \uD750\uB984\uC774\uC57C."],["bf-boss","\uC6A9\uAD11\uB85C \uB9B4\uB808\uC774 \uC218\uD638\uC790",2,"sentinel","\uBAA8\uB4E0 \uACB0\uD568\uC740 \uC81C\uD488\uC774 \uB418\uACE0, \uBAA8\uB4E0 \uBAA9\uC18C\uB9AC\uB294 \uBD80\uD488\uC774 \uB41C\uB2E4.","\uB178\uC544: \uBE60\uC9C4 \uBD80\uD488\uC740 \uC57D\uC810\uC774 \uC544\uB2C8\uC5C8\uC5B4\uC694. \uC120\uD0DD\uC774\uC5C8\uC8E0."],["so-boss","\uBCC4\uBE5B \uB9B4\uB808\uC774 \uC218\uD638\uC790",3,"conductor","\uBAA8\uB4E0 \uBA54\uC544\uB9AC\uB294 \uC18C\uC74C\uC774\uB2E4. \uC644\uBCBD\uD55C \uC2E0\uD638\uB9CC \uC774\uACF3\uC744 \uB5A0\uB0A0 \uC218 \uC788\uB2E4.","\uBBF8\uB77C: \uC644\uBCBD\uD55C \uB178\uB798\uB294 \uD544\uC694 \uC5C6\uC5B4. \uB2E4\uC74C\uC758 \uC815\uC9C1\uD55C \uC74C\uC774\uBA74 \uB3FC."]],Xd=[[{name:"\uCD9C\uBC1C \uAC70\uBD80 \xB7 \uCDA9\uC804",type:"charge",power:48,target:"all"},on("\uC2DC\uAC04\uD45C\uC758 \uC871\uC1C4",26,"all"),on("\uC9C0\uD718\uBD09 \uB099\uD558",36)],[on("\uB9CC\uC870",32,"all"),{name:"\uD070 \uD30C\uB3C4 \xB7 \uCDA9\uC804",type:"charge",power:62,target:"all"},{name:"\uC5ED\uB958",type:"heal",power:46}],[on("\uACFC\uC5F4",36,"all"),{name:"\uC6A9\uAD11\uB85C \uAC1C\uBC29 \xB7 \uCDA9\uC804",type:"charge",power:68,target:"all"},on("\uC555\uCC29",54)],[{name:"\uC644\uC804\uD55C \uCE68\uBB35",type:"mute",power:1},{name:"\uC2E0\uD638 \uC0AD\uC81C \xB7 \uCDA9\uC804",type:"charge",power:76,target:"all"},on("\uC808\uB300 \uC815\uC801",42,"all"),on("\uADA4\uB3C4 \uBD95\uAD34",48,"all")]];for(let[i,e,t,n,s,r]of Wd)tn[i]=hh(i,e,t,!0,[Br(`${i}-main`,e,n,[570,730,870,1080][t],24+t*6,t%2?"tide":"ember",Xd[t]),Br(`${i}-guard`,"\uC2E0\uD638 \uC218\uD638\uCCB4",t===1?"bird":"wolf",140+t*24,18+t*5,"star",[on("\uD638\uC704 \uC2E0\uD638",18+t*5),{name:"\uACF5\uBA85 \uC99D\uD3ED \xB7 \uCDA9\uC804",type:"charge",power:30+t*8}]),...t>=2?[Br(`${i}-chorus`,"\uC870\uC728 \uC7A5\uCE58","tower",130+t*20,20,"tide",[{name:"\uC218\uD638\uC74C",type:"heal",power:24},on("\uC7A1\uC74C",14+t*3,"all")])]:[]],90+t*20,42+t*8,s),tn[i].outro=r;var ws=[{id:"quest-lost-ticket",name:"\uC783\uC5B4\uBC84\uB9B0 \uC2B9\uCC28\uAD8C",description:"\uB178\uC744\uC5ED\uC758 \uBCF4\uAD00\uD568\uC744 \uC5F4\uC5B4 \uC2B9\uCC28\uAD8C\uC744 \uCC3E\uC544 \uC8FC\uC138\uC694.",region:0,requires:["ss-chest-1"],reward:{shards:18,xp:24}},{id:"quest-garden-song",name:"\uC815\uC6D0\uC758 \uB178\uB798",description:"\uC815\uC6D0\uC0AC \uBAA8\uC544\uC5D0\uAC8C \uB9D0\uC744 \uAC78\uC5B4 \uBB3C\uC758 \uB178\uB798\uB97C \uB4E4\uC5B4 \uC8FC\uC138\uC694.",region:1,requires:["tg-npc"],reward:{shards:20,xp:28}},{id:"quest-brass-part",name:"\uD669\uB3D9 \uBD80\uD488",description:"\uACF5\uC7A5 \uBD80\uD488 \uC0C1\uC790\uB97C \uD68C\uC218\uD574 \uB8E8\uD06C\uC5D0\uAC8C \uBCF4\uC5EC \uC8FC\uC138\uC694.",region:2,requires:["bf-chest-1","bf-npc"],reward:{shards:26,xp:32}},{id:"quest-stargazer",name:"\uBCC4 \uAD00\uCE21 \uAE30\uB85D",description:"\uAD00\uCE21\uC18C\uC758 \uCC9C\uBB38\uD559\uC790\uC5D0\uAC8C \uB9D0\uC744 \uAC78\uC5B4 \uAE30\uB85D\uC744 \uC644\uC131\uD558\uC138\uC694.",region:3,requires:["so-npc"],reward:{shards:30,xp:38}},{id:"quest-quiet-camp",name:"\uC870\uC6A9\uD55C \uCEA0\uD504",description:"\uB124 \uC9C0\uC5ED\uC758 \uCEA0\uD504\uB97C \uBAA8\uB450 \uCC3E\uC544 \uC26C\uC5B4 \uAC00\uC138\uC694.",region:0,requires:["ss-camp","tg-camp","bf-camp","so-camp"],reward:{shards:44,xp:46}},{id:"quest-four-relays",name:"\uB124 \uAC1C\uC758 \uB9B4\uB808\uC774",description:"\uB124 \uC9C0\uD718\uC790\uB97C \uBAA8\uB450 \uC4F0\uB7EC\uB728\uB9AC\uC138\uC694.",region:3,requires:["ss-boss","tg-boss","bf-boss","so-boss"],reward:{shards:60,xp:80}}];var uh=1,dh=an.flatMap((i,e)=>i.nodes.map(t=>({...t,region:e}))),Mi=i=>dh.find(e=>e.id===i),qd=i=>dh.find(e=>(e.type==="battle"||e.type==="boss")&&e.encounterId===i),al=(i,e)=>i.cleared.includes(e)||i.collected.includes(e)||i.talked.includes(e),Ts=(i,e)=>{i.includes(e)||i.push(e)};function ll(i,e){for(i.xp+=Number.isFinite(e)?e:0;i.xp>=i.level*100;)i.xp-=i.level*100,i.level++}function cl(){return{version:uh,region:0,position:{x:0,z:5},level:1,xp:0,shards:0,upgrades:[0,0,0],hp:kt.map(i=>i.baseHp),cleared:[],collected:[],talked:[],questDone:[],playSeconds:0,finished:!1}}function Si(i,e){let t=kt[e];return t?t.baseHp+(i.level-1)*8+(i.upgrades[e]||0)*20:0}function hl(i,e){let t=i.upgrades[e]||0;return t>=3?1/0:24+t*28}function kr(i){let e=0;for(let t of ws)i.questDone.includes(t.id)||!t.requires.every(n=>al(i,n))||(Ts(i.questDone,t.id),i.shards+=t.reward.shards||0,ll(i,t.reward.xp),e++);return e}function fh(i,e){if(!kt[e])return{ok:!1,message:"\uC54C \uC218 \uC5C6\uB294 \uB3D9\uB8CC\uC785\uB2C8\uB2E4."};let t=hl(i,e);if(!Number.isFinite(t))return{ok:!1,message:"\uC774 \uB3D9\uB8CC\uC758 \uAC15\uD654\uAC00 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4."};if(i.shards<t)return{ok:!1,message:`\uC870\uAC01\uC774 ${t-i.shards}\uAC1C \uBD80\uC871\uD569\uB2C8\uB2E4.`};let n=Si(i,e);i.shards-=t,i.upgrades[e]++;let s=Si(i,e);return i.hp[e]=Math.min(s,Math.ceil(i.hp[e]/n*s)),{ok:!0,message:`${kt[e].name}\uC758 \uAC15\uD654 \uB2E8\uACC4\uAC00 ${i.upgrades[e]}\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.`}}function ph(i,e){let t=Mi(e);if(!t)return{type:"toast",message:"\uC54C \uC218 \uC5C6\uB294 \uC7A5\uC18C\uC785\uB2C8\uB2E4."};if(t.region!==i.region)return{type:"toast",message:"\uB2E4\uB978 \uC9C0\uC5ED\uC758 \uC7A5\uC18C\uC785\uB2C8\uB2E4."};if(t.type==="battle"||t.type==="boss")return i.cleared.includes(t.id)?{type:"toast",message:"\uC774\uBBF8 \uC815\uB9AC\uD55C \uC804\uD22C\uC785\uB2C8\uB2E4."}:{type:"battle",encounterId:t.encounterId};if(t.type==="chest"){if(i.collected.includes(t.id))return{type:"toast",message:"\uC0C1\uC790\uAC00 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."};Ts(i.collected,t.id);let n=t.reward||{shards:0,xp:0};i.shards+=n.shards||0,ll(i,n.xp);let s=kr(i);return{type:"toast",message:`\uC0C1\uC790\uB97C \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4. \uC870\uAC01 +${n.shards||0}.${s?` \uC758\uB8B0 ${s}\uAC1C\uB97C \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4.`:""}`}}if(t.type==="camp"){i.hp=kt.map((s,r)=>Si(i,r)),Ts(i.talked,t.id);let n=kr(i);return{type:"toast",message:`\uC57C\uC601\uC9C0\uC5D0\uC11C \uB3D9\uB8CC\uB97C \uD68C\uBCF5\uD588\uC2B5\uB2C8\uB2E4.${n?` \uC758\uB8B0 ${n}\uAC1C\uB97C \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4.`:""}`}}if(t.type==="npc"){Ts(i.talked,t.id);let n=kr(i);return{type:"dialogue",lines:[...t.dialogue||[],...n?[{speaker:"\uAE30\uB85D",text:`\uC758\uB8B0 ${n}\uAC1C\uB97C \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4.`}]:[]]}}if(t.type==="gate")return t.requires.every(n=>i.cleared.includes(n))?(i.region=t.destination,i.position={...an[i.region].spawn},{type:"travel",region:i.region}):{type:"toast",message:"\uBB38\uC774 \uC544\uC9C1 \uC7A0\uACA8 \uC788\uC2B5\uB2C8\uB2E4."};if(t.type==="finale"){if(!t.requires.every(s=>i.cleared.includes(s)))return{type:"toast",message:"\uB9C8\uC9C0\uB9C9 \uB9B4\uB808\uC774\uAC00 \uC544\uC9C1 \uC5B4\uB461\uC2B5\uB2C8\uB2E4."};i.finished=!0;let n=[...zr.finale];return ws.every(s=>i.questDone.includes(s.id))&&n.push({speaker:"\uAE30\uB85D",text:"\uC2B9\uAC1D\uB4E4\uC758 \uBD80\uD0C1\uB3C4 \uBAA8\uB450 \uC804\uD574\uC84C\uC2B5\uB2C8\uB2E4. \uAE30\uB2E4\uB9AC\uB358 \uC0AC\uB78C\uB4E4\uACFC \uD568\uAED8 \uB178\uB798\uAC00 \uC774\uC5B4\uC9D1\uB2C8\uB2E4."}),{type:"ending",lines:n}}return{type:"toast",message:"\uC544\uC9C1 \uC544\uBB34 \uC77C\uB3C4 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."}}function ul(i,e){if(!e||!e.encounterId)return{won:!1,message:"\uC804\uD22C \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."};let t=tn[e.encounterId],n=t&&qd(t.id);if(!t||!n)return{won:!1,message:"\uC54C \uC218 \uC5C6\uB294 \uC804\uD22C\uC785\uB2C8\uB2E4."};if(e.result==="lose")return i.hp=kt.map((a,c)=>Si(i,c)),{won:!1,message:"\uB3D9\uB8CC\uB4E4\uC774 \uBB3C\uB7EC\uB098 \uB9C8\uC9C0\uB9C9 \uC57C\uC601\uC9C0\uC5D0\uC11C \uD68C\uBCF5\uD588\uC2B5\uB2C8\uB2E4."};if(e.result!=="win"||i.cleared.includes(n.id))return{won:!1,message:"\uC774\uBBF8 \uCC98\uB9AC\uD55C \uC804\uD22C\uC785\uB2C8\uB2E4."};let s=i.level;Ts(i.cleared,n.id),i.shards+=t.reward.shards||0,ll(i,t.reward.xp),i.hp=kt.map((a,c)=>Math.min(Si(i,c),Math.max(1,Math.ceil((e.heroes[c]?.hp??i.hp[c])+Si(i,c)*.2))));let r=kr(i),o=i.level-s;return{won:!0,rewards:t.reward,levelUps:o,message:`${t.name}\uC744 \uC815\uB9AC\uD588\uC2B5\uB2C8\uB2E4.${r?` \uC758\uB8B0 ${r}\uAC1C\uB97C \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4.`:""}`}}function mh(i){let e=an[i.region],t=e.nodes.find(n=>(n.type==="battle"||n.type==="boss")&&!i.cleared.includes(n.id))||e.nodes.find(n=>n.type==="gate"&&n.destination!=null&&n.requires.every(s=>i.cleared.includes(s)))||(i.region===an.length-1?e.nodes.find(n=>n.type==="finale"):null);return t?{title:t.type==="boss"?"\uB9B4\uB808\uC774 \uC218\uD638\uC790":t.name,text:t.type==="boss"?"\uC11C\uB85C \uB2E4\uB978 \uC138 \uC74C\uC73C\uB85C \uCDA9\uC804 \uC120\uC728\uC744 \uB04A\uC73C\uC138\uC694.":"\uB2E4\uC74C \uC2E0\uD638\uB97C \uB530\uB77C\uAC00\uC138\uC694.",nodeId:t.id}:{title:"\uB2E4\uC74C \uC2E0\uD638 \uCC3E\uAE30",text:"\uD45C\uC2DC\uB41C \uAE38\uC744 \uB530\uB77C\uAC00\uC138\uC694.",nodeId:`${e.id}-gate`}}function dl(i){return ws.map(e=>({...e,current:e.requires.filter(t=>al(i,t)).length,total:e.requires.length,complete:e.requires.every(t=>al(i,t)),claimed:i.questDone.includes(e.id)}))}function Yd(i){if(!i||i.version!==uh||!Number.isInteger(i.level)||i.level<1||!Number.isFinite(i.xp)||i.xp<0||!Number.isFinite(i.shards)||i.shards<0||!Number.isFinite(i.playSeconds)||i.playSeconds<0||!Number.isInteger(i.region)||i.region<0||i.region>=an.length||!i.position||!Number.isFinite(i.position.x)||!Number.isFinite(i.position.z)||!Array.isArray(i.upgrades)||i.upgrades.length!==3||i.upgrades.some(t=>!Number.isInteger(t)||t<0||t>3)||typeof i.finished!="boolean"||!Array.isArray(i.hp)||i.hp.length!==3||i.hp.some((t,n)=>!Number.isFinite(t)||t<0||t>Si(i,n))||!["cleared","collected","talked","questDone"].every(t=>Array.isArray(i[t]))||i.cleared.some(t=>!Mi(t)||!["battle","boss"].includes(Mi(t).type))||i.collected.some(t=>!Mi(t)||Mi(t).type!=="chest")||i.talked.some(t=>!Mi(t)||!["camp","npc"].includes(Mi(t).type))||i.questDone.some(t=>!ws.some(n=>n.id===t)))return!1;let e=an[i.region];return i.position.x>=e.bounds.minX&&i.position.x<=e.bounds.maxX&&i.position.z>=e.bounds.minZ&&i.position.z<=e.bounds.maxZ}function gh(i){return JSON.stringify(i)}function xh(i){try{let e=JSON.parse(i);return Yd(e)?e:null}catch{return null}}var fl=(i,e,t)=>Math.max(e,Math.min(t,i)),Tt=(i,e={})=>({type:i,...e}),It=i=>i.hp>0;function pl(i,e,t){let n=i.pattern||[{name:"\uACF5\uACA9",type:"attack",power:8}],s=n[(e-1)%n.length];return t>1&&s.type==="attack"?{...s,name:`${s.name} \xB7 2\uB2E8\uACC4`,power:s.power+4}:{...s}}function Vr(i,e){let t=tn[e];if(!t)throw new Error(`\uC54C \uC218 \uC5C6\uB294 \uC804\uD22C: ${e}`);let n=kt.map((r,o)=>({id:r.id,name:r.name,hp:Math.max(0,i.hp[o]),maxHp:r.baseHp+(i.level-1)*8+(i.upgrades[o]||0)*20,attack:10+i.level*2+(i.upgrades[o]||0)*2,used:!1,shield:0,muted:0,skills:r.skills.map(a=>({...a}))})),s=t.enemies.map(r=>({...r,pattern:r.pattern.map(o=>({...o})),hp:r.hp,maxHp:r.hp,shield:0,stagger:0,muted:0,intent:pl(r,1,1)}));return{encounterId:e,round:1,phase:"command",heroes:n,enemies:s,notes:[],lastChord:null,resonance:0,log:[t.intro||`${t.name} \uC804\uD22C\uAC00 \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`],events:[],result:null,actions:0,_phase:1}}function bi(i,e){i.log.push(e),i.log.length>18&&i.log.shift()}function As(i,e){e=Math.round(e);let t=Math.min(i.shield||0,e);return i.shield-=t,i.hp=Math.max(0,i.hp-(e-t)),e-t}function ml(i,e){return i.enemies.some(It)?i.heroes.some(It)?!1:(i.phase="lost",i.result="lose",e.push(Tt("defeat",{text:"\uBAA8\uB4E0 \uB3D9\uB8CC\uAC00 \uC4F0\uB7EC\uC84C\uC2B5\uB2C8\uB2E4."})),bi(i,"\uD328\uBC30\uD588\uC2B5\uB2C8\uB2E4."),!0):(i.phase="won",i.result="win",e.push(Tt("victory",{text:"\uC801\uC758 \uC74C\uC774 \uC7A6\uC544\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4."})),bi(i,"\uC2B9\uB9AC\uD588\uC2B5\uB2C8\uB2E4."),!0)}function $d(i,e){if(i.notes.length<3)return;let t=i.notes.splice(0,3);i.lastChord=[...t];let n=t.filter(s=>s==="ember"||s==="tide"||s==="star");if(n.length===3&&new Set(n).size===3){i.resonance=fl(i.resonance+42,0,100);for(let s of i.enemies)It(s)&&s.intent.type==="charge"&&(s.stagger=1,s.intent={...s.intent,type:"interrupted",power:0,name:"\uCDA9\uC804 \uC911\uB2E8"});e.push(Tt("chord",{text:"BREAK \uD654\uC74C: \uCDA9\uC804 \uACF5\uACA9\uC744 \uB04A\uC5C8\uC2B5\uB2C8\uB2E4.",note:"break"})),bi(i,"\uC11C\uB85C \uB2E4\uB978 \uC138 \uC74C\uC774 BREAK\uB97C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.")}else if(n.length===3&&new Set(n).size===1){i.resonance=fl(i.resonance+24,0,100);for(let s of i.heroes)It(s)&&(s.hp=Math.min(s.maxHp,s.hp+8),s.shield+=8);e.push(Tt("chord",{text:"ECHO \uD654\uC74C: \uCCB4\uB825\uACFC \uBC29\uD328\uAC00 \uB3CC\uC544\uC635\uB2C8\uB2E4.",note:t[0]})),bi(i,"\uAC19\uC740 \uC74C \uC138 \uAC1C\uAC00 ECHO\uB97C \uB9CC\uB4E4\uC5B4 \uD68C\uBCF5\uC2DC\uD0B5\uB2C8\uB2E4.")}else i.resonance=fl(i.resonance+16,0,100)}function Zd(i,e){i.phase="enemy",i.round++;for(let s of i.heroes)s.used=!1;for(let s of i.heroes)s.muted=Math.max(0,s.muted-1);for(let s of i.enemies){if(!It(s))continue;let r=s.intent||pl(s,i.round,i._phase),o=i.enemies.indexOf(s);if(r.type==="interrupted"){s.stagger=0,e.push(Tt("enemy",{side:"enemy",source:o,index:o,status:"interrupted",text:`${s.name}\uC758 \uCDA9\uC804 \uACF5\uACA9\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4.`}));continue}if(s.stagger>0){s.stagger--,bi(i,`${s.name}\uC774 \uBE44\uD2C0\uAC70\uB9BD\uB2C8\uB2E4.`),e.push(Tt("enemy",{side:"enemy",source:o,index:o,status:"staggered",text:"\uC801\uC774 \uC774\uBC88 \uD134\uC744 \uC27D\uB2C8\uB2E4."}));continue}if(r.type==="muted"){let a=r.mutedType||"attack";if(a==="charge"||a==="heal"||a==="mute"){e.push(Tt("enemy",{side:"enemy",source:o,index:o,status:"interrupted",text:`${s.name}\uC758 \uD2B9\uC218 \uC758\uB3C4\uAC00 \uBB34\uC74C \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`}));continue}if(a==="guard"){let h=Math.ceil((r.originalPower??12)*.5);s.shield+=h,e.push(Tt("shield",{side:"enemy",source:o,index:o,status:"weak",amount:h,text:`${s.name}\uC758 \uBC29\uC5B4\uAC00 \uC57D\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`}));continue}let c=i.heroes.filter(It),l=a==="all"||r.target==="all"?c:[c[(i.round+o)%Math.max(1,c.length)]];for(let h of l)if(h){let d=Math.ceil((r.originalPower??s.attack)*.5);e.push(Tt("hit",{side:"enemy",source:o,index:i.heroes.indexOf(h),amount:As(h,d),status:"weak",text:r.name}))}}else if(r.type==="guard"){let a=r.power??12;s.shield+=a,e.push(Tt("shield",{side:"enemy",source:o,index:o,amount:a,text:`${s.name}\uC774 \uBC29\uC5B4\uD569\uB2C8\uB2E4.`}))}else if(r.type==="heal"){let a=i.enemies.filter(It).sort((c,l)=>c.hp-l.hp)[0];if(a){let c=Math.round(r.power??10);a.hp=Math.min(a.maxHp,a.hp+c),e.push(Tt("heal",{side:"enemy",source:o,index:i.enemies.indexOf(a),amount:c}))}}else if(r.type==="mute"){let a=i.heroes.find(It);a&&(a.muted=1,e.push(Tt("enemy",{side:"enemy",source:o,index:i.heroes.indexOf(a),status:"muted",text:`${a.name}\uC758 \uC74C\uC774 \uC7A0\uACBC\uC2B5\uB2C8\uB2E4.`})))}else{let a=i.heroes.filter(It),c=r.type==="all"||r.target==="all"?a:[a[(i.round+i.enemies.indexOf(s))%Math.max(1,a.length)]];for(let l of c)if(l){let h=Math.round(r.power??s.attack);e.push(Tt("hit",{side:"enemy",source:o,index:i.heroes.indexOf(l),amount:As(l,h),text:r.name}))}}if(ml(i,e))return}for(let s of i.heroes)s.shield=0;let t=i._phase,n=tn[i.encounterId];if(i._phase=n?.boss&&i.enemies[0]?.hp>0&&i.enemies[0].hp<=i.enemies[0].maxHp/2?2:i._phase,i._phase!==t){let s="\uC218\uD638\uC790 2\uB2E8\uACC4 \xB7 \uB2E8\uC77C \uACF5\uACA9 \uC704\uB825 +4";e.push(Tt("enemy",{side:"enemy",status:"phase",phase:i._phase,text:s})),bi(i,s)}for(let s of i.enemies)It(s)&&(s.intent=pl(s,i.round,i._phase));i.phase=i.result?i.phase:"command",e.push(Tt("round",{text:`\uB77C\uC6B4\uB4DC ${i.round}`}))}function _h(i,e,t,n=0){if(i.events=[],i.result)return{ok:!1,message:"\uC804\uD22C\uAC00 \uC774\uBBF8 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4.",events:[]};let s=i.heroes[e],r=s?.skills[t];if(!s||!r||!It(s)||s.used||i.phase!=="command")return{ok:!1,message:"\uC9C0\uAE08 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uD589\uB3D9\uC785\uB2C8\uB2E4.",events:[]};let o=i.enemies[n],a=i.events;if(r.kind==="attack"&&(!o||!It(o)))return{ok:!1,message:"\uACF5\uACA9\uD560 \uC801\uC744 \uC120\uD0DD\uD558\uC138\uC694.",events:[]};s.used=!0,i.actions++,i.notes.push(s.muted?null:r.note),i.notes.length>3&&i.notes.shift();let c=(l,h)=>Math.round(h*(l.weakness===r.note?1.35:1));if(r.kind==="attack"){let l=As(o,c(o,r.power+s.attack));a.push(Tt("hit",{side:"hero",source:e,index:n,amount:l,note:r.note,text:r.name}))}if(r.kind==="attackAll"){for(let l=0;l<i.enemies.length;l++)if(It(i.enemies[l])){let h=As(i.enemies[l],c(i.enemies[l],r.power+s.attack/2));a.push(Tt("hit",{side:"hero",source:e,index:l,amount:h,note:r.note,text:r.name}))}}if(r.kind==="heal"){let l=i.heroes.filter(It).sort((d,u)=>d.hp/d.maxHp-u.hp/u.maxHp)[0],h=l?Math.round(Math.min(l.maxHp-l.hp,r.power+s.attack/2)):0;l&&(l.hp+=h),a.push(Tt("heal",{side:"hero",source:e,index:i.heroes.indexOf(l),amount:h,note:r.note,text:r.name}))}if(r.kind==="healAll"){for(let l=0;l<i.heroes.length;l++)if(It(i.heroes[l])){let h=Math.min(i.heroes[l].maxHp-i.heroes[l].hp,r.power);i.heroes[l].hp+=h,a.push(Tt("heal",{side:"hero",source:e,index:l,amount:h,note:r.note,text:r.name}))}}if(r.kind==="shield"){let l=i.heroes.filter(It);for(let h of l)h.shield+=r.power,a.push(Tt("shield",{side:"hero",source:e,index:i.heroes.indexOf(h),amount:r.power,note:r.note,text:r.name}))}if(r.kind==="mute"){let l=o&&It(o)?o:i.enemies.find(It);if(l){let h=["charge","heal","mute"].includes(l.intent.type);l.intent={...l.intent,type:"muted",mutedType:l.intent.type,originalPower:l.intent.power,power:h?0:Math.ceil((l.intent.power??l.attack)/2),name:h?"\uBB34\uC74C \xB7 \uD2B9\uC218 \uD589\uB3D9 \uC911\uB2E8":`\uC57D\uD654 \xB7 ${l.intent.name}`},a.push(Tt("enemy",{side:"hero",source:e,index:i.enemies.indexOf(l),status:"muted",text:`${l.name}\uC758 \uC758\uB3C4\uB97C \uBB34\uC74C \uCC98\uB9AC\uD588\uC2B5\uB2C8\uB2E4.`}))}}return $d(i,a),bi(i,`${s.name}: ${r.name}`),ml(i,a)?{ok:!0,message:"\uD589\uB3D9\uC744 \uC2E4\uD589\uD588\uC2B5\uB2C8\uB2E4.",events:a}:(i.heroes.filter(It).every(l=>l.used)&&Zd(i,a),{ok:!0,message:"\uD589\uB3D9\uC744 \uC2E4\uD589\uD588\uC2B5\uB2C8\uB2E4.",events:a})}function yh(i){if(i.events=[],i.result||i.resonance<100||!i.heroes.some(It))return{ok:!1,message:"\uACF5\uBA85\uC774 \uC544\uC9C1 \uCDA9\uBD84\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",events:[]};i.resonance=0;let e=i.events;for(let t=0;t<i.enemies.length;t++)if(It(i.enemies[t])){let n=As(i.enemies[t],28);e.push(Tt("hit",{side:"hero",index:t,amount:n,text:"\uC559\uCF54\uB974"}))}for(let t=0;t<i.heroes.length;t++)if(It(i.heroes[t])){let n=Math.min(i.heroes[t].maxHp-i.heroes[t].hp,14);i.heroes[t].hp+=n,e.push(Tt("heal",{side:"hero",index:t,amount:n,text:"\uC559\uCF54\uB974"}))}return e.push(Tt("encore",{text:"\uC138 \uBAA9\uC18C\uB9AC\uAC00 \uD558\uB098\uC758 \uC559\uCF54\uB974\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."})),ml(i,e),{ok:!0,message:"\uC559\uCF54\uB974\uB97C \uC5F0\uC8FC\uD588\uC2B5\uB2C8\uB2E4.",events:e}}var Kh=0,ec=1,jh=2;var Mr=1,ta=2,xs=3,mi=0,Ht=1,Fn=2,On=0,_s=1,tc=2,nc=3,ic=4,Qh=5;var Li=100,eu=101,tu=102,nu=103,iu=104,su=200,ru=201,ou=202,au=203,sc=204,rc=205,lu=206,cu=207,hu=208,uu=209,du=210,fu=211,pu=212,mu=213,gu=214,go=0,xo=1,_o=2,is=3,yo=4,vo=5,Mo=6,So=7,oc=0,xu=1,_u=2,bn=0,ac=1,lc=2,cc=3,Sr=4,hc=5,uc=6,dc=7;var fc=300,gi=301,Di=302,na=303,ia=304,br=306,bo=1e3,In=1001,Eo=1002,zt=1003,yu=1004;var Er=1005;var Vt=1006,sa=1007;var xi=1008;var sn=1009,pc=1010,mc=1011,ys=1012,ra=1013,En=1014,mn=1015,wn=1016,oa=1017,aa=1018,vs=1020,gc=35902,xc=35899,_c=1021,yc=1022,gn=1023,Pn=1026,_i=1027,la=1028,ca=1029,yi=1030,ha=1031;var ua=1033,wr=33776,Tr=33777,Ar=33778,Rr=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,xa=37492,_a=37496,ya=37488,va=37489,Cr=37490,Ma=37491,Sa=37808,ba=37809,Ea=37810,wa=37811,Ta=37812,Aa=37813,Ra=37814,Ca=37815,Ia=37816,Pa=37817,La=37818,Da=37819,Na=37820,Ua=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,Ir=36285,Va=36286;var ks=2300,wo=2301,po=2302,Gl=2303,Wl=2400,Xl=2401,ql=2402;var vu=3200;var Ha=0,Mu=1,Kn="",qt="srgb",Vs="srgb-linear",Hs="linear",dt="srgb";var mo=7680;var Su=519,bu=512,Eu=513,wu=514,Ga=515,Tu=516,Au=517,Wa=518,Ru=519,vc=35044;var Mc="300 es",Sn=2e3,ss=2001;function Jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cu(){let i=Gs("canvas");return i.style.display="block",i}var vh={},rs=null;function Ws(...i){let e="THREE."+i.shift();rs?rs("log",e,...i):console.log(e,...i)}function Iu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Iu(i);let e="THREE."+i.shift();if(rs)rs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=Iu(i);let e="THREE."+i.shift();if(rs)rs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ci(...i){let e=i.join(" ");e in vh||(vh[e]=!0,Ge(...i))}function Pu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lu={[go]:xo,[_o]:Mo,[yo]:So,[is]:vo,[xo]:go,[Mo]:_o,[So]:yo,[vo]:is},Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gl=Math.PI/180,To=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function jd(i,e){return(i%e+e)%e}function xl(i,e,t){return(1-t)*i+t*e}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ac=class Ac{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ac.prototype.isVector2=!0;var ue=Ac,Dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],S=r[o+3];if(d!==S||c!==u||l!==p||h!==g){let m=c*u+l*p+h*g+d*S;m<0&&(u=-u,p=-p,g=-g,S=-S,m=-m);let f=1-a;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);f=Math.sin(f*M)/T,a=Math.sin(a*M)/T,c=c*f+u*a,l=l*f+p*a,h=h*f+g*a,d=d*f+S*a}else{c=c*f+u*a,l=l*f+p*a,h=h*f+g*a,d=d*f+S*a;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*p-l*u,e[t+1]=c*g+h*u+l*d-a*p,e[t+2]=l*g+h*p+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rc=class Rc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rc.prototype.isVector3=!0;var P=Rc,_l=new P,Mh=new Dn,Cc=class Cc{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],S=s[0],m=s[3],f=s[6],M=s[1],T=s[4],y=s[7],w=s[2],b=s[5],C=s[8];return r[0]=o*S+a*M+c*w,r[3]=o*m+a*T+c*b,r[6]=o*f+a*y+c*C,r[1]=l*S+h*M+d*w,r[4]=l*m+h*T+d*b,r[7]=l*f+h*y+d*C,r[2]=u*S+p*M+g*w,r[5]=u*m+p*T+g*b,r[8]=u*f+p*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,g=t*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*l-h*n)*S,e[2]=(a*n-s*o)*S,e[3]=u*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=p*S,e[7]=(n*c-l*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(e,t)),this}rotate(e){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cc.prototype.isMatrix3=!0;var Xe=Cc,yl=new Xe,Sh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){let i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:e,whitePoint:n,transfer:Hs,toXYZ:Sh,fromXYZ:bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Sh,fromXYZ:bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var rt=Qd();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,Ao=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=Gs("canvas")),Bi.width=e.width,Bi.height=e.height;let s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ef=0,os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vl(s[o].image)):r.push(vl(s[o]))}else r=vl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var tf=0,Ml=new P,Qt=class i extends Ln{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Vt,o=xi,a=gn,c=sn,l=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=qn(),this.name="",this.source=new os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=fc;Qt.DEFAULT_ANISOTROPY=1;var Ic=class Ic{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],S=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,y=(p+1)/2,w=(f+1)/2,b=(h+u)/4,C=(d+S)/4,_=(g+m)/4;return T>y&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=C/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-S)/M,this.z=(u-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ic.prototype.isVector4=!0;var At=Ic,Ro=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Qt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new os(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ea=class ea{constructor(e,t,n,s,r,o,a,c,l,h,d,u,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,p,g,S,m)}set(e,t,n,s,r,o,a,c,l,h,d,u,p,g,S,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ea().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,S=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=u-S*l,t[9]=-a*c,t[2]=S-u*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,g=l*h,S=l*d;t[0]=u+S*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=S+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,g=l*h,S=l*d;t[0]=u-S*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=S-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,S=a*d;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+S,t[1]=c*d,t[5]=S*l+u,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,p=o*l,g=a*c,S=a*l;t[0]=c*h,t[4]=S-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-S*d}else if(e.order==="XZY"){let u=o*c,p=o*l,g=a*c,S=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+S,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,sf)}lookAt(e,t,n){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ti.crossVectors(n,ln),ti.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ti.crossVectors(n,ln)),ti.normalize(),Hr.crossVectors(ln,ti),s[0]=ti.x,s[4]=Hr.x,s[8]=ln.x,s[1]=ti.y,s[5]=Hr.y,s[9]=ln.y,s[2]=ti.z,s[6]=Hr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],S=n[6],m=n[10],f=n[14],M=n[3],T=n[7],y=n[11],w=n[15],b=s[0],C=s[4],_=s[8],A=s[12],L=s[1],U=s[5],z=s[9],X=s[13],F=s[2],k=s[6],Y=s[10],J=s[14],re=s[3],q=s[7],Q=s[11],ie=s[15];return r[0]=o*b+a*L+c*F+l*re,r[4]=o*C+a*U+c*k+l*q,r[8]=o*_+a*z+c*Y+l*Q,r[12]=o*A+a*X+c*J+l*ie,r[1]=h*b+d*L+u*F+p*re,r[5]=h*C+d*U+u*k+p*q,r[9]=h*_+d*z+u*Y+p*Q,r[13]=h*A+d*X+u*J+p*ie,r[2]=g*b+S*L+m*F+f*re,r[6]=g*C+S*U+m*k+f*q,r[10]=g*_+S*z+m*Y+f*Q,r[14]=g*A+S*X+m*J+f*ie,r[3]=M*b+T*L+y*F+w*re,r[7]=M*C+T*U+y*k+w*q,r[11]=M*_+T*z+y*Y+w*Q,r[15]=M*A+T*X+y*J+w*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],S=e[7],m=e[11],f=e[15],M=c*p-l*u,T=a*p-l*d,y=a*u-c*d,w=o*p-l*h,b=o*u-c*h,C=o*d-a*h;return t*(S*M-m*T+f*y)-n*(g*M-m*w+f*b)+s*(g*T-S*w+f*C)-r*(g*y-S*b+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],S=e[13],m=e[14],f=e[15],M=t*a-n*o,T=t*c-s*o,y=t*l-r*o,w=n*c-s*a,b=n*l-r*a,C=s*l-r*c,_=h*S-d*g,A=h*m-u*g,L=h*f-p*g,U=d*m-u*S,z=d*f-p*S,X=u*f-p*m,F=M*X-T*z+y*U+w*L-b*A+C*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/F;return e[0]=(a*X-c*z+l*U)*k,e[1]=(s*z-n*X-r*U)*k,e[2]=(S*C-m*b+f*w)*k,e[3]=(u*b-d*C-p*w)*k,e[4]=(c*L-o*X-l*A)*k,e[5]=(t*X-s*L+r*A)*k,e[6]=(m*y-g*C-f*T)*k,e[7]=(h*C-u*y+p*T)*k,e[8]=(o*z-a*L+l*_)*k,e[9]=(n*L-t*z-r*_)*k,e[10]=(g*b-S*y+f*M)*k,e[11]=(d*y-h*b-p*M)*k,e[12]=(a*A-o*U-c*_)*k,e[13]=(t*U-n*A+s*_)*k,e[14]=(S*T-g*w-m*M)*k,e[15]=(h*w-d*T+u*M)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,g=r*d,S=o*h,m=o*d,f=a*d,M=c*l,T=c*h,y=c*d,w=n.x,b=n.y,C=n.z;return s[0]=(1-(S+f))*w,s[1]=(p+y)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(u+f))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+T)*C,s[9]=(m-M)*C,s[10]=(1-(u+S))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),c=zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);let l=1/o,h=1/a,d=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Sn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),g,S;if(c)g=r/(o-r),S=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===ss)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Sn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),g,S;if(c)g=1/(o-r),S=o/(o-r);else if(a===Sn)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===ss)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ea.prototype.isMatrix4=!0;var _t=ea,zi=new P,_n=new _t,nf=new P(0,0,0),sf=new P(1,1,1),ti=new P,Hr=new P,ln=new P,Eh=new _t,wh=new Dn,oi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rf=0,Th=new P,ki=new Dn,kn=new _t,Gr=new P,Rs=new P,of=new P,af=new Dn,Ah=new P(1,0,0),Rh=new P(0,1,0),Ch=new P(0,0,1),Ih={type:"added"},lf={type:"removed"},Vi={type:"childadded",child:null},Sl={type:"childremoved",child:null},Lt=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new oi,n=new Dn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Xe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Rs,Gr,this.up):kn.lookAt(Gr,Rs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(kn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ih),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lf),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ih),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new P(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},cf={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),f=this._getHandJoint(l,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function bl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=jd(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bl(o,r,e+1/3),this.g=bl(o,r,e),this.b=bl(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=Du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return rt.workingToColorSpace(Xt.copy(this),e),Math.round(it(Xt.r*255,0,255))*65536+Math.round(it(Xt.g*255,0,255))*256+Math.round(it(Xt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=qt){rt.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Wr);let n=xl(ni.h,Wr.h,t),s=xl(ni.s,Wr.s,t),r=xl(ni.l,Wr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new qe;qe.NAMES=Du;var Ys=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new P,Vn=new P,El=new P,Hn=new P,Hi=new P,Gi=new P,Ph=new P,wl=new P,Tl=new P,Al=new P,Rl=new At,Cl=new At,Il=new At,Xn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Vn.subVectors(n,t),El.subVectors(e,t);let o=yn.dot(yn),a=yn.dot(Vn),c=yn.dot(El),l=Vn.dot(Vn),h=Vn.dot(El),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Rl.setScalar(0),Cl.setScalar(0),Il.setScalar(0),Rl.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,n),Il.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rl,r.x),o.addScaledVector(Cl,r.y),o.addScaledVector(Il,r.z),o}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Vn.subVectors(e,t),yn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Hi.subVectors(s,n),Gi.subVectors(r,n),wl.subVectors(e,n);let c=Hi.dot(wl),l=Gi.dot(wl);if(c<=0&&l<=0)return t.copy(n);Tl.subVectors(e,s);let h=Hi.dot(Tl),d=Gi.dot(Tl);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Hi,o);Al.subVectors(e,r);let p=Hi.dot(Al),g=Gi.dot(Al);if(g>=0&&p<=g)return t.copy(r);let S=p*l-c*g;if(S<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Gi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Ph.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Ph,a);let f=1/(m+S+u);return o=S*f,a=u*f,t.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),qr.subVectors(this.max,Cs),Wi.subVectors(e.a,Cs),Xi.subVectors(e.b,Cs),qi.subVectors(e.c,Cs),ii.subVectors(Xi,Wi),si.subVectors(qi,Xi),Ei.subVectors(Wi,qi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ei.z,Ei.y,ii.z,0,-ii.x,si.z,0,-si.x,Ei.z,0,-Ei.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ei.y,Ei.x,0];return!Pl(t,Wi,Xi,qi,qr)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,Wi,Xi,qi,qr))?!1:(Yr.crossVectors(ii,si),t=[Yr.x,Yr.y,Yr.z],Pl(t,Wi,Xi,qi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,Xr=new Nn,Wi=new P,Xi=new P,qi=new P,ii=new P,si=new P,Ei=new P,Cs=new P,qr=new P,Yr=new P,wi=new P;function Pl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Nt=new P,$r=new ue,hf=0,$t=class extends Ln{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Zs=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Js=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},uf=new Nn,Is=new P,Ll=new P,ai=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):uf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);let t=Is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Ll)),this.expandByPoint(Is.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},df=0,pn=new _t,Dl=new Lt,Yi=new P,cn=new Nn,Ps=new Nn,Bt=new P,Ut=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?Js:Zs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(cn.min,Ps.min),cn.expandByPoint(Bt),Bt.addVectors(cn.max,Ps.max),cn.expandByPoint(Bt)):(cn.expandByPoint(Ps.min),cn.expandByPoint(Ps.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(e,l),Bt.add(Yi)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new P,c[_]=new P;let l=new P,h=new P,d=new P,u=new ue,p=new ue,g=new ue,S=new P,m=new P;function f(_,A,L){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,L),h.sub(l),d.sub(l),p.sub(u),g.sub(u);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[_].add(S),a[A].add(S),a[L].add(S),c[_].add(m),c[A].add(m),c[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,A=M.length;_<A;++_){let L=M[_],U=L.start,z=L.count;for(let X=U,F=U+z;X<F;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let T=new P,y=new P,w=new P,b=new P;function C(_){w.fromBufferAttribute(s,_),b.copy(w);let A=a[_];T.copy(A),T.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(b,A);let U=y.dot(c[_])<0?-1:1;o.setXYZW(_,T.x,T.y,T.z,U)}for(let _=0,A=M.length;_<A;++_){let L=M[_],U=L.start,z=L.count;for(let X=U,F=U+z;X<F;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),p=0,g=0;for(let S=0,m=c.length;S<m;S++){a.isInterleavedBufferAttribute?p=c[S]*a.data.stride+a.offset:p=c[S]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new $t(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=e(u,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ks=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},jt=new P,ls=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nl=new P,ff=new P,pf=new Xe,Mn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Nl.subVectors(n,t).cross(ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pf.getNormalMatrix(e),s=this.coplanarPoint(Nl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},mf=0,$n=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=_s,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cs=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$i,Ls=new P,Zi=new P,Ji=new P,Ki=new ue,Ds=new ue,Nu=new _t,Zr=new P,Ns=new P,Jr=new P,Lh=new ue,Ul=new ue,Dh=new ue,js=class extends Lt{constructor(e=new cs){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ks(t,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new ls(n,3,0,!1)),$i.setAttribute("uv",new ls(n,2,3,!1))}this.geometry=$i,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),Nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Kr(Zr.set(-.5,-.5,0),Ji,o,Zi,s,r),Kr(Ns.set(.5,-.5,0),Ji,o,Zi,s,r),Kr(Jr.set(.5,.5,0),Ji,o,Zi,s,r),Lh.set(0,0),Ul.set(1,0),Dh.set(1,1);let a=e.ray.intersectTriangle(Zr,Ns,Jr,!1,Ls);if(a===null&&(Kr(Ns.set(-.5,.5,0),Ji,o,Zi,s,r),Ul.set(0,1),a=e.ray.intersectTriangle(Zr,Jr,Ns,!1,Ls),a===null))return;let c=e.ray.origin.distanceTo(Ls);c<e.near||c>e.far||t.push({distance:c,point:Ls.clone(),uv:Xn.getInterpolation(Ls,Zr,Ns,Jr,Lh,Ul,Dh,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Kr(i,e,t,n,s,r){Ki.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ds.x=r*Ki.x-s*Ki.y,Ds.y=s*Ki.x+r*Ki.y):Ds.copy(Ki),i.copy(e),i.x+=Ds.x,i.y+=Ds.y,i.applyMatrix4(Nu)}var Wn=new P,Fl=new P,jr=new P,Qr=new P,Io=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fl.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Fl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=Qr.dot(this.direction),c=-Qr.dot(jr),l=Qr.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let S=1/h;d*=S,u*=S,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fl).addScaledVector(jr,u),p}intersectSphere(e,t){if(e.radius<0)return null;Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,p=e.z-o.z,g=t.x-o.x,S=t.y-o.y,m=t.z-o.z,f=n.x-o.x,M=n.y-o.y,T=n.z-o.z,y=Math.abs(c),w=Math.abs(l),b=Math.abs(h),C,_,A,L,U,z,X,F,k,Y,J,re;if(y>=w&&y>=b?(A=c,z=d,k=g,re=f,c>=0?(C=l,_=h,L=u,U=p,X=S,F=m,Y=M,J=T):(C=h,_=l,L=p,U=u,X=m,F=S,Y=T,J=M)):w>=b?(A=l,z=u,k=S,re=M,l>=0?(C=h,_=c,L=p,U=d,X=m,F=g,Y=T,J=f):(C=c,_=h,L=d,U=p,X=g,F=m,Y=f,J=T)):(A=h,z=p,k=m,re=T,h>=0?(C=c,_=l,L=d,U=u,X=g,F=S,Y=f,J=M):(C=l,_=c,L=u,U=d,X=S,F=g,Y=M,J=f)),A===0)return null;let q=C/A,Q=_/A,ie=1/A,Ie=L-q*z,Ee=U-Q*z,Ye=X-q*k,je=F-Q*k,ot=Y-q*re,K=J-Q*re,ne=ot*je-K*Ye,me=Ie*K-Ee*ot,ze=Ye*Ee-je*Ie;if(s){if(ne<0||me<0||ze<0)return null}else if((ne<0||me<0||ze<0)&&(ne>0||me>0||ze>0))return null;let Se=ne+me+ze;if(Se===0)return null;let Ve=ie*(ne*z+me*k+ze*re);return(Se>0?Ve<0:Ve>0)?null:this.at(Ve/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nh=new _t,Ti=new Io,eo=new ai,Uh=new P,to=new P,no=new P,io=new P,Ol=new P,so=new P,Fh=new P,ro=new P,pt=class extends Lt{constructor(e=new Ut,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Ol.fromBufferAttribute(d,e),o?so.addScaledVector(Ol,h):so.addScaledVector(Ol.sub(t),h))}t.add(so)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(eo.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(eo,Uh)===null||Ti.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=u.length;g<S;g++){let m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,w=T;y<w;y+=3){let b=a.getX(y),C=a.getX(y+1),_=a.getX(y+2);s=oo(this,f,e,n,l,h,d,b,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){let M=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);s=oo(this,o,e,n,l,h,d,M,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,S=u.length;g<S;g++){let m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,w=T;y<w;y+=3){let b=y,C=y+1,_=y+2;s=oo(this,f,e,n,l,h,d,b,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){let M=m,T=m+1,y=m+2;s=oo(this,o,e,n,l,h,d,M,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function gf(i,e,t,n,s,r,o,a){let c;if(e.side===Ht?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===mi,a),c===null)return null;ro.copy(a),ro.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ro);return l<t.near||l>t.far?null:{distance:l,point:ro.clone(),object:i}}function oo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,to),i.getVertexPosition(c,no),i.getVertexPosition(l,io);let h=gf(i,e,t,n,to,no,io,Fh);if(h){let d=new P;Xn.getBarycoord(Fh,to,no,io,d),s&&(h.uv=Xn.getInterpolatedAttribute(s,a,c,l,d,new ue)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,a,c,l,d,new ue)),o&&(h.normal=Xn.getInterpolatedAttribute(o,a,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};Xn.getNormal(to,no,io,u.normal),h.face=u,h.barycoord=d}return h}var Qs=class extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=zt,h=zt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ji=new _t,Oh=new _t,ao=[],Bh=new Nn,xf=new _t,Us=new pt,Fs=new ai,li=class extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Bh.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Bh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Fs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),Oh.multiplyMatrices(n,ji),Us.matrixWorld=Oh,Us.raycast(e,ao);for(let o=0,a=ao.length;o<a;o++){let c=ao[o];c.instanceId=r,c.object=this,t.push(c)}ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qs(new Float32Array(s*this.count),s,this.count,la,mn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ai=new ai,_f=new ue(.5,.5),lo=new P,us=class{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],S=r[9],m=r[10],f=r[11],M=r[12],T=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-o,p-h,f-g,w-M).normalize(),s[1].setComponents(l+o,p+h,f+g,w+M).normalize(),s[2].setComponents(l+a,p+d,f+S,w+T).normalize(),s[3].setComponents(l-a,p-d,f-S,w-T).normalize(),n)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(l-c,p-u,f-m,w-y).normalize();else if(s[4].setComponents(l-c,p-u,f-m,w-y).normalize(),t===Sn)s[5].setComponents(l+c,p+u,f+m,w+y).normalize();else if(t===ss)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);let t=_f.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(lo.x=s.normal.x>0?e.max.x:e.min.x,lo.y=s.normal.y>0?e.max.y:e.min.y,lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var er=class extends Qt{constructor(e=[],t=gi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tr=class extends Qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Qt{constructor(e,t,n=En,s,r,o,a=zt,c=zt,l,h=Pn,d=1){if(h!==Pn&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Po=class extends ci{constructor(e,t=En,n=gi,s,r,o=zt,a=zt,c,l=Pn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nr=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hi=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function g(S,m,f,M,T,y,w,b,C,_,A){let L=y/C,U=w/_,z=y/2,X=w/2,F=b/2,k=C+1,Y=_+1,J=0,re=0,q=new P;for(let Q=0;Q<Y;Q++){let ie=Q*U-X;for(let Ie=0;Ie<k;Ie++){let Ee=Ie*L-z;q[S]=Ee*M,q[m]=ie*T,q[f]=F,l.push(q.x,q.y,q.z),q[S]=0,q[m]=0,q[f]=b>0?1:-1,h.push(q.x,q.y,q.z),d.push(Ie/C),d.push(1-Q/_),J+=1}}for(let Q=0;Q<_;Q++)for(let ie=0;ie<C;ie++){let Ie=u+ie+k*Q,Ee=u+ie+k*(Q+1),Ye=u+(ie+1)+k*(Q+1),je=u+(ie+1)+k*Q;c.push(Ie,Ee,je),c.push(Ee,Ye,je),re+=6}a.addGroup(p,re,A),p+=re,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ii=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new P,h=new ue;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ui=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,S=[],m=n/2,f=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(p,2));function M(){let y=new P,w=new P,b=0,C=(t-e)/n;for(let _=0;_<=r;_++){let A=[],L=_/r,U=L*(t-e)+e;for(let z=0;z<=s;z++){let X=z/s,F=X*c+a,k=Math.sin(F),Y=Math.cos(F);w.x=U*k,w.y=-L*n+m,w.z=U*Y,d.push(w.x,w.y,w.z),y.set(k,C,Y).normalize(),u.push(y.x,y.y,y.z),p.push(X,1-L),A.push(g++)}S.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let L=S[A][_],U=S[A+1][_],z=S[A+1][_+1],X=S[A][_+1];(e>0||A!==0)&&(h.push(L,U,X),b+=3),(t>0||A!==r-1)&&(h.push(U,z,X),b+=3)}l.addGroup(f,b,0),f+=b}function T(y){let w=g,b=new ue,C=new P,_=0,A=y===!0?e:t,L=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*L,0),u.push(0,L,0),p.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let F=z/s*c+a,k=Math.cos(F),Y=Math.sin(F);C.x=A*Y,C.y=m*L,C.z=A*k,d.push(C.x,C.y,C.z),u.push(0,L,0),b.x=k*.5+.5,b.y=Y*.5*L+.5,p.push(b.x,b.y),g++}for(let z=0;z<s;z++){let X=w+z,F=U+z;y===!0?h.push(F,F+1,X):h.push(F+1,F,X),_+=3}l.addGroup(f,_,y===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zt=class i extends ui{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ir=class i extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new P,y=new P,w=new P;for(let b=0;b<t.length;b+=3)p(t[b+0],T),p(t[b+1],y),p(t[b+2],w),c(T,y,w,M)}function c(M,T,y,w){let b=w+1,C=[];for(let _=0;_<=b;_++){C[_]=[];let A=M.clone().lerp(y,_/b),L=T.clone().lerp(y,_/b),U=b-_;for(let z=0;z<=U;z++)z===0&&_===b?C[_][z]=A:C[_][z]=A.clone().lerp(L,z/U)}for(let _=0;_<b;_++)for(let A=0;A<2*(b-_)-1;A++){let L=Math.floor(A/2);A%2===0?(u(C[_][L+1]),u(C[_+1][L]),u(C[_][L])):(u(C[_][L+1]),u(C[_+1][L+1]),u(C[_+1][L]))}}function l(M){let T=new P;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(M),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let M=new P;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let y=m(M)/2/Math.PI+.5,w=f(M)/Math.PI+.5;o.push(y,1-w)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){let T=o[M+0],y=o[M+2],w=o[M+4],b=Math.max(T,y,w),C=Math.min(T,y,w);b>.9&&C<.1&&(T<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,T){let y=M*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){let M=new P,T=new P,y=new P,w=new P,b=new ue,C=new ue,_=new ue;for(let A=0,L=0;A<r.length;A+=9,L+=6){M.set(r[A+0],r[A+1],r[A+2]),T.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),b.set(o[L+0],o[L+1]),C.set(o[L+2],o[L+3]),_.set(o[L+4],o[L+5]),w.copy(M).add(T).add(y).divideScalar(3);let U=m(w);S(b,L+0,M,U),S(C,L+2,T,U),S(_,L+4,y,U)}}function S(M,T,y,w){w<0&&M.x===1&&(o[T]=M.x-1),y.x===0&&y.z===0&&(o[T]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},sr=class i extends ir{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ue:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,c=new _t;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(it(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(it(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ds=class extends hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lo=class extends ds{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var zh=new P,kh=new P,Bl=new Sc,zl=new Sc,kl=new Sc,Do=class extends hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(kh.subVectors(s[0],s[1]).add(s[0]),l=kh);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),S=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Bl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,S,m),zl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,S,m),kl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),zl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),kl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Bl.calc(c),zl.calc(c),kl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function yf(i,e){let t=1-i;return t*t*e}function vf(i,e){return 2*(1-i)*i*e}function Mf(i,e){return i*i*e}function Bs(i,e,t,n){return yf(i,e)+vf(i,t)+Mf(i,n)}function Sf(i,e){let t=1-i;return t*t*t*e}function bf(i,e){let t=1-i;return 3*t*t*i*e}function Ef(i,e){return 3*(1-i)*i*i*e}function wf(i,e){return i*i*i*e}function zs(i,e,t,n,s){return Sf(i,e)+bf(i,t)+Ef(i,n)+wf(i,s)}var rr=class extends hn{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends hn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y),zs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},or=class extends hn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends hn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ar=class extends hn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(e,s.x,r.x,o.x),Bs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends hn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(e,s.x,r.x,o.x),Bs(e,s.y,r.y,o.y),Bs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Vh(a,c.x,l.x,h.x,d.x),Vh(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},Yl=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:Do,CubicBezierCurve:rr,CubicBezierCurve3:No,EllipseCurve:ds,LineCurve:or,LineCurve3:Uo,QuadraticBezierCurve:ar,QuadraticBezierCurve3:Fo,SplineCurve:lr}),Oo=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Yl[s.type]().fromJSON(s))}return this}},cr=class extends Oo{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new or(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ar(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new rr(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new lr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new ds(e,t,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fs=class extends cr{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new cr().fromJSON(s))}return this}};function Tf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Uu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Pf(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,d=c;for(let u=t;u<s;u+=t){let p=i[u],g=i[u+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>d&&(d=g)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return hr(r,o,t,a,c,l,0),o}function Uu(i,e,t,n,s){let r;if(s===Hf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Hh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Hh(o/n|0,i[o],i[o+1],r);return r&&ps(r,r.next)&&(dr(r),r=r.next),r}function Pi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ps(t,t.next)||Ct(t.prev,t,t.next)===0)){if(dr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function hr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ff(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Rf(i,n,s,r):Af(i)){e.push(c.i,i.i,l.i),dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Cf(Pi(i),e),hr(i,e,t,n,s,r,2)):o===2&&If(i,e,t,n,s,r):hr(Pi(i),e,t,n,s,r,1);break}}}function Af(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),p=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Os(s,a,r,c,o,l,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ct(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,p=Math.min(a,c,l),g=Math.min(h,d,u),S=Math.max(a,c,l),m=Math.max(h,d,u),f=$l(p,g,e,t,n),M=$l(S,m,e,t,n),T=i.prevZ,y=i.nextZ;for(;T&&T.z>=f&&y&&y.z<=M;){if(T.x>=p&&T.x<=S&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&Os(a,h,c,d,l,u,T.x,T.y)&&Ct(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=p&&y.x<=S&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Os(a,h,c,d,l,u,y.x,y.y)&&Ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=f;){if(T.x>=p&&T.x<=S&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&Os(a,h,c,d,l,u,T.x,T.y)&&Ct(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=S&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Os(a,h,c,d,l,u,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Cf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ps(n,s)&&Ou(n,t,t.next,s)&&ur(n,s)&&ur(s,n)&&(e.push(n.i,t.i,s.i),dr(t),dr(t.next),t=i=s),t=t.next}while(t!==i);return Pi(t)}function If(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zf(o,a)){let c=Bu(o,a);o=Pi(o,o.next),c=Pi(c,c.next),hr(o,e,t,n,s,r,0),hr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Pf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Uu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Bf(l))}s.sort(Lf);for(let r=0;r<s.length;r++)t=Df(s[r],t);return t}function Lf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Df(i,e){let t=Nf(i,e);if(!t)return e;let n=Bu(t,i);return Pi(n,n.next),Pi(t,t.next)}function Nf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ps(i,t))return t;do{if(ps(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Fu(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);ur(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Uf(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Uf(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Ff(i,e,t,n){let s=i;do s.z===0&&(s.z=$l(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Of(s)}function Of(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function $l(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Bf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Os(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Fu(i,e,t,n,s,r,o,a)}function zf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!kf(i,e)&&(ur(i,e)&&ur(e,i)&&Vf(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||ps(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ps(i,e){return i.x===e.x&&i.y===e.y}function Ou(i,e,t,n){let s=ho(Ct(i,e,t)),r=ho(Ct(i,e,n)),o=ho(Ct(t,n,i)),a=ho(Ct(t,n,e));return!!(s!==r&&o!==a||s===0&&co(i,t,e)||r===0&&co(i,n,e)||o===0&&co(t,i,n)||a===0&&co(t,e,n))}function co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ho(i){return i>0?1:i<0?-1:0}function kf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ou(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ur(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Vf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bu(i,e){let t=Zl(i.i,i.x,i.y),n=Zl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hh(i,e,t,n){let s=Zl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Jl=class{static triangulate(e,t,n=2){return Tf(e,t,n)}},Ri=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Gh(e),Wh(n,e);let o=e.length;t.forEach(Gh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Wh(n,t[c]);let a=Jl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Gh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fr=class i extends Ut{constructor(e=new fs([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Gf,T,y=!1,w,b,C,_;if(f){T=f.getSpacedPoints(h),y=!0,u=!1;let ee=f.isCatmullRomCurve3?f.closed:!1;w=f.computeFrenetFrames(h,ee),b=new P,C=new P,_=new P}u||(m=0,p=0,g=0,S=0);let A=a.extractPoints(l),L=A.shape,U=A.holes;if(!Ri.isClockWise(L)){L=L.reverse();for(let ee=0,ae=U.length;ee<ae;ee++){let ce=U[ee];Ri.isClockWise(ce)&&(U[ee]=ce.reverse())}}function X(ee){let ce=10000000000000001e-36,he=ee[0];for(let de=1;de<=ee.length;de++){let Fe=de%ee.length,Ne=ee[Fe],Be=Ne.x-he.x,We=Ne.y-he.y,D=Be*Be+We*We,ct=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(he.x),Math.abs(he.y)),Qe=ce*ct*ct;if(D<=Qe){ee.splice(Fe,1),de--;continue}he=Ne}}X(L),U.forEach(X);let F=U.length,k=L;for(let ee=0;ee<F;ee++){let ae=U[ee];L=L.concat(ae)}function Y(ee,ae,ce){return ae||He("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ae,ce)}let J=L.length;function re(ee,ae,ce){let he,de,Fe,Ne=ee.x-ae.x,Be=ee.y-ae.y,We=ce.x-ee.x,D=ce.y-ee.y,ct=Ne*Ne+Be*Be,Qe=Ne*D-Be*We;if(Math.abs(Qe)>Number.EPSILON){let R=Math.sqrt(ct),x=Math.sqrt(We*We+D*D),E=ae.x-Be/R,I=ae.y+Ne/R,V=ce.x-D/x,se=ce.y+We/x,le=((V-E)*D-(se-I)*We)/(Ne*D-Be*We);he=E+Ne*le-ee.x,de=I+Be*le-ee.y;let Z=he*he+de*de;if(Z<=2)return new ue(he,de);Fe=Math.sqrt(Z/2)}else{let R=!1;Ne>Number.EPSILON?We>Number.EPSILON&&(R=!0):Ne<-Number.EPSILON?We<-Number.EPSILON&&(R=!0):Math.sign(Be)===Math.sign(D)&&(R=!0),R?(he=-Be,de=Ne,Fe=Math.sqrt(ct)):(he=Ne,de=Be,Fe=Math.sqrt(ct/2))}return new ue(he/Fe,de/Fe)}let q=[];for(let ee=0,ae=k.length,ce=ae-1,he=ee+1;ee<ae;ee++,ce++,he++)ce===ae&&(ce=0),he===ae&&(he=0),q[ee]=re(k[ee],k[ce],k[he]);let Q=[],ie,Ie=q.concat();for(let ee=0,ae=F;ee<ae;ee++){let ce=U[ee];ie=[];for(let he=0,de=ce.length,Fe=de-1,Ne=he+1;he<de;he++,Fe++,Ne++)Fe===de&&(Fe=0),Ne===de&&(Ne=0),ie[he]=re(ce[he],ce[Fe],ce[Ne]);Q.push(ie),Ie=Ie.concat(ie)}let Ee;if(m===0)Ee=Ri.triangulateShape(k,U);else{let ee=[],ae=[];for(let ce=0;ce<m;ce++){let he=ce/m,de=p*Math.cos(he*Math.PI/2),Fe=g*Math.sin(he*Math.PI/2)+S;for(let Ne=0,Be=k.length;Ne<Be;Ne++){let We=Y(k[Ne],q[Ne],Fe);me(We.x,We.y,-de),he===0&&ee.push(We)}for(let Ne=0,Be=F;Ne<Be;Ne++){let We=U[Ne];ie=Q[Ne];let D=[];for(let ct=0,Qe=We.length;ct<Qe;ct++){let R=Y(We[ct],ie[ct],Fe);me(R.x,R.y,-de),he===0&&D.push(R)}he===0&&ae.push(D)}}Ee=Ri.triangulateShape(ee,ae)}let Ye=Ee.length,je=g+S;for(let ee=0;ee<J;ee++){let ae=u?Y(L[ee],Ie[ee],je):L[ee];y?(C.copy(w.normals[0]).multiplyScalar(ae.x),b.copy(w.binormals[0]).multiplyScalar(ae.y),_.copy(T[0]).add(C).add(b),me(_.x,_.y,_.z)):me(ae.x,ae.y,0)}for(let ee=1;ee<=h;ee++)for(let ae=0;ae<J;ae++){let ce=u?Y(L[ae],Ie[ae],je):L[ae];y?(C.copy(w.normals[ee]).multiplyScalar(ce.x),b.copy(w.binormals[ee]).multiplyScalar(ce.y),_.copy(T[ee]).add(C).add(b),me(_.x,_.y,_.z)):me(ce.x,ce.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){let ae=ee/m,ce=p*Math.cos(ae*Math.PI/2),he=g*Math.sin(ae*Math.PI/2)+S;for(let de=0,Fe=k.length;de<Fe;de++){let Ne=Y(k[de],q[de],he);me(Ne.x,Ne.y,d+ce)}for(let de=0,Fe=U.length;de<Fe;de++){let Ne=U[de];ie=Q[de];for(let Be=0,We=Ne.length;Be<We;Be++){let D=Y(Ne[Be],ie[Be],he);y?me(D.x,D.y+T[h-1].y,T[h-1].x+ce):me(D.x,D.y,d+ce)}}}ot(),K();function ot(){let ee=s.length/3;if(u){let ae=0,ce=J*ae;for(let he=0;he<Ye;he++){let de=Ee[he];ze(de[2]+ce,de[1]+ce,de[0]+ce)}ae=h+m*2,ce=J*ae;for(let he=0;he<Ye;he++){let de=Ee[he];ze(de[0]+ce,de[1]+ce,de[2]+ce)}}else{for(let ae=0;ae<Ye;ae++){let ce=Ee[ae];ze(ce[2],ce[1],ce[0])}for(let ae=0;ae<Ye;ae++){let ce=Ee[ae];ze(ce[0]+J*h,ce[1]+J*h,ce[2]+J*h)}}n.addGroup(ee,s.length/3-ee,0)}function K(){let ee=s.length/3,ae=0;ne(k,ae),ae+=k.length;for(let ce=0,he=U.length;ce<he;ce++){let de=U[ce];ne(de,ae),ae+=de.length}n.addGroup(ee,s.length/3-ee,1)}function ne(ee,ae){let ce=ee.length;for(;--ce>=0;){let he=ce,de=ce-1;de<0&&(de=ee.length-1);for(let Fe=0,Ne=h+m*2;Fe<Ne;Fe++){let Be=J*Fe,We=J*(Fe+1),D=ae+he+Be,ct=ae+de+Be,Qe=ae+de+We,R=ae+he+We;Se(D,ct,Qe,R)}}}function me(ee,ae,ce){c.push(ee),c.push(ae),c.push(ce)}function ze(ee,ae,ce){Ve(ee),Ve(ae),Ve(ce);let he=s.length/3,de=M.generateTopUV(n,s,he-3,he-2,he-1);lt(de[0]),lt(de[1]),lt(de[2])}function Se(ee,ae,ce,he){Ve(ee),Ve(ae),Ve(he),Ve(ae),Ve(ce),Ve(he);let de=s.length/3,Fe=M.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);lt(Fe[0]),lt(Fe[1]),lt(Fe[3]),lt(Fe[1]),lt(Fe[2]),lt(Fe[3])}function Ve(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function lt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yl[s.type]().fromJSON(s)),new i(n,e.options)}},Gf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ue(r,o),new ue(a,c),new ue(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],S=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ue(o,1-c),new ue(l,1-d),new ue(u,1-g),new ue(S,1-f)]:[new ue(a,1-c),new ue(h,1-d),new ue(p,1-g),new ue(m,1-f)]}};function Wf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var pr=class i extends ir{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},mr=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,p=[],g=[],S=[],m=[];for(let f=0;f<h;f++){let M=f*u-o;for(let T=0;T<l;T++){let y=T*d-r;g.push(y,-M,0),S.push(0,0,1),m.push(T/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){let T=M+l*f,y=M+l*(f+1),w=M+1+l*(f+1),b=M+1+l*f;p.push(T,y,b),p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(S,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Zn=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new P,u=new P,p=[],g=[],S=[],m=[];for(let f=0;f<=n;f++){let M=[],T=f/n,y=o+T*a,w=e*Math.cos(y),b=Math.sqrt(e*e-w*w),C=0;f===0&&o===0?C=.5/t:f===n&&c===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){let A=_/t,L=s+A*r;d.x=-b*Math.cos(L),d.y=w,d.z=b*Math.sin(L),g.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(A+C,1-T),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let T=h[f][M+1],y=h[f][M],w=h[f+1][M],b=h[f+1][M+1];(f!==0||o>0)&&p.push(T,y,b),(f!==n-1||c<Math.PI)&&p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(S,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Jn=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new P,p=new P,g=new P;for(let S=0;S<=n;S++){let m=o+S/n*a;for(let f=0;f<=s;f++){let M=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let f=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,T=(s+1)*(S-1)+m,y=(s+1)*S+m;c.push(f,M,y),c.push(M,T,y)}this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ni(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Xh(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Xh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=Ni(i[t]);for(let s in n)e[s]=n[s]}return e}function Xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var zu={clone:Ni,merge:Jt},qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bo=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var gr=class extends $n{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zo=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vo=class extends di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xl:r=e,a=2*t-n;break;case ql:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xl:o=e,c=2*n-t;break;case ql:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),S=g*g,m=S*g,f=-u*m+2*u*S-u*g,M=(1+u)*m+(-1.5-2*u)*S+(-.5+u)*g+1,T=(-1-p)*m+(1.5+p)*S+.5*g,y=p*m-p*S;for(let w=0;w!==a;++w)r[w]=f*o[h+w]+M*o[l+w]+T*o[c+w]+y*o[d+w];return r}},Ho=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Go=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wo=class extends di{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),S=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*S+o[c+m]*g;return r}let u=a*2,p=e-1;for(let g=0;g!==a;++g){let S=o[l+g],m=o[c+g],f=p*u+g*2,M=d[f],T=d[f+1],y=e*u+g*2,w=h[y],b=h[y+1],C=Zf(n,t,M,w,s);r[g]=ku(C,S,T,b,m)}return r}};function ku(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function $f(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Zf(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ku(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=$f(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Vl(e.settings)&&(n.settings={inTangents:Qi(e.settings.inTangents,Array),outTangents:Qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break;case Gl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return po;case this.InterpolantFactoryMethodBezier:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Vl(this.settings)&&(qh(this.settings.inTangents,e),qh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){He("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Kd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===po,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let S=t[d+g];if(S!==t[u+g]||S!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=wo;var fi=class extends un{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=ks;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Xo.prototype.ValueTypeName="color";var qo=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};qo.prototype.ValueTypeName="number";var Yo=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},xr=class extends un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends un{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=ks;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};$o.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vu=new Zo,Jo=class{constructor(e){this.manager=e!==void 0?e:Vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},yr=class extends _r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hl=new _t,Yh=new P,$h=new P,Ko=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ss||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uo=new P,fo=new Dn,Rn=new P,vr=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uo,fo,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,fo,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(uo,fo,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,fo,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new P,Zh=new ue,Jh=new ue,Yt=class extends vr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Zh,Jh),t.subVectors(Jh,Zh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ms=class extends vr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kl=class extends Ko{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Kl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=-90,ts=1,jo=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(es,ts,e,t);s.layers=this.layers,this.add(s);let r=new Yt(es,ts,e,t);r.layers=this.layers,this.add(r);let o=new Yt(es,ts,e,t);o.layers=this.layers,this.add(o);let a=new Yt(es,ts,e,t);a.layers=this.layers,this.add(a);let c=new Yt(es,ts,e,t);c.layers=this.layers,this.add(c);let l=new Yt(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qo=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ec="\\[\\]\\.:\\/",Jf=new RegExp("["+Ec+"]","g"),wc="[^"+Ec+"]",Kf="[^"+Ec.replace("\\.","")+"]",jf=/((?:WC+[\/:])*)/.source.replace("WC",wc),Qf=/(WCOD+)?/.source.replace("WCOD",Kf),ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc),tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc),np=new RegExp("^"+jf+Qf+ep+tp+"$"),ip=["material","materials","bones","map"],jl=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jf,"")}static parseTrackName(e){let t=np.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ip.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;He("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=jl;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x_=new Float32Array(1);var Pc=class Pc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Pc.prototype.isMatrix2=!0;var Ql=Pc;function Tc(i,e,t,n){let s=sp(n);switch(t){case _c:return i*e;case la:return i*e/s.components*s.byteLength;case ca:return i*e/s.components*s.byteLength;case yi:return i*e*2/s.components*s.byteLength;case ha:return i*e*2/s.components*s.byteLength;case yc:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case ua:return i*e*4/s.components*s.byteLength;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:case ma:return Math.max(i,16)*Math.max(e,8)/4;case da:case pa:return Math.max(i,8)*Math.max(e,8)/2;case ga:case xa:case ya:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case Cr:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ir:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sp(i){switch(i){case sn:case pc:return{byteLength:1,components:1};case ys:case mc:case wn:return{byteLength:2,components:1};case oa:case aa:return{byteLength:2,components:4};case En:case ra:case mn:return{byteLength:4,components:1};case gc:case xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cp(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],S=d[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let S=d[p];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:hp,alphahash_pars_fragment:up,alphamap_fragment:dp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:xp,batching_pars_vertex:_p,batching_vertex:yp,begin_vertex:vp,beginnormal_vertex:Mp,bsdfs:Sp,iridescence_fragment:bp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Ip,color_pars_vertex:Pp,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Up,displacementmap_pars_vertex:Fp,displacementmap_vertex:Op,emissivemap_fragment:Bp,emissivemap_pars_fragment:zp,colorspace_fragment:kp,colorspace_pars_fragment:Vp,envmap_fragment:Hp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:nm,envmap_vertex:qp,fog_vertex:Yp,fog_pars_vertex:$p,fog_fragment:Zp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:em,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:sm,lights_phong_fragment:rm,lights_phong_pars_fragment:om,lights_physical_fragment:am,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:hm,lights_fragment_end:um,lightprobes_pars_fragment:dm,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:pm,logdepthbuf_pars_vertex:mm,logdepthbuf_vertex:gm,map_fragment:xm,map_pars_fragment:_m,map_particle_fragment:ym,map_particle_pars_fragment:vm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:bm,morphcolor_vertex:Em,morphnormal_vertex:wm,morphtarget_pars_vertex:Tm,morphtarget_vertex:Am,normal_fragment_begin:Rm,normal_fragment_maps:Cm,normal_pars_fragment:Im,normal_pars_vertex:Pm,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Om,opaque_fragment:Bm,packing:zm,premultiplied_alpha_fragment:km,project_vertex:Vm,dithering_fragment:Hm,dithering_pars_fragment:Gm,roughnessmap_fragment:Wm,roughnessmap_pars_fragment:Xm,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:Ym,shadowmap_vertex:$m,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:Km,skinning_vertex:jm,skinnormal_vertex:Qm,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:og,uv_pars_vertex:ag,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:dg,backgroundCube_frag:fg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:xg,distance_vert:_g,distance_frag:yg,equirect_vert:vg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:bg,meshbasic_vert:Eg,meshbasic_frag:wg,meshlambert_vert:Tg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Ig,meshnormal_frag:Pg,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ng,meshphysical_frag:Ug,meshtoon_vert:Fg,meshtoon_frag:Og,points_vert:Bg,points_frag:zg,shadow_vert:kg,shadow_frag:Vg,sprite_vert:Hg,sprite_frag:Gg},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},zn={basic:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Jt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Jt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Jt([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Jt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Jt([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Jt([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Jt([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Jt([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};zn.physical={uniforms:Jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Xa={r:0,b:0,g:0},Wg=new _t,hd=new Xe;hd.set(-1,0,0,0,1,0,0,0,1);function Xg(i,e,t,n,s,r){let o=new qe(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function p(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let y=M.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(M){let T=!1,y=p(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),T=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,T){let y=p(T);y&&(y.isCubeTexture||y.mapping===br)?(l===void 0&&(l=new pt(new hi(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ni(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hd),l.material.toneMapped=rt.getTransfer(y.colorSpace)!==dt,(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new pt(new mr(2,2),new en({name:"BackgroundMaterial",uniforms:Ni(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(Xa,bc(i)),t.buffers.color.setClear(Xa.r,Xa.g,Xa.b,T,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:S,dispose:f}}function qg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(U,z,X,F,k){let Y=!1,J=d(U,F,X,z);r!==J&&(r=J,l(r.object)),Y=p(U,F,X,k),Y&&g(U,F,X,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(U,z,X,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,z,X,F){let k=F.wireframe===!0,Y=n[z.id];Y===void 0&&(Y={},n[z.id]=Y);let J=U.isInstancedMesh===!0?U.id:0,re=Y[J];re===void 0&&(re={},Y[J]=re);let q=re[X.id];q===void 0&&(q={},re[X.id]=q);let Q=q[k];return Q===void 0&&(Q=u(c()),q[k]=Q),Q}function u(U){let z=[],X=[],F=[];for(let k=0;k<t;k++)z[k]=0,X[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:F,object:U,attributes:{},index:null}}function p(U,z,X,F){let k=r.attributes,Y=z.attributes,J=0,re=X.getAttributes();for(let q in re)if(re[q].location>=0){let ie=k[q],Ie=Y[q];if(Ie===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Ie=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Ie=U.instanceColor)),ie===void 0||ie.attribute!==Ie||Ie&&ie.data!==Ie.data)return!0;J++}return r.attributesNum!==J||r.index!==F}function g(U,z,X,F){let k={},Y=z.attributes,J=0,re=X.getAttributes();for(let q in re)if(re[q].location>=0){let ie=Y[q];ie===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor));let Ie={};Ie.attribute=ie,ie&&ie.data&&(Ie.data=ie.data),k[q]=Ie,J++}r.attributes=k,r.attributesNum=J,r.index=F}function S(){let U=r.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function m(U){f(U,0)}function f(U,z){let X=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;X[U]=1,F[U]===0&&(i.enableVertexAttribArray(U),F[U]=1),k[U]!==z&&(i.vertexAttribDivisor(U,z),k[U]=z)}function M(){let U=r.newAttributes,z=r.enabledAttributes;for(let X=0,F=z.length;X<F;X++)z[X]!==U[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function T(U,z,X,F,k,Y,J){J===!0?i.vertexAttribIPointer(U,z,X,k,Y):i.vertexAttribPointer(U,z,X,F,k,Y)}function y(U,z,X,F){S();let k=F.attributes,Y=X.getAttributes(),J=z.defaultAttributeValues;for(let re in Y){let q=Y[re];if(q.location>=0){let Q=k[re];if(Q===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let ie=Q.normalized,Ie=Q.itemSize,Ee=e.get(Q);if(Ee===void 0)continue;let Ye=Ee.buffer,je=Ee.type,ot=Ee.bytesPerElement,K=je===i.INT||je===i.UNSIGNED_INT||Q.gpuType===ra;if(Q.isInterleavedBufferAttribute){let ne=Q.data,me=ne.stride,ze=Q.offset;if(ne.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)f(q.location+Se,ne.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Se=0;Se<q.locationSize;Se++)T(q.location+Se,Ie/q.locationSize,je,ie,me*ot,(ze+Ie/q.locationSize*Se)*ot,K)}else{if(Q.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)f(q.location+ne,Q.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ne=0;ne<q.locationSize;ne++)m(q.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ne=0;ne<q.locationSize;ne++)T(q.location+ne,Ie/q.locationSize,je,ie,Ie*ot,Ie/q.locationSize*ne*ot,K)}}else if(J!==void 0){let ie=J[re];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(q.location,ie);break;case 3:i.vertexAttrib3fv(q.location,ie);break;case 4:i.vertexAttrib4fv(q.location,ie);break;default:i.vertexAttrib1fv(q.location,ie)}}}}M()}function w(){A();for(let U in n){let z=n[U];for(let X in z){let F=z[X];for(let k in F){let Y=F[k];for(let J in Y)h(Y[J].object),delete Y[J];delete F[k]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let X in z){let F=z[X];for(let k in F){let Y=F[k];for(let J in Y)h(Y[J].object),delete Y[J];delete F[k]}}delete n[U.id]}function C(U){for(let z in n){let X=n[z];for(let F in X){let k=X[F];if(k[U.id]===void 0)continue;let Y=k[U.id];for(let J in Y)h(Y[J].object),delete Y[J];delete k[U.id]}}}function _(U){for(let z in n){let X=n[z],F=U.isInstancedMesh===!0?U.id:0,k=X[F];if(k!==void 0){for(let Y in k){let J=k[Y];for(let re in J)h(J[re].object),delete J[re];delete k[Y]}delete X[F],Object.keys(X).length===0&&delete n[z]}}}function A(){L(),o=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function Yg(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $g(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let _=C===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==sn&&C!==mn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ge("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:b}}function Zg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Mn,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,T=M*4,y=f.clippingState||null;c.value=y,y=h(g,u,T,p);for(let w=0;w!==T;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=c.value,g!==!0||m===null){let f=p+S*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,y=p;T!==S;++T,y+=4)o.copy(d[T]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var Ss=4,Jg=6,Kg=20,jg=256,Pr=new ms,Hu=new qe,Lc=null,Dc=0,Nc=0,Uc=!1,Qg=new P,Ui=new P,Ya=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Qg}=r;Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Dc,Nc),this._renderer.xr.enabled=Uc,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:wn,format:gn,colorSpace:Vs,depthBuffer:!1},s=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=e0(r)),this._blurMaterial=n0(r,e,t),this._ggxMaterial=t0(r,e,t)}return s}_compileMaterial(e){let t=new pt(new Ut,e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,n,s,r){let c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Hu),d.toneMapping=bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new hi,new Un({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,f=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(Hu),f=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let w=this._cubeSize;Ms(s,y*w,T>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(S,c),d.render(e,c)}d.toneMapping=p,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===gi||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Pr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,p=d*u,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-Ss?n-g+Ss:0),f=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Ms(r,m,f,3*S,2*S),s.setRenderTarget(r),s.render(a,Pr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ms(e,m,f,3*S,2*S),s.setRenderTarget(e),s.render(a,Pr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ss?s-this._lodMax+Ss:0),u=4*(this._cubeSize-h);Ms(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(c,Pr)}};function e0(i){let e=[],t=[],n=i,s=i-Ss+1+Jg;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,g=new Float32Array(p*u*d),S=new Float32Array(p*u*d);for(let f=0;f<d;f++){let M=f%3*2/3-1,T=f>2?0:-1,y=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];g.set(y,p*u*f);for(let w=0;w<u;w++){let b=h[w*2]*2-1,C=h[w*2+1]*2-1;f===0?Ui.set(1,C,b):f===1?Ui.set(-b,1,-C):f===2?Ui.set(-b,C,1):f===3?Ui.set(-1,C,-b):f===4?Ui.set(-b,-1,C):Ui.set(b,C,-1),Ui.toArray(S,(f*u+w)*p)}}let m=new Ut;m.setAttribute("position",new $t(g,p)),m.setAttribute("outputDirection",new $t(S,p)),t.push(new pt(m,null)),n>Ss&&n--}return{lodMeshes:t,sizeLods:e}}function Gu(i,e,t){let n=new nn(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function t0(i,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function n0(i,e,t){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:Kg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Wu(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Xu(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $a=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hi(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:On});r.uniforms.tEquirect.value=t;let o=new pt(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Vt),new jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function i0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===na||p===ia)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let S=new $a(g.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",l),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,g=p===na||p===ia,S=p===gi||p===Di;if(g||S){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Ya(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new Ya(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,p){return p===na?u.mapping=gi:p===ia&&(u.mapping=Di),u}function c(u){let p=0,g=6;for(let S=0;S<g;S++)u[S]!==void 0&&p++;return p===g}function l(u){let p=u.target;p.removeEventListener("dispose",l);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function s0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function r0(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function l(d){let u=[],p=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(p!==null){let M=p.array;S=p.version;for(let T=0,y=M.length;T<y;T+=3){let w=M[T+0],b=M[T+1],C=M[T+2];u.push(w,b,b,C,C,w)}}else{let M=g.array;S=g.version;for(let T=0,y=M.length/3-1;T<y;T+=3){let w=T+0,b=T+1,C=T+2;u.push(w,b,b,C,C,w)}}let m=new(g.count>=65535?Js:Zs)(u,1);m.version=S;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function o0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function l(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*o,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function a0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function l0(i,e,t){let n=new WeakMap,s=new At;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let A=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),S===!0&&(T=3);let y=a.attributes.position.count*T,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*w*4*d),C=new Xs(b,y,w,d);C.type=mn,C.needsUpdate=!0;let _=T*4;for(let L=0;L<d;L++){let U=m[L],z=f[L],X=M[L],F=y*w*4*L;for(let k=0;k<U.count;k++){let Y=k*_;p===!0&&(s.fromBufferAttribute(U,k),b[F+Y+0]=s.x,b[F+Y+1]=s.y,b[F+Y+2]=s.z,b[F+Y+3]=0),g===!0&&(s.fromBufferAttribute(z,k),b[F+Y+4]=s.x,b[F+Y+5]=s.y,b[F+Y+6]=s.z,b[F+Y+7]=0),S===!0&&(s.fromBufferAttribute(X,k),b[F+Y+8]=s.x,b[F+Y+9]=s.y,b[F+Y+10]=s.z,b[F+Y+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new ue(y,w)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let S=0;S<l.length;S++)p+=l[S];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function c0(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var h0={[ac]:"LINEAR_TONE_MAPPING",[lc]:"REINHARD_TONE_MAPPING",[cc]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[hc]:"CUSTOM_TONE_MAPPING"};function u0(i,e,t,n,s,r){let o=new nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ut;l.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ft([0,2,0,0,2,0],2));let h=new Bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new pt(l,h),u=new ms(-1,1,1,-1,0,1),p=null,g=null,S=!1,m,f=null,M=[],T=!1;this.setSize=function(y,w){o.setSize(y,w),a!==null&&a.setSize(y,w),c!==null&&c.setSize(y,w);for(let b=0;b<M.length;b++){let C=M[b];C.setSize&&C.setSize(y,w)}},this.setEffects=function(y){M=y,T=M.length>0&&M[0].isRenderPass===!0;let w=o.width,b=o.height;M.length>0&&a===null&&(a=new nn(w,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(w,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let _=M[C];_.setSize&&_.setSize(w,b)}},this.begin=function(y,w){if(S||y.toneMapping===bn&&M.length===0)return!1;if(f=w,w!==null){let b=w.width,C=w.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return T===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=bn,!0},this.hasRenderPass=function(){return T},this.end=function(y,w){y.toneMapping=m,S=!0;let b=o,C=a;for(let _=0;_<M.length;_++){let A=M[_];A.enabled!==!1&&(A.render(y,C,b,w),A.needsSwap!==!1&&(b=C,C=C===a?c:a))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,h.defines={},rt.getTransfer(p)===dt&&(h.defines.SRGB_TRANSFER="");let _=h0[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(f),y.render(d,u),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var ud=new Qt,Bc=new ci(1,1),dd=new Xs,fd=new Co,pd=new er,qu=[],Yu=[],$u=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function Es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ka(i,e){let t=Yu[e];t===void 0&&(t=new Int32Array(e),Yu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function d0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function p0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function g0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Ot(t,n)}}function x0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Ot(t,n)}}function _0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),Ot(t,n)}}function y0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function M0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function b0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function A0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=t.isReversedDepthBuffer()?Wa:Ga,r=Bc):r=ud,t.setTexture2D(e||r,s)}function R0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fd,s)}function C0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pd,s)}function I0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dd,s)}function P0(i){switch(i){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return x0;case 35676:return _0;case 5124:case 35670:return y0;case 35667:case 35671:return v0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return E0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return I0}}function L0(i,e){i.uniform1fv(this.addr,e)}function D0(i,e){let t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function N0(i,e){let t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function U0(i,e){let t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function F0(i,e){let t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function O0(i,e){let t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function B0(i,e){let t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function z0(i,e){i.uniform1iv(this.addr,e)}function k0(i,e){i.uniform2iv(this.addr,e)}function V0(i,e){i.uniform3iv(this.addr,e)}function H0(i,e){i.uniform4iv(this.addr,e)}function G0(i,e){i.uniform1uiv(this.addr,e)}function W0(i,e){i.uniform2uiv(this.addr,e)}function X0(i,e){i.uniform3uiv(this.addr,e)}function q0(i,e){i.uniform4uiv(this.addr,e)}function Y0(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Bc:o=ud;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $0(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fd,r[o])}function Z0(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||pd,r[o])}function J0(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dd,r[o])}function K0(i){switch(i){case 5126:return L0;case 35664:return D0;case 35665:return N0;case 35666:return U0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return k0;case 35668:case 35672:return V0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}var zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P0(t.type)}},kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K0(t.type)}},Vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function j0(i,e,t){let n=i.name,s=n.length;for(Fc.lastIndex=0;;){let r=Fc.exec(n),o=Fc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ku(t,l===void 0?new zc(a,i,e):new kc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Vc(a),Ku(t,d)),t=d}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);j0(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Q0=37297,ex=0;function tx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Qu=new Xe;function nx(i){rt._getMatrix(Qu,rt.workingColorSpace,i);let e=`mat3( ${Qu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Hs:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ed(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tx(i.getShaderSource(e),a)}else return r}function ix(i,e){let t=nx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sx={[ac]:"Linear",[lc]:"Reinhard",[cc]:"Cineon",[Sr]:"ACESFilmic",[uc]:"AgX",[dc]:"Neutral",[hc]:"Custom"};function rx(i,e){let t=sx[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qa=new P;function ox(){rt.getLuminanceCoefficients(qa);let i=qa.x.toFixed(4),e=qa.y.toFixed(4),t=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function lx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Dr(i){return i!==""}function td(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(i){return i.replace(hx,dx)}var ux=new Map;function dx(i,e){let t=Je[e];if(t===void 0){let n=ux.get(e);if(n!==void 0)t=Je[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hc(t)}var fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(fx,px)}function px(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mx={[Mr]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function gx(i){return mx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xx={[gi]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function _x(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yx={[Di]:"ENVMAP_MODE_REFRACTION"};function vx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mx={[oc]:"ENVMAP_BLENDING_MULTIPLY",[xu]:"ENVMAP_BLENDING_MIX",[_u]:"ENVMAP_BLENDING_ADD"};function Sx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mx[i.combine]||"ENVMAP_BLENDING_NONE"}function bx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ex(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=gx(t),l=_x(t),h=vx(t),d=Sx(t),u=bx(t),p=ax(t),g=lx(r),S=s.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dr).join(`
`),f.length>0&&(f+=`
`)):(m=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),f=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Je.tonemapping_pars_fragment:"",t.toneMapping!==bn?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ix("linearToOutputTexel",t.outputColorSpace),ox(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Hc(o),o=td(o,t),o=nd(o,t),a=Hc(a),a=td(a,t),a=nd(a,t),o=id(o),a=id(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=M+m+o,y=M+f+a,w=ju(s,s.VERTEX_SHADER,T),b=ju(s,s.FRAGMENT_SHADER,y);s.attachShader(S,w),s.attachShader(S,b),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(S)||"",X=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(b)||"",k=z.trim(),Y=X.trim(),J=F.trim(),re=!0,q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,w,b);else{let Q=ed(s,w,"vertex"),ie=ed(s,b,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+Q+`
`+ie)}else k!==""?Ge("WebGLProgram: Program Info Log:",k):(Y===""||J==="")&&(q=!1);q&&(U.diagnostics={runnable:re,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(w),s.deleteShader(b),_=new bs(s,S),A=cx(s,S)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,Q0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=b,this}var wx=0,Gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wc(e),t.set(e,n)),n}},Wc=class{constructor(e){this.id=wx++,this.code=e,this.usedTimes=0}};function Tx(i){return i===yi||i===Cr||i===Ir}function Ax(i,e,t,n,s,r){let o=new qs,a=new Gc,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,A,L,U,z,X){let F=U.fog,k=z.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,re=e.get(_.envMap||Y,J),q=re&&re.mapping===br?re.image.height:null,Q=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ie=ie!==void 0?ie.length:0,Ee=0;k.morphAttributes.position!==void 0&&(Ee=1),k.morphAttributes.normal!==void 0&&(Ee=2),k.morphAttributes.color!==void 0&&(Ee=3);let Ye,je,ot,K;if(Q){let vt=zn[Q];Ye=vt.vertexShader,je=vt.fragmentShader}else{Ye=_.vertexShader,je=_.fragmentShader;let vt=a.getVertexShaderStage(_),ht=a.getFragmentShaderStage(_);a.update(_,vt,ht),ot=vt.id,K=ht.id}let ne=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,Se=z.isBatchedMesh===!0,Ve=!!_.map,lt=!!_.matcap,ee=!!re,ae=!!_.aoMap,ce=!!_.lightMap,he=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,Fe=!!_.displacementMap,Ne=!!_.emissiveMap,Be=!!_.metalnessMap,We=!!_.roughnessMap,D=_.anisotropy>0,ct=_.clearcoat>0,Qe=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,E=_.sheen>0,I=_.transmission>0,V=D&&!!_.anisotropyMap,se=ct&&!!_.clearcoatMap,le=ct&&!!_.clearcoatNormalMap,Z=ct&&!!_.clearcoatRoughnessMap,j=x&&!!_.iridescenceMap,fe=x&&!!_.iridescenceThicknessMap,Pe=E&&!!_.sheenColorMap,pe=E&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Ue=!!_.specularColorMap,ke=!!_.specularIntensityMap,$e=I&&!!_.transmissionMap,B=I&&!!_.thicknessMap,xe=!!_.gradientMap,te=!!_.alphaMap,_e=_.alphaTest>0,be=!!_.alphaHash,oe=!!_.extensions,Oe=bn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let Le={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Ye,fragmentShader:je,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Se,batchingColor:Se&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:lt,envMap:ee,envMapMode:ee&&re.mapping,envMapCubeUVHeight:q,aoMap:ae,lightMap:ce,bumpMap:he,normalMap:de,displacementMap:Fe,emissiveMap:Ne,normalMapObjectSpace:de&&_.normalMapType===Mu,normalMapTangentSpace:de&&_.normalMapType===Ha,packedNormalMap:de&&_.normalMapType===Ha&&Tx(_.normalMap.format),metalnessMap:Be,roughnessMap:We,anisotropy:D,anisotropyMap:V,clearcoat:ct,clearcoatMap:se,clearcoatNormalMap:le,clearcoatRoughnessMap:Z,dispersion:Qe,retroreflection:R,iridescence:x,iridescenceMap:j,iridescenceThicknessMap:fe,sheen:E,sheenColorMap:Pe,sheenRoughnessMap:pe,specularMap:ge,specularColorMap:Ue,specularIntensityMap:ke,transmission:I,transmissionMap:$e,thicknessMap:B,gradientMap:xe,opaque:_.transparent===!1&&_.blending===_s&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:_e,alphaHash:be,combine:_.combine,mapUv:Ve&&g(_.map.channel),aoMapUv:ae&&g(_.aoMap.channel),lightMapUv:ce&&g(_.lightMap.channel),bumpMapUv:he&&g(_.bumpMap.channel),normalMapUv:de&&g(_.normalMap.channel),displacementMapUv:Fe&&g(_.displacementMap.channel),emissiveMapUv:Ne&&g(_.emissiveMap.channel),metalnessMapUv:Be&&g(_.metalnessMap.channel),roughnessMapUv:We&&g(_.roughnessMap.channel),anisotropyMapUv:V&&g(_.anisotropyMap.channel),clearcoatMapUv:se&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(_.sheenRoughnessMap.channel),specularMapUv:ge&&g(_.specularMap.channel),specularColorMapUv:Ue&&g(_.specularColorMap.channel),specularIntensityMapUv:ke&&g(_.specularIntensityMap.channel),transmissionMapUv:$e&&g(_.transmissionMap.channel),thicknessMapUv:B&&g(_.thicknessMap.channel),alphaMapUv:te&&g(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(de||D),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Ve||te),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ee,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fn,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)A.push(L),A.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(f(A,_),M(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function T(_){let A=p[_.type],L;if(A){let U=zn[A];L=zu.clone(U.uniforms)}else L=_.uniforms;return L}function y(_,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new Ex(i,A,_,s),l.push(L),h.set(A,L)),L}function w(_){if(--_.usedTimes===0){let A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function C(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:C}}function Rx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function od(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,S,m,f){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:f},i[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=o(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=f),e++,M}function c(u,p,g,S,m,f,M){M.reversedDepth===!0&&(m=-m);let T=a(u,p,g,S,m,f);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(u,p,g,S,m,f){let M=a(u,p,g,S,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||Cx),n.length>1&&n.sort(p||rd),s.length>1&&s.sort(p||rd)}function d(){for(let u=e,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Ix(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new od,i.set(n,[o])):s>=r.length?(o=new od,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Px(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Dx=0;function Nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ux(i){let e=new Px,t=Lx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new _t,o=new _t;function a(l){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let p=0,g=0,S=0,m=0,f=0,M=0,T=0,y=0,w=0,b=0,C=0,_=0,A=0,L=0;l.sort(Nx);for(let z=0,X=l.length;z<X;z++){let F=l[z],k=F.color,Y=F.intensity,J=F.distance,re=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===yi?re=F.shadow.map.texture:re=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=k.r*Y,d+=k.g*Y,u+=k.b*Y;else if(F.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(F.sh.coefficients[q],Y);L++}else if(F.isSunLight){let q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let Q=F.shadow,ie=t.get(F);ie.shadowIntensity=Q.intensity,ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=ie,n.sunShadowMap[g]=re;let Ie=Q.getViewportCount();for(let Ee=0;Ee<Ie;Ee++)n.sunShadowMatrix[S+Ee]=Q.getMatrix(Ee),n.sunShadowCascade[S+Ee]=Q._cascadeData[Ee];S+=Ie,g++}n.sun[p]=q,p++}else if(F.isDirectionalLight){let q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let Q=F.shadow,ie=t.get(F);ie.shadowIntensity=Q.intensity,ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=F.shadow.matrix,w++}n.directional[m]=q,m++}else if(F.isSpotLight){let q=e.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(k).multiplyScalar(Y),q.distance=J,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,n.spot[M]=q;let Q=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,Q.updateMatrices(F),F.castShadow&&A++),n.spotLightMatrix[M]=Q.matrix,F.castShadow){let ie=t.get(F);ie.shadowIntensity=Q.intensity,ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=re,C++}M++}else if(F.isRectAreaLight){let q=e.get(F);q.color.copy(k).multiplyScalar(Y),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),n.rectArea[T]=q,T++}else if(F.isPointLight){let q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),q.distance=F.distance,q.decay=F.decay,F.castShadow){let Q=F.shadow,ie=t.get(F);ie.shadowIntensity=Q.intensity,ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,ie.shadowCameraNear=Q.camera.near,ie.shadowCameraFar=Q.camera.far,n.pointShadow[f]=ie,n.pointShadowMap[f]=re,n.pointShadowMatrix[f]=F.shadow.matrix,b++}n.point[f]=q,f++}else if(F.isHemisphereLight){let q=e.get(F);q.skyColor.copy(F.color).multiplyScalar(Y),q.groundColor.copy(F.groundColor).multiplyScalar(Y),n.hemi[y]=q,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==M||U.rectAreaLength!==T||U.hemiLength!==y||U.numSunShadows!==g||U.numDirectionalShadows!==w||U.numPointShadows!==b||U.numSpotShadows!==C||U.numSpotMaps!==_||U.numLightProbes!==L)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=f,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,U.sunLength=p,U.directionalLength=m,U.pointLength=f,U.spotLength=M,U.rectAreaLength=T,U.hemiLength=y,U.numSunShadows=g,U.numDirectionalShadows=w,U.numPointShadows=b,U.numSpotShadows=C,U.numSpotMaps=_,U.numLightProbes=L,n.version=Dx++)}function c(l,h){let d=0,u=0,p=0,g=0,S=0,m=0,f=h.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let y=l[M];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(y.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(y.isRectAreaLight){let w=n.rectArea[S];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),o.identity(),r.copy(y.matrixWorld),r.premultiply(f),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),S++}else if(y.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:a,setupView:c,state:n}}function ad(i){let e=new Ux(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Fx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ad(i),e.set(s,[a])):r>=o.length?(a=new ad(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],kx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ld=new _t,Lr=new P,Oc=new P;function Vx(i,e,t){let n=new us,s=new ue,r=new ue,o=new At,a=new zo,c=new ko,l={},h=t.maxTextureSize,d={[mi]:Ht,[Ht]:mi,[Fn]:Fn},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let f=this.type;this.render=function(b,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===ta&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);let A=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(On),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=f!==this.type;X&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=b.length;F<k;F++){let Y=b[F],J=Y.shadow;if(J===void 0){Ge("WebGLShadowMap:",Y,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let re=J.getFrameExtents();s.multiply(re),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,J.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=q,J.map===null||X===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===xs){if(Y.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new nn(s.x,s.y,{format:yi,type:wn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),J.map.texture.name=Y.name+".shadowMap",J.map.depthTexture=new ci(s.x,s.y,mn),J.map.depthTexture.name=Y.name+".shadowMapDepth",J.map.depthTexture.format=Pn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=zt,J.map.depthTexture.magFilter=zt}else Y.isPointLight?(J.map=new $a(s.x),J.map.depthTexture=new Po(s.x,En)):(J.map=new nn(s.x,s.y),J.map.depthTexture=new ci(s.x,s.y,En)),J.map.depthTexture.name=Y.name+".shadowMap",J.map.depthTexture.format=Pn,this.type===Mr?(J.map.depthTexture.compareFunction=q?Wa:Ga,J.map.depthTexture.minFilter=Vt,J.map.depthTexture.magFilter=Vt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=zt,J.map.depthTexture.magFilter=zt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Y.isPointLight!==!0&&J.updateMatrices(Y,_);for(let ie=0;ie<Q;ie++){let Ie=J.getCamera(ie);if(Y.isPointLight){let Ee=J.camera,Ye=J.matrix,je=Y.distance||Ee.far;je!==Ee.far&&(Ee.far=je,Ee.updateProjectionMatrix()),Lr.setFromMatrixPosition(Y.matrixWorld),Ee.position.copy(Lr),Oc.copy(Ee.position),Oc.add(zx[ie]),Ee.up.copy(kx[ie]),Ee.lookAt(Oc),Ee.updateMatrixWorld(),Ye.makeTranslation(-Lr.x,-Lr.y,-Lr.z),ld.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),J._frustum.setFromProjectionMatrix(ld,Ee.coordinateSystem,Ee.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(J.map),i.clear());let Ee=J.getViewport(ie);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),z.viewport(o)}n=J.getFrustum(ie),y(C,_,Ie,Y,this.type)}J.isPointLightShadow!==!0&&this.type===xs&&M(J,_),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(A,L,U)};function M(b,C){let _=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new nn(s.x,s.y,{format:yi,type:wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,_,u,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,_,p,S,null)}function T(b,C,_,A){let L=null,U=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)L=U;else if(L=_.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=L.uuid,X=C.uuid,F=l[z];F===void 0&&(F={},l[z]=F);let k=F[X];k===void 0&&(k=L.clone(),F[X]=k,C.addEventListener("dispose",w)),L=k}if(L.visible=C.visible,L.wireframe=C.wireframe,A===xs?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:d[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let z=i.properties.get(L);z.light=_}return L}function y(b,C,_,A,L){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===xs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let X=e.update(b),F=b.material;if(Array.isArray(F)){let k=X.groups;for(let Y=0,J=k.length;Y<J;Y++){let re=k[Y],q=F[re.materialIndex];if(q&&q.visible){let Q=T(b,q,A,L);b.onBeforeShadow(i,b,C,_,X,Q,re),i.renderBufferDirect(_,null,X,Q,b,re),b.onAfterShadow(i,b,C,_,X,Q,re)}}}else if(F.visible){let k=T(b,F,A,L);b.onBeforeShadow(i,b,C,_,X,k,null),i.renderBufferDirect(_,null,X,k,b,null),b.onAfterShadow(i,b,C,_,X,k,null)}}let z=b.children;for(let X=0,F=z.length;X<F;X++)y(z[X],C,_,A,L)}function w(b){b.target.removeEventListener("dispose",w);for(let _ in l){let A=l[_],L=b.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function Hx(i,e){function t(){let B=!1,xe=new At,te=null,_e=new At(0,0,0,0);return{setMask:function(be){te!==be&&!B&&(i.colorMask(be,be,be,be),te=be)},setLocked:function(be){B=be},setClear:function(be,oe,Oe,Le,vt){vt===!0&&(be*=Le,oe*=Le,Oe*=Le),xe.set(be,oe,Oe,Le),_e.equals(xe)===!1&&(i.clearColor(be,oe,Oe,Le),_e.copy(xe))},reset:function(){B=!1,te=null,_e.set(-1,0,0,0)}}}function n(){let B=!1,xe=!1,te=null,_e=null,be=null;return{setReversed:function(oe){if(xe!==oe){let Oe=e.get("EXT_clip_control");oe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),xe=oe;let Le=be;be=null,this.setClear(Le)}},getReversed:function(){return xe},setTest:function(oe){oe?ne(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(oe){te!==oe&&!B&&(i.depthMask(oe),te=oe)},setFunc:function(oe){if(xe&&(oe=Lu[oe]),_e!==oe){switch(oe){case go:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=oe}},setLocked:function(oe){B=oe},setClear:function(oe){be!==oe&&(be=oe,xe&&(oe=1-oe),i.clearDepth(oe))},reset:function(){B=!1,te=null,_e=null,be=null,xe=!1}}}function s(){let B=!1,xe=null,te=null,_e=null,be=null,oe=null,Oe=null,Le=null,vt=null;return{setTest:function(ht){B||(ht?ne(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(ht){xe!==ht&&!B&&(i.stencilMask(ht),xe=ht)},setFunc:function(ht,xn,Tn){(te!==ht||_e!==xn||be!==Tn)&&(i.stencilFunc(ht,xn,Tn),te=ht,_e=xn,be=Tn)},setOp:function(ht,xn,Tn){(oe!==ht||Oe!==xn||Le!==Tn)&&(i.stencilOp(ht,xn,Tn),oe=ht,Oe=xn,Le=Tn)},setLocked:function(ht){B=ht},setClear:function(ht){vt!==ht&&(i.clearStencil(ht),vt=ht)},reset:function(){B=!1,xe=null,te=null,_e=null,be=null,oe=null,Oe=null,Le=null,vt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],S=null,m=!1,f=null,M=null,T=null,y=null,w=null,b=null,C=null,_=new qe(0,0,0),A=0,L=!1,U=null,z=null,X=null,F=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,re=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=re>=2);let Q=null,ie={},Ie=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),Ye=new At().fromArray(Ie),je=new At().fromArray(Ee);function ot(B,xe,te,_e){let be=new Uint8Array(4),oe=i.createTexture();i.bindTexture(B,oe),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<te;Oe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(xe+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return oe}let K={};K[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(is),he(!1),de(ec),ne(i.CULL_FACE),ae(On);function ne(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function me(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ze(B,xe){return u[B]!==xe?(i.bindFramebuffer(B,xe),u[B]=xe,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xe),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Se(B,xe){let te=g,_e=!1;if(B){te=p.get(xe),te===void 0&&(te=[],p.set(xe,te));let be=B.textures;if(te.length!==be.length||te[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Oe=be.length;oe<Oe;oe++)te[oe]=i.COLOR_ATTACHMENT0+oe;te.length=be.length,_e=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,_e=!0);_e&&i.drawBuffers(te)}function Ve(B){return S!==B?(i.useProgram(B),S=B,!0):!1}let lt={[Li]:i.FUNC_ADD,[eu]:i.FUNC_SUBTRACT,[tu]:i.FUNC_REVERSE_SUBTRACT};lt[nu]=i.MIN,lt[iu]=i.MAX;let ee={[su]:i.ZERO,[ru]:i.ONE,[ou]:i.SRC_COLOR,[sc]:i.SRC_ALPHA,[du]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[lu]:i.DST_ALPHA,[au]:i.ONE_MINUS_SRC_COLOR,[rc]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[cu]:i.ONE_MINUS_DST_ALPHA,[fu]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(B,xe,te,_e,be,oe,Oe,Le,vt,ht){if(B===On){m===!0&&(me(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),B!==Qh){if(B!==f||ht!==L){if((M!==Li||w!==Li)&&(i.blendEquation(i.FUNC_ADD),M=Li,w=Li),ht)switch(B){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tc:i.blendFunc(i.ONE,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",B);break}else switch(B){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nc:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",B);break}T=null,y=null,b=null,C=null,_.set(0,0,0),A=0,f=B,L=ht}return}be=be||xe,oe=oe||te,Oe=Oe||_e,(xe!==M||be!==w)&&(i.blendEquationSeparate(lt[xe],lt[be]),M=xe,w=be),(te!==T||_e!==y||oe!==b||Oe!==C)&&(i.blendFuncSeparate(ee[te],ee[_e],ee[oe],ee[Oe]),T=te,y=_e,b=oe,C=Oe),(Le.equals(_)===!1||vt!==A)&&(i.blendColor(Le.r,Le.g,Le.b,vt),_.copy(Le),A=vt),f=B,L=!1}function ce(B,xe){B.side===Fn?me(i.CULL_FACE):ne(i.CULL_FACE);let te=B.side===Ht;xe&&(te=!te),he(te),B.blending===_s&&B.transparent===!1?ae(On):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let _e=B.stencilWrite;a.setTest(_e),_e&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ne(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(B){U!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),U=B)}function de(B){B!==Kh?(ne(i.CULL_FACE),B!==z&&(B===ec?i.cullFace(i.BACK):B===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),z=B}function Fe(B){B!==X&&(J&&i.lineWidth(B),X=B)}function Ne(B,xe,te){B?(ne(i.POLYGON_OFFSET_FILL),(F!==xe||k!==te)&&(F=xe,k=te,o.getReversed()&&(xe=-xe),i.polygonOffset(xe,te))):me(i.POLYGON_OFFSET_FILL)}function Be(B){B?ne(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function We(B){B===void 0&&(B=i.TEXTURE0+Y-1),Q!==B&&(i.activeTexture(B),Q=B)}function D(B,xe,te){te===void 0&&(Q===null?te=i.TEXTURE0+Y-1:te=Q);let _e=ie[te];_e===void 0&&(_e={type:void 0,texture:void 0},ie[te]=_e),(_e.type!==B||_e.texture!==xe)&&(Q!==te&&(i.activeTexture(te),Q=te),i.bindTexture(B,xe||K[B]),_e.type=B,_e.texture=xe)}function ct(){let B=ie[Q];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(B){He("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){He("WebGLState:",B)}}function x(){try{i.texSubImage2D(...arguments)}catch(B){He("WebGLState:",B)}}function E(){try{i.texSubImage3D(...arguments)}catch(B){He("WebGLState:",B)}}function I(){try{i.compressedTexSubImage2D(...arguments)}catch(B){He("WebGLState:",B)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(B){He("WebGLState:",B)}}function se(){try{i.texStorage2D(...arguments)}catch(B){He("WebGLState:",B)}}function le(){try{i.texStorage3D(...arguments)}catch(B){He("WebGLState:",B)}}function Z(){try{i.texImage2D(...arguments)}catch(B){He("WebGLState:",B)}}function j(){try{i.texImage3D(...arguments)}catch(B){He("WebGLState:",B)}}function fe(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Pe(B,xe){d[B]!==xe&&(i.pixelStorei(B,xe),d[B]=xe)}function pe(B){Ye.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ye.copy(B))}function ge(B){je.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),je.copy(B))}function Ue(B,xe){let te=l.get(xe);te===void 0&&(te=new WeakMap,l.set(xe,te));let _e=te.get(B);_e===void 0&&(_e=i.getUniformBlockIndex(xe,B.name),te.set(B,_e))}function ke(B,xe){let _e=l.get(xe).get(B);c.get(xe)!==_e&&(i.uniformBlockBinding(xe,_e,B.__bindingPointIndex),c.set(xe,_e))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,ie={},u={},p=new WeakMap,g=[],S=null,m=!1,f=null,M=null,T=null,y=null,w=null,b=null,C=null,_=new qe(0,0,0),A=0,L=!1,U=null,z=null,X=null,F=null,k=null,Ye.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:me,bindFramebuffer:ze,drawBuffers:Se,useProgram:Ve,setBlending:ae,setMaterial:ce,setFlipSided:he,setCullFace:de,setLineWidth:Fe,setPolygonOffset:Ne,setScissorTest:Be,activeTexture:We,bindTexture:D,unbindTexture:ct,compressedTexImage2D:Qe,compressedTexImage3D:R,texImage2D:Z,texImage3D:j,pixelStorei:Pe,getParameter:fe,updateUBOMapping:Ue,uniformBlockBinding:ke,texStorage2D:se,texStorage3D:le,texSubImage2D:x,texSubImage3D:E,compressedTexSubImage2D:I,compressedTexSubImage3D:V,scissor:pe,viewport:ge,reset:$e}}function Gx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,x){return g?new OffscreenCanvas(R,x):Gs("canvas")}function m(R,x,E){let I=1,V=Qe(R);if((V.width>E||V.height>E)&&(I=E/Math.max(V.width,V.height)),I<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let se=Math.floor(I*V.width),le=Math.floor(I*V.height);u===void 0&&(u=S(se,le));let Z=x?S(se,le):u;return Z.width=se,Z.height=le,Z.getContext("2d").drawImage(R,0,0,se,le),Ge("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+se+"x"+le+")."),Z}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),R;return R}function f(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,x,E,I,V,se=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;I&&(le=e.get("EXT_texture_norm16"),le||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(E===i.FLOAT&&(Z=i.R32F),E===i.HALF_FLOAT&&(Z=i.R16F),E===i.UNSIGNED_BYTE&&(Z=i.R8),E===i.UNSIGNED_SHORT&&le&&(Z=le.R16_EXT),E===i.SHORT&&le&&(Z=le.R16_SNORM_EXT)),x===i.RED_INTEGER&&(E===i.UNSIGNED_BYTE&&(Z=i.R8UI),E===i.UNSIGNED_SHORT&&(Z=i.R16UI),E===i.UNSIGNED_INT&&(Z=i.R32UI),E===i.BYTE&&(Z=i.R8I),E===i.SHORT&&(Z=i.R16I),E===i.INT&&(Z=i.R32I)),x===i.RG&&(E===i.FLOAT&&(Z=i.RG32F),E===i.HALF_FLOAT&&(Z=i.RG16F),E===i.UNSIGNED_BYTE&&(Z=i.RG8),E===i.UNSIGNED_SHORT&&le&&(Z=le.RG16_EXT),E===i.SHORT&&le&&(Z=le.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(E===i.UNSIGNED_BYTE&&(Z=i.RG8UI),E===i.UNSIGNED_SHORT&&(Z=i.RG16UI),E===i.UNSIGNED_INT&&(Z=i.RG32UI),E===i.BYTE&&(Z=i.RG8I),E===i.SHORT&&(Z=i.RG16I),E===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(E===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),E===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),E===i.UNSIGNED_INT&&(Z=i.RGB32UI),E===i.BYTE&&(Z=i.RGB8I),E===i.SHORT&&(Z=i.RGB16I),E===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(E===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),E===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),E===i.UNSIGNED_INT&&(Z=i.RGBA32UI),E===i.BYTE&&(Z=i.RGBA8I),E===i.SHORT&&(Z=i.RGBA16I),E===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(E===i.UNSIGNED_SHORT&&le&&(Z=le.RGB16_EXT),E===i.SHORT&&le&&(Z=le.RGB16_SNORM_EXT),E===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),E===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let j=se?Hs:rt.getTransfer(V);E===i.FLOAT&&(Z=i.RGBA32F),E===i.HALF_FLOAT&&(Z=i.RGBA16F),E===i.UNSIGNED_BYTE&&(Z=j===dt?i.SRGB8_ALPHA8:i.RGBA8),E===i.UNSIGNED_SHORT&&le&&(Z=le.RGBA16_EXT),E===i.SHORT&&le&&(Z=le.RGBA16_SNORM_EXT),E===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),E===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(R,x){let E;return R?x===null||x===En||x===vs?E=i.DEPTH24_STENCIL8:x===mn?E=i.DEPTH32F_STENCIL8:x===ys&&(E=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===En||x===vs?E=i.DEPTH_COMPONENT24:x===mn?E=i.DEPTH_COMPONENT32F:x===ys&&(E=i.DEPTH_COMPONENT16),E}function b(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function C(R){let x=R.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(R){let x=R.target;x.removeEventListener("dispose",_),U(x)}function A(R){let x=n.get(R);if(x.__webglInit===void 0)return;let E=R.source,I=p.get(E);if(I){let V=I[x.__cacheKey];V.usedTimes--,V.usedTimes===0&&L(R),Object.keys(I).length===0&&p.delete(E)}n.remove(R)}function L(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let E=R.source,I=p.get(E);delete I[x.__cacheKey],o.memory.textures--}function U(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(x.__webglFramebuffer[I]))for(let V=0;V<x.__webglFramebuffer[I].length;V++)i.deleteFramebuffer(x.__webglFramebuffer[I][V]);else i.deleteFramebuffer(x.__webglFramebuffer[I]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[I])}else{if(Array.isArray(x.__webglFramebuffer))for(let I=0;I<x.__webglFramebuffer.length;I++)i.deleteFramebuffer(x.__webglFramebuffer[I]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let I=0;I<x.__webglColorRenderbuffer.length;I++)x.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[I]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let E=R.textures;for(let I=0,V=E.length;I<V;I++){let se=n.get(E[I]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(E[I])}n.remove(R)}let z=0;function X(){z=0}function F(){return z}function k(R){z=R}function Y(){let R=z;return R>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function J(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function re(R,x){let E=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&E.__version!==R.version){let I=R.image;if(I===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{me(E,R,x);return}}else R.isExternalTexture&&(E.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,E.__webglTexture,i.TEXTURE0+x)}function q(R,x){let E=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&E.__version!==R.version){me(E,R,x);return}else R.isExternalTexture&&(E.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,E.__webglTexture,i.TEXTURE0+x)}function Q(R,x){let E=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&E.__version!==R.version){me(E,R,x);return}t.bindTexture(i.TEXTURE_3D,E.__webglTexture,i.TEXTURE0+x)}function ie(R,x){let E=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&E.__version!==R.version){ze(E,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+x)}let Ie={[bo]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},Ee={[zt]:i.NEAREST,[yu]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Ye={[bu]:i.NEVER,[Ru]:i.ALWAYS,[Eu]:i.LESS,[Ga]:i.LEQUAL,[wu]:i.EQUAL,[Wa]:i.GEQUAL,[Tu]:i.GREATER,[Au]:i.NOTEQUAL};function je(R,x){if(x.type===mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Vt||x.magFilter===sa||x.magFilter===Er||x.magFilter===xi||x.minFilter===Vt||x.minFilter===sa||x.minFilter===Er||x.minFilter===xi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ie[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ie[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ie[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ee[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ee[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zt||x.minFilter!==Er&&x.minFilter!==xi||x.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let E=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ot(R,x){let E=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",C));let I=x.source,V=p.get(I);V===void 0&&(V={},p.set(I,V));let se=J(x);if(se!==R.__cacheKey){V[se]===void 0&&(V[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,E=!0),V[se].usedTimes++;let le=V[R.__cacheKey];le!==void 0&&(V[R.__cacheKey].usedTimes--,le.usedTimes===0&&L(x)),R.__cacheKey=se,R.__webglTexture=V[se].texture}return E}function K(R,x,E){return Math.floor(Math.floor(R/E)/x)}function ne(R,x,E,I){let se=R.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,E,I,x.data);else{se.sort((Pe,pe)=>Pe.start-pe.start);let le=0;for(let Pe=1;Pe<se.length;Pe++){let pe=se[le],ge=se[Pe],Ue=pe.start+pe.count,ke=K(ge.start,x.width,4),$e=K(pe.start,x.width,4);ge.start<=Ue+1&&ke===$e&&K(ge.start+ge.count-1,x.width,4)===ke?pe.count=Math.max(pe.count,ge.start+ge.count-pe.start):(++le,se[le]=ge)}se.length=le+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Pe=0,pe=se.length;Pe<pe;Pe++){let ge=se[Pe],Ue=Math.floor(ge.start/4),ke=Math.ceil(ge.count/4),$e=Ue%x.width,B=Math.floor(Ue/x.width),xe=ke,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,$e,B,xe,te,E,I,x.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function me(R,x,E){let I=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(I=i.TEXTURE_3D);let V=ot(R,x),se=x.source;t.bindTexture(I,R.__webglTexture,i.TEXTURE0+E);let le=n.get(se);if(se.version!==le.__version||V===!0){if(t.activeTexture(i.TEXTURE0+E),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let te=rt.getPrimaries(rt.workingColorSpace),_e=x.colorSpace===Kn?null:rt.getPrimaries(x.colorSpace),be=x.colorSpace===Kn||te===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let j=m(x.image,!1,s.maxTextureSize);j=ct(x,j);let fe=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type),pe=y(x.internalFormat,fe,Pe,x.normalized,x.colorSpace,x.isVideoTexture);je(I,x);let ge,Ue=x.mipmaps,ke=x.isVideoTexture!==!0,$e=le.__version===void 0||V===!0,B=se.dataReady,xe=b(x,j);if(x.isDepthTexture)pe=w(x.format===_i,x.type),$e&&(ke?t.texStorage2D(i.TEXTURE_2D,1,pe,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,pe,j.width,j.height,0,fe,Pe,null));else if(x.isDataTexture)if(Ue.length>0){ke&&$e&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Ue[0].width,Ue[0].height);for(let te=0,_e=Ue.length;te<_e;te++)ge=Ue[te],ke?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,fe,Pe,ge.data):t.texImage2D(i.TEXTURE_2D,te,pe,ge.width,ge.height,0,fe,Pe,ge.data);x.generateMipmaps=!1}else ke?($e&&t.texStorage2D(i.TEXTURE_2D,xe,pe,j.width,j.height),B&&ne(x,j,fe,Pe)):t.texImage2D(i.TEXTURE_2D,0,pe,j.width,j.height,0,fe,Pe,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ke&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,Ue[0].width,Ue[0].height,j.depth);for(let te=0,_e=Ue.length;te<_e;te++)if(ge=Ue[te],x.format!==gn)if(fe!==null)if(ke){if(B)if(x.layerUpdates.size>0){let be=Tc(ge.width,ge.height,x.format,x.type);for(let oe of x.layerUpdates){let Oe=ge.data.subarray(oe*be/ge.data.BYTES_PER_ELEMENT,(oe+1)*be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,oe,ge.width,ge.height,1,fe,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,j.depth,fe,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,pe,ge.width,ge.height,j.depth,0,ge.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,j.depth,fe,Pe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,pe,ge.width,ge.height,j.depth,0,fe,Pe,ge.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ke&&$e&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Ue[0].width,Ue[0].height);for(let te=0,_e=Ue.length;te<_e;te++)ge=Ue[te],x.format!==gn?fe!==null?ke?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,fe,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,te,pe,ge.width,ge.height,0,ge.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,fe,Pe,ge.data):t.texImage2D(i.TEXTURE_2D,te,pe,ge.width,ge.height,0,fe,Pe,ge.data)}else if(x.isDataArrayTexture)if(ke){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,j.width,j.height,j.depth),B)if(x.layerUpdates.size>0){let te=Tc(j.width,j.height,x.format,x.type);for(let _e of x.layerUpdates){let be=j.data.subarray(_e*te/j.data.BYTES_PER_ELEMENT,(_e+1)*te/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,j.width,j.height,1,fe,Pe,be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,Pe,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,j.width,j.height,j.depth,0,fe,Pe,j.data);else if(x.isData3DTexture)ke?($e&&t.texStorage3D(i.TEXTURE_3D,xe,pe,j.width,j.height,j.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,Pe,j.data)):t.texImage3D(i.TEXTURE_3D,0,pe,j.width,j.height,j.depth,0,fe,Pe,j.data);else if(x.isFramebufferTexture){if($e)if(ke)t.texStorage2D(i.TEXTURE_2D,xe,pe,j.width,j.height);else{let te=j.width,_e=j.height;for(let be=0;be<xe;be++)t.texImage2D(i.TEXTURE_2D,be,pe,te,_e,0,fe,Pe,null),te>>=1,_e>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),j.parentNode!==te){te.appendChild(j),d.add(x),te.onpaint=_e=>{let be=_e.changedElements;for(let oe of d)be.includes(oe.image)&&(oe.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let be=i.RGBA,oe=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,oe,Oe,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ke&&$e){let te=Qe(Ue[0]);t.texStorage2D(i.TEXTURE_2D,xe,pe,te.width,te.height)}for(let te=0,_e=Ue.length;te<_e;te++)ge=Ue[te],ke?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe,Pe,ge):t.texImage2D(i.TEXTURE_2D,te,pe,fe,Pe,ge);x.generateMipmaps=!1}else if(ke){if($e){let te=Qe(j);t.texStorage2D(i.TEXTURE_2D,xe,pe,te.width,te.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Pe,j)}else t.texImage2D(i.TEXTURE_2D,0,pe,fe,Pe,j);f(x)&&M(I),le.__version=se.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ze(R,x,E){if(x.image.length!==6)return;let I=ot(R,x),V=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+E);let se=n.get(V);if(V.version!==se.__version||I===!0){t.activeTexture(i.TEXTURE0+E);let le=rt.getPrimaries(rt.workingColorSpace),Z=x.colorSpace===Kn?null:rt.getPrimaries(x.colorSpace),j=x.colorSpace===Kn||le===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let fe=x.isCompressedTexture||x.image[0].isCompressedTexture,Pe=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let oe=0;oe<6;oe++)!fe&&!Pe?pe[oe]=m(x.image[oe],!0,s.maxCubemapSize):pe[oe]=Pe?x.image[oe].image:x.image[oe],pe[oe]=ct(x,pe[oe]);let ge=pe[0],Ue=r.convert(x.format,x.colorSpace),ke=r.convert(x.type),$e=y(x.internalFormat,Ue,ke,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,xe=se.__version===void 0||I===!0,te=V.dataReady,_e=b(x,ge);je(i.TEXTURE_CUBE_MAP,x);let be;if(fe){B&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,$e,ge.width,ge.height);for(let oe=0;oe<6;oe++){be=pe[oe].mipmaps;for(let Oe=0;Oe<be.length;Oe++){let Le=be[Oe];x.format!==gn?Ue!==null?B?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,$e,Le.width,Le.height,0,Le.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,Le.width,Le.height,Ue,ke,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,$e,Le.width,Le.height,0,Ue,ke,Le.data)}}}else{if(be=x.mipmaps,B&&xe){be.length>0&&_e++;let oe=Qe(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,$e,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Pe){B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,pe[oe].width,pe[oe].height,Ue,ke,pe[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,pe[oe].width,pe[oe].height,0,Ue,ke,pe[oe].data);for(let Oe=0;Oe<be.length;Oe++){let vt=be[Oe].image[oe].image;B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,vt.width,vt.height,Ue,ke,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,$e,vt.width,vt.height,0,Ue,ke,vt.data)}}else{B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,ke,pe[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,Ue,ke,pe[oe]);for(let Oe=0;Oe<be.length;Oe++){let Le=be[Oe];B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,Ue,ke,Le.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,$e,Ue,ke,Le.image[oe])}}}f(x)&&M(i.TEXTURE_CUBE_MAP),se.__version=V.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Se(R,x,E,I,V,se){let le=r.convert(E.format,E.colorSpace),Z=r.convert(E.type),j=y(E.internalFormat,le,Z,E.normalized,E.colorSpace),fe=n.get(x),Pe=n.get(E);if(Pe.__renderTarget=x,!fe.__hasExternalTextures){let pe=Math.max(1,x.width>>se),ge=Math.max(1,x.height>>se);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,se,j,pe,ge,x.depth,0,le,Z,null):t.texImage2D(V,se,j,pe,ge,0,le,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),We(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,V,Pe.__webglTexture,0,Be(x)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,V,Pe.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(R,x,E){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let I=x.depthTexture,V=I&&I.isDepthTexture?I.type:null,se=w(x.stencilBuffer,V),le=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(x),se,x.width,x.height):E?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,R)}else{let I=x.textures;for(let V=0;V<I.length;V++){let se=I[V],le=r.convert(se.format,se.colorSpace),Z=r.convert(se.type),j=y(se.internalFormat,le,Z,se.normalized,se.colorSpace);We(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(x),j,x.width,x.height):E?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(x),j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(R,x,E){let I=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=n.get(x.depthTexture);if(V.__renderTarget=x,(!V.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),I){if(V.__webglInit===void 0&&(V.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),je(i.TEXTURE_CUBE_MAP,x.depthTexture);let fe=r.convert(x.depthTexture.format),Pe=r.convert(x.depthTexture.type),pe;x.depthTexture.format===Pn?pe=i.DEPTH_COMPONENT24:x.depthTexture.format===_i&&(pe=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pe,x.width,x.height,0,fe,Pe,null)}}else re(x.depthTexture,0);let se=V.__webglTexture,le=Be(x),Z=I?i.TEXTURE_CUBE_MAP_POSITIVE_X+E:i.TEXTURE_2D,j=x.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Pn)We(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,se,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,se,0);else if(x.depthTexture.format===_i)We(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,se,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(R){let x=n.get(R),E=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let I=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),I){let V=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,I.removeEventListener("dispose",V)};I.addEventListener("dispose",V),x.__depthDisposeCallback=V}x.__boundDepthTexture=I}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(E)for(let I=0;I<6;I++)lt(x.__webglFramebuffer[I],R,I);else{let I=R.texture.mipmaps;I&&I.length>0?lt(x.__webglFramebuffer[0],R,0):lt(x.__webglFramebuffer,R,0)}else if(E){x.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[I]),x.__webglDepthbuffer[I]===void 0)x.__webglDepthbuffer[I]=i.createRenderbuffer(),Ve(x.__webglDepthbuffer[I],R,!1);else{let V=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,se)}}else{let I=R.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ve(x.__webglDepthbuffer,R,!1);else{let V=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,x,E){let I=n.get(R);x!==void 0&&Se(I.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),E!==void 0&&ee(R)}function ce(R){let x=R.texture,E=n.get(R),I=n.get(x);R.addEventListener("dispose",_);let V=R.textures,se=R.isWebGLCubeRenderTarget===!0,le=V.length>1;if(le||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=x.version,o.memory.textures++),se){E.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){E.__webglFramebuffer[Z]=[];for(let j=0;j<x.mipmaps.length;j++)E.__webglFramebuffer[Z][j]=i.createFramebuffer()}else E.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){E.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)E.__webglFramebuffer[Z]=i.createFramebuffer()}else E.__webglFramebuffer=i.createFramebuffer();if(le)for(let Z=0,j=V.length;Z<j;Z++){let fe=n.get(V[Z]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&We(R)===!1){E.__webglMultisampledFramebuffer=i.createFramebuffer(),E.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let Z=0;Z<V.length;Z++){let j=V[Z];E.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,E.__webglColorRenderbuffer[Z]);let fe=r.convert(j.format,j.colorSpace),Pe=r.convert(j.type),pe=y(j.internalFormat,fe,Pe,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),ge=Be(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,E.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(E.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(E.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),je(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Se(E.__webglFramebuffer[Z][j],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else Se(E.__webglFramebuffer[Z],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let Z=0,j=V.length;Z<j;Z++){let fe=V[Z],Pe=n.get(fe),pe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Pe.__webglTexture),je(pe,fe),Se(E.__webglFramebuffer,R,fe,i.COLOR_ATTACHMENT0+Z,pe,0),f(fe)&&M(pe)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,I.__webglTexture),je(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Se(E.__webglFramebuffer[j],R,x,i.COLOR_ATTACHMENT0,Z,j);else Se(E.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,Z,0);f(x)&&M(Z),t.unbindTexture()}R.depthBuffer&&ee(R)}function he(R){let x=R.textures;for(let E=0,I=x.length;E<I;E++){let V=x[E];if(f(V)){let se=T(R),le=n.get(V).__webglTexture;t.bindTexture(se,le),M(se),t.unbindTexture()}}}let de=[],Fe=[];function Ne(R){if(R.samples>0){if(We(R)===!1){let x=R.textures,E=R.width,I=R.height,V=i.COLOR_BUFFER_BIT,se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(R),Z=x.length>1;if(Z)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let j=R.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[fe]);let Pe=n.get(x[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,E,I,0,0,E,I,V,i.NEAREST),c===!0&&(de.length=0,Fe.length=0,de.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(de.push(se),Fe.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,le.__webglColorRenderbuffer[fe]);let Pe=n.get(x[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Be(R){return Math.min(s.maxSamples,R.samples)}function We(R){let x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(R){let x=o.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function ct(R,x){let E=R.colorSpace,I=R.format,V=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||E!==Vs&&E!==Kn&&(rt.getTransfer(E)===dt?(I!==gn||V!==sn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",E)),x}function Qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=ie,this.rebindTextures=ae,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wx(i,e){function t(n,s=Kn){let r,o=rt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return i.BYTE;if(n===mc)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===_c)return i.ALPHA;if(n===yc)return i.RGB;if(n===gn)return i.RGBA;if(n===Pn)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===la)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===ua)return i.RGBA_INTEGER;if(n===wr||n===Tr||n===Ar||n===Rr)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===fa||n===pa||n===ma)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===xa||n===_a||n===ya||n===va||n===Cr||n===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===xa)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ya)return r.COMPRESSED_R11_EAC;if(n===va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Cr)return r.COMPRESSED_RG11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sa||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Ir||n===Va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:Xx,fragmentShader:qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qc=class extends Ln{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null,S=typeof XRWebGLBinding<"u",m=new Xc,f={},M=t.getContextAttributes(),T=null,y=null,w=[],b=[],C=new ue,_=null,A=null,L=new Yt;L.viewport=new At;let U=new Yt;U.viewport=new At;let z=[L,U],X=new Qo,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=w[K];return ne===void 0&&(ne=new as,w[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=w[K];return ne===void 0&&(ne=new as,w[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=w[K];return ne===void 0&&(ne=new as,w[K]=ne),ne.getHandSpace()};function Y(K){let ne=b.indexOf(K.inputSource);if(ne===-1)return;let me=w[ne];me!==void 0&&(me.update(K.inputSource,K.frame,l||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",re);for(let K=0;K<w.length;K++){let ne=b[K];ne!==null&&(b[K]=null,w[K].disconnect(ne))}F=null,k=null,m.reset();for(let K in f)delete f[K];if(e.setRenderTarget(T),p=null,u=null,d=null,s=null,y=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),A!==null){let K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",J),s.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ze=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?_i:Pn,ze=M.stencil?vs:En);let Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new nn(u.textureWidth,u.textureHeight,{format:gn,type:sn,depthTexture:new ci(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new nn(p.framebufferWidth,p.framebufferHeight,{format:gn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(K){for(let ne=0;ne<K.removed.length;ne++){let me=K.removed[ne],ze=b.indexOf(me);ze>=0&&(b[ze]=null,w[ze].disconnect(me))}for(let ne=0;ne<K.added.length;ne++){let me=K.added[ne],ze=b.indexOf(me);if(ze===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=b.length){b.push(me),ze=Ve;break}else if(b[Ve]===null){b[Ve]=me,ze=Ve;break}if(ze===-1)break}let Se=w[ze];Se&&Se.connect(me)}}let q=new P,Q=new P;function ie(K,ne,me){q.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);let ze=q.distanceTo(Q),Se=ne.projectionMatrix.elements,Ve=me.projectionMatrix.elements,lt=Se[14]/(Se[10]-1),ee=Se[14]/(Se[10]+1),ae=(Se[9]+1)/Se[5],ce=(Se[9]-1)/Se[5],he=(Se[8]-1)/Se[0],de=(Ve[8]+1)/Ve[0],Fe=lt*he,Ne=lt*de,Be=ze/(-he+de),We=Be*-he;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(We),K.translateZ(Be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let D=lt+Be,ct=ee+Be,Qe=Fe-We,R=Ne+(ze-We),x=ae*ee/ct*D,E=ce*ee/ct*D;K.projectionMatrix.makePerspective(Qe,R,x,E,D,ct),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ie(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,me=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(me=m.depthFar)),X.near=U.near=L.near=ne,X.far=U.far=L.far=me,(F!==X.near||k!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,k=X.far),X.layers.mask=K.layers.mask|6,L.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let ze=K.parent,Se=X.cameras;Ie(X,ze);for(let Ve=0;Ve<Se.length;Ve++)Ie(Se[Ve],ze);Se.length===2?ie(X,L,U):X.projectionMatrix.copy(L.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),Ee(K,X,ze)};function Ee(K,ne,me){me===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=To*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(K){return f[K]};let Ye=null;function je(K,ne){if(h=ne.getViewerPose(l||o),g=ne,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ze=!1;me.length!==X.cameras.length&&(X.cameras.length=0,ze=!0);for(let ee=0;ee<me.length;ee++){let ae=me[ee],ce=null;if(p!==null)ce=p.getViewport(ae);else{let de=d.getViewSubImage(u,ae);ce=de.viewport,ee===0&&(e.setRenderTargetTextures(y,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(y))}let he=z[ee];he===void 0&&(he=new Yt,he.layers.enable(ee),he.viewport=new At,z[ee]=he),he.matrix.fromArray(ae.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ae.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ce.x,ce.y,ce.width,ce.height),ee===0&&(X.matrix.copy(he.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ze===!0&&X.cameras.push(he)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let ee=d.getDepthInformation(me[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let ee=0;ee<me.length;ee++){let ae=me[ee].camera;if(ae){let ce=f[ae];ce||(ce=new nr,f[ae]=ce);let he=d.getCameraImage(ae);ce.sourceTexture=he}}}}for(let me=0;me<w.length;me++){let ze=b[me],Se=w[me];ze!==null&&Se!==void 0&&Se.update(ze,ne,l||o)}Ye&&Ye(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let ot=new cd;ot.setAnimationLoop(je),this.setAnimationLoop=function(K){Ye=K},this.dispose=function(){}}},Yx=new _t,md=new Xe;md.set(-1,0,0,0,1,0,0,0,1);function $x(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,bc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,T,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),T=M.envMap,y=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(md),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let b=w.program;n.uniformBlockBinding(y,b)}function l(y,w){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",M));let C=w.program;n.updateUBOMapping(y,C);let _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let w=d();y.__bindingPointIndex=w;let b=i.createBuffer(),C=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let w=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,A=b.length;_<A;_++){let L=b[_];if(Array.isArray(L))for(let U=0,z=L.length;U<z;U++)p(L[U],_,U,C);else p(L,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,w,b,C){if(S(y,w,b,C)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let L=0;for(let U=0;U<A.length;U++){let z=A[U],X=f(z);g(z,y.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function g(y,w,b){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,b)}function S(y,w,b,C){let _=y.value,A=w+"_"+b;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{let L=C[A];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function m(y){let w=y.uniforms,b=0,C=16;for(let A=0,L=w.length;A<L;A++){let U=Array.isArray(w[A])?w[A]:[w[A]];for(let z=0,X=U.length;z<X;z++){let F=U[z],k=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,J=k.length;Y<J;Y++){let re=k[Y],q=f(re),Q=b%C,ie=Q%q.boundary,Ie=Q+ie;b+=ie,Ie!==0&&C-Ie<q.storage&&(b+=C-Ie),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=q.storage}}}let _=b%C;return _>0&&(b+=C-_),y.__size=b,y.__cache={},this}function f(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){let w=y.target;w.removeEventListener("dispose",M);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var Jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function Kx(){return Bn===null&&(Bn=new Qs(Jx,16,16,yi,wn),Bn.name="DFG_LUT",Bn.minFilter=Vt,Bn.magFilter=Vt,Bn.wrapS=In,Bn.wrapT=In,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Za=class{constructor(e={}){let{canvas:t=Cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let S=p,m=new Set([ua,ha,ca]),f=new Set([sn,En,ys,vs,oa,aa]),M=new Uint32Array(4),T=new Int32Array(4),y=new P,w=null,b=null,C=[],_=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,z=null,X=null,F=null,k=null;this._outputColorSpace=qt;let Y=0,J=0,re=null,q=-1,Q=null,ie=new At,Ie=new At,Ee=null,Ye=new qe(0),je=0,ot=t.width,K=t.height,ne=1,me=null,ze=null,Se=new At(0,0,ot,K),Ve=new At(0,0,ot,K),lt=!1,ee=new us,ae=!1,ce=!1,he=new _t,de=new P,Fe=new At,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function We(){return re===null?ne:1}let D=n;function ct(v,O){return t.getContext(v,O)}let Qe,R,x,E,I,V,se,le,Z,j,fe,Pe,pe,ge,Ue,ke,$e,B,xe,te,_e,be,oe;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",xn,!1),D===null){let O="webgl2";if(D=ct(O,v),D===null)throw ct(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(v){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),He("WebGLRenderer: "+v.message),v}function Oe(){Qe=new s0(D),Qe.init(),_e=new Wx(D,Qe),R=new $g(D,Qe,e,_e),x=new Hx(D,Qe),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),X=D.createFramebuffer(),F=D.createFramebuffer(),k=D.createFramebuffer(),E=new a0(D),I=new Rx,V=new Gx(D,Qe,x,I,R,_e,E),se=new i0(L),le=new cp(D),be=new qg(D,le),Z=new r0(D,le,E,be),j=new c0(D,Z,le,be,E),B=new l0(D,R,V),Ue=new Zg(I),fe=new Ax(L,se,Qe,R,be,Ue),Pe=new $x(L,I),pe=new Ix,ge=new Fx(Qe),$e=new Xg(L,se,x,j,g,c),ke=new Vx(L,j,R),oe=new Zx(D,E,R,x),xe=new Yg(D,Qe,E),te=new o0(D,Qe,E),E.programs=fe.programs,L.capabilities=R,L.extensions=Qe,L.properties=I,L.renderLists=pe,L.shadowMap=ke,L.state=x,L.info=E}S!==sn&&(A=new u0(S,t.width,t.height,a,s,r));let Le=new qc(L,D);this.xr=Le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=Qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(v){v!==void 0&&(ne=v,this.setSize(ot,K,!1))},this.getSize=function(v){return v.set(ot,K)},this.setSize=function(v,O,$=!0){if(Le.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=v,K=O,t.width=Math.floor(v*ne),t.height=Math.floor(O*ne),$===!0&&(t.style.width=v+"px",t.style.height=O+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,v,O)},this.getDrawingBufferSize=function(v){return v.set(ot*ne,K*ne).floor()},this.setDrawingBufferSize=function(v,O,$){ot=v,K=O,ne=$,t.width=Math.floor(v*$),t.height=Math.floor(O*$),this.setViewport(0,0,v,O)},this.setEffects=function(v){if(S===sn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let O=0;O<v.length;O++)if(v[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ie)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,O,$,G){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,O,$,G),x.viewport(ie.copy(Se).multiplyScalar(ne).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,O,$,G){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,O,$,G),x.scissor(Ie.copy(Ve).multiplyScalar(ne).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(v){x.setScissorTest(lt=v)},this.setOpaqueSort=function(v){me=v},this.setTransparentSort=function(v){ze=v},this.getClearColor=function(v){return v.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(v=!0,O=!0,$=!0){let G=0;if(v){let W=!1;if(re!==null){let Me=re.texture.format;W=m.has(Me)}if(W){let Me=re.texture.type,Ae=f.has(Me),ve=$e.getClearColor(),Re=$e.getClearAlpha(),De=ve.r,Ze=ve.g,nt=ve.b;Ae?(M[0]=De,M[1]=Ze,M[2]=nt,M[3]=Re,D.clearBufferuiv(D.COLOR,0,M)):(T[0]=De,T[1]=Ze,T[2]=nt,T[3]=Re,D.clearBufferiv(D.COLOR,0,T))}else G|=D.COLOR_BUFFER_BIT}O&&(G|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),$e.dispose(),pe.dispose(),ge.dispose(),I.dispose(),se.dispose(),j.dispose(),be.dispose(),oe.dispose(),fe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",th),Le.removeEventListener("sessionend",nh),vi.stop()};function vt(v){v.preventDefault(),Ws("WebGLRenderer: Context Lost."),U=!0}function ht(){Ws("WebGLRenderer: Context Restored."),U=!1;let v=E.autoReset,O=ke.enabled,$=ke.autoUpdate,G=ke.needsUpdate,W=ke.type;Oe(),E.autoReset=v,ke.enabled=O,ke.autoUpdate=$,ke.needsUpdate=G,ke.type=W}function xn(v){He("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Tn(v){let O=v.target;O.removeEventListener("dispose",Tn),Ld(O)}function Ld(v){Dd(v),I.remove(v)}function Dd(v){let O=I.get(v).programs;O!==void 0&&(O.forEach(function($){fe.releaseProgram($)}),v.isShaderMaterial&&fe.releaseShaderCache(v))}this.renderBufferDirect=function(v,O,$,G,W,Me){O===null&&(O=Ne);let Ae=W.isMesh&&W.matrixWorld.determinantAffine()<0,ve=Fd(v,O,$,G,W);x.setMaterial(G,Ae);let Re=$.index,De=1;if(G.wireframe===!0){if(Re=Z.getWireframeAttribute($),Re===void 0)return;De=2}let Ze=$.drawRange,nt=$.attributes.position,Ce=Ze.start*De,ut=(Ze.start+Ze.count)*De;Me!==null&&(Ce=Math.max(Ce,Me.start*De),ut=Math.min(ut,(Me.start+Me.count)*De)),Re!==null?(Ce=Math.max(Ce,0),ut=Math.min(ut,Re.count)):nt!=null&&(Ce=Math.max(Ce,0),ut=Math.min(ut,nt.count));let Dt=ut-Ce;if(Dt<0||Dt===1/0)return;be.setup(W,G,ve,$,Re);let St,yt=xe;if(Re!==null&&(St=le.get(Re),yt=te,yt.setIndex(St)),W.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*We()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(W.isLine){let Gt=G.linewidth;Gt===void 0&&(Gt=1),x.setLineWidth(Gt*We()),W.isLineSegments?yt.setMode(D.LINES):W.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else W.isPoints?yt.setMode(D.POINTS):W.isSprite&&yt.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Gt=W._multiDrawStarts,Te=W._multiDrawCounts,Kt=W._multiDrawCount,at=Re?le.get(Re).bytesPerElement:1,dn=I.get(G).currentProgram.getUniforms();for(let An=0;An<Kt;An++)dn.setValue(D,"_gl_DrawID",An),yt.render(Gt[An]/at,Te[An])}else if(W.isInstancedMesh)yt.renderInstances(Ce,Dt,W.count);else if($.isInstancedBufferGeometry){let Gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Te=Math.min($.instanceCount,Gt);yt.renderInstances(Ce,Dt,Te)}else yt.render(Ce,Dt)};function eh(v,O,$,G){z!==null&&v.isNodeMaterial&&z.setObject(G,v),ae===!0&&Ue.setState(v,$,!1),v.transparent===!0&&v.side===Fn&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,Fr(v,O,G),v.side=mi,v.needsUpdate=!0,Fr(v,O,G),v.side=Fn):Fr(v,O,G)}this.compile=function(v,O,$=null){$===null&&($=v),z!==null&&z.renderStart(v,O,$),b=ge.get($),b.init(O),_.push(b),$.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),v!==$&&v.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),ce=this.localClippingEnabled,ae=Ue.init(this.clippingPlanes,ce),ae===!0&&Ue.setGlobalState(this.clippingPlanes,O),z!==null&&ke.render(b.state.shadowsArray,$,O);let G=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Me=W.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){let ve=Me[Ae];eh(ve,$,O,W),G.add(ve)}else eh(Me,$,O,W),G.add(Me)}),b=_.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(v,O,$=null){let G=this.compile(v,O,$);return new Promise(W=>{function Me(){if(G.forEach(function(Ae){let Re=I.get(Ae).currentProgram;(Re===void 0||Re.isReady())&&G.delete(Ae)}),G.size===0){W(v);return}setTimeout(Me,10)}Qe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let rl=null;function Nd(v){rl&&rl(v)}function th(){vi.stop()}function nh(){vi.start()}let vi=new cd;vi.setAnimationLoop(Nd),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(v){rl=v,Le.setAnimationLoop(v),v===null?vi.stop():vi.start()},Le.addEventListener("sessionstart",th),Le.addEventListener("sessionend",nh),this.render=function(v,O){if(O!==void 0&&O.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(v,O);let $=Le.enabled===!0&&Le.isPresenting===!0,G=A!==null&&(re===null||$)&&A.begin(L,re);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(O),O=Le.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,O,re),b=ge.get(v,_.length),b.init(O),b.state.textureUnits=V.getTextureUnits(),_.push(b),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(he,Sn,O.reversedDepth),ce=this.localClippingEnabled,ae=Ue.init(this.clippingPlanes,ce),w=pe.get(v,C.length),w.init(),C.push(w),Le.enabled===!0&&Le.isPresenting===!0){let Ae=L.xr.getDepthSensingMesh();Ae!==null&&ol(Ae,O,-1/0,L.sortObjects)}ol(v,O,0,L.sortObjects),w.finish(),z!==null&&z.updateLights(b.state.lightsArray),L.sortObjects===!0&&w.sort(me,ze),Be=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Be&&$e.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ue.beginShadows();let W=b.state.shadowsArray;if(ke.render(W,v,O),ae===!0&&Ue.endShadows(),(G&&A.hasRenderPass())===!1){let Ae=w.opaque,ve=w.transmissive;if(b.setupLights(),O.isArrayCamera){let Re=O.cameras;if(ve.length>0)for(let De=0,Ze=Re.length;De<Ze;De++){let nt=Re[De];sh(Ae,ve,v,nt)}Be&&$e.render(v);for(let De=0,Ze=Re.length;De<Ze;De++){let nt=Re[De];ih(w,v,nt,nt.viewport)}}else ve.length>0&&sh(Ae,ve,v,O),Be&&$e.render(v),ih(w,v,O)}re!==null&&J===0&&(V.updateMultisampleRenderTarget(re),V.updateRenderTargetMipmap(re)),G&&A.end(L),v.isScene===!0&&v.onAfterRender(L,v,O),be.resetDefaultState(),q=-1,Q=null,_.pop(),_.length>0?(b=_[_.length-1],V.setTextureUnits(b.state.textureUnits),ae===!0&&Ue.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,z!==null&&z.renderEnd()};function ol(v,O,$,G){if(v.visible===!1)return;if(v.layers.test(O.layers)){if(v.isGroup)$=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(O);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ee)){G&&Fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(he);let Ae=j.update(v),ve=v.material;ve.visible&&w.push(v,Ae,ve,$,Fe.z,null,O)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ee))){let Ae=j.update(v),ve=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Fe.copy(v.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Fe.copy(Ae.boundingSphere.center)),Fe.applyMatrix4(v.matrixWorld).applyMatrix4(he)),Array.isArray(ve)){let Re=Ae.groups;for(let De=0,Ze=Re.length;De<Ze;De++){let nt=Re[De],Ce=ve[nt.materialIndex];Ce&&Ce.visible&&w.push(v,Ae,Ce,$,Fe.z,nt,O)}}else ve.visible&&w.push(v,Ae,ve,$,Fe.z,null,O)}}let Me=v.children;for(let Ae=0,ve=Me.length;Ae<ve;Ae++)ol(Me[Ae],O,$,G)}function ih(v,O,$,G){let{opaque:W,transmissive:Me,transparent:Ae}=v;b.setupLightsView($),ae===!0&&Ue.setGlobalState(L.clippingPlanes,$),G&&x.viewport(ie.copy(G)),W.length>0&&Ur(W,O,$),Me.length>0&&Ur(Me,O,$),Ae.length>0&&Ur(Ae,O,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function sh(v,O,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Ce=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new nn(1,1,{generateMipmaps:!0,type:Ce?wn:sn,minFilter:xi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Me=b.state.transmissionRenderTarget[G.id],Ae=G.viewport||ie;Me.setSize(Ae.z*L.transmissionResolutionScale,Ae.w*L.transmissionResolutionScale);let ve=L.getRenderTarget(),Re=L.getActiveCubeFace(),De=L.getActiveMipmapLevel();L.setRenderTarget(Me),L.getClearColor(Ye),je=L.getClearAlpha(),je<1&&L.setClearColor(16777215,.5),L.clear(),Be&&$e.render($);let Ze=L.toneMapping;L.toneMapping=bn;let nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),ae===!0&&Ue.setGlobalState(L.clippingPlanes,G),Ur(v,$,G),V.updateMultisampleRenderTarget(Me),V.updateRenderTargetMipmap(Me),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ut=0,Dt=O.length;ut<Dt;ut++){let St=O[ut],{object:yt,geometry:Gt,material:Te,group:Kt}=St;if(Te.side===Fn&&yt.layers.test(G.layers)){let at=Te.side;Te.side=Ht,Te.needsUpdate=!0,rh(yt,$,G,Gt,Te,Kt),Te.side=at,Te.needsUpdate=!0,Ce=!0}}Ce===!0&&(V.updateMultisampleRenderTarget(Me),V.updateRenderTargetMipmap(Me))}L.setRenderTarget(ve,Re,De),L.setClearColor(Ye,je),nt!==void 0&&(G.viewport=nt),L.toneMapping=Ze}function Ur(v,O,$){let G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Me=v.length;W<Me;W++){let Ae=v[W],{object:ve,geometry:Re,group:De}=Ae,Ze=Ae.material;Ze.allowOverride===!0&&G!==null&&(Ze=G),ve.layers.test($.layers)&&rh(ve,O,$,Re,Ze,De)}}function rh(v,O,$,G,W,Me){z!==null&&W.isNodeMaterial&&z.setObject(v,W),v.onBeforeRender(L,O,$,G,W,Me),v.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(L,O,$,G,v,Me),W.transparent===!0&&W.side===Fn&&W.forceSinglePass===!1?(W.side=Ht,W.needsUpdate=!0,L.renderBufferDirect($,O,G,W,v,Me),W.side=mi,W.needsUpdate=!0,L.renderBufferDirect($,O,G,W,v,Me),W.side=Fn):L.renderBufferDirect($,O,G,W,v,Me),v.onAfterRender(L,O,$,G,W,Me)}function Fr(v,O,$){O.isScene!==!0&&(O=Ne);let G=I.get(v),W=b.state.lights,Me=b.state.shadowsArray,Ae=W.state.version,ve=fe.getParameters(v,W.state,Me,O,$,b.state.lightProbeGridArray),Re=fe.getProgramCacheKey(ve),De=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Ze=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=se.get(v.envMap||G.environment,Ze),G.envMapRotation=G.environment!==null&&v.envMap===null?O.environmentRotation:v.envMapRotation,De===void 0&&(v.addEventListener("dispose",Tn),De=new Map,G.programs=De);let nt=De.get(Re);if(nt!==void 0){if(G.currentProgram===nt&&G.lightsStateVersion===Ae)return ah(v,ve),nt}else ve.uniforms=fe.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,$,ve),v.onBeforeCompile(ve,L),nt=fe.acquireProgram(ve,Re),De.set(Re,nt),G.uniforms=ve.uniforms;let Ce=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),ah(v,ve),G.needsLights=Bd(v),G.lightsStateVersion=Ae,G.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.sunLights.value=W.state.sun,Ce.sunLightShadows.value=W.state.sunShadow,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.sunShadowMatrix.value=W.state.sunShadowMatrix,Ce.sunShadowCascade.value=W.state.sunShadowCascade,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=nt,G.uniformsList=null,nt}function oh(v){if(v.uniformsList===null){let O=v.currentProgram.getUniforms();v.uniformsList=bs.seqWithValue(O.seq,v.uniforms)}return v.uniformsList}function ah(v,O){let $=I.get(v);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Ud(v,O){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let $=0,G=v.length;$<G;$++){let W=v[$];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Fd(v,O,$,G,W){O.isScene!==!0&&(O=Ne),V.resetTextureUnits();let Me=O.fog,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,ve=re===null?L.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:rt.workingColorSpace,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=se.get(G.envMap||Ae,Re),Ze=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,nt=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,Dt=!!$.morphAttributes.color,St=bn;G.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(St=L.toneMapping);let yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Gt=yt!==void 0?yt.length:0,Te=I.get(G),Kt=b.state.lights;if(ae===!0&&(ce===!0||v!==Q)){let Mt=v===Q&&G.id===q;Ue.setState(G,v,Mt)}let at=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Kt.state.version||Te.outputColorSpace!==ve||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==De||G.fog===!0&&Te.fog!==Me||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ue.numPlanes||Te.numIntersection!==Ue.numIntersection)||Te.vertexAlphas!==Ze||Te.vertexTangents!==nt||Te.morphTargets!==Ce||Te.morphNormals!==ut||Te.morphColors!==Dt||Te.toneMapping!==St||Te.morphTargetsCount!==Gt||!!Te.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Te.__version=G.version);let dn=Te.currentProgram;at===!0&&(dn=Fr(G,O,W),z&&G.isNodeMaterial&&z.onUpdateProgram(G,dn,Te));let An=!1,jn=!1,Fi=!1,mt=dn.getUniforms(),Pt=Te.uniforms;if(x.useProgram(dn.program)&&(An=!0,jn=!0,Fi=!0),G.id!==q&&(q=G.id,jn=!0),Te.needsLights){let Mt=Ud(b.state.lightProbeGridArray,W);Te.lightProbeGrid!==Mt&&(Te.lightProbeGrid=Mt,jn=!0)}if(An||Q!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",v.projectionMatrix),mt.setValue(D,"viewMatrix",v.matrixWorldInverse);let ei=mt.map.cameraPosition;ei!==void 0&&ei.setValue(D,de.setFromMatrixPosition(v.matrixWorld)),R.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,jn=!0,Fi=!0)}if(Te.needsLights&&(Kt.state.sunShadowMap.length>0&&mt.setValue(D,"sunShadowMap",Kt.state.sunShadowMap,V),Kt.state.directionalShadowMap.length>0&&mt.setValue(D,"directionalShadowMap",Kt.state.directionalShadowMap,V),Kt.state.spotShadowMap.length>0&&mt.setValue(D,"spotShadowMap",Kt.state.spotShadowMap,V),Kt.state.pointShadowMap.length>0&&mt.setValue(D,"pointShadowMap",Kt.state.pointShadowMap,V)),W.isSkinnedMesh){mt.setOptional(D,W,"bindMatrix"),mt.setOptional(D,W,"bindMatrixInverse");let Mt=W.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),mt.setValue(D,"boneTexture",Mt.boneTexture,V))}W.isBatchedMesh&&(mt.setOptional(D,W,"batchingTexture"),mt.setValue(D,"batchingTexture",W._matricesTexture,V),mt.setOptional(D,W,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",W._indirectTexture,V),mt.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",W._colorsTexture,V));let Qn=$.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&B.update(W,$,dn),(jn||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,mt.setValue(D,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Pt.envMapIntensity.value=O.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Kx()),jn){if(mt.setValue(D,"toneMappingExposure",L.toneMappingExposure),Te.needsLights&&Od(Pt,Fi),Me&&G.fog===!0&&Pe.refreshFogUniforms(Pt,Me),Pe.refreshMaterialUniforms(Pt,G,ne,K,b.state.transmissionRenderTarget[v.id]),Te.needsLights&&Te.lightProbeGrid){let Mt=Te.lightProbeGrid;Pt.probesSH.value=Mt.texture,Pt.probesMin.value.copy(Mt.boundingBox.min),Pt.probesMax.value.copy(Mt.boundingBox.max),Pt.probesResolution.value.copy(Mt.resolution)}bs.upload(D,oh(Te),Pt,V)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(bs.upload(D,oh(Te),Pt,V),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(D,"center",W.center),mt.setValue(D,"modelViewMatrix",W.modelViewMatrix),mt.setValue(D,"normalMatrix",W.normalMatrix),mt.setValue(D,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Mt=G.uniformsGroups;for(let ei=0,Oi=Mt.length;ei<Oi;ei++){let ch=Mt[ei];oe.update(ch,dn),oe.bind(ch,dn)}}return dn}function Od(v,O){v.ambientLightColor.needsUpdate=O,v.lightProbe.needsUpdate=O,v.sunLights.needsUpdate=O,v.sunLightShadows.needsUpdate=O,v.directionalLights.needsUpdate=O,v.directionalLightShadows.needsUpdate=O,v.pointLights.needsUpdate=O,v.pointLightShadows.needsUpdate=O,v.spotLights.needsUpdate=O,v.spotLightShadows.needsUpdate=O,v.rectAreaLights.needsUpdate=O,v.hemisphereLights.needsUpdate=O}function Bd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(v,O,$){let G=I.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),I.get(v.texture).__webglTexture=O,I.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,O){let $=I.get(v);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(v,O=0,$=0){re=v,Y=O,J=$;let G=null,W=!1,Me=!1;if(v){let ve=I.get(v);if(ve.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,ve.__webglFramebuffer),ie.copy(v.viewport),Ie.copy(v.scissor),Ee=v.scissorTest,x.viewport(ie),x.scissor(Ie),x.setScissorTest(Ee),q=-1;return}else if(ve.__webglFramebuffer===void 0)V.setupRenderTarget(v);else if(ve.__hasExternalTextures)V.rebindTextures(v,I.get(v.texture).__webglTexture,I.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ze=v.depthTexture;if(ve.__boundDepthTexture!==Ze){if(Ze!==null&&I.has(Ze)&&(v.width!==Ze.image.width||v.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(v)}}let Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Me=!0);let De=I.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[O])?G=De[O][$]:G=De[O],W=!0):v.samples>0&&V.useMultisampledRTT(v)===!1?G=I.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[$]:G=De,ie.copy(v.viewport),Ie.copy(v.scissor),Ee=v.scissorTest}else ie.copy(Se).multiplyScalar(ne).floor(),Ie.copy(Ve).multiplyScalar(ne).floor(),Ee=lt;if($!==0&&(G=X),x.bindFramebuffer(D.FRAMEBUFFER,G)&&x.drawBuffers(v,G),x.viewport(ie),x.scissor(Ie),x.setScissorTest(Ee),W){let ve=I.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,$)}else if(Me){let ve=O;for(let Re=0;Re<v.textures.length;Re++){let De=I.get(v.textures[Re]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Re,De.__webglTexture,$,ve)}}else if(v!==null&&$!==0){let ve=I.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,$)}q=-1};function lh(v){let O=I.get(v);return(O.__readFormat!==v.format||O.__readType!==v.type)&&(O.__readFormat=v.format,O.__readType=v.type,O.__formatReadable=R.textureFormatReadable(v.format),O.__typeReadable=R.textureTypeReadable(v.type)),O}this.readRenderTargetPixels=function(v,O,$,G,W,Me,Ae,ve=0){if(!(v&&v.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=I.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){x.bindFramebuffer(D.FRAMEBUFFER,Re);try{let De=v.textures[ve],Ze=De.format,nt=De.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve);let Ce=lh(De);if(Ce.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=v.width-G&&$>=0&&$<=v.height-W&&D.readPixels(O,$,G,W,_e.convert(Ze),_e.convert(nt),Me)}finally{let De=re!==null?I.get(re).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(v,O,$,G,W,Me,Ae,ve=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=I.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(O>=0&&O<=v.width-G&&$>=0&&$<=v.height-W){x.bindFramebuffer(D.FRAMEBUFFER,Re);let De=v.textures[ve],Ze=De.format,nt=De.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve);let Ce=lh(De);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,Me.byteLength,D.STREAM_READ),D.readPixels(O,$,G,W,_e.convert(Ze),_e.convert(nt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Dt=re!==null?I.get(re).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Dt);let St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Pu(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Me),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ut),D.deleteSync(St),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,O=null,$=0){let G=Math.pow(2,-$),W=Math.floor(v.image.width*G),Me=Math.floor(v.image.height*G),Ae=O!==null?O.x:0,ve=O!==null?O.y:0;V.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Ae,ve,W,Me),x.unbindTexture()},this.copyTextureToTexture=function(v,O,$=null,G=null,W=0,Me=0){let Ae,ve,Re,De,Ze,nt,Ce,ut,Dt,St=v.isCompressedTexture?v.mipmaps[Me]:v.image;if($!==null)Ae=$.max.x-$.min.x,ve=$.max.y-$.min.y,Re=$.isBox3?$.max.z-$.min.z:1,De=$.min.x,Ze=$.min.y,nt=$.isBox3?$.min.z:0;else{let Pt=Math.pow(2,-W);Ae=Math.floor(St.width*Pt),ve=Math.floor(St.height*Pt),v.isDataArrayTexture?Re=St.depth:v.isData3DTexture?Re=Math.floor(St.depth*Pt):Re=1,De=0,Ze=0,nt=0}G!==null?(Ce=G.x,ut=G.y,Dt=G.z):(Ce=0,ut=0,Dt=0);let yt=_e.convert(O.format),Gt=_e.convert(O.type),Te;O.isData3DTexture?(V.setTexture3D(O,0),Te=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(V.setTexture2DArray(O,0),Te=D.TEXTURE_2D_ARRAY):(V.setTexture2D(O,0),Te=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let Kt=x.getParameter(D.UNPACK_ROW_LENGTH),at=x.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=x.getParameter(D.UNPACK_SKIP_PIXELS),An=x.getParameter(D.UNPACK_SKIP_ROWS),jn=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,De),x.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),x.pixelStorei(D.UNPACK_SKIP_IMAGES,nt);let Fi=v.isDataArrayTexture||v.isData3DTexture,mt=O.isDataArrayTexture||O.isData3DTexture;if(v.isDepthTexture){let Pt=I.get(v),Qn=I.get(O),Mt=I.get(Pt.__renderTarget),ei=I.get(Qn.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,Mt.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Oi=0;Oi<Re;Oi++)Fi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,I.get(v).__webglTexture,W,nt+Oi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,I.get(O).__webglTexture,Me,Dt+Oi)),D.blitFramebuffer(De,Ze,Ae,ve,Ce,ut,Ae,ve,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||I.has(v)){let Pt=I.get(v),Qn=I.get(O);x.bindFramebuffer(D.READ_FRAMEBUFFER,F),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let Mt=0;Mt<Re;Mt++)Fi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,W,nt+Mt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,W),mt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qn.__webglTexture,Me,Dt+Mt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qn.__webglTexture,Me),W!==0?D.blitFramebuffer(De,Ze,Ae,ve,Ce,ut,Ae,ve,D.COLOR_BUFFER_BIT,D.NEAREST):mt?D.copyTexSubImage3D(Te,Me,Ce,ut,Dt+Mt,De,Ze,Ae,ve):D.copyTexSubImage2D(Te,Me,Ce,ut,De,Ze,Ae,ve);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mt?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Te,Me,Ce,ut,Dt,Ae,ve,Re,yt,Gt,St.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,Me,Ce,ut,Dt,Ae,ve,Re,yt,St.data):D.texSubImage3D(Te,Me,Ce,ut,Dt,Ae,ve,Re,yt,Gt,St):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Me,Ce,ut,Ae,ve,yt,Gt,St.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Me,Ce,ut,St.width,St.height,yt,St.data):D.texSubImage2D(D.TEXTURE_2D,Me,Ce,ut,Ae,ve,yt,Gt,St);x.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at),x.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),x.pixelStorei(D.UNPACK_SKIP_ROWS,An),x.pixelStorei(D.UNPACK_SKIP_IMAGES,jn),Me===0&&O.generateMipmaps&&D.generateMipmap(Te),x.unbindTexture()},this.initRenderTarget=function(v){I.get(v).__webglFramebuffer===void 0&&V.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?V.setTextureCube(v,0):v.isData3DTexture?V.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?V.setTexture2DArray(v,0):V.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){Y=0,J=0,re=null,x.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};function xd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ut,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=gd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let S=0;S<o[h].length;++S)p.push(o[h][S][u]);let g=gd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function gd(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new $t(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){let S=h.getComponent(u,g);a.setComponent(u+d,g,S)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var N={ink:1055284,ivory:15919831,coral:15696495,scarf:5224646,silver:10213585,navy:2110557,cyan:5691346,violet:9333457,cream:15983815,gold:16107897,brass:13142863,cloud:14282737,leaf:6134904,leafDark:3106398,rust:11096646,glass:9820370},$c=new Map;function Rt(i,e={}){let t=`${i}:${e.emissive||0}:${e.opacity||1}:${e.metalness||0}`;if($c.has(t))return $c.get(t);let n={color:i};e.emissive&&(n.emissive=e.emissive,n.emissiveIntensity=e.emissiveIntensity??.35),e.opacity&&e.opacity<1&&(n.transparent=!0,n.opacity=e.opacity);let s=new gr(n);return s.flatShading=e.flatShading??!0,s.needsUpdate=!0,$c.set(t,s),s}function rn(i,e){return new pt(i,e)}function we(i,e,t,n,s){return rn(new hi(i,e,t),Rt(n,s))}function st(i,e,t,n){let s=rn(new Zn(i,12,8),Rt(e,t));return n&&s.scale.set(...n),s}function Ke(i,e,t,n,s=10,r){return rn(new ui(i,e,t,s),Rt(n,r))}function H(i,e,t,n){return t&&e.position.set(...t),n&&e.rotation.set(...n),i.add(e),e}function Zc(i,e=15841437){H(i,st(.31,e,void 0,[1,1.06,.9]),[0,1.98,0]),H(i,st(.038,N.ink,void 0,[1,1,.5]),[-.105,2.03,-.277]),H(i,st(.038,N.ink,void 0,[1,1,.5]),[.105,2.03,-.277]),H(i,st(.022,14251120),[0,1.91,-.286])}function Jc(i,e,t,n=!1){H(i,we(.72,.78,.44,e),[0,1.25,0]),n&&H(i,rn(new Zt(.58,1.18,6),Rt(e)),[0,1.18,.03],[0,Math.PI,0]),ja(i,-.42,t,-.1),ja(i,.42,t,.1),H(i,rn(new Zt(.16,.42,3),Rt(t)),[-.18,1.51,-.25],[0,0,Math.PI]),H(i,rn(new Zt(.16,.42,3),Rt(t)),[.18,1.51,-.25],[0,0,Math.PI]),H(i,we(.52,.1,.08,N.gold),[0,1.54,-.25]),H(i,we(.08,.42,.035,t),[-.28,1.22,-.24]),H(i,we(.08,.42,.035,t),[.28,1.22,-.24]),Qa(i,-.18),Qa(i,.18)}function ja(i,e,t,n){var r;let s=new tt;s.name=e<0?"arm-left":"arm-right",s.position.set(e,1.49,0),s.rotation.z=n,s.userData.limb=!0,s.userData.side=e<0?-1:1,H(s,we(.13,.34,.16,t),[0,-.16,0]),H(s,st(.105,15841437),[0,-.38,-.02]),i.add(s),(r=i.userData).arms||(r.arms={}),i.userData.arms[e<0?"left":"right"]=s}function Qa(i,e){let t=new tt;t.name=e<0?"leg-left":"leg-right",t.position.set(e,.86,0),t.userData.limb=!0,t.userData.side=e<0?-1:1,H(t,Ke(.13,.14,.84,N.ink,8),[0,-.42,0]),H(t,we(.27,.18,.44,N.ink),[0,-.77,-.08]),i.add(t)}function jx(i){H(i,st(.37,N.coral,void 0,[1.08,.94,1.02]),[0,2.12,.13]),H(i,we(.18,.46,.42,N.coral),[-.33,1.93,0]),H(i,we(.18,.46,.42,N.coral),[.33,1.93,0]);for(let e of[-.2,0,.2])H(i,rn(new Zt(.11,.22,4),Rt(N.coral)),[e,2.26,-.25],[0,0,Math.PI])}function Qx(i){H(i,st(.37,N.silver,void 0,[1.08,.96,1.03]),[0,2.12,.13]),H(i,we(.17,.86,.32,N.silver),[-.34,1.78,.04]),H(i,we(.17,.86,.32,N.silver),[.34,1.78,.04]),H(i,we(.08,.5,.28,N.cyan),[-.38,1.7,-.1]),H(i,we(.08,.5,.28,N.cyan),[.38,1.7,-.1]),H(i,st(.23,N.silver,void 0,[.75,1.2,.72]),[0,1.76,.37]),H(i,Et(.12,.035,N.cyan),[0,1.76,.19])}function e_(i){H(i,st(.4,N.violet,void 0,[1.08,.96,1.04]),[0,2.15,.13]);for(let[e,t,n]of[[-.31,-.15,.13],[.31,-.1,.14],[-.12,-.28,.16],[.12,-.3,.16]])H(i,st(n,N.violet),[e,2.39,t])}function _d(i){let e=new tt;if(e.name=`hero-${i}`,e.userData.heroId=i,i==="mira")Jc(e,N.ivory,N.scarf),jx(e),Zc(e),H(e,we(.75,.11,.12,N.scarf),[0,1.76,-.26],[0,0,-.08]),H(e.userData.arms.right,Ke(.028,.028,.88,N.gold,8),[.06,-.21,-.08],[0,0,-.32]),H(e.userData.arms.right,st(.09,N.coral,{emissive:N.coral,emissiveIntensity:.55}),[.07,.24,-.08]);else if(i==="sena"){Jc(e,N.navy,N.cyan),Qx(e),Zc(e,15578268);let t=new tt;H(e.userData.arms.right,t,[.14,.03,-.08],[0,0,-.45]);let n=new pt(new Jn(.43,.045,6,18,Math.PI),Rt(N.cyan));n.rotation.z=Math.PI/2,t.add(n),H(t,we(.07,.78,.07,N.gold),[0,0,0]),H(t,we(.025,.86,.025,N.ivory),[0,0,-.04])}else{Jc(e,N.cream,N.violet,!0),e_(e),Zc(e,15183252),H(e,Et(.11,.018,N.gold),[-.12,2.04,-.3]),H(e,Et(.11,.018,N.gold),[.12,2.04,-.3]),H(e.userData.arms.right,we(.56,.1,.36,N.ink),[.03,-.19,-.17],[0,-.15,-.12]),H(e.userData.arms.right,we(.48,.035,.3,N.cream),[.03,-.13,-.19],[0,-.15,-.12]);for(let t=-2;t<=2;t++)H(e.userData.arms.right,we(.045,.018,.24,N.gold),[.03+t*.09,-.12,-.22])}return e.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),e}function Et(i,e,t){return rn(new Jn(i,e,6,12),Rt(t))}function Kc(i="sentinel",e=N.rust){let t=new tt;t.name=`enemy-${i}`;let n=i==="bird"?N.ink:i==="wolf"?N.violet:i==="tower"?N.brass:i==="conductor"?N.navy:e,s=(r,o,a,c=N.gold)=>H(t,st(.07,c,{emissive:c,emissiveIntensity:.65}),[r,o,a]);if(i==="bird"){H(t,st(.42,n,void 0,[1.25,.78,.88]),[0,1.05,.04]),H(t,st(.25,N.ink,void 0,[.9,.85,.82]),[0,1.28,-.32]),H(t,rn(new Zt(.17,.46,4),Rt(N.gold)),[0,1.25,-.66],[-Math.PI/2,0,0]);for(let r of[-1,1])H(t,rn(new Zt(.28,.76,4),Rt(r<0?N.brass:N.rust)),[r*.48,1.05,.02],[0,0,r*.55]),H(t,Ke(.055,.07,.42,N.brass,6),[r*.2,.42,.02]),H(t,we(.24,.07,.32,N.gold),[r*.2,.12,-.08]),s(r*.12,1.39,-.55,N.coral);for(let r of[-1,1])H(t,rn(new Zt(.2,.62,4),Rt(N.ink)),[r*.19,.95,.53],[r*.5,0,0])}else if(i==="wolf"){H(t,st(.5,n,void 0,[1.4,.72,.76]),[0,.85,.06]),H(t,st(.31,n,void 0,[1,1,.8]),[.34,1.12,-.36]),H(t,st(.18,N.ink,void 0,[.9,.7,1.2]),[.34,1.04,-.62]);for(let o of[-1,1])H(t,rn(new Zt(.2,.44,4),Rt(n)),[.34+o*.2,1.48,-.38]),s(.23+o*.12,1.22,-.62,N.coral);for(let o of[-.31,.31]){for(let a of[-.03,.32])H(t,Ke(.105,.13,.7,N.ink,7),[o,.35,a]);H(t,we(.26,.12,.38,N.ink),[o,.07,-.12])}let r=Ke(.12,.2,.82,n,7);r.position.set(-.55,.94,.48),r.rotation.x=-.72,t.add(r)}else if(i==="tower"){H(t,Ke(.38,.5,.95,N.brass,8,{metalness:.4}),[0,.78,0]),H(t,st(.27,N.glass,{emissive:N.cyan,emissiveIntensity:.6}),[0,1.42,-.08]);for(let[r,o]of[[-.42,.2],[.42,.2],[0,-.34]]){let a=Ke(.1,.15,.72,N.ink,7);a.position.set(r,.36,o),a.rotation.z=r*.55,t.add(a),H(t,Et(.21,.055,N.gold),[r,.28,o])}for(let[r,o]of[[-.48,0],[0,-.12],[.48,0]])H(t,rn(new Zt(.22,.35,8),Rt(N.gold)),[r,1.18,o]),H(t,Et(.21,.04,N.coral),[r,1.03,o]);for(let r of[-.28,-.09,.1,.29])H(t,Ke(.055,.08,.95+Math.abs(r)*.4,N.ivory,7),[r,1.77,.08]);H(t,Et(.54,.035,N.gold),[0,1.42,0]),H(t,Et(.54,.035,N.cyan),[0,1.42,0],[Math.PI/2,.25,0]),t.scale.setScalar(.95),t.position.y=.06}else if(i==="conductor"){H(t,rn(new Zt(.62,1.38,6),Rt(N.navy)),[0,.87,.02],[0,Math.PI,0]),H(t,we(.62,.12,.42,N.brass,{metalness:.4}),[0,1.45,-.08]),H(t,st(.34,N.ink,void 0,[1,1.05,.82]),[0,1.78,-.02]),H(t,we(.42,.12,.045,N.coral,{emissive:N.coral,emissiveIntensity:.25}),[0,1.78,-.31]);for(let r of[-1,1]){let o=Ke(.1,.13,.8,N.navy,8);o.position.set(r*.58,1.33,0),o.rotation.z=r*1.08,t.add(o),H(t,st(.12,N.brass),[r*.94,1.66,-.02]),H(t,we(.26,.14,.34,N.ink),[r*.2,.14,0])}H(t,Ke(.03,.03,.85,N.gold,7),[.96,1.77,-.08],[0,0,-.3]),H(t,Et(.56,.06,N.gold),[0,2.32,0]),H(t,st(.09,N.coral,{emissive:N.coral,emissiveIntensity:.7}),[0,2.32,0]),t.scale.setScalar(.77)}else{H(t,we(.68,.92,.52,n),[0,.64,0]),H(t,we(.78,.2,.62,N.brass,{metalness:.4}),[0,1.2,0]),H(t,we(.68,.5,.56,N.ink),[0,1.58,0]),H(t,we(.48,.12,.04,N.cyan,{emissive:N.cyan,emissiveIntensity:.9}),[0,1.62,-.3]);for(let r of[-1,1]){H(t,we(.24,.18,.66,N.brass),[r*.52,1.18,0]);let o=Ke(.1,.13,.65,n,8);o.position.set(r*.58,.8,0),o.rotation.z=r*.12,t.add(o),H(t,st(.16,N.gold),[r*.58,.42,-.02]),H(t,Ke(.14,.16,.58,N.ink,7),[r*.2,.32,0]),H(t,we(.28,.12,.4,N.ink),[r*.2,.12,-.08])}H(t,Ke(.12,.12,.34,N.gold,7),[0,2.02,0]),s(-.13,1.64,-.31,N.coral),s(.13,1.64,-.31,N.coral)}return t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),t}function yd(i=N.cyan){let e=new tt;return e.name="district-npc",H(e,we(.55,.72,.38,N.ivory),[0,.95,0]),H(e,st(.29,15841437,void 0,[1,1.08,.9]),[0,1.58,0]),H(e,st(.34,i,void 0,[1.08,.55,1]),[0,1.77,.08]),H(e,we(.62,.08,.1,N.gold),[0,1.79,-.2]),Qa(e,-.14),Qa(e,.14),ja(e,-.36,i,-.08),ja(e,.36,i,.08),e.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),e}function vd(i=N.gold){let e=new tt;return H(e,Ke(.045,.06,.9,N.brass,8),[0,.45,0]),H(e,st(.13,i,{emissive:i,emissiveIntensity:.8}),[0,.95,0]),H(e,Et(.18,.025,N.brass),[0,.95,0],[Math.PI/2,0,0]),e}function Md(i=1,e=!1){let t=new tt;H(t,Ke(.16*i,.25*i,1.25*i,N.brass,7),[0,.62*i,0]);let n=e?N.coral:N.leaf;return H(t,st(.58*i,n,void 0,[1,1.15,.9]),[0,1.45*i,0]),H(t,st(.38*i,e?N.gold:N.leafDark),[.42*i,1.3*i,.05]),t}var t_=(i,e,t)=>(e.position.z=t,i.add(e),e),n_=(i,e,t,n)=>{let s=new fs;return s.moveTo(-i/2,0),s.lineTo(0,t),s.lineTo(i/2,0),s.closePath(),new pt(new fr(s,{depth:e,bevelEnabled:!1}),Rt(n))},i_=(i,e,t,n,s=N.gold,r=1)=>{let o=Et(.31*r,.055*r,s);o.position.set(e,t,n),i.add(o);let a=we(.5*r,.48*r,.035*r,N.glass,{opacity:.82,emissive:N.cyan,emissiveIntensity:.12});a.position.set(e,t-.11*r,n),i.add(a)},bd=(i,e,t,n,s,r,o,a)=>{let c=n_(s,r,o,a);return c.position.set(e,t,n-r/2),i.add(c),c};function s_(i,e,t,n=!1){let s=new tt;s.position.set(e,0,t),H(s,we(3.8,1.8,2.4,N.ivory),[0,1.3,0]),H(s,we(3.82,.34,2.44,N.navy),[0,.62,0]),H(s,Ke(1.26,1.26,3.9,N.coral,10),[0,2.34,0],[0,0,Math.PI/2]);for(let r of[-1.225,1.225]){for(let o of[-1.35,-.45,.45,1.35]){let a=we(.5,.5,.045,N.gold,{emissive:N.gold,emissiveIntensity:.18});a.position.set(o,1.55,r),s.add(a);let c=we(.045,.56,.06,N.ink);c.position.set(o,1.55,r+(r>0?.01:-.01)),s.add(c)}for(let o of[-1.72,1.72])t_(s,we(.12,1.32,.06,N.coral),r+(r>0?.03:-.03)).position.x=o}for(let r of[-1.31,1.31])for(let o of[-1.1,1.1]){let a=Ke(.35,.35,.16,N.ink,12);a.position.set(o,.37,r),a.rotation.x=Math.PI/2,s.add(a)}return n&&(H(s,Ke(.3,.38,.66,N.ink,10),[-.6,2.85,0]),H(s,Ke(.17,.26,.23,N.gold,10),[-.6,3.3,0]),H(s,we(.22,.72,1.9,N.coral),[1.36,1.62,0])),i.add(s),s}function r_(){let i=new tt;i.name="landmark-station";for(let n=0;n<3;n++)s_(i,1+n*4.05,-15,n===0);for(let n of[2.98,7.03])H(i,Ke(.12,.12,.36,N.ink,8),[n,.7,-15],[0,0,Math.PI/2]),H(i,we(.28,.1,.16,N.brass),[n,.7,-15]);H(i,we(10,4,5,N.cream),[-10,2,-13]),bd(i,-10,4,-13,10.8,5.5,2.1,N.coral);for(let n of[-13.6,-11.2,-8.8,-6.4])i_(i,n,2.5,-10.46,N.gold,.9);for(let n of[-11.35,-8.65])H(i,we(1.05,1.8,.12,N.navy),[n,1.02,-10.46]);H(i,we(.08,2.05,.14,N.gold),[-10,1.03,-10.55]),H(i,we(2.4,6.7,2.4,N.cream),[-16.3,3.35,-10.8]),H(i,Ke(1.72,1.72,2.7,N.coral,4),[-16.3,7.15,-10.8],[0,Math.PI/4,0]);let e=new pt(new Ii(.86,28),Rt(N.ivory));e.position.set(-16.3,5.9,-9.53),i.add(e);let t=Et(.9,.1,N.gold);t.position.set(-16.3,5.9,-9.49),i.add(t),H(i,we(.08,.58,.05,N.ink),[-16.3,6.14,-9.42]),H(i,we(.48,.07,.05,N.ink),[-16.08,5.9,-9.42],[0,0,-.35]);for(let[n,s]of[[-20,-3],[-15,-3],[-4,-3],[12,-9]]){H(i,we(2.1,.16,.7,N.rust),[n,.16,s]);for(let r=0;r<4;r++)H(i,st(.11,r%2?N.gold:N.coral),[n-.7+r*.45,.42,s])}for(let[n,s]of[[-5,-1],[12,-8]])H(i,we(1.9,.15,.5,N.brass),[n,.58,s]),H(i,we(.12,.6,.12,N.ink),[n-.75,.28,s]),H(i,we(.12,.6,.12,N.ink),[n+.75,.28,s]);for(let n of[-22,-19,15]){let s=we(2.2,.12,1.2,N.coral);s.position.set(n,2.4,-4),s.rotation.x=-.16,i.add(s),H(i,Ke(.06,.06,1.8,N.brass,7),[n-.8,1.45,-4]),H(i,Ke(.06,.06,1.8,N.brass,7),[n+.8,1.45,-4])}return i}function Sd(i,e,t,n=1){let s=new tt;s.position.set(e,0,t),s.scale.setScalar(n),H(s,we(6,2.8,4,N.glass,{opacity:.34,emissive:N.cyan,emissiveIntensity:.12}),[0,1.55,0]),bd(s,0,2.95,0,6.3,4.3,1.45,N.brass);for(let r of[-2.5,-1.25,0,1.25,2.5])H(s,Ke(.055,.055,3.4,N.brass,6),[r,1.65,-2.03]);for(let r of[-1.5,0,1.5])H(s,we(6.05,.05,.045,N.brass),[0,1.55,r]);i.add(s)}function o_(){let i=new tt;i.name="landmark-gardens",H(i,we(5.2,.16,27,N.glass,{opacity:.85,emissive:N.cyan,emissiveIntensity:.16}),[12,.16,-7]),H(i,we(.9,.5,28,N.ivory),[8.95,.35,-7]),H(i,we(.9,.5,28,N.ivory),[15.05,.35,-7]),Sd(i,-8,-11,1),Sd(i,5,-14,.86);for(let[e,t,n]of[[-22,-12,!1],[-20,12,!0],[20,-12,!1],[22,12,!0],[-2,18,!1]]){let s=Md(1.45,n);s.position.set(e,0,t),i.add(s);for(let r=0;r<5;r++)H(i,st(.1,r%2?N.coral:N.gold),[e-.8+r*.4,.18,t+(r%2?.5:-.5)])}for(let e of[-20,-5,10,20])H(i,we(6,.18,1.35,N.brass),[-4,.35,e]),H(i,we(6.4,.12,.25,N.leafDark),[-4,.52,e-.55]);return i}function a_(i,e,t,n,s,r){let o=new tt;o.position.set(e,t,n),H(o,Et(s,.18,r)),H(o,Ke(.2,.2,.18,N.ink,10),[0,0,.02]);for(let a=0;a<10;a++){let c=we(.22,.42,.22,r);c.position.set(Math.cos(a*Math.PI/5)*s,Math.sin(a*Math.PI/5)*s,0),c.rotation.z=a*Math.PI/5,o.add(c)}return i.add(o),o}function l_(){let i=new tt;i.name="landmark-foundry",H(i,Ke(3.15,3.4,4.2,N.rust,12),[0,2.1,-9]),H(i,Et(3.2,.14,N.brass),[0,1.1,-9]),H(i,Et(3.2,.14,N.brass),[0,3.25,-9]),H(i,st(.78,N.ink,{emissive:N.coral,emissiveIntensity:.65}),[0,1.8,-12.18]);for(let[e,t,n]of[[-7,2.1,2],[7,3.4,2.5],[-8,6,1.35]])a_(i,e,t,-8,n,N.gold);for(let e of[-12,-4,4,12])H(i,Ke(.52,.7,5.8,N.brass,10),[e,2.9,-15]),H(i,Ke(.72,.72,.16,N.ink,10),[e,5.9,-15]);for(let e of[-10,0,10]){let t=Ke(.2,.2,20,N.rust,8);t.rotation.x=Math.PI/2,t.position.set(e,5.5,-3),i.add(t),H(i,Et(.34,.07,N.brass),[e,5.5,-3],[Math.PI/2,0,0])}for(let[e,t]of[[-15,-4],[15,-4],[-13,10],[13,10]])H(i,st(.22,N.coral,{emissive:N.coral,emissiveIntensity:.8}),[e,1.1,t]);return i}function c_(){let i=new tt;i.name="landmark-observatory",H(i,Ke(7,7.5,.85,N.ivory,16),[0,.42,-8]),H(i,Et(6.5,.16,N.gold),[0,.9,-8],[Math.PI/2,0,0]);let e=new tt;e.position.set(0,7,-8),H(e,st(.32,N.gold,{emissive:N.gold,emissiveIntensity:.3})),H(e,Et(2.7,.11,N.gold)),H(e,Et(2.7,.11,N.coral),void 0,[Math.PI/2,.25,0]),H(e,Et(2.7,.11,N.cyan),void 0,[.45,0,.72]),i.add(e);for(let n=0;n<4;n++){let s=n*Math.PI/2+Math.PI/4,r=Math.cos(s)*5.2,o=-8+Math.sin(s)*5.2;H(i,Ke(.22,.3,4.2,N.cream,8),[r,2.65,o]),H(i,Et(1.15,.1,N.coral),[r,4.9,o],[Math.PI/2,0,0])}let t=new tt;t.position.set(-8,3.6,-5),t.rotation.z=-.32,H(t,Ke(.48,.62,5.2,N.navy,10),[0,0,0],[0,0,Math.PI/2]),H(t,Ke(.7,.7,.45,N.gold,10),[2.5,0,0],[0,0,Math.PI/2]),H(t,Ke(.38,.38,1.1,N.cyan,10),[-2.5,0,0],[0,0,Math.PI/2]),i.add(t);for(let[n,s,r]of[[-17,-17,N.cyan],[-12,14,N.violet],[16,-12,N.gold],[18,13,N.cyan],[5,17,N.violet]]){let o=new pt(new pr(.5,0),Rt(r,{emissive:r,emissiveIntensity:.38}));o.position.set(n,.55,s),i.add(o)}return i}function Ed(i=""){return i.includes("station")?r_():i.includes("garden")?o_():i.includes("foundry")?l_():c_()}var Nr=(i,e,t)=>Math.max(e,Math.min(t,i)),jc=(i,e)=>{try{return new qe(i||e)}catch{return new qe(e)}},h_={battle:N.coral,boss:13721176,npc:N.cyan,chest:N.gold,camp:N.leaf,gate:N.ivory,finale:N.violet};function el(i){i&&(i.traverse(e=>{e.geometry&&e.geometry.dispose()}),i.clear())}function Qc(i,e,t,n,s=t){let r=i.clone().add(e).multiplyScalar(.5),o=i.distanceTo(e),a=we(t,s,o,n,{metalness:.18});return a.position.copy(r),a.lookAt(e),a}var tl=class{constructor(e,{onError:t}={}){this.canvas=e,this.onError=t,this.elapsed=0,this.mode="title",this.cameraYaw=.35,this.currentRegion=null,this.campaign=null,this.localWorld=null,this.nodeMeshes=[],this.fx=[],this.heroParty=[],this.enemyParty=[],this.districtIndex=0;try{this.renderer=new Za({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"});let n=this.renderer.getContext(),s=n.getExtension("WEBGL_debug_renderer_info");this.softwareRenderer=/swiftshader|llvmpipe|software/i.test(s?n.getParameter(s.UNMASKED_RENDERER_WEBGL):""),this.maxRenderPixels=this.softwareRenderer?3e5:24e5,this.renderer.setPixelRatio(this.pixelRatio(e.clientWidth||960,e.clientHeight||540)),this.renderer.setSize(e.clientWidth||960,e.clientHeight||540,!1),this.renderer.outputColorSpace=qt,this.renderer.toneMapping=Sr,this.renderer.toneMappingExposure=.88,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ta,this.scene=new $s,this.scene.background=new qe(10275792),this.scene.fog=new Ys(10275792,35,90),this.camera=new Yt(54,16/9,.1,190),this.camera.position.set(0,14,24),this.world=new tt,this.scene.add(this.world),this.actorRoot=new tt,this.world.add(this.actorRoot),this.fxRoot=new tt,this.world.add(this.fxRoot),this.selectionRoot=new tt,this.world.add(this.selectionRoot),this.heroSelection=this.makeSelectionRing(N.cyan),this.targetSelection=this.makeSelectionRing(N.coral),this.selectionRoot.add(this.heroSelection,this.targetSelection),this.addLighting(),this.addSky(),this.addCloudOcean(),this.createHeroes(),this.setMode("title")}catch(n){if(this.onError)this.onError(n);else throw n}}addLighting(){let e=new yr(14678253,2700629,1.05);this.scene.add(e);let t=new gs(16770236,1.9);t.position.set(-12,18,8),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-34,t.shadow.camera.right=34,t.shadow.camera.top=34,t.shadow.camera.bottom=-34,this.scene.add(t);let n=new gs(8640221,1.05);n.position.set(14,7,-14),this.scene.add(n)}addSky(){let e=new Zn(105,24,12),t=new en({uniforms:{top:{value:new qe(3294830)},bottom:{value:new qe(10275792)}},vertexShader:"varying float worldY; void main(){ worldY = (modelMatrix * vec4(position,1.0)).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 bottom; varying float worldY; void main(){ float t = smoothstep(-12.0,55.0,worldY); gl_FragColor = vec4(mix(bottom,top,t),1.0);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,side:Ht,depthWrite:!1,depthTest:!1});this.skyDome=new pt(e,t),this.skyDome.name="sky-gradient",this.scene.add(this.skyDome);let n=new pt(new Ii(3.4,32),new Un({color:16767899,transparent:!0,opacity:.72,depthWrite:!1}));n.position.set(17,24,-46),this.scene.add(n),this.sunDisk=n}addCloudOcean(){let e=new tt;e.name="cloud-ocean";let t=new Zn(3.8,10,6),n=Rt(N.cloud,{opacity:.76,flatShading:!0}),s=new li(t,n,24),r=new Lt;for(let h=0;h<24;h++)r.position.set(h*17.7%90-45,-6.3+h%3*.45,h*29.1%84-42),r.scale.set(1+h%4*.3,.48+h%3*.12,.7+h%5*.16),r.updateMatrix(),s.setMatrixAt(h,r.matrix);s.instanceMatrix.needsUpdate=!0,e.add(s);let o=new li(t,n,16);for(let h=0;h<16;h++)r.position.set(-55+h*23.3%110,-2.2+h%2*.35,-58+h*31.7%116),r.scale.set(1.2+h%3*.35,.32+h%2*.1,.6+h%4*.2),r.updateMatrix(),o.setMatrixAt(h,r.matrix);o.instanceMatrix.needsUpdate=!0,e.add(o),this.scene.add(e),this.cloudGroup=e,this.cloudMesh=s,this.highCloudMesh=o,this.cloudGeometry=t;let a=new tt,c=new ui(1,1,.9,7),l=new li(c,Rt(6524825),7);for(let h=0;h<7;h++)r.position.set(-42+h*15,-2.3+h%2*.6,-24-h%3*7),r.scale.set(2+h%3,1,3.4+h%2),r.updateMatrix(),l.setMatrixAt(h,r.matrix);l.instanceMatrix.needsUpdate=!0,a.add(l),this.scene.add(a),this.farIslands=a}createHeroes(){for(let e of["mira","sena","noa"]){let t=_d(e);t.rotation.y=Math.PI,t.userData.home=t.position.clone(),this.actorRoot.add(t),this.heroParty.push(t)}}makeSelectionRing(e){let t=new pt(new Jn(.62,.035,6,18),new Un({color:e,transparent:!0,opacity:.9}));return t.rotation.x=Math.PI/2,t.visible=!1,t}setRegion(e,t){if(this.campaign=t||this.campaign,this.currentRegion=e,this.districtIndex=Math.max(0,(e&&e.id?[...e.id].reduce((o,a)=>o+a.charCodeAt(0),0):0)%4),this.localWorld&&(this.world.remove(this.localWorld),el(this.localWorld)),this.localWorld=new tt,this.localWorld.name=`district-${e?.id||"unknown"}`,this.world.add(this.localWorld),this.nodeMeshes=[],!e)return;let n=jc(e.palette?.ground,10190955),s=jc(e.palette?.accent,15239794),r=jc(e.palette?.sky,10275792);this.scene.background.copy(r),this.scene.fog&&this.scene.fog.color.copy(r),this.skyDome&&(this.skyDome.material.uniforms.bottom.value.copy(r),this.skyDome.material.uniforms.top.value.copy(r).multiplyScalar(.44)),this.buildIsland(e,n),this.buildPaths(e,n,s),this.buildDistrictDetails(e,n,s),this.batchStaticWorld(),this.buildNodes(e,t),this.updateActorsFromCampaign(t)}buildIsland(e,t){let n=e.bounds||{minX:-28,maxX:28,minZ:-28,maxZ:28},s=n.maxX-n.minX,r=n.maxZ-n.minZ,o=we(s,1.5,r,t.getHex(),{roughness:.92});o.position.set((n.minX+n.maxX)/2,-.8,(n.minZ+n.maxZ)/2),o.receiveShadow=!0,this.localWorld.add(o);let a=we(Math.max(8,s-3.5),.22,Math.max(8,r-3.5),t.getHex());a.position.set((n.minX+n.maxX)/2,-.11,(n.minZ+n.maxZ)/2),a.receiveShadow=!0,this.localWorld.add(a);let c=we(s+1.4,.2,r+1.4,3234152,{opacity:.64});c.position.y=-.22,this.localWorld.add(c);let l=new li(new Zt(.065,.34,4),Rt(3631973),150),h=new Lt;for(let d=0;d<150;d++)h.position.set(n.minX+1.5+d*17%Math.max(4,s-3),.22,n.minZ+1.5+d*23%Math.max(4,r-3)),h.rotation.y=d*.7,h.scale.setScalar(.65+d%4*.12),h.updateMatrix(),l.setMatrixAt(d,h.matrix);l.instanceMatrix.needsUpdate=!0,this.localWorld.add(l);for(let d=0;d<28;d++){let u=2+d%4*1,p=new pt(new sr(u*.5,0),Rt(d%3?5668241:4548728)),g=d%4;p.position.set(g===0?n.minX-.7-d%3*.35:g===1?n.maxX+.7+d%3*.35:n.minX+2+d*13%Math.max(4,s-4),-1.9-d%3*.45,g===2?n.minZ-.7-d%3*.35:g===3?n.maxZ+.7+d%3*.35:n.minZ+2+d*19%Math.max(4,r-4)),p.rotation.set(d*.21,d*.47,d*.13),this.localWorld.add(p)}}buildPaths(e,t,n){let s=e.paths||[];for(let r of s){let o=new P(r.x1,.05,r.z1),a=new P(r.x2,.05,r.z2),c=Qc(o,a,r.width||2.2,10918790,.04);this.localWorld.add(c);let l=o.distanceTo(a),h=Math.atan2(a.x-o.x,a.z-o.z),d=new P(Math.cos(h)*.55,.1,-Math.sin(h)*.55),u=Qc(o.clone().add(d),a.clone().add(d),.065,N.ivory);d.x*=-1,d.z*=-1;let p=Qc(o.clone().add(d),a.clone().add(d),.065,N.ivory);this.localWorld.add(u,p);for(let g=0;g<=l;g+=.9){let S=l?g/l:0,m=we(1.7,.055,.19,N.brass);m.position.lerpVectors(o,a,S),m.position.y=.1,m.rotation.y=h,this.localWorld.add(m)}}}batchStaticWorld(){this.localWorld.updateMatrixWorld(!0);let e=new Map;this.localWorld.traverse(t=>{if(!t.isMesh||t.isInstancedMesh||t.material.transparent||Array.isArray(t.material))return;let n=t.geometry.index?t.geometry.toNonIndexed():t.geometry.clone();n.applyMatrix4(t.matrixWorld),e.has(t.material)||e.set(t.material,[]),e.get(t.material).push({object:t,geometry:n})});for(let[t,n]of e){let s=xd(n.map(o=>o.geometry),!1);if(!s)throw new Error("Static world geometry could not be combined.");let r=new pt(s,t);r.receiveShadow=!0;for(let{object:o,geometry:a}of n)o.removeFromParent(),o.geometry.dispose(),a.dispose();this.localWorld.add(r)}}buildDistrictDetails(e,t,n){let s=e.id||"",r=this.localWorld;r.add(Ed(s));for(let o=0;o<9;o++){let a=Ke(.025,.025,1.8,N.ivory,6);a.position.set(-22+o*5.5,.9,22-o%2*4),r.add(a),H(r,we(.56,.28,.03,o%2?N.cyan:n.getHex()),[-22+o*5.5+.26,1.55,22-o%2*4])}}buildNodes(e,t){for(let n of e.nodes||[]){let s=new tt;s.name=`node-${n.id}`,s.position.set(n.x,0,n.z),s.userData.nodeId=n.id,s.userData.node=n;let r=h_[n.type]||N.ivory;if(H(s,Ke(.36,.48,.25,N.ink,8),[0,.13,0]),n.type==="battle"||n.type==="boss"){H(s,Et(.52,.055,r),[0,.45,0],[Math.PI/2,0,0]);let o=Kc(n.type==="boss"?"tower":"sentinel",r);o.scale.setScalar(.48),o.position.y=.2,H(s,o)}else if(n.type==="npc"){let o=yd(r);o.scale.setScalar(.62),o.position.y=.12,H(s,o)}else if(n.type==="chest"){let o=new tt;H(o,we(.72,.42,.52,N.brass,{metalness:.5}),[0,.36,0]),H(o,we(.76,.1,.55,N.gold,{metalness:.6}),[0,.59,0]),H(o,we(.09,.52,.58,N.ink,{metalness:.4}),[0,.47,0]),H(o,st(.08,N.coral,{emissive:N.coral,emissiveIntensity:.6}),[0,.5,-.31]),H(s,o)}else if(n.type==="camp"){H(s,Et(.68,.1,N.brass),[0,.16,0],[Math.PI/2,0,0]);for(let o of[0,Math.PI/3,Math.PI*2/3]){let a=we(.62,.12,.12,N.rust);a.position.set(Math.cos(o)*.24,.22,Math.sin(o)*.24),a.rotation.y=o,H(s,a)}H(s,st(.16,N.coral,{emissive:N.coral,emissiveIntensity:.8}),[0,.6,0])}else if(n.type==="gate"||n.type==="finale"){let o=new tt;H(o,Ke(.13,.16,2.2,N.ivory,8),[-.72,1.1,0]),H(o,Ke(.13,.16,2.2,N.ivory,8),[.72,1.1,0]),H(o,Et(.74,.09,r),[0,1.62,0],[Math.PI/2,0,0]),H(o,st(.12,r,{emissive:r,emissiveIntensity:.8}),[0,1.62,0]),H(s,o)}else H(s,vd(r));s.userData.hidden=this.isNodeHidden(n,t),s.visible=!s.userData.hidden,this.localWorld.add(s),this.nodeMeshes.push(s)}}isNodeHidden(e,t){return t?e.type==="battle"||e.type==="boss"?(t.cleared||[]).includes(e.id):e.type==="chest"?(t.collected||[]).includes(e.id):!1:!1}setMode(e,t=null){(e==="battle"&&t!==this.battle||this.mode==="battle"&&e!=="battle")&&this.clearEffects(),this.mode=e,this.battle=t,e!=="explore"&&(this.isMoving=!1),e==="battle"?(this.actorRoot.position.set(0,.13,0),this.heroParty.forEach((n,s)=>{n.visible=!0,n.position.set(-2.3+s*2.3,0,3.2),n.rotation.y=0}),this.buildBattleEnemies(t),this.enemyRoot&&(this.enemyRoot.visible=!0),this.camera.position.set(0,7.8,16.5),this.camera.lookAt(0,1.1,0)):e==="title"?(this.enemyRoot&&(this.enemyRoot.visible=!1),this.heroParty.forEach((n,s)=>{n.visible=s===0,n.position.set(-2.2+s*1.3,0,-1.8+s*.5),n.rotation.y=Math.PI}),this.camera.position.set(0,6.3,11),this.camera.lookAt(0,1.5,-3)):e==="ending"?(this.enemyRoot&&(this.enemyRoot.visible=!1),this.heroParty.forEach((n,s)=>{n.visible=!0,n.position.set(-2.4+s*2.4,0,-2),n.rotation.y=0}),this.camera.position.set(0,8.5,15),this.camera.lookAt(0,1.1,-3)):(this.heroParty.forEach(n=>{n.visible=!0}),this.enemyRoot&&(this.enemyRoot.visible=!1),this.heroSelection&&(this.heroSelection.visible=!1),this.targetSelection&&(this.targetSelection.visible=!1),this.updateCamera(0,0,0))}buildBattleEnemies(e){this.enemyRoot&&(this.world.remove(this.enemyRoot),el(this.enemyRoot)),this.enemyRoot=new tt,this.world.add(this.enemyRoot),this.enemyParty=[],(e?.enemies||[]).forEach((t,n)=>{let s=Kc(t.kind,n%2?N.violet:N.rust),r=n===0&&e.encounterId.endsWith("-boss");s.scale.setScalar(r?1.6:1),s.position.set((n-(e.enemies.length-1)/2)*3.4,.13,r?-2.5:-1.4),s.rotation.y=Math.PI,this.enemyRoot.add(s),this.enemyParty.push(s)})}update(e,{campaign:t,battle:n,move:s={x:0,z:0},sprint:r=!1,rotate:o=0,selectedHero:a=0,target:c=0,paused:l=!1,reducedMotion:h=!1}={}){if(l)return;let d=Math.max(0,Math.min(.08,Number(e)||0));if(this.elapsed+=d,this.campaign=t||this.campaign,this.mode==="explore"&&t&&this.currentRegion){this.nodeMeshes.forEach(y=>{let w=y.userData.node;y.userData.hidden=this.isNodeHidden(w,t),y.visible=!y.userData.hidden}),this.cameraYaw+=(Number(o)||0)*d*1.8;let u=Nr(Number(s.x)||0,-1,1),p=Nr(Number(s.z)||0,-1,1),g=Math.hypot(u,p)||1,S=r?8.1:4.7,m=new P(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw)),M=new P(Math.cos(this.cameraYaw),0,-Math.sin(this.cameraYaw)).multiplyScalar(u/g).add(m.multiplyScalar(-p/g)).multiplyScalar(S*d),T=this.currentRegion.bounds||{minX:-28,maxX:28,minZ:-28,maxZ:28};this.isMoving=Math.hypot(u,p)>.05,this.moveVelocity=M,this.isMoving&&(this.travelYaw=Math.atan2(-M.x,-M.z)),t.position.x=Nr((t.position.x||0)+M.x,T.minX+1,T.maxX-1),t.position.z=Nr((t.position.z||0)+M.z,T.minZ+1,T.maxZ-1),this.updateActorsFromCampaign(t),this.isMoving&&this.heroParty.forEach(y=>{y.rotation.y=this.travelYaw}),this.updateCamera(d,M.x,M.z)}else this.mode==="battle"&&(this.updateBattle(d,n),this.updateSelection(a,c));this.animateHeroes(d,h),this.animateClouds(d,h),this.updateFx(d,h),this.mode==="battle"&&this.shake&&!h&&(this.camera.position.x+=Math.sin(this.elapsed*91)*this.shake,this.camera.position.y+=Math.cos(this.elapsed*113)*this.shake*.35)}updateActorsFromCampaign(e){if(!e?.position)return;this.actorRoot.position.set(e.position.x,.13,e.position.z),this.heroParty[0].position.set(0,0,0);let t=this.travelYaw??this.cameraYaw,n=new P(Math.sin(t),0,Math.cos(t)),s=new P(Math.cos(t),0,-Math.sin(t));this.heroParty[1].position.copy(n.clone().multiplyScalar(1.35)).addScaledVector(s,-.72),this.heroParty[2].position.copy(n.clone().multiplyScalar(2.55)).addScaledVector(s,.72),this.heroParty.forEach(r=>{r.userData.moving=!!this.isMoving})}updateCamera(e,t=0,n=0){this.cameraYaw=this.cameraYaw??.35;let s=new P(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw)),r=this.actorRoot.position.clone().addScaledVector(s,2.5).add(new P(0,1.15,0)),o=this.actorRoot.position.clone().add(new P(0,8.5,0)).add(new P(Math.sin(this.cameraYaw)*13,0,Math.cos(this.cameraYaw)*13));this.shake&&o.add(new P(Math.sin(this.elapsed*91)*this.shake,Math.cos(this.elapsed*113)*this.shake*.5,0)),this.camera.position.lerp(o,e?Math.min(1,e*7):1),this.camera.lookAt(r)}animateHeroes(e,t){this.heroParty.forEach((n,s)=>{if(!n.visible)return;let r=this.mode==="battle"&&this.battle?.heroes[s]?.hp<=0,o=this.mode==="explore"&&n.userData.moving,a=this.elapsed*10+s*1.7;n.position.y=o&&!t?Math.abs(Math.sin(a))*.055:0,n.rotation.z=r?Math.PI/2:o&&!t?Math.sin(a)*.018:0,n.traverse(c=>{if(!c.userData?.limb)return;let l=c.userData.side||1,h=c.name.startsWith("arm");c.rotation.x=o&&!t?Math.sin(a)*.38*l*(h?-1:1):0})})}animateClouds(e,t){if(!this.cloudGroup||t||!this.cloudMesh)return;let n=new Lt;for(let s=0;s<24;s++)n.position.set(s*17.7%90-45+this.elapsed*(.12+s%3*.04),-6.3+s%3*.45,s*29.1%84-42),n.position.x>52&&(n.position.x-=104),n.scale.set(1+s%4*.3,.48+s%3*.12,.7+s%5*.16),n.updateMatrix(),this.cloudMesh.setMatrixAt(s,n.matrix);if(this.cloudMesh.instanceMatrix.needsUpdate=!0,this.highCloudMesh){for(let s=0;s<16;s++)n.position.set(-55+s*23.3%110+this.elapsed*.06,-2.2+s%2*.35,-58+s*31.7%116),n.position.x>58&&(n.position.x-=116),n.scale.set(1.2+s%3*.35,.32+s%2*.1,.6+s%4*.2),n.updateMatrix(),this.highCloudMesh.setMatrixAt(s,n.matrix);this.highCloudMesh.instanceMatrix.needsUpdate=!0}}updateBattle(e,t){t&&(this.camera.position.set(0,7.8,16.5),this.camera.lookAt(0,1.1,0),(t.enemies||[]).forEach((n,s)=>{this.enemyParty[s]&&(this.enemyParty[s].visible=n.hp>0,this.enemyParty[s].position.y=n.hp>0?.13+Math.sin(this.elapsed*2+s)*.05:-.2)}))}updateSelection(e=0,t=0){let n=this.heroParty[e]||this.heroParty[0],s=this.enemyParty[t]||this.enemyParty[0];n&&this.heroSelection&&(this.heroSelection.visible=!0,this.heroSelection.position.copy(n.getWorldPosition(new P)).add(new P(0,.08,0)),this.heroSelection.scale.setScalar(1+Math.sin(this.elapsed*4)*.05)),s&&this.targetSelection&&(this.targetSelection.visible=s.visible,this.targetSelection.position.copy(s.getWorldPosition(new P)).add(new P(0,.08,0)),this.targetSelection.scale.setScalar(1+Math.sin(this.elapsed*4+1)*.06))}render(){this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}getNearby(e=this.campaign){if(!this.currentRegion||!e?.position)return null;let t=null,n=2.6*2.6;for(let s of this.currentRegion.nodes||[]){if(this.isNodeHidden(s,e))continue;let r=s.x-e.position.x,o=s.z-e.position.z,a=r*r+o*o;a<=n&&(n=a,t=s)}return t}project(e,t,n){let s=new P(e,t,n).project(this.camera),r=this.canvas.clientWidth||this.canvas.width,o=this.canvas.clientHeight||this.canvas.height;return{x:(s.x+1)*.5*r,y:(1-s.y)*.5*o,visible:s.z>-1&&s.z<1&&Math.abs(s.x)<=1.05&&Math.abs(s.y)<=1.05}}playEvents(e=[]){let t=new Map,n=(s,r,o)=>{if(!s)return;let a=t.get(s)||0;t.set(s,a+1);let c=s.getWorldPosition(new P);c.y+=2.4+a*.55,this.spawnLabel(c,r,o)};for(let s of e){let r=s.side==="enemy",o=Number.isInteger(s.index)?s.index:0,a=r?this.enemyParty[s.source??0]:this.heroParty[s.source??0],c=r?this.heroParty[o]:this.enemyParty[o],l=r?this.enemyParty[o]:this.heroParty[o],h=c?c.getWorldPosition(new P):new P(0,1,0);if(s.type==="hit"){if(n(c,s.amount?`\u2212${s.amount}`:"\uBC29\uC5B4",r?"#ffb6a1":"#fff1c9"),this.spawnBurst(h,r?N.coral:N.gold,9),a&&c){let d=a.getWorldPosition(new P),u=h.sub(d).setY(0).normalize();this.startLunge(a,u)}c&&(c.userData.recoil={time:.2,base:c.position.clone()}),this.shake=.16}else if(s.type==="heal"){let d=l?l.getWorldPosition(new P):new P(0,1,0);this.spawnRing(d,N.leaf,.75),s.amount&&n(l,`+${s.amount}`,"#b2f1ce")}else if(s.type==="shield"){let d=l?l.getWorldPosition(new P):new P(0,1,0);this.spawnRing(d,N.cyan,.9),n(l,`\uC218\uD638 ${s.amount}`,"#b9f4ff")}else s.type==="chord"||s.type==="encore"?(this.spawnRing(new P(0,1.2,0),s.type==="encore"?N.gold:N.violet,1.3),this.spawnLabel(new P(0,4.8,0),s.type==="encore"?"ENCORE":s.note==="break"?"BREAK":"ECHO","#ffe2a8",3.5)):s.type==="victory"?this.spawnBurst(new P(0,1,0),N.gold,24):s.type==="defeat"&&this.spawnBurst(new P(0,1,0),N.rust,14)}}clearEffects(){for(let e of this.fx)e.removeFromParent(),e.isSprite||e.geometry.dispose(),e.material.map?.dispose(),e.material.dispose();this.fx.length=0,this.shake=0;for(let e of[...this.heroParty,...this.enemyParty])delete e.userData.lunge,delete e.userData.recoil}spawnLabel(e,t,n,s=2.2){let r=document.createElement("canvas");r.width=256,r.height=80;let o=r.getContext("2d");o.font='bold 44px "Malgun Gothic", sans-serif',o.textAlign="center",o.textBaseline="middle",o.lineWidth=7,o.strokeStyle="#1b2432",o.strokeText(t,128,40),o.fillStyle=n,o.fillText(t,128,40);let a=new tr(r);a.colorSpace=qt;let c=new js(new cs({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));c.position.copy(e),c.scale.set(s,s*80/256,1),c.userData.fx={life:1.15,max:1.15,velocity:new P(0,.7,0)},this.fxRoot.add(c),this.fx.push(c)}spawnBurst(e,t,n){for(let s=0;s<n;s++){let r=new pt(new Zn(.055,6,4),new Un({color:t,transparent:!0,opacity:1}));r.position.copy(e),r.position.y+=.2,r.userData.fx={life:.7,max:.7,velocity:new P(Math.sin(s*7)*.9,.6+s%3*.25,Math.cos(s*5)*.9)},this.fxRoot.add(r),this.fx.push(r)}}spawnRing(e,t,n){let s=new pt(new Jn(.7,.045,6,16),new Un({color:t,transparent:!0,opacity:1}));s.position.copy(e),s.position.y+=.25,s.userData.fx={life:.8,max:.8,ring:!0,speed:n},this.fxRoot.add(s),this.fx.push(s)}startLunge(e,t){e.userData.lunge={time:.24,base:e.position.clone(),direction:t.clone()}}updateFx(e,t){this.shake=Math.max(0,(this.shake||0)-e*1.8);for(let n=this.fx.length-1;n>=0;n--){let s=this.fx[n],r=s.userData.fx;if(r.life-=e,r.ring){let o=t?1:1+(1-r.life/r.max)*r.speed;s.scale.setScalar(o)}else t||(s.position.addScaledVector(r.velocity,e),r.velocity.y-=1.5*e);s.material.opacity=Nr(r.life/r.max,0,1),r.life<=0&&(this.fxRoot.remove(s),s.isSprite||s.geometry.dispose(),s.material.map?.dispose(),s.material.dispose(),this.fx.splice(n,1))}for(let n of[...this.heroParty,...this.enemyParty]){let s=n.userData.lunge;if(s){s.time-=e;let o=Math.sin(Math.max(0,s.time)/.24*Math.PI)*.65;n.position.copy(s.base).addScaledVector(s.direction,o),s.time<=0&&delete n.userData.lunge}let r=n.userData.recoil;r&&(r.time-=e,n.position.y=r.base.y+Math.sin(Math.max(0,r.time)/.2*Math.PI)*.12,r.time<=0&&(n.position.copy(r.base),delete n.userData.recoil))}}pixelRatio(e,t){return Math.min(1.5,globalThis.devicePixelRatio||1,Math.sqrt(this.maxRenderPixels/Math.max(1,e*t)))}resize(){if(!this.renderer)return;let e=this.canvas.clientWidth||960,t=this.canvas.clientHeight||540;this.renderer.setPixelRatio(this.pixelRatio(e,t)),this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix()}getStats(){return{drawcalls:this.renderer?.info?.render?.calls||0,triangles:this.renderer?.info?.render?.triangles||0,geometries:this.renderer?.info?.memory?.geometries||0,textures:this.renderer?.info?.memory?.textures||0,width:this.canvas.width,height:this.canvas.height,softwareRenderer:this.softwareRenderer}}dispose(){this.localWorld&&el(this.localWorld),this.enemyRoot&&el(this.enemyRoot),this.renderer&&this.renderer.dispose()}};var et=(i,e=document)=>e.querySelector(i),wd={ember:"\uBD88\uAF43",tide:"\uD30C\uB3C4",star:"\uBCC4\uBE5B"};function wt(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Td(i){return`<img class="portrait" src="${wt(i.portrait||`assets/${i.id}.webp`)}" alt="${wt(i.name)} \uCD08\uC0C1" onerror="this.classList.add('missing')">`}var nl=class{constructor(e=document){this.root=e,this.app=et("#app",e),this.screen="title",this.handlers=new Map,this.app.addEventListener("click",t=>{let n=t.target.closest("[data-action]");if(!n||n.disabled)return;let s=n.dataset.action,r=this.handlers.get(s);r&&(t.preventDefault(),r(n,t))})}on(e,t){return this.handlers.set(e,t),this}show(e){this.screen=e,this.app.dataset.screen=e;for(let n of this.root.querySelectorAll("[data-screen]"))n.classList.toggle("hidden",n.dataset.screen!==e);let t=et("#game",this.root);t&&t.setAttribute("aria-hidden",e==="title"||e==="dialogue"?"true":"false")}title(e){let t=et("#continue-button",this.root);t&&t.classList.toggle("hidden",!e);let n=et("#save-copy",this.root);n&&(n.textContent=e?`\uAE30\uB85D ${e.regionName||""} \xB7 ${e.playSeconds?this.time(e.playSeconds):"\uC0C8 \uC5EC\uC815"}`:"\uC138 \uBAA9\uC18C\uB9AC\uAC00 \uB9C8\uC9C0\uB9C9 \uC5F4\uCC28\uB97C \uAE30\uB2E4\uB9BD\uB2C8\uB2E4."),this.show("title")}dialogue(e,t=0,n=[]){let s=e[t]||e[e.length-1]||{speaker:"",text:""},r=et("#dialogue-speaker",this.root),o=et("#dialogue-text",this.root),a=et("#dialogue-count",this.root);r&&(r.textContent=s.speaker||"SKYCHORD"),o&&(o.textContent=s.text||""),a&&(a.textContent=`${Math.min(t+1,e.length)} / ${e.length}`);let c=n.find(h=>h.name===s.speaker),l=et("#dialogue-portrait",this.root);l&&(l.classList.toggle("hidden",!c),c&&(l.src=c.portrait||`assets/${c.id}.webp`,l.alt=`${c.name} \uCD08\uC0C1`)),this.show("dialogue")}explore(e,t,n,s=""){let r=e.objective||{},o=e.regionData||{};et("#region-name",this.root).textContent=o.name||`\uAD6C\uC5ED ${Number(e.region||0)+1}`,et("#objective-title",this.root).textContent=r.title||"\uB2E4\uC74C \uC120\uC728";let a=(o.nodes||[]).find(l=>l.id===r.nodeId),c="";if(a&&e.position){let l=a.x-e.position.x,h=a.z-e.position.z;c=` \xB7 ${Math.hypot(l,h).toFixed(1)}m \xB7 ${Math.abs(l)>Math.abs(h)?l>0?"\uB3D9\uCABD":"\uC11C\uCABD":h>0?"\uB0A8\uCABD":"\uBD81\uCABD"}`}et("#objective-text",this.root).textContent=(r.text||"\uBE5B\uB098\uB294 \uCCA0\uB85C\uB97C \uB530\uB77C \uC774\uB3D9\uD558\uC2ED\uC2DC\uC624.")+c,et("#nearby",this.root).textContent=n?`F  ${n.name||"\uC0C1\uD638\uC791\uC6A9"}`:"",et("#toast",this.root).textContent=s,et("#level-value",this.root).textContent=`Lv.${e.level||1}`,et("#shard-value",this.root).textContent=`${e.shards||0} SHARD`,et("#play-time",this.root).textContent=this.time(e.playSeconds||0),this.show("explore")}battle(e,t,n,s,r,o="",a=!1,c=null){let l=t[n]||t[0],h=e.enemies?.[r]||e.enemies?.find(f=>f.hp>0);et("#battle-name",this.root).textContent=c?.name||e.name||e.encounterId||"\uACF5\uBA85 \uC804\uD22C",et("#battle-round",this.root).textContent=`ROUND ${e.round||1}`,et("#battle-preview",this.root).textContent=o,et("#battle-resonance",this.root).textContent=`${Math.max(0,Math.floor(e.resonance||0))}%`;let d=e.enemies?.find(f=>f.hp>0)?.intent;et("#enemy-intent",this.root).textContent=d?`\uC608\uACE0 \xB7 ${d.name||d.type||"\uACF5\uACA9"} ${d.power?`\xB7 ${d.power}`:""}`:"\uC801\uC758 \uC6C0\uC9C1\uC784\uC774 \uBA4E\uC5C8\uC2B5\uB2C8\uB2E4.",et("#battle-log",this.root).innerHTML=(e.log||[]).slice(-5).map(f=>`<li>${wt(typeof f=="string"?f:f.text||f.message||"")}</li>`).join(""),et("#battle-enemies",this.root).innerHTML=(e.enemies||[]).map((f,M)=>{let T=Math.max(1,Number(f.maxHp)||1),y=Math.max(0,Number(f.hp)||0),w=Math.max(0,Math.min(100,y/T*100)),b={ember:"\uBD88\uAF43",tide:"\uD30C\uB3C4",star:"\uBCC4\uBE5B"},C=[f.weakness?`\uC57D\uC810 ${b[f.weakness]||f.weakness}`:"",f.shield?`\uBCF4\uD638\uB9C9 ${f.shield}`:"",f.muted?"\uCE68\uBB35":"",f.stagger?"\uBE44\uD2C0\uAC70\uB9BC":""].filter(Boolean).join(" \xB7 ");return`<button class="enemy-card ${M===r?"selected":""} ${y<=0?"fallen":""}" data-action="battle-target" data-target="${M}" ${y<=0?"disabled":""}><span>${wt(f.name)}</span><strong>${y} / ${T}</strong><div class="enemy-hp" aria-label="HP ${y} / ${T}"><i style="width:${w}%"></i></div><small>${wt(f.intent?.name||f.intent?.type||"\uB300\uAE30")}${f.intent?.target==="all"?" \xB7 \uC804\uCCB4":""}${f.intent?.power?` \xB7 ${f.intent.power}`:""}${C?` \xB7 ${wt(C)}`:""}</small></button>`}).join(""),et("#battle-heroes",this.root).innerHTML=t.map((f,M)=>{let T=e.heroes?.[M]||{},y=Math.max(1,Number(T.maxHp)||f.baseHp),w=Math.max(0,Number(T.hp)||0),b=Math.max(0,Math.min(100,w/y*100)),C=[T.shield?`\uBCF4\uD638\uB9C9 ${T.shield}`:"",T.muted?"\uCE68\uBB35":""].filter(Boolean).join(" \xB7 ");return`<button class="hero-card ${M===n?"selected":""} ${w<=0?"fallen":""} ${T.used?"used":""}" data-action="battle-hero" data-hero="${M}" ${w<=0||T.used?"disabled":""}>${Td(f)}<span class="hero-copy"><b>${wt(f.name)}${T.used?" \xB7 \uD589\uB3D9 \uC644\uB8CC":""}</b><small>${wt(f.role)}</small><div class="hero-hp" aria-label="HP ${w} / ${y}"><i style="width:${b}%"></i></div><em>${w} / ${y}${C?` \xB7 ${wt(C)}`:""}</em></span></button>`}).join(""),et("#battle-skills",this.root).innerHTML=(l.skills||[]).map((f,M)=>`<button class="skill-card ${M===s?"selected":""}" data-action="battle-skill" data-skill="${M}"><b>${M+1} \xB7 ${wt(f.name)}</b><small>${wt(f.description||"")}</small><em class="note-label note-${wt(f.note)}">${wt(wd[f.note]||"")}</em></button>`).join("");let u=l.skills?.[s];et("#skill-detail",this.root).textContent=u?`${u.name}: ${u.description||""} \xB7 ${wd[u.note]||""} \uC74C`:"\uC2A4\uD0AC\uC744 \uACE8\uB77C \uD589\uB3D9\uC744 \uC900\uBE44\uD558\uC2ED\uC2DC\uC624.";let p=et("#chord-slots",this.root);if(p){let f={ember:"\uBD88\uAF43",tide:"\uD30C\uB3C4",star:"\uBCC4\uBE5B"},M=(e.notes||[]).slice(-3);p.innerHTML="<span>CURRENT NOTES</span>"+M.map(T=>`<i class="${T?`filled note-${wt(T)}`:"silent"}" title="${T?f[T]||T:"\uCE68\uBB35"}">${T?wt(f[T]||T):"\uCE68\uBB35"}</i>`).join("")+Array.from({length:Math.max(0,3-M.length)},()=>"<i></i>").join("")}let g=et("#chord-result",this.root);if(g){let f={ember:"\uBD88\uAF43",tide:"\uD30C\uB3C4",star:"\uBCC4\uBE5B"};g.textContent=e.lastChord?.length?`\uCD5C\uADFC \uD654\uC74C \xB7 ${e.lastChord.map(M=>M?f[M]||M:"\uCE68\uBB35").join(" \xB7 ")}`:"\uCD5C\uADFC \uD654\uC74C \uC5C6\uC74C \xB7 \uC74C\uD45C\uB97C \uC138 \uBC88 \uBAA8\uC73C\uBA74 \uD654\uC74C\uC774 \uB429\uB2C8\uB2E4."}let S=et("#encore-button",this.root);S&&(S.disabled=a||Number(e.resonance||0)<100,S.textContent=`F \uC559\uCF54\uB974 \xB7 ${Math.floor(e.resonance||0)}%`);let m=et("#execute-button",this.root);m&&(m.textContent=`SPACE  ${l.name} \uC2E4\uD589`,m.disabled=a||!e.phase||e.phase!=="command"||!!e.heroes?.[n]?.used),this.show("battle")}victory(e,t){et("#victory-copy",this.root).textContent=e||"\uC120\uC728\uC774 \uAE38\uC744 \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4.",et("#victory-reward",this.root).textContent=t?`+${t.xp||0} XP \xB7 +${t.shards||0} SHARD`:"",this.show("victory")}defeat(e){et("#defeat-copy",this.root).textContent=e||"\uC5F4\uCC28\uC758 \uBD88\uBE5B\uC774 \uC7A0\uC2DC \uD754\uB4E4\uB9BD\uB2C8\uB2E4.",this.show("defeat")}journal(e,t,n,s="map"){et("#journal-tabs",this.root).querySelectorAll("[data-tab]").forEach(o=>o.classList.toggle("selected",o.dataset.tab===s));let r=et("#journal-body",this.root);if(s==="party")r.innerHTML=`<div class="party-grid">${t.map((o,a)=>{let c=e.upgrades?.[a]||0,l=e.upgradeCosts?.[a],h=Number.isFinite(l)?l:null,d=c>=3,u=!d&&h!==null&&Number(e.shards||0)>=h,p=d?"\uCD5C\uB300 \uAC15\uD654":u?`\uAC15\uD654 \xB7 ${h} SHARD`:`\uAC15\uD654 \uD544\uC694 \xB7 ${h??"\u2014"} SHARD`;return`<article class="journal-hero">${Td(o)}<div><h3>${wt(o.name)}</h3><p>${wt(o.role)} \xB7 ${wt(o.voice)}</p><p>${wt(o.bio||o.skills?.[0]?.description||"\uAC01\uC790\uC758 \uBC29\uC2DD\uC73C\uB85C \uCE68\uBB35\uC744 \uAC00\uB985\uB2C8\uB2E4.")}</p><button data-action="upgrade" data-hero="${a}" ${d||!u?"disabled":""}>${p} <span>${c}/3</span></button></div></article>`}).join("")}</div>`;else if(s==="quests")r.innerHTML=`<div class="quest-list">${(n||[]).map(o=>`<article class="quest ${o.complete?"complete":""}"><b>${wt(o.name)}</b><p>${wt(o.description)}</p><span>${o.current||0} / ${o.total||o.requires?.length||1} ${o.complete?"\xB7 \uC644\uB8CC":""}</span></article>`).join("")}</div>`;else{let o=e.regionData||{},a=o.bounds||{minX:-28,maxX:28,minZ:-28,maxZ:28},c=e.objective?.nodeId,l=(o.nodes||[]).map(u=>{let p=(e.cleared||[]).includes(u.id)||(e.collected||[]).includes(u.id)||(e.talked||[]).includes(u.id),g=["map-dot",u.type,p?"cleared":"",u.id===c?"objective":""].filter(Boolean).join(" "),S=((u.x-a.minX)/(a.maxX-a.minX)*100).toFixed(1),m=((u.z-a.minZ)/(a.maxZ-a.minZ)*100).toFixed(1);return`<span class="map-node"><span class="${g}" style="left:${S}%;top:${m}%" aria-label="${wt(u.name)}"></span><b class="map-label" style="left:${S}%;top:${m}%">${wt(u.name)}</b></span>`}).join(""),h=((e.position?.x-a.minX)/(a.maxX-a.minX)*100).toFixed(1),d=((e.position?.z-a.minZ)/(a.maxZ-a.minZ)*100).toFixed(1);r.innerHTML=`<div class="map-card"><p class="eyebrow">SKY RAIL MAP</p><h3>${wt(o.name||"\uC0C1\uACF5 \uCCA0\uB3C4")}</h3><p>${wt(o.description||"\uBD80\uC11C\uC9C4 \uCCA0\uB85C \uC704\uC5D0 \uB2E4\uC74C \uBAA9\uC801\uC9C0\uAC00 \uB5A0 \uC788\uC2B5\uB2C8\uB2E4.")}</p><div class="map-board">${l}<span class="map-player" style="left:${h}%;top:${d}%" aria-label="\uD604\uC7AC \uC704\uCE58"></span></div><div class="map-legend"><span><i class="legend-objective"></i>\uB2E4\uC74C \uBAA9\uD45C</span><span><i class="legend-cleared"></i>\uC644\uB8CC</span><span><i class="legend-player"></i>\uD604\uC7AC \uC704\uCE58</span></div><small>${e.cleared?.length||0}\uAC1C\uC758 \uC2E0\uD638 \xB7 ${e.collected?.length||0}\uAC1C\uC758 \uC0C1\uC790</small></div>`}this.show("journal")}ending(e,t={}){et("#ending-copy",this.root).textContent="\uC138 \uBAA9\uC18C\uB9AC\uAC00 \uC644\uBCBD\uD568\uC744 \uAC70\uBD80\uD558\uC790, \uCE68\uBB35\uD55C \uC138\uACC4\uAC00 \uB2E4\uC2DC \uB178\uB798\uD558\uAE30 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4.";let n=et("#ending-narrative",this.root);n&&(n.textContent="\uAD00\uCE21\uC18C\uAC00 \uAE68\uC5B4\uB0AC\uC2B5\uB2C8\uB2E4. \uB0A8\uACA8 \uB454 \uBAA9\uC18C\uB9AC\uAC00 \uC9D1\uC73C\uB85C \uAC00\uB294 \uAE38\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."),et("#ending-stats",this.root).textContent=`\uC5EC\uD589 ${this.time(e.playSeconds||0)} \xB7 \uB808\uBCA8 ${e.level||1} \xB7 \uC0E4\uB4DC ${e.shards||0} \xB7 \uAD50\uC804 ${t.battles||0}`,this.show("ending")}toast(e){et("#toast",this.root).textContent=e||""}time(e){let t=Math.max(0,Number(e)||0);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(Math.floor(t%60)).padStart(2,"0")}`}};var Ad="skychord.audio.v1",Rd=[[196,246.94,293.66,369.99],[220,261.63,329.63,392],[174.61,220,261.63,349.23],[164.81,207.65,246.94,329.63]],il=class{constructor(){this.context=null,this.master=null,this.region=0,this.mode="title",this.muted=!1,this.musicNext=0,this.musicStep=0,this.noise=null;try{this.muted=!!JSON.parse(localStorage.getItem(Ad)||"{}").muted}catch{}}unlock(){if(!this.context){let e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;try{this.context=new e,this.master=this.context.createGain(),this.master.gain.value=this.muted?0:.12,this.master.connect(this.context.destination),this.noise=this.context.createBuffer(1,this.context.sampleRate*.35,this.context.sampleRate);let t=this.noise.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;this.musicNext=this.context.currentTime+.03,this.scheduleMusic(.55)}catch{return this.context=null,!1}}try{let e=this.context.resume();e?.catch&&e.catch(()=>{})}catch{}return!0}setMode(e,t=0){let n=e!==this.mode||t!==this.region;if(this.mode=e,this.region=t,!this.context||!this.master)return;n&&(this.musicStep=0,this.musicNext=this.context.currentTime+.04);let s=this.muted||e==="paused"?0:e==="battle"?.16:e==="ending"?.18:.12;try{this.master.gain.setTargetAtTime(s,this.context.currentTime,.12)}catch{}}setMuted(e){this.muted=!!e;try{localStorage.setItem(Ad,JSON.stringify({muted:this.muted}))}catch{}if(this.master&&this.context)try{let t=this.muted||this.mode==="paused"?0:this.mode==="battle"?.16:this.mode==="ending"?.18:.12;this.master.gain.setTargetAtTime(t,this.context.currentTime,.04),this.musicNext=this.context.currentTime+.03}catch{}}voice(e,t,n,s="sine",r=.04,o=2200){if(!(!this.context||!this.master||this.muted))try{let a=this.context.createOscillator(),c=this.context.createGain(),l=this.context.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(o,t),a.type=s,a.frequency.setValueAtTime(e,t),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+.015),c.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(l).connect(c).connect(this.master),a.start(t),a.stop(t+n+.04)}catch{}}pluck(e,t,n=.045){this.voice(e,t,.34,"triangle",n,3200),this.voice(e*2.01,t,.18,"sine",n*.25,5e3)}bass(e,t){this.voice(e/2,t,.55,"triangle",.052,900)}drum(e,t=100,n=.035){if(!(!this.context||!this.master||!this.noise||this.muted))try{let s=this.context.createBufferSource(),r=this.context.createGain(),o=this.context.createBiquadFilter();s.buffer=this.noise,o.type="bandpass",o.frequency.value=t,r.gain.setValueAtTime(n,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.1),s.connect(o).connect(r).connect(this.master),s.start(e),s.stop(e+.12)}catch{}}scheduleMusic(e=.8){if(!this.context||!this.master||this.muted||this.mode==="paused")return;let t=this.mode==="battle"?.24:.34,n=Rd[this.region%Rd.length],s=this.context.currentTime+e;for(;this.musicNext<s;){let r=this.musicStep++%32,o=n[Math.floor(r/8)%n.length],a=this.musicNext;if(r%8===0&&(this.bass(o,a),this.voice(o*1.5,a,1.15,"sine",.018,1400)),r%2===0){let c=[1,1.25,1.5,2][(r/2+this.region)%4];this.pluck(o*c,a,this.mode==="battle"?.035:.027)}this.mode==="battle"&&r%2===0&&this.drum(a,r%8===0?86:150,r%8===0?.045:.024),this.musicNext+=t}}tone(e,t=.16,n="sine",s=.07){this.context&&this.voice(e,this.context.currentTime+.01,t,n,s)}event(e){let t={hit:220,heal:440,shield:330,chord:523.25,encore:659.25,victory:783.99,defeat:146.83,enemy:164.81,round:196};e==="chord"||e==="encore"?(this.tone(t[e],e==="encore"?.5:.28,"triangle",.1),this.tone(t[e]*1.25,e==="encore"?.6:.35,"sine",.055)):t[e]&&this.tone(t[e],e==="hit"?.1:.2,e==="enemy"?"sawtooth":"sine",.06)}update(){!this.context||this.muted||this.mode==="paused"||this.scheduleMusic(.8)}};var Cd="skychord.save.v1",u_=zr.opening,Id={ember:"\uBD88\uAF43",tide:"\uD30C\uB3C4",star:"\uBCC4\uBE5B"};function sl(i,e=null){try{return JSON.parse(JSON.stringify(i))}catch{return e}}function Pd(){let i=new nl(document),e=new il,t=document.getElementById("game"),n=null,s=!1;function r(E){let I=`3D \uC7A5\uBA74\uC744 \uC900\uBE44\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ${E?.message||"\uBE0C\uB77C\uC6B0\uC800 \uD638\uD658\uC131"}`;document.getElementById("webgl-fallback")?.classList.remove("hidden");let V=document.getElementById("webgl-fallback");V&&(V.textContent=I),document.querySelectorAll('[data-action="new-game"], [data-action="continue"]').forEach(se=>{se.disabled=!0}),i.toast(I),s||(s=!0,console.error(E))}try{n=new tl(t,{onError:r})}catch(E){r(E)}let o=F()||cl(),a=null,c=null,l="title",h="explore",d=[],u=0,p=null,g=!1,S=null,m=0,f=0,M=0,T=0,y=!1,w=0,b=Object.create(null),C="",_=0,A=performance.now(),L=0,U=0,z=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function X(){try{n?.resize?.()}catch(E){r(E)}}function F(){try{return xh(localStorage.getItem(Cd)||"")}catch{return null}}function k(){if(!(a&&!["victory","defeat"].includes(l)))try{localStorage.setItem(Cd,gh(o))}catch{}}function Y(){return an[o.region]||an[0]}function J(){return Object.assign({},o,{regionData:Y(),objective:mh(o),upgradeCosts:kt.map((E,I)=>hl(o,I))})}function re(){try{let E=e.unlock();E?.catch&&E.catch(()=>{})}catch{}}function q(E){if(de(),l=E,E==="pause"?i.show("pause"):E==="journal"?i.journal(J(),kt,dl(o),"map"):E==="title"?i.title(o.finished?null:o.playSeconds>0||o.cleared?.length||o.collected?.length||o.talked?.length?{regionName:Y().name,playSeconds:o.playSeconds}:null):E==="dialogue"?i.dialogue(d,u,kt):E==="explore"?Ee():E==="battle"?Ye():E==="victory"?i.show("victory"):E==="defeat"?i.show("defeat"):E==="ending"&&i.ending(o,{battles:o.cleared?.length||0}),n)try{E==="title"||E==="dialogue"?n.setMode("title"):E==="battle"?n.setMode("battle",a):E==="ending"?n.setMode("ending"):E==="pause"?n.setMode(h==="battle"?"battle":"explore",a):n.setMode("explore")}catch(I){r(I)}e.setMode(E==="battle"?"battle":E==="ending"?"ending":E==="title"||E==="dialogue"?"title":E==="pause"||E==="journal"?"paused":"explore",o.region||0)}function Q(){if(re(),o=cl(),a=null,c=null,y=!1,T=0,w++,n)try{n.setRegion(Y(),o)}catch(E){r(E)}k(),d=u_,u=0,p="explore",g=!0,q("dialogue")}function ie(){if(re(),!o||o.finished)return Q();if(a=null,y=!1,T=0,w++,n)try{n.setRegion(Y(),o)}catch(E){r(E)}q("explore")}function Ie(){de(),a=null,y=!1,T=0,w++,k(),q("title")}function Ee(){let E=n?.getNearby(o)||null;i.explore(J(),n,E,performance.now()<_?C:"")}function Ye(E=""){if(!a)return;let I=ze();I.length&&!I.includes(M)&&(M=I[0]);let V=a.heroes?.[m],se=V?.skills?.[f],le=V?.muted?null:se?.note||"",Z=[...a.notes||[],le].slice(-3),j=Z.filter(pe=>Id[pe]),fe=Z.length===3&&j.length===3&&new Set(j).size===1?"ECHO \xB7 \uCCB4\uB825/\uBCF4\uD638\uB9C9 +8":Z.length===3&&j.length===3&&new Set(j).size===3?"BREAK \xB7 \uCDA9\uC804 \uACF5\uACA9 \uCDE8\uC18C":"",Pe=Z.map(pe=>je(pe)).join(" \xB7 ")||"\uC0C8 \uC74C\uD45C\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624.";ot(E||(fe?`${fe} \xB7 ${Pe}`:`${Pe} \xB7 \uD654\uC74C \uBBF8\uB9AC\uBCF4\uAE30`))}function je(E){return Id[E]||(E==null?"\uCE68\uBB35":"")}function ot(E){i.battle(a,kt,m,f,M,E,performance.now()<T,tn[a.encounterId])}function K(){if(u<d.length-1){u++,i.dialogue(d,u,kt);return}let E=p||"explore";if(p=null,E==="start-boss"){w++,T=0,a=Vr(o,c),m=0,f=0,M=0,q("battle");return}if(E==="boss-victory"){let I=S;S=null,q("victory"),I&&i.victory(`${Y().subtitle||Y().name} \xB7 ${o.region+1} / ${an.length} \uC2E0\uD638 \uBCF5\uC6D0`,I.rewards);return}if(E==="ending"){q("ending");return}q("explore"),g&&(g=!1,i.toast("\uCCAB \uBAA9\uD45C: \uC5ED\uC758 \uB9B4\uB808\uC774\uB97C \uCC3E\uC544 F\uB85C \uC870\uC0AC\uD558\uC2ED\uC2DC\uC624."))}function ne(){if(!n)return;let E=n.getNearby(o);if(!E){D("\uAC00\uAE4C\uC6B4 \uC2E0\uD638\uB098 \uB3D9\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),Ee();return}let I=ph(o,E.id);if(I)if(I.type==="battle")if(c=I.encounterId,k(),E.type==="boss"||/-boss$/.test(c)){let se=tn[c];d=se?.intro?[{speaker:se.name||"\uC218\uD638\uC790",text:se.intro}]:[],u=0,p="start-boss",q("dialogue")}else w++,T=0,a=Vr(o,c),m=0,f=0,M=0,q("battle");else if(I.type==="dialogue")d=I.lines||[],u=0,p="explore",g=!1,q("dialogue"),k();else if(I.type==="travel"){if(n)try{n.setRegion(Y(),o)}catch(V){r(V)}k(),D("\uC0C8 \uAD6C\uC5ED\uC758 \uC120\uB85C\uAC00 \uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),Ee()}else I.type==="ending"?(o.finished=!0,d=I.lines||[],u=0,p="ending",k(),q("dialogue")):(D(I.message||"\uC2E0\uD638\uAC00 \uC751\uB2F5\uD588\uC2B5\uB2C8\uB2E4."),k(),Ee())}function me(){return(a?.heroes||[]).map((E,I)=>E.hp>0?I:-1).filter(E=>E>=0)}function ze(){return(a?.enemies||[]).map((E,I)=>E.hp>0?I:-1).filter(E=>E>=0)}function Se(E=1){let I=me().filter(se=>!a.heroes[se].used);if(!I.length)return;let V=Math.max(0,I.indexOf(m));m=I[(V+E+I.length)%I.length],f=Math.min(f,(a.heroes[m].skills||[]).length-1),Ye()}function Ve(E=1){let I=ze();if(!I.length)return;let V=Math.max(0,I.indexOf(M));M=I[(V+E+I.length)%I.length],Ye()}function lt(E){a?.heroes?.[m]?.skills?.[E]&&(f=E,Ye())}function ee(E=!1){if(!a||performance.now()<T||l!=="battle")return;let I=a,V=w;re();let se=E?yh(a):_h(a,m,f,M);if(!se?.ok){C=se?.message||"\uC9C0\uAE08\uC740 \uADF8 \uD589\uB3D9\uC744 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",Ye(C);return}T=performance.now()+400,n?.playEvents(se.events||[]);for(let le of se.events||[])e.event(le.type);if(Ye(se.message||"\uC120\uC728\uC774 \uBD80\uB52A\uD614\uC2B5\uB2C8\uB2E4."),!E){let le=me().filter(Z=>!a.heroes[Z].used);le.length&&(m=le[0],f=0,Ye(se.message||""))}window.setTimeout(()=>{if(!(a!==I||w!==V)){if(l==="pause"){y=!0;return}l==="battle"&&(Ye(),ae(I,V))}},420)}function ae(E=a,I=w){if(!(!a||a!==E||w!==I||l!=="battle"&&l!=="pause"))if(y=!1,a.result==="win"){let V=ul(o,a),se=/-boss$/.test(c||"");if(a=null,k(),se&&tn[c]?.outro){let le=tn[c].outro,Z=le.indexOf(":");S=V,d=[{speaker:Z>0?le.slice(0,Z).trim():tn[c].name||"\uC218\uD638\uC790",text:Z>0?le.slice(Z+1).trim():le}],u=0,p="boss-victory",q("dialogue")}else q("victory"),i.victory(`${Y().subtitle||Y().name} \xB7 ${o.region+1} / ${an.length} \uC2E0\uD638 \uBCF5\uC6D0`,V.rewards)}else a.result==="lose"?(ul(o,a),a=null,y=!1,k(),q("defeat"),i.defeat("\uC608\uACE0\uB41C \uD30C\uB3D9\uC774 \uC5F4\uCC28\uB97C \uB36E\uCCE4\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC870\uC728\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")):Ye()}function ce(){c&&(w++,y=!1,T=0,a=Vr(o,c),m=0,f=0,M=0,q("battle"))}function he(){q("explore"),k()}function de(){b=Object.create(null),document.querySelectorAll("[data-hold]").forEach(E=>E.classList.remove("held"))}function Fe(){l==="title"||l==="dialogue"||l==="ending"||(h=l,de(),q("pause"))}function Ne(){let E=h==="pause"?"explore":h;q(E),y&&E==="battle"&&ae()}function Be(E="map"){if(a){D("\uC804\uD22C \uC911\uC5D0\uB294 \uAE30\uB85D\uC744 \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");return}l!=="pause"&&(h=l),de(),i.journal(J(),kt,dl(o),E),l="journal",n&&n.setMode("explore"),e.setMode("paused",o.region||0)}function We(){q(h==="battle"?"battle":"explore")}function D(E){C=E||"",_=performance.now()+3e3}function ct(E){let I=E.key.toLowerCase();if(I==="m"&&!E.repeat){e.setMuted(!e.muted);return}if(I==="escape"&&!E.repeat){l==="pause"?Ne():l==="journal"?We():l!=="title"&&l!=="dialogue"&&l!=="ending"&&l!=="victory"&&l!=="defeat"&&Fe(),E.preventDefault();return}if(l==="dialogue"&&(I==="enter"||I===" ")){E.repeat||K(),E.preventDefault();return}if(l==="journal"){I==="tab"&&(We(),E.preventDefault());return}if(l==="victory"||l==="defeat"){I==="enter"&&!E.repeat&&(l==="victory"?he():ce(),E.preventDefault());return}if(l==="ending"){I==="enter"&&!E.repeat&&(Q(),E.preventDefault());return}if(l==="battle"){I==="q"&&!E.repeat?Se(-1):I==="e"&&!E.repeat?Se(1):I==="1"||I==="2"||I==="3"?lt(Number(I)-1):I==="tab"&&!E.repeat?(Ve(1),E.preventDefault()):(I===" "||I==="enter")&&!E.repeat?(ee(!1),E.preventDefault()):I==="f"&&!E.repeat&&ee(!0);return}if(l!=="explore")return;if(I==="tab"&&!E.repeat){Be(),E.preventDefault();return}if((I==="f"||I==="enter")&&!E.repeat){ne(),E.preventDefault();return}if(I==="shift"){b.sprint=!0,E.preventDefault();return}let V={w:"up",arrowup:"up",s:"down",arrowdown:"down",a:"left",arrowleft:"left",d:"right",arrowright:"right"};V[I]&&(b[V[I]]=!0,E.preventDefault()),I==="q"&&(b.rotateLeft=!0,E.preventDefault()),I==="e"&&(b.rotateRight=!0,E.preventDefault())}function Qe(E){let I=E.key.toLowerCase(),V={w:"up",arrowup:"up",s:"down",arrowdown:"down",a:"left",arrowleft:"left",d:"right",arrowright:"right"};I==="shift"&&delete b.sprint,V[I]&&delete b[V[I]],I==="q"&&delete b.rotateLeft,I==="e"&&delete b.rotateRight}function R(){i.on("new-game",Q).on("continue",ie).on("dialogue-next",K).on("interact",ne).on("pause",Fe).on("resume",Ne).on("menu",Ie).on("mute",()=>{re(),e.setMuted(!e.muted)}).on("journal",()=>Be()).on("journal-close",We).on("next",he).on("retry",ce).on("replay",Q).on("execute",()=>ee(!1)).on("encore",()=>ee(!0)).on("battle-hero",E=>{m=Number(E.dataset.hero),Ye()}).on("battle-skill",E=>lt(Number(E.dataset.skill))).on("battle-target",E=>{M=Number(E.dataset.target),Ye()}).on("journal-tab",E=>Be(E.dataset.tab)).on("upgrade",E=>{let I=fh(o,Number(E.dataset.hero));D(I.message),k(),Be("party")}),document.addEventListener("keydown",ct,{passive:!1}),document.addEventListener("keyup",Qe),window.addEventListener("blur",()=>{de(),(l==="explore"||l==="battle")&&Fe()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(de(),(l==="explore"||l==="battle")&&Fe())}),document.querySelectorAll("[data-hold]").forEach(E=>{let I=E.dataset.hold;E.addEventListener("pointerdown",se=>{se.preventDefault(),re(),b[I]=!0,E.classList.add("held");try{E.setPointerCapture(se.pointerId)}catch{}});let V=se=>{se.preventDefault(),delete b[I],E.classList.remove("held")};E.addEventListener("pointerup",V),E.addEventListener("pointercancel",V),E.addEventListener("lostpointercapture",V)})}function x(E){let I=Math.min(.05,Math.max(0,(E-A)/1e3));A=E;let V=l==="pause"||l==="journal"||l==="dialogue"||l==="title"||l==="victory"||l==="defeat";if(!V&&(l==="explore"||l==="battle"||l==="ending")){let se={x:(b.right?1:0)-(b.left?1:0),z:(b.down?1:0)-(b.up?1:0)};try{n?.update(I,{campaign:o,battle:a,move:se,sprint:!!b.sprint,rotate:(b.rotateRight?1:0)-(b.rotateLeft?1:0),selectedHero:m,target:M,paused:!1,reducedMotion:z})}catch(le){r(le)}(l==="explore"||l==="battle")&&(o.playSeconds=(o.playSeconds||0)+I,U+=I,U>8&&(U=0,k()),l==="explore"&&Math.floor(E/100)%2===0&&Ee())}L+=I,V||e.update(L);try{n?.render()}catch(se){r(se)}requestAnimationFrame(x)}if(Object.defineProperties(window,{__skychord:{configurable:!1,enumerable:!0,get:()=>({get state(){return sl(o)},get battle(){return sl(a)},get screen(){return l},get nearby(){return sl(n?.getNearby(o))},get sceneStats(){return sl(n?.getStats?.()||{})}})}}),R(),n)try{n.setRegion(Y(),o)}catch(E){r(E)}X(),window.addEventListener("resize",X,{passive:!0}),window.ResizeObserver&&t&&new ResizeObserver(X).observe(t),i.title(o.finished?null:o.playSeconds>0||o.cleared?.length||o.collected?.length||o.talked?.length?{regionName:Y().name,playSeconds:o.playSeconds}:null),q("title"),requestAnimationFrame(x)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Pd,{once:!0}):Pd();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
