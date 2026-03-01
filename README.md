# clawui

A better Control UI for [OpenClaw](https://github.com/openclaw/openclaw) — an open-source, community-driven improvement to the official web dashboard.

## What is this?

[OpenClaw](https://github.com/openclaw/openclaw) is a self-hosted gateway that connects chat apps (WhatsApp, Telegram, Discord, iMessage, and more) to AI coding agents. It ships with a browser-based Control UI for chat, configuration, sessions, and node management.

**clawui** forks that UI with a focus on user experience: cleaner interactions, better layout, and quality-of-life improvements for day-to-day use.

## Getting started

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

The dev server proxies to your local OpenClaw Gateway. Make sure the Gateway is running before opening the UI.

### Custom base path

If you serve the built assets under a subpath, set the base path at build time:

```bash
OPENCLAW_CONTROL_UI_BASE_PATH=/clawui/ npm run build
```

## Tech stack

- [Lit](https://lit.dev) — web components
- [Vite](https://vite.dev) — build tooling
- [Vitest](https://vitest.dev) — unit and browser tests

## Relationship to OpenClaw

This project tracks the upstream `ui/` directory from [openclaw/openclaw](https://github.com/openclaw/openclaw). The `.external/` directory (git-ignored) holds a sparse checkout of the upstream repo for reference.

Changes here are intentionally scoped to the UI layer and do not modify the OpenClaw Gateway or agent runtime.

## Contributing

PRs and issues are welcome. Please open an issue before starting significant work so we can align on approach.

## License

MIT — same as OpenClaw upstream.
