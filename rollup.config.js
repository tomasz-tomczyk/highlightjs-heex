import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: 'dist/index.cjs', format: 'cjs', exports: 'named' },
      { file: 'dist/index.mjs', format: 'es' }
    ],
    external: ['highlight.js']
  },
  {
    input: 'src/languages/heex.js',
    output: [
      { file: 'dist/heex.cjs', format: 'cjs', exports: 'default' }
    ],
    external: ['highlight.js']
  },
  {
    input: 'src/languages/heex.js',
    output: {
      file: 'dist/heex.min.js',
      format: 'iife',
      name: 'hljsDefineHeex',
      plugins: [terser()]
    },
    plugins: [resolve()]
  }
];
