# SKYCHORD verification

## Input and battle guidance revision — 2026-09-13

Fresh checks used headless Chromium on Windows. Native Pointer Lock was denied before page loading; no visible browser was opened.

- `npm test`: 12/12 passed, including combat rules, automatic healing, party progression, defeat recovery and save validation. Combat rules and encounters are unchanged.
- `npm run test:browser`: direct file and `/skychord/` HTTP loading, portrait assets and synthesized audio passed without page errors, failed requests or external runtime dependencies.
- `npm run test:interaction`: desktop 1440×900, portrait 390×844 and landscape 844×390 passed movement, pause, journal, save/reload and overflow checks.
- `npm run test:battle`: five scenarios passed. Real command selections verified the selected enemy's intent and the execute button's hero/skill names. Pending victory during pause, title/continue, defeat/retry and a mobile first-fight victory passed. These bounded battle tests deliberately seed valid saves; they are separate from a full campaign.
- The final mobile battle check scrolled the execute preview into view at 390×844 and 844×390 and verified its bounds and center hit-test. The overlapping keyboard legend is hidden on touch screens. Screenshots: `artifacts/battle-flow-mobile-portrait.png` and `battle-flow-mobile-landscape.png`.

Movement now aggregates keyboard and pointer sources. The battle HUD names the selected enemy's intent and remaining ally actions; the execute button identifies the chosen skill and its target or automatic beneficiary. Logs are retained as `artifacts/root-*.log` and the latest battle report.

## Full campaign and performance — historical release evidence

The earlier release campaign visited all 32 locations, won all 16 encounters with 238 commands, completed six quests and reached the ending through actual movement and UI inputs. Its saved ending survived reload. Bosses took 7, 9, 12 and 16 rounds; the intent-aware route used all nine skills, while repeated basic attacks lost the last two bosses. These figures predate this input/UI revision and are not a fresh full-campaign run.

Earlier software SwiftShader performance averaged 32.666 ms per frame, or 44.554 ms under 4× CPU throttling, at a 692×433 render size. These are historical software measurements, not hardware GPU or physical-phone benchmarks. No new performance claim is made for this revision.

## Distribution

`npm run pack` produced `dist/skychord-web.zip`, 1,711,863 bytes with ten portable relative entries. A streaming check in `artifacts/package-verify.json` verified every decompressed entry against its source SHA-256. The 1,523,238 bytes of runtime images retain their original dimensions; original PNG artwork stays in `art-source/` outside the playable ZIP. Three.js is bundled with its license; no CDN, remote fonts, downloaded audio or runtime installation is required.

Play at https://kkp8121-rgb.github.io/skychord/. Publication evidence is generated separately in ignored `artifacts/improvement-publication.json` after checking the deployed commit, runtime asset hashes and headless startup. Browser checks also accept `SKYCHORD_URL` for the published URL.
