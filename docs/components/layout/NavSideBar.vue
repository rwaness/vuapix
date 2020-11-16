<template>
  <nav :class="['hidden', { 'md:block': open, 'drawer': drawer }, 'w-64 h-screen bg-white border-r-2 divide-y-2']" @click="onClick">
    <div class="mx-4 py-4 flex justify-center">
      <span class="">v{{ version }}</span>
    </div>

    <div
      v-for="(chapter, index) in tree"
      :key="`chapter-${index}`"
      class="mx-4 py-4"
    >
      <nuxt-link :to="chapter.slug" class="flex justify-center">
        {{ chapter.title }}
      </nuxt-link>

      <template v-if="chapter.active">
        <div
          v-for="(subChapter, idx) in chapter.children"
          :key="`sub-chapter-${index}-${idx}`"
          class="mt-4 p-2 bg-gray-200"
        >
          <div class="py-2 flex text-gray-600">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span class="ml-4 font-medium">{{ subChapter.title }}</span>
          </div>

          <ul class="ml-8">
            <li v-for="(article, i) in subChapter.children" :key="`article-${index}-${idx}-${i}`">
              <nuxt-link
                :to="article.slug"
                class="block py-2 text-sm text-gray-600"
              >
                {{ article.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavSideBar',

  computed: {
    open() {
      return this.$store.getters['nav/open'];
    },
    drawer() {
      return this.$store.getters['nav/drawer'];
    },
    version() {
      return this.$store.getters['version'];
    },
    tree() {
      return this.$store.getters['nav/tree'].map((chapter) => ({
        ...chapter,
        active: this.$route.path.startsWith(chapter.slug.split('/').slice(0, 2).join('/')),
      }));
    },
  },

  mounted() {
    // fix open = true on mobile
    // if (this.open && window.getComputedStyle(this.$el).display === 'none') {
    //   this.toggle(false);
    // }
  },

  watch: {
    drawer(drawer) {
      document.getElementById('scroll-container').classList.toggle('backdrop', drawer);
    },
  },

  methods: {
    toggleDrawer(force) {
      this.$store.dispatch('nav/toggleDrawer', force);
    },
    onClick({ target }) {
      // if click on link > close nav
      if (target.href) {
        this.toggleDrawer(false);
      }
    },
  },
};
</script>

<style lang="scss">
.drawer {
  @apply block absolute z-50;
}
</style>