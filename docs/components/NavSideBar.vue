<template>
  <nav
    :class="[{ 'md:block': open }, drawer ? 'block fixed top-0 mt-16 z-50 bottom-0 overflow-y-auto' : 'hidden', 'w-64 bg-white px-4 border-r-2 divide-y-2']"
    @click="onClick"
  >
    <slot name="top" />
    
    <div class="md:hidden py-2">
      <nuxt-link
        v-for="(chapter, index) in tree"
        :key="`chapter-${index}`"
        :to="chapter.slug"
        class="py-2 flex justify-center"
      >
        {{ chapter.title }}
      </nuxt-link>
    </div>

    <div v-if="currentChapter">
      <div
        v-for="(subChapter, index) in currentChapter.children"
        :key="`sub-chapter-${index}`"
        class="my-2 px-2"
      >
        <nuxt-link 
          :to="subChapter.slug"
          class="py-2 flex items-center font-semibold text-teal-800"
        >
          <svg v-show="subChapter.children && subChapter.children.length" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          <span class="ml-2">{{ subChapter.title }}</span>
        </nuxt-link >

        <ul>
          <li v-for="(article, idx) in subChapter.children" :key="`article-${index}-${idx}`">
            <nuxt-link
              :to="article.slug"
              class="block pl-8 py-2 text-sm font-medium text-gray-700 hover:bg-green-200 hover:text-teal-800"
            >
              {{ article.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavSideBar',

  computed: {
    ...mapGetters('nav', [
      'open',
      'drawer',
      'tree',
      'currentChapter',
    ]),
  },

  watch: {
    drawer(drawer) {
      this.$el.scrollTop = 0;
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