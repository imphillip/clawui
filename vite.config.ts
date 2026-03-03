import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";

const here = path.dirname(fileURLToPath(import.meta.url));

function normalizeBase(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    return "/";
  }
  if (trimmed === "./") {
    return "./";
  }
  if (trimmed.endsWith("/")) {
    return trimmed;
  }
  return `${trimmed}/`;
}

/**
 * The upstream openclaw/openclaw monorepo places the Control UI source under
 * ui/ and shares backend modules from a sibling src/ directory.  Import paths
 * in the UI source therefore escape the project root (e.g. "../../../src/…").
 *
 * This plugin intercepts those out-of-root imports and redirects them to the
 * local src/ or apps/ copy that lives inside this repository.
 */
function resolveUpstreamSrc(): Plugin {
  const localSrc = path.resolve(here, "src");
  const parentSrc = path.resolve(here, "../src");

  const localApps = path.resolve(here, "apps");
  const parentApps = path.resolve(here, "../apps");

  return {
    name: "resolve-upstream-src",
    resolveId(source, importer) {
      if (!importer || !source.startsWith("../")) return null;

      const resolved = path.resolve(path.dirname(importer), source);

      if (resolved.startsWith(parentSrc)) {
        const rel = path.relative(parentSrc, resolved);
        return path.join(localSrc, rel).replace(/\.js$/, ".ts");
      }

      if (resolved.startsWith(parentApps)) {
        const rel = path.relative(parentApps, resolved);
        return path.join(localApps, rel);
      }

      return null;
    },
  };
}

export default defineConfig(() => {
  const envBase = process.env.OPENCLAW_CONTROL_UI_BASE_PATH?.trim();
  const base = envBase ? normalizeBase(envBase) : "./";
  return {
    base,
    plugins: [resolveUpstreamSrc()],
    publicDir: path.resolve(here, "public"),
    optimizeDeps: {
      include: ["lit/directives/repeat.js"],
    },
    build: {
      outDir: path.resolve(here, "dist"),
      emptyOutDir: true,
      sourcemap: true,
      // Keep CI/onboard logs clean; current control UI chunking is intentionally above 500 kB.
      chunkSizeWarningLimit: 1024,
    },
    server: {
      host: true,
      port: 5173,
      strictPort: true,
    },
  };
});
