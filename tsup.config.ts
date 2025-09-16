import { defineConfig } from "tsup"
const env =
  process.env.NODE_ENV;

export default defineConfig({
  splitting: true,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ['cjs', 'esm'],
  // minify: env === 'production',
  bundle: env === 'production',
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: env === 'development',
  target: 'es2020',
  outDir: 'lib',
  entry: ['src/**/*.ts'], //include all files under src
  terserOptions: {
    format: {
      comments: /\/\*\*[\s\S]*?\*\//g,
    }
  }
});