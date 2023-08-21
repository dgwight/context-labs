// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pages: true,
  css: ['vuetify/lib/styles/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
