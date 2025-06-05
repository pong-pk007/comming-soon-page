const fs = require('fs');
const path = require('path');
const assert = require('assert');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const files = ['all.js', 'style.css', 'construction.svg'];

files.forEach(file => {
  assert(html.includes(file), `index.html should reference ${file}`);
  const filePath = path.join(root, file);
  assert(fs.existsSync(filePath), `${file} should exist on disk`);
});

console.log('All tests passed.');
