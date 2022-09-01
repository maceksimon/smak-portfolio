import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: "static",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode",
  '@nuxt/image-edge'],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: "",
  },
  // https://content.nuxtjs.org
  content: {
    // note that this option has multiple effects https://content.nuxtjs.org/guide/writing/document-driven
    documentDriven: true,
    navigation: {
      fields: ["navTitle"],
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: "dracula",
    },
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
});
