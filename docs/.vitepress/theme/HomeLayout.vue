<template>
  <div class="home-page">
    <!-- Nav -->
    <header class="nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <span>clawui</span>
        </a>
        <nav class="nav-links">
          <a href="/guide/getting-started">Docs</a>
          <a href="/architecture">Architecture</a>
          <a href="/changelog">Changelog</a>
          <a href="https://github.com/imphillip/clawui" target="_blank" rel="noopener">GitHub</a>
        </nav>
        <a href="/guide/getting-started" class="nav-cta">Get started</a>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <div class="badge">OPENCLAW UI</div>
        <h1 class="hero-title">
          The OpenClaw UI,<br />
          freed from the gateway.
        </h1>
        <p class="hero-sub">
          clawui is a standalone web app that connects to any OpenClaw gateway
          over WebSocket — from anywhere. Your gateway runs headlessly on a
          server. Your UI runs wherever you need it.
        </p>
        <div class="hero-actions">
          <a href="/guide/getting-started" class="btn-primary">Get started</a>
          <a href="https://try.clawui.app" target="_blank" rel="noopener" class="btn-secondary">
            Try online &rarr;
          </a>
        </div>
        <div class="hero-screenshot">
          <div class="screenshot-frame">
            <div class="screenshot-bar">
              <span class="dot" />
              <span class="dot" />
              <span class="dot" />
              <span class="screenshot-url">try.clawui.app</span>
            </div>
            <img src="/clawui.png" alt="clawui — OpenClaw Control UI" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="section-inner">
        <h2 class="section-title">Everything in one place</h2>
        <p class="section-sub">
          Full parity with the OpenClaw built-in UI — plus the freedom to
          deploy it anywhere.
        </p>
        <div class="features-grid">
          <div class="feature-card" v-for="f in features" :key="f.title">
            <div class="feature-icon" v-html="f.icon" />
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="install">
      <div class="section-inner">
        <h2 class="section-title">Two ways to run it</h2>
        <div class="install-grid">
          <div class="install-card">
            <div class="install-letter">A</div>
            <h3>Install locally</h3>
            <p>
              Replace the built-in OpenClaw Control UI with clawui. Served by
              your gateway, zero network exposure needed.
            </p>
            <div class="code-block">
              <pre><code>npm install -g clawui

openclaw config set \
  gateway.controlUi.root \
  ~/.clawui/dist</code></pre>
            </div>
            <p class="install-note">
              Then restart your gateway and open
              <code>http://localhost:18789</code>.
            </p>
          </div>

          <div class="install-card">
            <div class="install-letter">B</div>
            <h3>Use the hosted version</h3>
            <p>
              Open <a href="https://try.clawui.app" target="_blank" rel="noopener">try.clawui.app</a>
              and enter your gateway URL. No installation needed. Requires WSS
              (WebSocket Secure) and device pairing for external connections.
            </p>
            <div class="code-block">
              <pre><code># Allow external connections + TLS
