const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist',
  format: 'esm',
  outbase: 'src',
  bundle: true,
  platform: 'node',
  minify: true,
  sourcemap: false,
})
