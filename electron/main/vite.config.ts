import { builtinModules } from "module";
import { defineConfig } from "vite";
import esmodule from "vite-plugin-esmodule";

export default defineConfig({
  root: __dirname,
  plugins: [esmodule(["execa"])],
  build: {
    outDir: "../dist/main",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: "index.ts",
      formats: ["cjs"],
      fileName: () => "[name].cjs",
    },
    rollupOptions: {
      external: ["electron", ...builtinModules],
    },
  },
});
