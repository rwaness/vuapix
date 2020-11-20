<template>
  <div id="scroll-container" :class="['h-screen w-full overflow-x-hidden text-gray-800 ', { 'relative overflow-y-hidden': drawer }]">
    <nav-header />

    <div class="h-full -mt-20 pt-20 flex flex-col">
      <div class="flex-1 flex container mx-auto">
        <nav-side-bar>
          <template #top>
            <div class="my-2 flex justify-center">
              <span class="">v{{ version }}</span>
            </div>
          </template>
        </nav-side-bar>

        <nuxt-child class="px-4 flex-1"/>
      </div>

      <nav-footer />
    </div>

    <button
      v-show="showGoTop"
      class="fixed bottom-0 right-0 z-40 mb-8 mr-8 p-2 rounded-full bg-teal-800 text-white"
      @click="$el.scrollTo({ top: 0, behavior: 'smooth' })"
    >
      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
      </svg>
    </button>

    <div
      v-show="drawer"
      class="fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-25"
      @click="$store.dispatch('clickBackdrop')"
    />
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader';
import NavSideBar from '@/components/NavSideBar';
import NavFooter from '@/components/NavFooter';

export default {
  components: {
    NavHeader,
    NavSideBar,
    NavFooter,
  },

  data() {
    return {
      showGoTop: false,
    };
  },

  computed: {
    version() {
      return this.$store.getters['version'];
    },
    drawer() {
      return this.$store.getters['nav/drawer'];
    },
  },

  mounted() {
    this.$el.addEventListener('scroll', this.onScroll);
  },

  beforeDestroy() {
    this.$el.addEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll() {
      this.showGoTop = this.$el.scrollTop > 100;
    },
  },
};
</script>

<style lang="scss">
#scroll-container {
  min-width: 320px;
}

h1 {
  @apply text-2xl;
}
h2 {
  @apply text-xl;
}
h3 {
  @apply text-lg;
}
a {
  @apply text-green-600;
  &:hover {
    @apply text-teal-800;
    &.text-teal-800 {
      @apply text-green-600;
    }
  }
  &:focus, &:active {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }
}
button {
  &:focus, &:active {
    @apply outline-none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }
}
</style>