openclaw config set gateway.bind lan
openclaw config set gateway.tls.enabled true
openclaw config set gateway.tls.autoGenerate true</code></pre>
            </div>
            <p class="install-note">
              Then connect from try.clawui.app with
              <code>wss://your-host:18789</code>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why standalone -->
    <section class="why">
      <div class="section-inner why-inner">
        <div class="why-text">
          <h2>Why not just use the built-in UI?</h2>
          <p>
            The Control UI bundled with OpenClaw is served by the gateway
            process itself. That works fine when everything runs on one
            machine — but it breaks down the moment you want a different setup.
          </p>
          <ul class="why-list">
            <li>
              <span class="check">✓</span>
              Gateway on a remote server, UI on your laptop
            </li>
            <li>
              <span class="check">✓</span>
              One clawui, multiple gateways (dev / staging / prod)
            </li>
            <li>
              <span class="check">✓</span>
              Team shares a gateway, each member uses their own UI
            </li>
            <li>
              <span class="check">✓</span>
              Deploy to a CDN, bookmark it, share the link
            </li>
            <li>
              <span class="check">✓</span>
              Headless gateway with no UI overhead on the server
            </li>
          </ul>
        </div>
        <div class="why-version">
          <div class="version-card">
            <div class="version-label">Tracking upstream</div>
            <div class="version-value">v2026.3.2</div>
            <div class="version-hash">13e256ac9d</div>
            <div class="version-date">Synced 2026-03-16</div>
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener"
              class="version-link"
            >
              OpenClaw upstream &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="section-inner cta-inner">
        <h2>Ready to run it anywhere?</h2>
        <div class="cta-actions">
          <a href="/guide/getting-started" class="btn-primary btn-lg">Get started</a>
          <a href="https://try.clawui.app" target="_blank" rel="noopener" class="btn-ghost btn-lg">
            Try online
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <span>Built on <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener">OpenClaw</a></span>
        <span class="sep">·</span>
        <span><a href="https://github.com/imphillip/clawui" target="_blank" rel="noopener">GitHub</a></span>
        <span class="sep">·</span>
        <span>MIT License</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: "Connect to any gateway",
    desc: "Enter a WebSocket URL and connect. Switch between gateways without switching tabs or reinstalling anything.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  },
  {
    title: "Chat with agents",
    desc: "Full chat interface with tool call visibility, thinking output toggle, and session history — same as the native UI.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  },
  {
    title: "Manage all your agents",
    desc: "View, configure, and switch between agents. Inspect agent identity, model, and skill assignments in one place.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    title: "Channels & integrations",
    desc: "Configure WhatsApp, Telegram, Discord, iMessage, and more. View channel health and manage accounts.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    title: "Cron jobs",
    desc: "Schedule recurring agent runs and automated workflows. View run history and manage schedules per agent.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
  {
    title: "Usage & analytics",
    desc: "Monitor token usage, session activity, and cost across all your agents. Time series charts with configurable windows.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  },
];
</script>

<style scoped>
/* ── Reset & base ── */
.home-page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif;
  color: #111;
  background: #fff;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* ── Nav ── */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f0f0f0;
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 32px;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 17px;
  color: #111;
  text-decoration: none;
}
.nav-logo svg {
  color: #e03131;
}
.nav-links {
  display: flex;
  gap: 24px;
  margin-left: 8px;
}
.nav-links a {
  font-size: 14px;
  color: #555;
  text-decoration: none;
  transition: color 0.15s;
}
.nav-links a:hover {
  color: #111;
}
.nav-cta {
  margin-left: auto;
  background: #e03131;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s;
}
.nav-cta:hover {
  background: #c92a2a;
}

/* ── Hero ── */
.hero {
  padding: 88px 32px 0;
  text-align: center;
  background: radial-gradient(
    ellipse 80% 50% at 50% -10%,
    rgba(224, 49, 49, 0.06) 0%,
    transparent 70%
  );
}
.hero-inner {
  max-width: 860px;
  margin: 0 auto;
}
.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #e03131;
  border: 1px solid rgba(224, 49, 49, 0.3);
  border-radius: 100px;
  padding: 4px 12px;
  margin-bottom: 28px;
  background: rgba(224, 49, 49, 0.04);
}
.hero-title {
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0 0 24px;
  color: #0a0a0a;
}
.hero-sub {
  font-size: 18px;
  color: #555;
  max-width: 600px;
  margin: 0 auto 36px;
  line-height: 1.7;
}
.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 64px;
}
.btn-primary {
  background: #e03131;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s, transform 0.1s;
}
.btn-primary:hover {
  background: #c92a2a;
  transform: translateY(-1px);
}
.btn-secondary {
  background: #f5f5f5;
  color: #111;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #e0e0e0;
  transition: background 0.15s;
}
.btn-secondary:hover {
  background: #ebebeb;
}

