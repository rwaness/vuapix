<template>
  <div id="scroll-container" class="h-screen w-full overflow-x-hidden">
    <nav-header />

    <div class="container h-full mx-auto -mt-20 pt-20 flex flex-col">
      <div class="flex-1 flex">
        <nav-side-bar />

        <nuxt-child class="px-4 py-2 flex-1"/>
      </div>

      <nav-footer />
    </div>

    <div class="backdrop-layer hidden" @click="$store.dispatch('clickBackdrop')"/>
  </div>
</template>

<script>
import { NavHeader, NavSideBar, NavFooter } from '@/components/layout';

export default {
  components: {
    NavHeader,
    NavSideBar,
    NavFooter,
  },
};
</script>

<style lang="scss">
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
  @apply text-blue-600;
}

#scroll-container {
  min-width: 320px;

  &.backdrop {
    @apply relative overflow-y-hidden;

    .backdrop-layer {
      display: block !important;
      @apply absolute top-0 left-0 w-full h-full z-40 bg-black bg-opacity-25;
    }
  }
}
</style>