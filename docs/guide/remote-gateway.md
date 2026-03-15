# Remote Gateway Setup

This guide covers connecting clawui (whether hosted at [try.clawui.app](https://try.clawui.app) or self-hosted over HTTPS) to an OpenClaw gateway running on a remote machine.

## The constraint

A page served over **HTTPS** can only open **WSS** (WebSocket Secure) connections. A plain `ws://` URL will be blocked by the browser. This means:

- If you use the hosted clawui, your gateway must support WSS.
- If you self-host clawui over HTTP on the same LAN, you can connect with `ws://`.

---

## Step 1 — Allow external connections

By default, OpenClaw listens on loopback only. You need to bind to the network interface and whitelist your clawui origin.

Edit `~/.openclaw/openclaw.json`:

```json
{
  "gateway": {
    "bind": "lan",
    "controlUi": {
      "allowedOrigins": [
        "https://try.clawui.app"
      ]
    }
  }
}
```

If you self-host clawui, add your own domain instead of (or alongside) `try.clawui.app`.

---

## Step 2 — Enable TLS

You have two options.

### Option A — Self-signed certificate (quickest)

```bash
openclaw config set gateway.tls.enabled true
openclaw config set gateway.tls.autoGenerate true
```

After restarting, visit `https://your-host:18789` directly in your browser and accept the certificate warning once. The browser will then trust WSS connections from clawui to that host.

### Option B — Trusted certificate via reverse proxy (recommended)

Put a reverse proxy in front of your gateway and terminate TLS there. This avoids the browser warning entirely.

**Caddy** (automatic Let's Encrypt):

```
your-domain.example.com {
    reverse_proxy localhost:18789
}
```

**nginx**:

```nginx
server {
    listen 443 ssl;
    server_name your-domain.example.com;

    ssl_certificate     /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass         http://localhost:18789;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
    }
}
```

---

## Step 3 — Device pairing

Because clawui is connecting as an **external client** (not from the same machine as the gateway), OpenClaw requires device authorization before the connection is accepted.

1. Restart your gateway after the configuration changes above.
2. Open clawui and enter your gateway URL (e.g. `wss://your-domain.example.com`).
3. Follow the device pairing prompts — you'll be asked to confirm the connection on the gateway side.

Once paired, subsequent connections from the same browser are trusted automatically.

---

## Troubleshooting

**Connection refused / no route to host**

Check that `bind: "lan"` is set and the port (default `18789`) is open in your firewall.

**Mixed content blocked**

Your clawui is served over HTTPS but you're connecting to `ws://` instead of `wss://`. Enable TLS on the gateway (Step 2) or use a reverse proxy.

**CORS error**

Add your clawui origin to `gateway.controlUi.allowedOrigins` (Step 1) and restart the gateway.

**Certificate not trusted**

If using a self-signed cert, visit `https://your-host:18789` directly and accept the warning before connecting from clawui.
