# Production record

## Genre ledger

| Game | Genre | Camera | Controls | Structure |
| --- | --- | --- | --- | --- |
| AFTERLIGHT | Rewind puzzle platformer | Side view | Movement, jump, rewind | Eight compact chambers |
| SKYCHORD | Narrative party RPG | 3D follow camera + cinematic turn battles | Keyboard exploration + party/skill selection | Four explorable districts, authored encounters, growth and quests |

Next candidates: performance rhythm game, physical racing, strategy/management. Choose from genuinely different mechanics and camera structures, not a reskin.

## Technical choice

Three.js 0.186.0, locally bundled with esbuild 0.28.2. WebGL2 renderer, procedural original character/environment meshes. Browser game has no remote runtime dependency. Character art uses the built-in ImageGen tool; final prompts and asset paths are recorded in ART.md after generation.

Root owns integration and verification. Three Luna executors own independent simulation/content, 3D presentation, and application/UI/audio modules. No automated user browser launch.

## Usage limit

User requested continued diverse production until weekly allowance remaining reaches 30%. Read the active session token_count rate_limits event for limit_id `codex`, selecting the 10080-minute window. Initial observed used=6%, remaining=94%; latest Codex observation at 2026-09-12 19:52 UTC was used=10%, remaining=90%. The separate `codex_bengalfox`/Spark allowance is not the Codex weekly balance. Do not substitute token count, a different model allowance, or the five-hour allowance for weekly remaining.

## Release

Publish only under kkp8121-rgb. A concrete commit and full verification precede each request for per-push approval. Previous authorization was limited to AFTERLIGHT main at 895f028; it does not authorize SKYCHORD's push.
