import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";

const here = path.dirname(fileURLToPath(import.meta.url));

const parentSrc = path.resolve(here, "..", "src");
const localSrc = path.join(here, "src");
const parentApps = path.resolve(here, "..", "apps");
const localApps = path.join(here, "apps");

function isPathInsideRoot(filePath: string, root: string): boolean {
  const rel = path.relative(root, filePath);
  return rel !== "" && !rel.startsWith(`..${path.sep}`) && !path.isAbsolute(rel);
}

function mapMonorepoPathToLocal(
  resolvedFile: string,
  upstreamRoot: string,
  localRoot: string,
): string | undefined {
  if (!isPathInsideRoot(resolvedFile, upstreamRoot)) {
    return undefined;
  }
  const mapped = path.join(localRoot, path.relative(upstreamRoot, resolvedFile));
  if (mapped.endsWith(".js")) {
    return `${mapped.slice(0, -3)}.ts`;
  }
  return mapped;
}

/** Maps sibling `../src` and `../apps` (OpenClaw monorepo layout) onto this repo's `src/` and `apps/`. */
export function resolveUpstreamSrc(): Plugin {
  return {
    name: "resolve-upstream-src",
    enforce: "pre",
    resolveId(source, importer) {
      if (!importer || source.startsWith("\0")) {
        return undefined;
      }
      if (source.startsWith("/") || path.isAbsolute(source)) {
        return undefined;
      }
      const resolved = path.normalize(path.resolve(path.dirname(importer), source));
      return (
        mapMonorepoPathToLocal(resolved, parentSrc, localSrc) ??
        mapMonorepoPathToLocal(resolved, parentApps, localApps)
      );
    },
  };
}
