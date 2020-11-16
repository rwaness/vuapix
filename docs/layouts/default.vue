<template>
  <div class="h-screen w-full overflow-x-hidden">
    <nav-header />

    <div class="container h-full mx-auto -mt-20 pt-20 flex flex-col">
      <div class="flex flex-1">
        <nav-side-bar />

        <nuxt-child class="flex-1 p-4"/>
      </div>

      <nav-footer />
    </div>
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

<style style="scss">
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
</style>