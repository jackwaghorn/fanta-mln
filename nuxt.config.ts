// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in', appear: true  }
  },
  site: {
    url: 'https://www.fanta-mln.it/',
  },
  sitemap: {
    hostname: 'https://www.fanta-mln.it', // Ensure hostname is set
    routes: async () => {
      const prismic = usePrismic();
      const { data: page } = await prismic.client.getByType("artist");
      return page.results.map(p => `/artists/${p.uid}`);
    }
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
})