import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/room.js",
    output: {
      file: "public/room.bundle.js",
      sourcemap: true,
      format: "iife"
    },
    plugins: [
      resolve(),
      terser()
    ]
  }
]
