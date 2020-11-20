<template>
  <footer class="text-gray-700 border-t-2">
    <div class="container mx-auto py-8 flex flex-col items:stretch flex-wrap md:flex-row md:items-center md:flex-no-wrap">
      <div class="w-64 px-4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <nuxt-link to="/" class="text-center text-xl font-medium text-teal-800">
          <vuapix-logo grey-scale square class="p-2 rounded-full bg-green-600 text-xl"/>
          <span class="ml-3">Vuapix</span>
        </nuxt-link>
        <p class="mt-2 text-sm text-gray-500">Headless state manager to deal with APIs easily!</p>
      </div>
      <div class="flex-1 flex flex-wrap justify-evenly text-center md:text-left">
        <div
          v-for="(chapter, index) in tree"
          :key="`footer-${index}`"
          class="m-4"
        >
          <h2 class="font-medium text-gray-900 tracking-widest text-sm mb-2">
            <nuxt-link :to="chapter.slug">{{ chapter.title }}</nuxt-link>
          </h2>
          <nav class="list-none">
            <ul>
              <li v-for="(child, idx) in chapter.children" :key="`footer-link-${index}-${idx}`">
                <nuxt-link :to="child.slug" class="text-gray-600 hover:text-gray-800">
                  {{ child.title }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <div class="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row sm:justify-center">
        <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 vuapix —
          <a href="https://github.com/rwaness" target="_blank" rel="noopener noreferrer" class="text-gray-600 ml-1">@rwaness</a>
        </p>
        <!-- <div clas="flex-1">
        </div>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span> -->
      </div>
    </div>
  </footer>
</template>

<script>
import VuapixLogo from '@/components/VuapixLogo';

export default {
  name: 'NavFooter',

  components: {
    VuapixLogo,
  },

  computed: {
    tree() {
      return this.$store.getters['nav/tree'];
    },
  },
};
</script>