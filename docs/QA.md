# Release verification

Verified on 2026-09-13 in headless Chromium on Windows. No visible browser was launched.

## Gameplay

- `npm test`: 12 tests passed. Includes a growing party's complete legal-command campaign, six quests, damage/weakness, shield expiry, muted notes, special-intent interruption, automatic healing, encore, defeat recovery, save validation and idempotent rewards.
- `npm run test:campaign`: actual movement keys and UI commands visited all 32 locations, won all 16 encounters using 238 commands, completed all six quests and reached the ending. The ending record survived reload. No progress, HP or position was injected into this journey.
- Boss round counts on that route: 7, 9, 12, 16. In the separate balance comparison, repeated basic attacks lost the last two bosses; the intent-aware route won and used all nine skills.
- `npm run test:battle`: five scenarios passed, including pending victory while paused, title/continue during a pending action, defeat/retry, mobile battle layout and a mobile first-fight victory. These edge-case tests deliberately seed valid saves to reach their starting conditions. Retrying also releases the previous battle's damage-label textures.

## Browser and presentation

- `npm run test:browser`: both `file://` and `/skychord/` HTTP paths passed. No page errors, failed asset requests or external runtime requests. All WebP portraits decoded.
- Real Web Audio context entered `running` after a user gesture; oscillator starts and nonzero, non-clipping analyser samples were measured. Peak sample magnitude was approximately 0.00667.
- `npm run test:interaction`: desktop 1440×900, portrait 390×844 and landscape 844×390 passed movement, touch visibility, pause, journal, save/reload and overflow checks. Battle controls use scrolling where needed on small displays.
- Title, character cards, all region environments, battle commands, bosses, mobile screens and ending were visually inspected. Three original hero meshes and five enemy silhouettes accompany four original ImageGen paintings.
- `npm run test:performance`: the detected renderer was software SwiftShader. Mean frame time was 32.666 ms, and 44.554 ms under 4× CPU throttling. Rendering adapted to 692×433; DOM text and artwork retained display resolution. This is not a measurement of a hardware GPU.

Reports and screenshots are generated under the ignored `artifacts/` directory. Headless checks cover deterministic play and rendering; they do not establish a game-jam ranking or human playtest result.

## Distribution

- Runtime images: 1,523,238 bytes, retaining original dimensions. Unmodified 10,325,522-byte PNG sources are kept separately in `art-source/`.
- `npm run pack`: `dist/skychord-web.zip`, 1,711,476 bytes. All ten entries use portable forward-slash paths. Every decompressed entry's SHA-256 matched its source file.
- No CDN, remote fonts, downloaded audio or runtime package installation is required. Third-party Three.js license is included.
- After GitHub Pages publication, run `SKYCHORD_URL=https://kkp8121-rgb.github.io/skychord/ npm run test:browser` with the corresponding environment-variable syntax for the shell, then verify the Pages deployment status. Publication uses only `kkp8121-rgb/skychord`.
