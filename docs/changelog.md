# Changelog

clawui tracks the OpenClaw upstream UI. Each entry notes the upstream commit range synced, the clawui commit, and the notable changes included.

---

## 2026-04-13

**Upstream synced:** `42837a04bf → f404ff32d5` (OpenClaw `v2026.3.23`, unreleased HEAD)
**clawui commit:** [`e474675`](https://github.com/imphillip/clawui/commit/e474675)

### What changed

**localStorage safety** — add getSafeLocalStorage() helper (local-storage.ts), replace all direct localStorage access across UI files

**localStorage scoping** — settings key now scoped by basePath/gateway URL to prevent cross-deployment conflicts (storage.ts)

**chat-model-ref** — new module centralizing provider-qualified model references (provider/model format), fixes model picker sending correct provider prefix

**query token compat** — token now accepted from both ?token= query param and #token= hash param; pending token held until gateway URL change is confirmed

**auto-scroll fix** — reset scroll state on send and detect stream start to force scroll to bottom during assistant response

**Usage tab auto-load** — on navigation

**overview locale** — persist locale dropdown selection across refresh

**i18n** — "onboarding" → "setup" in UI strings

**vendor** — add thinking.shared.ts (slash-command-executor import path changed)

**change gitignore**

**update project configuration and UI synchronization scripts**

**enhance UI synchronization and improve usage tab functionality**

**add usage styles to enhance UI consistency**

**update .gitignore to include additional scripts and lock files**

**enhance UI testing and local storage handling**

**update changelog and .gitignore for recent changes**

**update .gitignore to include new documentation scripts**

**update GitHub Actions workflow to deploy docs on release branch**

**update changelog for recent upstream sync**

**update GitHub Actions workflow and changelog**

**Merge branch 'release'**

**update changelog and index for upstream version sync**

**update changelog with recent enhancements and fixes**

**update changelog to reflect current upstream version**

**Merge branch 'release'**

**update dependencies, styles, and scripts**

**update package-lock.json with dependency changes**

**update .gitignore, index.html, and package.json for improved organization and functionality**

**refactor Vite configuration and clean up unused files**

**update Vite output directory for build consistency**

**update changelog and index for upstream version sync**

**update dependencies and refactor configuration files**

**fix(ci)** — sync package-lock.json with package.json for npm ci

**fix(ci)** — pin @rolldown/binding-linux-x64-gnu for Vite 8 on npm ci

**fix(ci)** — pin lightningcss-linux-x64-gnu for Vite CSS minify on npm ci

**fix(ci)** — build into ./dist for Cloudflare Pages

---
## 2026-03-25

**Upstream synced:** `f404ff32d5 → cff6dc94e3` (OpenClaw `v2026.3.23`, unreleased HEAD)
**clawui commit:** [`6de0d71`](https://github.com/imphillip/clawui/commit/6de0d71)

### What changed

**localStorage safety** — add getSafeLocalStorage() helper (local-storage.ts), replace all direct localStorage access across UI files

**localStorage scoping** — settings key now scoped by basePath/gateway URL to prevent cross-deployment conflicts (storage.ts)

**chat-model-ref** — new module centralizing provider-qualified model references (provider/model format), fixes model picker sending correct provider prefix

**query token compat** — token now accepted from both ?token= query param and #token= hash param; pending token held until gateway URL change is confirmed

**auto-scroll fix** — reset scroll state on send and detect stream start to force scroll to bottom during assistant response

**Usage tab auto-load** — on navigation

**overview locale** — persist locale dropdown selection across refresh

**i18n** — "onboarding" → "setup" in UI strings

**vendor** — add thinking.shared.ts (slash-command-executor import path changed)

**change gitignore**

**update project configuration and UI synchronization scripts**

**enhance UI synchronization and improve usage tab functionality**

**add usage styles to enhance UI consistency**

**update .gitignore to include additional scripts and lock files**

**enhance UI testing and local storage handling**

**update changelog and .gitignore for recent changes**

**update .gitignore to include new documentation scripts**

**update GitHub Actions workflow to deploy docs on release branch**

**update changelog for recent upstream sync**

**update GitHub Actions workflow and changelog**

**Merge branch 'release'**

**update changelog and index for upstream version sync**

**update changelog with recent enhancements and fixes**

**update changelog to reflect current upstream version**

**Merge branch 'release'**

**update dependencies, styles, and scripts**

**update package-lock.json with dependency changes**

**update .gitignore, index.html, and package.json for improved organization and functionality**

**refactor Vite configuration and clean up unused files**

**update Vite output directory for build consistency**

---
## 2026-03-23

**Upstream synced:** `42837a04bf → f404ff32d5` (OpenClaw `v2026.3.23`, unreleased HEAD)
**clawui commit:** [`86f8270`](https://github.com/imphillip/clawui/commit/86f8270)

### What changed

**localStorage safety** — add getSafeLocalStorage() helper (local-storage.ts), replace all direct localStorage access across UI files

**localStorage scoping** — settings key now scoped by basePath/gateway URL to prevent cross-deployment conflicts (storage.ts)

**chat-model-ref** — new module centralizing provider-qualified model references (provider/model format), fixes model picker sending correct provider prefix

**query token compat** — token now accepted from both ?token= query param and #token= hash param; pending token held until gateway URL change is confirmed

**auto-scroll fix** — reset scroll state on send and detect stream start to force scroll to bottom during assistant response

**Usage tab auto-load** — on navigation

**overview locale** — persist locale dropdown selection across refresh

**i18n** — "onboarding" → "setup" in UI strings

**vendor** — add thinking.shared.ts (slash-command-executor import path changed)

**add usage styles to enhance UI consistency**

---

## 2026-03-16 (second sync)

**Upstream synced:** `13e256ac9d → 42837a04bf` (OpenClaw `v2026.3.2+`, unreleased HEAD)
**clawui commit:** [`7ff1d37`](https://github.com/imphillip/clawui/commit/7ff1d37)

### What changed

**Per-gateway session persistence** — The active session is now stored separately for each gateway URL. Switching between gateways restores the last-used session for each one, up to a rolling window of 10 recent gateways.

**URL token session reset** — When a `?token=…` query parameter is present without an explicit `?session=…`, the session resets to `main`. Prevents stale sessions from carrying over when connecting to a new gateway via shared link.

---

## 2026-03-16

**Upstream synced:** `b49e1386d → 13e256ac9d` (OpenClaw `v2026.3.2+`, unreleased HEAD)
**clawui commit:** [`c639d28`](https://github.com/imphillip/clawui/commit/c639d28)

### What changed

**Tool calls toggle** — A new button in the chat controls lets you show or hide tool call messages and tool results independently from thinking output. The setting persists across sessions.

**Mobile gear menu** — On small screens, the chat header controls (session selector, thinking toggle, tool calls toggle, focus mode) are now collapsed into a gear icon in the topbar. Tapping it opens a dropdown. The desktop layout is unchanged.

**Gateway shutdown messages** — When the gateway sends a `shutdown` event before closing the WebSocket (e.g. during a config-triggered restart), clawui now shows a human-readable "Restarting: …" message instead of a generic disconnect error. The message is cleared automatically when the gateway reconnects.

---

## 2026-03-15

**Upstream synced:** `87d939be7 → b49e1386d`
**clawui commit:** [`5456dc6`](https://github.com/imphillip/clawui/commit/5456dc6)

### What changed

Large sync covering the dashboard-v2 rebuild, Vite 7→8 migration, and a comprehensive CSS rewrite. 120 files changed. Key highlights:

- Dashboard redesigned with new layout and component structure
- Vite upgraded from 7 to 8
- Mobile layout substantially improved
- CSS variables and design tokens consolidated

---

## 2026-03-14

**clawui commit:** [`f85f789`](https://github.com/imphillip/clawui/commit/f85f789)

### Infrastructure

- Vite plugin extended to redirect `../apps/` imports (in addition to `../src/`) to the local repo
- `tool-display.json` vendored into the repo so CI builds work without the full OpenClaw monorepo

---

## Initial release

**clawui commit:** [`4dff5d7`](https://github.com/imphillip/clawui/commit/4dff5d7)

First working standalone build of the OpenClaw Control UI. Establishes the `resolveUpstreamSrc()` Vite plugin and the sparse-checkout sync workflow.

---

## Upstream version reference

| clawui | OpenClaw upstream | Sync date |
|---|---|---|
| current | `v2026.4.12` unreleased (`1de5610`) | 2026-04-13 |
