import { defineConfig } from "tsup"

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],       // gera CommonJS e ESM
  dts: true,                     // gera .d.ts
  sourcemap: true,               // opcional, pode deixar true para debugging
  clean: true,
  minify: false,                  // ativa minificação do JS
  skipNodeModulesBundle: true,
  outDir: 'dist',
  terserOptions: {
    format: {
      comments: /\/\*\*[\s\S]*?\*\//g, // remove apenas JSDoc (@param, @returns, etc)
    }
  }
});