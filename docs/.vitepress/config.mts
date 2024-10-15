import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Akar.js",
  description: "Simple & lightweight data validation library",
  base: "/akarjs/",
  // lang: "en",
  sitemap: {
    hostname: "https://mahabubx7.github.io/akarjs/"
  },
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/akarjs/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local"
    },
    editLink: {
      pattern: "https://github.com/mahabubx7/akarjs/edit/main/docs/:path",
      text: "Edit this page on GitHub"
    },

    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Reference", link: "/api" },
      { text: "Our Team", link: "/team" }

      // sponsers place
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/mahabubx7/akarjs/blob/main/LICENSE">MIT License</a>.',
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
          { text: "Define Schema", link: "/schema" },
          { text: "Data Validation", link: "/validation" }
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
      { icon: "github", link: "https://github.com/mahabubx7/akarjs" }
    ]
  }
})
