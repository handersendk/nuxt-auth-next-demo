export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt-auth-sample",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  middleware: "auth",
  auth: {
    strategies: {
      social: {
        scheme: "oauth2",
        endpoints: {
          authorization:
            "https://wakkacorp.b2clogin.com/wakkacorp.onmicrosoft.com/B2C_1_signupsignin1/oauth2/v2.0/authorize",
          token: "code",
          userInfo: "http://localhost:3000/api/userinfo"
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 1800
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: "token",
        grantType: "authorization_code",
        accessType: "offline",
        clientId: "4ce93040-e1b6-4652-86cd-dc10aaf697fc",
        scope: [
          "https://wakkacorp.onmicrosoft.com/4ce93040-e1b6-4652-86cd-dc10aaf697fc/calender-read"
        ],
        state: "UNIQUE_AND_NON_GUESSABLE"
      }
    }
  }
};
