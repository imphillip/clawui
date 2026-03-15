---
layout: home

hero:
  name: "clawui"
  text: "OpenClaw UI, unleashed."
  tagline: A standalone web UI for OpenClaw. Your gateway runs anywhere. Your UI runs anywhere else.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Try Online
      link: https://try.clawui.app
    - theme: alt
      text: View on GitHub
      link: https://github.com/imphillip/clawui

features:
  - icon: 🌐
    title: Truly standalone
    details: clawui is a static web app. Deploy it to a CDN, serve it from a local file, or open it from a USB drive. It needs no server of its own — only a WebSocket connection to your OpenClaw gateway.

  - icon: 🔌
    title: Connect to any gateway
    details: Point clawui at any OpenClaw gateway by entering its WebSocket URL. Switch between dev, staging, and production gateways without switching tabs or tools.

  - icon: 🔒
    title: Secure remote access
    details: clawui supports OpenClaw's device pairing flow, so external connections require explicit authorization. Run your gateway headlessly on a remote server and connect securely from anywhere.

  - icon: 🔄
    title: Tracks upstream faithfully
    details: clawui syncs closely with the OpenClaw upstream UI. You get the same features and bug fixes, plus the deployment flexibility the bundled version cannot provide.
---

## Why clawui?

OpenClaw ships with a Control UI, but it is served directly by the gateway process. That design assumes the UI and gateway live on the same machine — which is often not true.

**clawui breaks that assumption.**

It extracts the OpenClaw Control UI into a self-contained static application that connects to a gateway over WebSocket, from anywhere. The gateway can run headlessly on a remote server. Multiple users can share one gateway. One clawui instance can point at many gateways.

```bash
# Install globally
npm install -g clawui

# Or try it immediately — no install needed
open https://try.clawui.app
```

## Upstream tracking

clawui follows the [OpenClaw](https://github.com/openclaw/openclaw) upstream UI closely.

| | |
|---|---|
| **Upstream version** | `v2026.3.2` (`13e256ac9d`) |
| **Last synced** | 2026-03-16 |
| **Sync commit** | [`c639d28`](https://github.com/imphillip/clawui/commit/c639d28) |
