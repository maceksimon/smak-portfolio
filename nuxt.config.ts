import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge",
    "@nuxtjs/i18n",
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: "",
  },
  // https://content.nuxtjs.org
  content: {
    // note that this option has multiple effects https://content.nuxtjs.org/guide/writing/document-driven
    documentDriven: false,
    navigation: {
      fields: ["navTitle", "language"],
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: "dracula",
    },
  },
  image: {
    provider: "netlify",
  },
  i18n: {
    locales: [
      {
        code: "cs",
        iso: "cs-CZ",
        file: "cs-CZ.json",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
      },
    ],
    customRoutes: "config",
    strategy: "prefix_except_default",
    langDir: "locales",
    defaultLocale: "cs",
    parsePages: false,
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: "",
      redirectOn: "root",
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: "i18n_redirected",
      cookieSecure: false,
    },
    pages: {
      root: {
        cs: "/",
        en: "/en",
      },
      services: {
        cs: "/sluzby",
        en: "/services",
      },
      about: {
        cs: "/o-mne",
        en: "/about",
      },
    },
    vueI18n: {
      fallbackLocale: "cs",
    },
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
});
