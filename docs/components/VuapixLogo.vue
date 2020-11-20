<template>
  <span :class="['vuapix-logo', { 'grey-scale': greyScale, 'square': square }]">
    <span class="content"><slot>V</slot></span>
  </span>
</template>

<script>
export default {
  name: 'VuapixLogo',

  props: {
    greyScale: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style lang="scss" scoped>
.vuapix-logo {
  @apply text-teal-800 font-bold antialiased;
  text-shadow: #38a169 0.05em 0, #68d391 0.1em 0;
  transform: translateX(-.05em);
  line-height: 1em;

  &.grey-scale {
    @apply text-gray-800;
    text-shadow: #718096 0.05em 0, #cbd5e0 0.1em 0;
  }

  &.square {
    @apply inline-flex justify-center items-center;
    transform: none;
    line-height: auto;
    &::after {
      content: ' ';
      @apply block;
      padding-bottom: 100%;
    }
    .content {
      @apply h-0 flex justify-center items-center;
      transform: translateX(-.05em);
    }
  }
}
</style>