# SKYCHORD

Original standalone browser RPG. Do not change sibling repositories.
Use local Three.js bundled into `game.js` as a classic IIFE so `index.html` works via file:// and GitHub Pages subpaths. No runtime CDN or network dependencies.
User-facing game copy: Korean, with SKYCHORD as the title. All characters are adults; original designs only.
Headless browser verification only. Never launch a visible browser.
Stage explicit paths only. Root owns commits; git push requires explicit approval for that push.
Read docs/CONTRACT.md before implementation. Respect worker ownership. Never revert another worker's edits.
ImageGen results: render with generatedImage(result); print only output_hint or paths. Never stringify or log image_url/base64 payloads.
Write Korean source through apply_patch or explicit UTF-8 file APIs; never pipe non-ASCII source through legacy PowerShell/native stdin encodings. Read text with Get-Content -Encoding UTF8. Verify authored strings by importing the module, not just syntax checking.
Calculate aggregate playtest counts from the saved test report before reporting them; do not estimate them mentally.
