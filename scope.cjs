const fs = require('fs');
const postcss = require('postcss');
const prefixer = require('postcss-prefix-selector');

const files = [
  'src/styles/legacy/amigos/styles.css',
  'src/styles/legacy/amigos/premium.css',
  'src/styles/legacy/amigos/theme.css'
];

const processor = postcss([
  prefixer({
    prefix: '.amigos-wrapper',
    transform(prefix, selector, prefixedSelector, filePath, rule) {
      if (selector === 'html' || selector === 'body' || selector === 'html, body' || selector === 'body, html' || selector === ':root') {
        return prefix;
      }
      return prefixedSelector;
    }
  })
]);

async function run() {
  for (const file of files) {
    const css = fs.readFileSync(file, 'utf8');
    const result = await processor.process(css, { from: file, to: file });
    fs.writeFileSync(file, result.css);
    console.log('Processed', file);
  }
}

run();
