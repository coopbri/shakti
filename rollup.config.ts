import cjs from "@rollup/plugin-commonjs";
import peerDeps from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import ts from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  // entry point
  input: "src/index.ts",
  output: [
    // build CommonJS
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    // build ES modules
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    // prevent peer dependencies from being bundled
    peerDeps(),
    // bundle third party dependencies in `node_modules`
    resolve(),
    // allow transpilation to CommonJS format
    cjs(),
    // transpile TS into JS
    ts({
      useTsconfigDeclarationDir: true,
    }),
    // minify bundle
    terser(),
  ],
};
