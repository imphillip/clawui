import { defineConfig } from "vitepress";

export default defineConfig({
  title: "clawui",
  description:
    "A standalone web UI for OpenClaw — deployable independently from the gateway.",
  lang: "en-US",

  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:site_name", content: "clawui" }],
    [
      "meta",
      {
        name: "og:description",
        content:
          "A standalone web UI for OpenClaw — deployable independently from the gateway.",
      },
    ],
  ],

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "clawui",

    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Architecture", link: "/architecture" },
      { text: "Changelog", link: "/changelog" },
      {
        text: "GitHub",
        link: "https://github.com/imphillip/clawui",
      },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Remote Gateway", link: "/guide/remote-gateway" },
        ],
      },
      {
        text: "Project",
        items: [
          { text: "Architecture", link: "/architecture" },
          { text: "Changelog", link: "/changelog" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/imphillip/clawui" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Built on top of OpenClaw — the open-source AI gateway.",
    },

    editLink: {
      pattern: "https://github.com/imphillip/clawui/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },

  sitemap: {
    hostname: "https://clawui.app",
  },
});
