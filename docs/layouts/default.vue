<template>
  <div class="vuapix-doc">
    <header class="border-b-2">
      <div class="container mx-auto">
        <h1>VUAPIX</h1>
      </div>
    </header>

    <div class="vuapix-doc-container container mx-auto">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style style="scss">
/* @import "tailwindcss/base"; */
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
  @apply text-blue-600 underline;
}
/* @import "tailwindcss/components";
@import "tailwindcss/utilities"; */

.vuapix-doc {
  .vuapix-doc-container {
    /* @apply container mx-auto; */
  }
}
</style>