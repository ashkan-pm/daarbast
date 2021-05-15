const { build } = require('estrella');

build({
  entry: './src/main.ts',
  outfile: './bin/daarbast.js',
  bundle: true,
  minify: true
});
