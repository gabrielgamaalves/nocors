import { defineConfig } from "tsup"

const env =
  process.env.NODE_ENV;

export default defineConfig({
  entry: ['src/**/*.ts'],
  format: ['cjs', 'esm'],
  // minify: env === 'production',
  // bundle: env === 'production',
  skipNodeModulesBundle: true,
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  // target: 'es2022',
  outDir: "./lib"
})