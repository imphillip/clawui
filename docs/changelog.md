# Changelog

clawui tracks the OpenClaw upstream UI. Each entry notes the upstream commit range synced, the clawui commit, and the notable changes included.

---

## 2026-03-16

**Upstream synced:** `b49e1386d → 13e256ac9d` (OpenClaw `v2026.3.2`)
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
| current | `v2026.3.2` (`13e256ac9d`) | 2026-03-16 |
