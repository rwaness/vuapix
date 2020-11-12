// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  srcDir: 'docs/',
  target: 'static',
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content');
      const files = await $content().only(['path']).fetch();
      return [
        '/',
        ...files.map(({ path }) => path),
      ];
    },
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
  tailwindcss: {
    // theme: {
    //   extend: {
    //     fontFamily: {
    //       sans: ["Inter", ...defaultTheme.fontFamily.sans],
    //     },
    //   },
    // },
    // variants: {},
    // plugins: [require("@tailwindcss/ui")],
  },
};