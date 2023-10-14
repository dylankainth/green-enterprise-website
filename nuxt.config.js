export default {
  generate: {
    routes: ['/tutorial/1', '/tutorial/2', '/tutorial/3', '/tutorial/4', '/tutorial/5', '/tutorial/6']
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'green-enterprise',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: ['~/node_modules/bootstrap/dist/css/bootstrap.min.css'],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [{ src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client",  }], 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts'],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  ssr: false,
  components: true,

  googleFonts: {
    families: {
      "League Gothic": true,
      "Manrope": true,
      
    }
  },
}
