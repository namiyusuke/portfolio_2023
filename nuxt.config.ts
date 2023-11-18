// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width",
      title: "俺のポートフォリオ",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
      htmlAttrs: {
        lang: "ja",
        prefix: "og: https://ogp.me/ns#",
      },
    },
  },
  modules: ["nuxt-microcms-module", "@nuxtjs/google-fonts"],
  microCMS: {
    // mode: process.env.NODE_ENV === "production" ? "server" : "all",
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
    target: "all",
  },
  // runtimeConfig: {
  //   apiKey: "60bKCnTtR4sKY4sBzxQLZOn4NBiiTnZqBhB3",
  //   // serviceDomain: SERVICE_DOMAIN,
  // },
  // runtimeConfig: {
  //   // serverEnv: "serverValue",
  //   public: {
  //     clientEnv: process.env.MICROCMS_API_KEY,
  //   },
  // },
  // app: {
  //   pageTransition: {
  //     name: "fade",
  //     mode: "out-in", // default
  //   },
  //   layoutTransition: {
  //     name: "slide",
  //     mode: "out-in", // default
  //   },
  // },
  googleFonts: {
    families: {
      Inter: true,
      Italiana: true,
    },
  },
  experimental: {
    viewTransition: false,
  },
});
