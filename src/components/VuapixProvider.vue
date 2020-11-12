<template>
  <div class="vuapix-provider">
    <slot
      :data="vuapixData"
      :error="vuapixError"
      :querying="vuapixQuerying"
    ></slot>
  </div>
</template>

<script>
import VuapixMixin from '../mixins/VuapixMixin';

export default {
  name: 'VuapixProvider',

  mixins: [VuapixMixin],

  props: {
    namespace: {
      type: String,
      // default: undefined,
    },
    entry: {
      type: String,
      required: true,
    },
    params: {
      type: [Function, Object],
      // default: () => undefined,
    },
  },

  vuapix() {
    return {
      namespace: this.namespace,
      entry: this.entry,
      params: this.params,
    };
  },

  created() {
    this.vuapixDoQuery();
  },
};
</script>
