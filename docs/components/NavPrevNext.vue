<template>
  <div class="flex">
    <div v-if="previousArticle" class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      <nuxt-link :to="previousArticle.slug">
        {{ previousArticle.title }}
      </nuxt-link>
    </div>

    <div v-if="nextArticle" class="flex items-center">
      <nuxt-link :to="nextArticle.slug">
        {{ nextArticle.title }}
      </nuxt-link>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavPrevNext',

  computed: {
    allArticles() {
      return this.$store.getters['nav/articles'];
    },
    currentArticleIndex() {
      return this.allArticles.findIndex(({ slug }) => this.$route.path === slug);
    },
    previousArticle() {
      return this.allArticles[this.currentArticleIndex - 1];
    },
    nextArticle() {
      return this.allArticles[this.currentArticleIndex + 1];
    },
  },
};
</script>