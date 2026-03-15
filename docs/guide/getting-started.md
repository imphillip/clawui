# Getting Started

clawui is a static web app. There are two ways to use it.

## Option A — Install Locally

This is the simplest path. clawui is served by your OpenClaw gateway, replacing its built-in Control UI.

**1. Install**

```bash
npm install -g clawui
```

**2. Tell OpenClaw where to find it**

```bash
openclaw config set gateway.controlUi.root ~/.clawui/dist
```

Or edit `~/.openclaw/config.yaml` directly:

```yaml
gateway:
  controlUi:
    root: ~/.clawui/dist
```

**3. Restart your gateway**

Open `http://localhost:18789` — you're running clawui.

Your data stays on your machine. clawui is a frontend only; it reads and writes nothing directly.

---

## Option B — Use the Hosted Version

Visit **[try.clawui.app](https://try.clawui.app)** — no installation needed.

Enter your gateway URL (e.g. `wss://your-host:18789`) and connect. This requires your gateway to be reachable over the network and to support secure WebSocket connections.

See [Remote Gateway](./remote-gateway) for the full setup guide.

---

## Prerequisites

- **Node 22+** (for local install)
- **OpenClaw** — any recent version. clawui currently tracks upstream `v2026.3.2`.

---

## Development

```bash
git clone https://github.com/imphillip/clawui.git
cd clawui
npm install

# Dev server at http://localhost:5173
npm run dev

# Production build
npm run build

# Tests
npm test
```

### Custom base path

If you're hosting clawui under a sub-path:

```bash
OPENCLAW_CONTROL_UI_BASE_PATH=/clawui/ npm run build
```
