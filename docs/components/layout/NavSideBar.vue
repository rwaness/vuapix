<template>
  <nav v-if="navOpen" class="hidden md:block w-64 h-screen bg-white border-r-2">
    <div class="flex items-center justify-center pt-6">
      {{ currentBook }}
    </div>
    <ul class="pt-6">
      <li v-for="chapter in chapters" :key="`chapter-${chapter.order}`">
        <button @click="openedChapter = chapter" class="w-full flex justify-between items-center py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none">
          <span class="flex items-center">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <span class="mx-4 font-medium">{{ chapter.title }}</span>
          </span>

          <span>
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path v-show="!isOpenedChapter(chapter)" d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path v-show="isOpenedChapter(chapter)" d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </button>

        <ul v-show="isOpenedChapter(chapter)" class="bg-gray-100">
          <li v-for="article in articlesByChapter(chapter)" :key="`article-${article.order}`">
            <nuxt-link
              :to="article.slug"
              class="py-2 px-16 block text-sm text-gray-600 hover:bg-blue-500 hover:text-white"
            >
              {{ article.title }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavBar',

  computed: {
    ...mapGetters('nav', [
      'currentBook',
      'chaptersByBook',
      'articlesByChapter',
      'navOpen',
      { savedOpenedChapter: 'openedChapter' },
    ]),
    chapters() {
      return this.chaptersByBook(this.currentBook);
    },
    openedChapter: {
      get() {
        return this.savedOpenedChapter || this.chapters[0];
      },
      set(chapter) {
        this.$store.commit('nav/setOpenedChapter', chapter);
      },
    },
    isOpenedChapter() {
      return (chapter) => this.openedChapter.order === chapter.order;
    },
  },
};
</script>