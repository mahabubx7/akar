import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Akar.js",
  description: "Lightweight data validation library",
  base: "/akarjs/",
  // lang: "en",
  sitemap: {
    hostname: "https://mahabubx7.github.io/akarjs/"
  },
  head: [["link", { rel: "icon", href: "/akarjs/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Docs", link: "/api" },
      { text: "About Us", link: "/team" }

      // sponser
      // npm-pkg-link
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/mahabubx7/akarjs/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/mahabubx7">Mahabub</a>'
    },

    logo: "/akar-js-logo.png",

    sidebar: [
      {
        text: "Guides",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      },
      {
        text: "API",
        items: [{ text: "API Reference", link: "/api" }]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mahabubx7/akarjs" }
    ]
  }
})
