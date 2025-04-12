import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js', 'src/theme.js'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ['react', 'styled-components', '@phosphor-icons/react'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.loader = {
      '.js': 'jsx'
    };
  }
});