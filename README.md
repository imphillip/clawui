# clawui

A better Control UI for [OpenClaw](https://github.com/openclaw/openclaw) — an open-source, community-driven improvement to the official web dashboard.

clawui is a static web app that connects to your OpenClaw gateway over WebSocket. It can run locally alongside your gateway, or be hosted remotely.

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

Your data stays on your machine. clawui is just the frontend skin.

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

### Step 4 — Restart and pair

Restart your gateway, then open try.clawui.app and enter your gateway URL (e.g. `wss://your-host:18789`). Because this is an external client, you will be prompted to complete a **device pairing** flow — follow the prompts in the UI to authorize the connection.

---

## What is OpenClaw?

[OpenClaw](https://github.com/openclaw/openclaw) is a self-hosted gateway that connects chat apps — WhatsApp, Telegram, Discord, iMessage, and more — to AI coding agents. It ships with a browser-based Control UI for chat, configuration, sessions, and node management.

**clawui** improves on that UI with a focus on user experience: cleaner interactions, better layout, and quality-of-life improvements for day-to-day use.

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

## License

MIT — same as OpenClaw upstream.
