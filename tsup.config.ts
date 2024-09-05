import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    //lib库直接设置false
    splitting: false,
    sourcemap: true,
    clean: true,
    format: ["esm", "cjs"],
    minify: !options.watch,
    dts: true,
  };
});
