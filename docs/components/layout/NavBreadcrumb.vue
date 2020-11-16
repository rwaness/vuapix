<template>
  <div class="p-4 flex">
    <div
      v-for="(part, index) in breadcrumb"
      :key="`breadcrumb-${index}`"
      class="flex items-center"
    >
      <nuxt-link :to="part.slug">
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
      const deepBuilder = (nodes, depth = 1) => {
        const found = nodes?.find(({ slug }) => (
          this.$route.path.startsWith(slug.split('/').slice(0, depth + 1).join('/'))
        ));
        return (found) ? [found, ...deepBuilder(found.children, depth + 1)] : [];
      }
      return deepBuilder(this.$store.getters['nav/tree']);
    },
  },
};
</script>