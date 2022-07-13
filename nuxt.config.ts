import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/global.css",
    '~/assets/theme.scss',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],
  ssr: false,
  build: {
    transpile: ['primevue']
  },
  meta: {
    title: 'Amy Huelsman',
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" }
    ]
  },
})
