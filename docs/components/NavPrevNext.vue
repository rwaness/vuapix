<template>
  <div class="flex">
    <nuxt-link
      v-if="previousArticle"
      :to="previousArticle.slug"
      class="flex items-center py-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      <span class="px-2 text-right">
        {{ previousArticle.title }}
      </span>
    </nuxt-link>

    <div :class="['mx-auto my-2', { 'border-l-2': previousArticle && nextArticle }]" />

    <nuxt-link
      v-if="nextArticle"
      :to="nextArticle.slug"
      class="flex items-center py-2"
    >
      <span class="px-2">
        {{ nextArticle.title }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavPrevNext',

  computed: {
    ...mapGetters('nav', [
      'previousArticle',
      'nextArticle',
    ]),
  },
};
</script>