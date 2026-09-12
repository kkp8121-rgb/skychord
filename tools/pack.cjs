const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const names = ['index.html', 'style.css', 'game.js', 'assets', 'licenses', '.nojekyll'];
for (const name of names) if (!fs.existsSync(path.join(root, name))) throw new Error(`Missing package input: ${name}`);
const output = path.join(root, 'dist', 'skychord-web.zip');
fs.mkdirSync(path.dirname(output), { recursive: true });
if (process.platform === 'win32') {
  const quote = value => "'" + value.replace(/'/g, "''") + "'";
  const script = "$ErrorActionPreference='Stop'; Compress-Archive -LiteralPath @(" + names.map(name => quote(path.join(root, name))).join(',') + ') -DestinationPath ' + quote(output) + ' -Force';
  execFileSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', script], { stdio: 'inherit' });
} else execFileSync('zip', ['-q', '-r', output, ...names], { cwd: root, stdio: 'inherit' });
console.log(output);
