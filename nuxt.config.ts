export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/device',
  ],

  css: [
    '~/assets/css/main.css'
  ],
})