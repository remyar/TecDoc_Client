import { readFileSync } from 'fs';
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import clear from 'rollup-plugin-clear' // Cleans the `dist` folder before each build
import { nodeResolve } from '@rollup/plugin-node-resolve' // Allows Rollup to resolve modules from node_modules
import babel from '@rollup/plugin-babel' // Transpiles modern JavaScript code
import { terser } from 'rollup-plugin-terser' // Minifies the final output 

const packageJson = JSON.parse(readFileSync('./package.json'));

export default defineConfig(
  {
    // CJS & ESM Bundle Configuration
    input: 'src/index.js', // Entry point for CommonJS and ESM builds
    output: [
      {
        dir: 'dist/cjs', // Output directory for CommonJS format
        format: 'cjs', // CommonJS format (for Node.js)
        preserveModules: true, // Keep the original module structure
        exports: 'auto', // Auto-detect export style
        sourcemap: true // Enable sourcemap
      },
      {
        dir: 'dist/esm', // Output directory for ESM format
        format: 'es', // ES Module format
        preserveModules: true, // Keep the original module structure
        exports: 'auto', // Auto-detect export style
        sourcemap: true // Enable sourcemap
      }
    ],
    plugins: [
      clear({ targets: ['dist/cjs', 'dist/esm'] }),
      nodeResolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime']
      }),
      terser()
    ]
  }
);