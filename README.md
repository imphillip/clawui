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

To connect your own gateway to the hosted UI, add the origin to your OpenClaw config:

```yaml
gateway:
  controlUi:
    allowedOrigins:
      - https://try.clawui.app
```

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
