export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "La Voz Universal",
    meta: [
      { name: "theme-color", content: "#b1d0c6" },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid:
          "La voz universal es el programa de radio favorito por muchos mexicanos, con el legendario Alfredo Fernandez Zepeda ",
        name: "La voz Universal la estacion de radio favorita de los mexicanos",
        content: ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  googleAnalytics: {
    id: "G-7XPGVY5Y84"
  },

  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",

    "@nuxtjs/google-analytics",

    "nuxt-vite"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    "@nuxtjs/google-fonts"
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "La Voz Universal",
      short_name: "La Voz Universal",
      lang: "es",
      icons: ["static/favicon.png"],
      theme_color: "#a3dcff"
    }
  },

  server: {
    host: "0"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
