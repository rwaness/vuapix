<template>
  <div class="h-screen w-full overflow-x-hidden">
    <nav-header />

    <div class="container h-full mx-auto -mt-20 pt-20 flex flex-col">
      <div class="flex-1 flex">
        <nav-side-bar />

        <div class="flex-1 flex flex-col">
          <nav-breadcrumb />

          <nuxt-child class="p-4 flex-1"/>
        </div>
      </div>

      <nav-footer />
    </div>
  </div>
</template>

<script>
import { NavHeader, NavSideBar, NavBreadcrumb, NavFooter } from '@/components/layout';

export default {
  components: {
    NavHeader,
    NavSideBar,
    NavBreadcrumb,
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