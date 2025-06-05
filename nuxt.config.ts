export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/device',
    '@nuxt/icon',
    '@nuxt/image-edge',
  ],

  css: [
    '~/assets/css/main.css'
  ],
})