# Architecture

## Overview

clawui is a faithful extraction of the [OpenClaw](https://github.com/openclaw/openclaw) Control UI into a self-contained static web application.

The OpenClaw monorepo places the Control UI source under `ui/` and shares backend modules from a sibling `src/` directory. In the original monorepo, the UI is built together with the backend and served by the gateway process. clawui breaks this coupling while keeping the UI source as close to upstream as possible.

```
openclaw/          ← upstream monorepo
  ui/src/          ← Control UI source
  src/             ← backend (gateway, agents, sessions…)

clawui/            ← this repo
  src/             ← mirrors upstream ui/src/ 1:1
  src/shared/      ← vendored type declarations from upstream src/
  src/cron/        ← vendored type declarations from upstream src/
  src/gateway/     ← vendored type declarations from upstream src/
  …
```

## Vite plugin: resolving cross-boundary imports

The upstream UI source contains imports that escape the `ui/` directory, reaching into the backend `src/` for shared types and utilities:

```ts
// In upstream ui/src/ui/types.ts
import type { CronJobBase } from "../../../src/cron/types-shared.js";
import type { GatewayAgentRow } from "../../../src/shared/session-types.js";
```

In the original monorepo these resolve naturally because `ui/` and `src/` are siblings. In clawui, which only contains the UI, these paths would point outside the repository.

The `resolveUpstreamSrc()` Vite plugin intercepts these out-of-root imports at build time and redirects them to clawui's local `src/`:

```ts
// vite.config.ts (simplified)
function resolveUpstreamSrc(): Plugin {
  return {
    name: "resolve-upstream-src",
    enforce: "pre",
    resolveId(source, importer) {
      const resolved = path.resolve(path.dirname(importer), source);
      if (resolved.startsWith(parentSrc)) {
        const rel = path.relative(parentSrc, resolved);
        return path.join(localSrc, rel).replace(/\.js$/, ".ts");
      }
    },
  };
}
```

## Vendored files

Some upstream backend files are imported by the UI for their runtime values (functions, constants) or type declarations. These are vendored directly into clawui's `src/` and kept in sync with upstream:

| File | Purpose |
|---|---|
| `src/agents/tool-display-common.ts` | Tool display utilities (`resolveToolVerbAndDetailForArgs`, etc.) |
| `src/agents/tool-policy-shared.ts` | Tool policy shared logic |
| `src/auto-reply/thinking.ts` | `resolveThinkingDefaultForModel` |
| `src/auto-reply/reply/strip-inbound-meta.ts` | Message metadata stripping |
| `src/gateway/protocol/connect-error-details.ts` | `readConnectErrorRecoveryAdvice` |
| `src/gateway/device-auth.ts` | Device auth payload builder |
| `src/gateway/events.ts` | Gateway event constants |
| `src/infra/format-time/` | Duration and timestamp formatting |
| `src/shared/assistant-identity-values.ts` | Assistant identity coercion |
| `src/shared/config-ui-hints-types.ts` | Config UI hint types (type-only) |
| `src/shared/device-auth-store.ts` | Device auth store types |
| `src/shared/session-types.ts` | Session list/patch result types (type-only) |
| `src/shared/session-usage-timeseries-types.ts` | Usage timeseries types |
| `src/shared/usage-types.ts` | Session usage result types |
| `src/shared/usage-aggregates.ts` | Usage aggregate utilities |
| `src/cron/types-shared.ts` | `CronJobBase` generic type (type-only) |

Type-only vendored files (`import type` only) have zero runtime impact — esbuild strips them entirely. Runtime vendored files must be kept in sync when the upstream changes their exports.

## Syncing with upstream

OpenClaw upstream is tracked via a [sparse checkout](https://git-scm.com/docs/git-sparse-checkout) in `.external/`, covering only the paths clawui needs:

```
ui/
src/gateway/
src/sessions/
src/routing/
src/auto-reply/
src/shared/
src/agents/
src/infra/
docs/
```

**Sync workflow:**

1. Pull upstream: `cd .external && git pull origin main`
2. Diff UI changes: `git diff <prev-hash>..HEAD --stat -- ui/ src/`
3. Copy changed `ui/src/` files → clawui `src/`
4. Update any vendored `src/` files that changed upstream
5. Build verify: `npm run build`
6. Commit with hash range: `chore: sync ui changes from upstream (hash1..hash2)`

**Detecting new cross-boundary imports** after a sync:

```bash
grep -r 'from.*\.\./\.\.' src/ --include="*.ts" -h | sort -u
```

Any path resolving outside `src/` needs a corresponding vendored file.

## Tech stack

| | |
|---|---|
| **UI framework** | [Lit](https://lit.dev) web components |
| **Build** | [Vite](https://vite.dev) 8 |
| **Tests** | [Vitest](https://vitest.dev) 4 (Node + browser via Playwright) |
| **Upstream** | [OpenClaw](https://github.com/openclaw/openclaw) `v2026.3.2` |
