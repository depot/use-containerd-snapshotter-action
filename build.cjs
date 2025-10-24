const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: false,
  platform: 'node',
  target: 'node24',
  outfile: 'dist/index.js',
})

esbuild.build({
  entryPoints: ['src/configure.ts'],
  bundle: true,
  minify: false,
  platform: 'node',
  target: 'node24',
  outfile: 'dist/configure.js',
})
