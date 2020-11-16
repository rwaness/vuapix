export default {
  srcDir: 'docs/',
  target: 'static',
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
  router: {
    scrollBehavior(to) {
      const container = document.getElementById('scroll-container') || window;
      if (to.hash) {
        return container.scrollTo({
          // TODO review
          top: document.querySelector(to.hash).getBoundingClientRect().top - 80,
          behavior: 'smooth',
        });
      }
      return container.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
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