/* ── Screenshot ── */
.hero-screenshot {
  position: relative;
  margin: 0 auto;
  max-width: 860px;
}
.screenshot-frame {
  border-radius: 12px 12px 0 0;
  border: 1px solid #e0e0e0;
  border-bottom: none;
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 20px 60px -10px rgba(0, 0, 0, 0.12);
}
.screenshot-bar {
  background: #f0f0f0;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid #e0e0e0;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
  display: inline-block;
}
.dot:nth-child(1) { background: #ff5f57; }
.dot:nth-child(2) { background: #febc2e; }
.dot:nth-child(3) { background: #28c840; }
.screenshot-url {
  margin-left: 8px;
  font-size: 12px;
  color: #888;
  font-family: monospace;
}
.screenshot-frame img {
  width: 100%;
  display: block;
}

/* ── Shared section styles ── */
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
}
.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 0 12px;
}
.section-sub {
  text-align: center;
  color: #666;
  font-size: 17px;
  max-width: 520px;
  margin: 0 auto 56px;
}

/* ── Features ── */
.features {
  padding: 100px 32px;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.feature-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  padding: 28px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.feature-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  transform: translateY(-2px);
}
.feature-icon {
  color: #e03131;
  margin-bottom: 16px;
}
.feature-card h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
}
.feature-card p {
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.65;
}

/* ── Install ── */
.install {
  padding: 100px 32px;
}
.install-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 8px;
}
.install-card {
  border: 1px solid #ebebeb;
  border-radius: 12px;
  padding: 36px;
  background: #fff;
}
.install-letter {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e03131;
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.install-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px;
}
.install-card > p {
  font-size: 15px;
  color: #555;
  margin: 0 0 20px;
  line-height: 1.7;
}
.code-block {
  background: #0f0f0f;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}
.code-block pre {
  margin: 0;
  padding: 18px 20px;
  overflow-x: auto;
}
.code-block code {
  font-family: "SF Mono", "Fira Code", "Fira Mono", monospace;
  font-size: 13px;
  color: #e2e8f0;
  line-height: 1.7;
}
.install-note {
  font-size: 13px;
  color: #888;
  margin: 0;
}
.install-note code {
  font-size: 12px;
  background: #f3f3f3;
  padding: 1px 5px;
  border-radius: 4px;
  color: #333;
}
.install-card a {
  color: #e03131;
}

/* ── Why ── */
.why {
  padding: 100px 32px;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}
.why-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 64px;
  align-items: start;
}
.why-text h2 {
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
}
.why-text > p {
  font-size: 16px;
  color: #555;
  line-height: 1.75;
  max-width: 540px;
  margin: 0 0 28px;
}
.why-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.why-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #333;
}
.check {
  color: #e03131;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.version-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  padding: 28px 32px;
  text-align: center;
  min-width: 200px;
}
.version-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.version-value {
  font-size: 28px;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
}
.version-hash {
  font-size: 12px;
  font-family: monospace;
  color: #aaa;
  margin-bottom: 4px;
}
.version-date {
  font-size: 12px;
  color: #bbb;
  margin-bottom: 20px;
}
.version-link {
  font-size: 13px;
  color: #e03131;
  text-decoration: none;
  font-weight: 600;
}
.version-link:hover {
  text-decoration: underline;
}

/* ── CTA ── */
.cta-section {
  padding: 100px 32px;
  text-align: center;
}
.cta-inner h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 36px;
}
.cta-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-lg {
  font-size: 16px;
  padding: 14px 36px;
}
.btn-ghost {
  background: transparent;
  color: #333;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #ddd;
  transition: background 0.15s;
}
.btn-ghost:hover {
  background: #f5f5f5;
}

/* ── Footer ── */
.footer {
  border-top: 1px solid #f0f0f0;
  padding: 28px 32px;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #aaa;
}
.footer a {
  color: #888;
  text-decoration: none;
}
.footer a:hover {
  color: #333;
}
.sep {
  color: #ddd;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: 1fr 1fr;
  }
  .why-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .why-version {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 640px) {
  .nav-links {
    display: none;
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
  .install-grid {
    grid-template-columns: 1fr;
  }
  .hero {
    padding-top: 56px;
  }
}
</style>
