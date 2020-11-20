<template>
  <div class="flex flex-wrap">
    <div
      v-for="(part, index) in breadcrumb"
      :key="`breadcrumb-${index}`"
      class="flex items-center py-2"
    >
      <span v-if="part.slug === breadcrumb[breadcrumb.length - 1].slug" class="truncate">
        {{ part.title }}
      </span>
      <nuxt-link v-else :to="part.slug" class="truncate">
        {{ part.title }}
      </nuxt-link>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="['w-5 h-5', { 'hidden': index === breadcrumb.length - 1}]">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBreadcrumb',

  computed: {
    breadcrumb() {
      return this.$store.getters['nav/breadcrumb'];
    },
  },
};
</script>