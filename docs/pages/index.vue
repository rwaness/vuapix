<template>
  <section class="home-page mx-auto flex flex-col py-12 items-center justify-center text-gray-700">
    <vuapix-logo class="mb-10"/>

    <div class="lg:w-2/3 w-full">
      <h1 class="text-2xl mb-4 font-black text-teal-800">VUAPIX</h1>
      <p class="mb-8 text-3xl font-light leading-none">
        Headless state manager to deal with APIs easily!
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-stretch">
        <nuxt-link :to="getStartedArticle.slug" class="m-2 mx-auto sm:mx-2 py-2 px-6 border-0 rounded text-lg text-white bg-teal-800 hover:bg-green-600 hover:text-white">
          {{ getStartedArticle.title }}
        </nuxt-link>
        <nuxt-link :to="whatsVuapixArticle.slug" class="m-2 mx-auto sm:mx-2 py-2 px-6 border-0 rounded text-lg bg-gray-300 hover:bg-green-600 hover:text-white">
          {{ whatsVuapixArticle.title }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import VuapixLogo from '@/components/VuapixLogo';

export default {
  name: 'HomePage',

  components: {
    VuapixLogo,
  },

  computed: {
    articles() {
      return this.$store.getters['articles'];
    },
    getStartedArticle() {
      return this.articles.find(({ pos }) => pos === '1.1.3');
    },
    whatsVuapixArticle() {
      return this.articles.find(({ pos }) => pos === '1.1.1');
    },
  },

  async fetch() {
    await this.$store.dispatch('initIndexPage');
  }
};
</script>

<style lang="scss" scoped>
.vuapix-logo {
  font-size: 10rem;
}
</style>