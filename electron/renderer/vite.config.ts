import { join } from "path";
import { builtinModules } from "module";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import optimizer from "vite-plugin-optimizer";
import pkg from "../../package.json";

export default defineConfig({
  mode: process.env.NODE_ENV,
  root: __dirname,
  plugins: [react(), electron()],
  base: "./",
  build: {
    outDir: "../dist/renderer",
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    host: pkg.env.VITE_DEV_SERVER_HOST,
    port: pkg.env.VITE_DEV_SERVER_PORT,
  },
});

export function electron(
  entries: Parameters<typeof optimizer>[0] = {}
): Plugin {
  const builtins = builtinModules.filter((t) => !t.startsWith("_"));

  return optimizer({
    ...builtinModulesExport(builtins),
    ...entries,
  });

  function builtinModulesExport(modules: string[]) {
    return modules
      .map((moduleId) => {
        const nodeModule = require(moduleId);
        const requireModule = `const M = require("${moduleId}");`;
        const exportDefault = `export default M;`;
        const exportMembers =
          Object.keys(nodeModule)
            .map((attr) => `export const ${attr} = M.${attr}`)
            .join(";\n") + ";";
        const nodeModuleCode = `
${requireModule}

${exportDefault}

${exportMembers}
`;

        return { [moduleId]: nodeModuleCode };
      })
      .reduce((memo, item) => Object.assign(memo, item), {});
  }
}
