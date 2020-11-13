export default {
  srcDir: 'docs/',
  target: 'static',
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content');
      const { formatArticle } = require('./docs/utils/format');
      let articles = await $content('/', { deep: true }).only(['path']).fetch();
      articles = articles.map(formatArticle);
      console.log(articles);
      const routes = [
        '/',
        '/guide',
        '/api',
        '/examples',
        ...articles.map(({ slug }) => slug),
      ];
      console.log(routes);
      return routes;
    },
  },
  head: {
    title: 'Vuapix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  modules: [
    '@nuxt/content',
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  // tailwindcss: {
  // },
};