```html[~/components/my-comp.vue]
<template>
  <div>
    <pre>{{ vuapixQuerying }}</pre>
    <pre>{{ vuapixData }}</pre>
    <pre>{{ vuapixError }}</pre>
  </div>
</template>

<script>
import { VuapixMixin } from 'vuapix';

export default {
  name: 'MyComp',

  mixins: [VuapixMixin],

  vuapix: {
    entry: 'module1/entryX',
    params: { foo: 'bar' },
  },

  mounted() {
    this.vuapixDoQuery();
  },
};
</script>
```
