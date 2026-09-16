const prefixer = require('postcss-prefix-selector');

module.exports = {
  plugins: [
    prefixer({
      prefix: '.amigos-wrapper',
      transform(prefix, selector, prefixedSelector, filePath, rule) {
        if (selector === 'html' || selector === 'body' || selector === 'html, body' || selector === 'body, html' || selector === ':root') {
          return prefix;
        }
        return prefixedSelector;
      }
    }),
  ],
};
