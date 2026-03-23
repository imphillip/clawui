# Changelog

clawui tracks the OpenClaw upstream UI. Each entry notes the upstream commit range synced, the clawui commit, and the notable changes included.

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
| current | `v2026.3.23` unreleased (`f404ff32d5`) | 2026-03-23 |
