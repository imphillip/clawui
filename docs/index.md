---
layout: home

hero:
  name: clawui
  text: The OpenClaw UI, freed from the gateway.
  tagline: A standalone web app that connects to any OpenClaw gateway over WebSocket — from anywhere.
  image:
    src: /clawui.png
    alt: clawui — OpenClaw Control UI
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Try Online
      link: https://try.clawui.app
    - theme: alt
      text: GitHub
      link: https://github.com/imphillip/clawui

features:
  - icon: 🌐
    title: Connect to any gateway
    details: Enter a WebSocket URL and connect. Switch between dev, staging, and production gateways without switching tabs or reinstalling anything.
  - icon: 💬
    title: Chat with agents
    details: Full chat interface with tool call visibility, thinking output toggle, and session history — same features as the built-in UI.
  - icon: 🤖
    title: Manage all your agents
    details: View, configure, and switch between agents. Inspect agent identity, model, and skill assignments in one place.
  - icon: 🔌
    title: Channels & integrations
    details: Configure WhatsApp, Telegram, Discord, iMessage, and more. View channel health and manage accounts.
  - icon: ⏰
    title: Cron jobs
    details: Schedule recurring agent runs and automated workflows. View run history and manage schedules per agent.
  - icon: 📊
    title: Usage & analytics
    details: Monitor token usage, session activity, and cost across all your agents. Time series charts with configurable windows.
---

## Why not just use the built-in UI?

The Control UI bundled with OpenClaw is served by the gateway process itself. That works fine when everything runs on one machine — but it breaks down the moment you want a different setup.

**clawui breaks that assumption.** It is a self-contained static application that connects to a gateway over WebSocket, from anywhere.

- ✅ Gateway on a remote server, UI on your laptop or phone
- ✅ One clawui instance, multiple gateways (dev / staging / prod)
- ✅ Team shares a gateway, each member uses their own UI
- ✅ Deploy to a CDN, bookmark it, share the link
- ✅ Headless gateway with no UI overhead on the server

## Quick install

```bash
# Install globally
npm install -g clawui

# Tell OpenClaw where to find it
openclaw config set gateway.controlUi.root ~/.clawui/dist

# Restart your gateway — open http://localhost:18789
```

Or skip the install entirely and use the hosted version at [try.clawui.app](https://try.clawui.app).

## Upstream tracking

clawui follows the [OpenClaw](https://github.com/openclaw/openclaw) upstream UI closely — same features, same bug fixes, plus the deployment flexibility the bundled version cannot provide.

| | |
|---|---|
| **Upstream version** | `v2026.3.2+` unreleased (`13e256ac9d`) |
| **Last synced** | 2026-03-16 |
| **Sync commit** | [`c639d28`](https://github.com/imphillip/clawui/commit/c639d28) |
