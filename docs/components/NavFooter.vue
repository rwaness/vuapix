<template>
  <footer class="border-t-2">
    <div class="container mx-auto py-8 flex flex-col items:stretch flex-wrap md:flex-row md:items-center md:flex-no-wrap">
      <div class="w-64 px-4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <nuxt-link to="/" class="text-center text-xl font-semibold text-teal-800">
          <vuapix-logo grey-scale square class="p-2 rounded-full bg-green-600 text-xl"/>
          <span class="ml-3">Vuapix</span>
        </nuxt-link>
        <p class="mt-2 text-sm text-gray-700">Headless state manager to deal with APIs easily!</p>
      </div>
      <div class="flex-1 flex flex-wrap justify-evenly text-center md:text-left">
        <div
          v-for="(chapter, index) in tree"
          :key="`footer-${index}`"
          class="m-4"
        >
          <h2 class="text-sm font-medium mb-2">
            <nuxt-link :to="chapter.slug" class="text-teal-800">{{ chapter.title }}</nuxt-link>
          </h2>
          <nav class="list-none">
            <ul>
              <li v-for="(child, idx) in chapter.children" :key="`footer-link-${index}-${idx}`" class="pb-1">
                <nuxt-link :to="child.slug" class="text-sm text-gray-700 hover:text-green-600">
                  {{ child.title }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-300">
      <div class="container mx-auto p-4 flex flex-wrap flex-col md:flex-row md:justify-center">
        <span class="text-sm text-center md:text-left text-gray-600">© 2020 vuapix —
          <a href="https://github.com/rwaness" target="_blank" rel="noopener noreferrer" class="text-gray-800 ml-1">@rwaness</a>
        </span>
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