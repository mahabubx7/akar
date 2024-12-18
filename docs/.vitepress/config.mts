import { defineConfig } from "vitepress"
import pkg from "../package.json"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Akar.js",
  description: "Simple & lightweight data validation library",
  // base: "/akar/", // for github pages only
  // lang: "en",
  sitemap: {
    // hostname: "https://mahabubx7.github.io/akar/" // for github pages only
    hostname: "https://akar.js.org"
  },
  lastUpdated: true,
  // head: [["link", { rel: "icon", href: "/akar/favicon.ico" }]], // for github pages only
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local"
    },
    editLink: {
      pattern: "https://github.com/mahabubx7/akar/edit/main/docs/:path",
      text: "Edit this page on GitHub"
    },

    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Reference", link: "/api" },
      { text: "Our Team", link: "/team" },
      {
        text: `v${pkg.version}`,
        items: [
          {
            text: "Releases",
            link: "https://github.com/mahabubx7/akar/releases"
          },
          {
            text: "New Issue",
            link: "https://github.com/mahabubx7/akar/issues/new/choose"
          }
        ]
      }
      // sponsers place
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/mahabubx7/akar/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/mahabubx7">@mahabubx7</a>'
    },

    logo: "/akar-js-logo.png",

    sidebar: [
      {
        text: "Greetings",
        link: "/greetings"
      },
      {
        text: "Guides",
        link: "/",
        base: "/guide",
        items: [
          { text: "Get Started", link: "/get-started" },
          { text: "Schema & Validation", link: "/schema-validation" },
          { text: "Infer Types", link: "/infer-types" }
        ]
      },
      {
        text: "API References",
        link: "/",
        base: "/api",
        items: [
          {
            text: "Object",
            link: "/object"
          },
          {
            text: "Array",
            link: "/array"
          },
          {
            text: "Number",
            link: "/number"
          },
          {
            text: "String",
            link: "/string"
          },
          { text: "Enum", link: "/enum" },

          {
            text: "Boolean",
            link: "/boolean"
          }
        ]
      }
    ],

    socialLinks: [
      {
        icon: "npm",
        link: "https://www.npmjs.com/package/akarjs"
      },
      { icon: "github", link: "https://github.com/mahabubx7/akar" }
    ]
  }
})
