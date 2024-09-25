// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in', appear: true }
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/prismic', '@nuxt/image', '@nuxtjs/sitemap'],

  sitemap: {
    exclude: ['/preview/', '/slice-simulator'],
    sitemaps: false,
    urls: async () => {
      const prismic = require('@prismicio/client')
      const repoName = 'fanta-mln'
      const client = prismic.createClient(repoName)

      // Fetch all pages of type 'page'
      const pages = await client.getAllByType('artist', {
        orderings: {
          field: 'document.first_publication_date',
          direction: 'desc',
        },
      })

      // Map over pages to return the correct URL format
      return pages.map(page => ({
        loc: `/artists/${page.uid}`,  // Page route, assuming it uses UID
        lastmod: page.last_publication_date,  // Optional: last modification date
      }))
    },
  },
  site: {
    url: 'https://www.fanta-mln.it',
    name: 'Fanta-MLN',
  },
  image: {
    provider: "prismic",
    prismic: {},
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
    },
  },

  prismic: { endpoint: 'fanta-mln' },

  devServer: {
    port: 3001,
  },

  compatibilityDate: '2024-09-25',
})