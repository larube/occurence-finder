import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

export default [
  {
    input: './index.js',
    output: {
      name: 'occurenceFinder',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      uglify(),
    ],
  },

  {
    input: './index.js',
    external: ['ms'],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
    ],
  },
]
