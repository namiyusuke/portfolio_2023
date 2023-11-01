// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app: {
  //   head: {
  //     link: [
  //       {
  //         rel: "preconnect",
  //         href: "https://fonts.googleapis.com",
  //       },
  //       {
  //         rel: "stylesheet",
  //         href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
  //         crossorigin: "",
  //       },
  //     ],
  //   },
  // },
  modules: ["nuxt-microcms-module", "@nuxtjs/google-fonts"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },

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
    viewTransition: true,
  },
});
