<template>
  <nav v-if="navOpen" class="hidden md:block w-64 h-screen bg-white border-r-2">
    <div
      v-for="(chapter, index) in tree"
      :key="`chapter-${index}`"
      class="pt-6"
    >
      <nuxt-link :to="chapter.slug" class="flex items-center justify-center">
        {{ chapter.title }}
      </nuxt-link>

      <div v-if="$route.path.startsWith(chapter.slug.split('/').slice(0, 2).join('/'))" class="pt-6">
        <div v-for="(subChapter, idx) in chapter.children" :key="`sub-chapter-${index}-${idx}`">
          <div class="w-full flex justify-between items-center py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span class="mx-4 font-medium">{{ subChapter.title }}</span>
          </div>

          <ul class="bg-gray-100">
            <li v-for="(article, i) in subChapter.children" :key="`article-${index}-${idx}-${i}`">
              <nuxt-link
                :to="article.slug"
                class="py-2 px-16 block text-sm text-gray-600 hover:bg-blue-500 hover:text-white"
              >
                {{ article.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavSideBar',

  computed: {
    navOpen() {
      return this.$store.getters['nav/navOpen'];
    },
    tree() {
      return this.$store.getters['nav/tree'];
    },
  },

  methods: {
    isOpenedChapter() {
      return true;
    },
  },
};
</script>