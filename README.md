# clawui

A standalone web UI for [OpenClaw](https://github.com/openclaw/openclaw) — deployable independently from the gateway.

OpenClaw ships with a Control UI, but it is served directly by the gateway process. This means the UI and the gateway must run on the same machine. **clawui** breaks that assumption: it is a self-contained static web app that connects to any OpenClaw gateway over WebSocket, from anywhere.

This matters in practice:

- Your gateway runs on a server, headless. You access the UI from your laptop or phone.
- You host a single clawui instance on a CDN and point it at whichever gateway you need.
- You run multiple gateways (dev, staging, prod) and switch between them from one UI.
- Your team shares a gateway but each member uses their own UI deployment.

---

## Option A — Install Locally

**1. Install**

```bash
npm install -g clawui
```

**2. Configure OpenClaw**

```bash
openclaw config set gateway.controlUi.root ~/.clawui/dist
```

Or edit `~/.openclaw/config.yaml` directly:

```yaml
gateway:
  controlUi:
    root: ~/.clawui/dist
```

**3. Restart your gateway** — open `http://localhost:18789` and you'll see clawui.

Your data stays on your machine. clawui is just the frontend.

---

## Option B — Try Online

Visit **[try.clawui.app](https://try.clawui.app)** — no installation needed.

Connecting try.clawui.app to your own gateway requires a few extra steps because the hosted UI is served over HTTPS, so the browser will only allow **WSS (WebSocket Secure)** connections. A plain `ws://` gateway will be blocked.

### Step 1 — Allow external connections

By default, OpenClaw binds only to loopback. Set `bind` to `"lan"` and add `try.clawui.app` to `allowedOrigins` in `~/.openclaw/openclaw.json`:

```json
"gateway": {
  "bind": "lan",
  "controlUi": {
    "allowedOrigins": [
      "https://try.clawui.app"
    ]
  }
}
```

### Step 2 — Enable TLS

The hosted UI is served over HTTPS, so the browser only allows **WSS** connections. A plain `ws://` gateway will be blocked.

**Option A — Let OpenClaw generate a self-signed certificate** (quickest):

```bash
openclaw config set gateway.tls.enabled true
openclaw config set gateway.tls.autoGenerate true
```

After restarting, open `https://your-host:18789` directly in the browser and accept the certificate warning once.

**Option B — Reverse proxy with a trusted certificate** (no browser warning):

Put Caddy or nginx in front of the gateway and terminate TLS there. Example Caddyfile:

```
your-domain.example.com {
    reverse_proxy localhost:18789
}
```

Caddy automatically provisions a Let's Encrypt certificate.

### Step 3 — Restart and pair

Restart your gateway, then open try.clawui.app and enter your gateway URL (e.g. `wss://your-host:18789`). Because this is an external client, you will be prompted to complete a **device pairing** flow — follow the prompts in the UI to authorize the connection.

---

## What is OpenClaw?

[OpenClaw](https://github.com/openclaw/openclaw) is a self-hosted gateway that connects chat apps — WhatsApp, Telegram, Discord, iMessage, and more — to AI coding agents. It ships with a browser-based Control UI for chat, configuration, sessions, and node management.

clawui is a faithful extraction of that Control UI into a standalone static application. It tracks the upstream UI closely and adds the deployment flexibility that the bundled version cannot provide.

---

## Developing

**Prerequisites:** Node 22+

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Keeping UI in sync with upstream

This repo's UI is derived from the upstream OpenClaw UI at `/Users/wangxiaohan/claw/openclaw/ui`.

```bash
# Compare src/* against upstream (after applying the ignore list)
npm run check:ui-diff

# Sync src/* from upstream into this repo
# (local-only files are kept; files listed in scripts/ui-sync-ignore.txt are never overwritten)
npm run sync:ui

# List files under src/ that do not exist in the upstream tree
npm run check:ui-extra
```

### Custom base path

```bash
OPENCLAW_CONTROL_UI_BASE_PATH=/clawui/ npm run build
```

## Tech stack

- [Lit](https://lit.dev) — web components
- [Vite](https://vite.dev) — build tooling
- [Vitest](https://vitest.dev) — unit and browser tests

---

## Contributing

PRs and issues are welcome. Please open an issue before starting significant work so we can align on approach.

clawui tracks the upstream OpenClaw UI closely. When contributing, keep in mind that the goal is standalone deployability — not divergence from upstream features or behavior.

## License

MIT — same as OpenClaw upstream.
