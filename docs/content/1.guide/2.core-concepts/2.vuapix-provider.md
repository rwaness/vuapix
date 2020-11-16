```html[~/components/my-comp.vue]
<template>
  <vuapix-provider
    :entry="module1/entryX"
    :params="customParams"
    @vuapix:query="onQuery"
    @vuapix:success="onSuccess"
    @vuapix:error="onError"
  >
    <template v-slot="{ querying, data, error }">
      <pre>{{ querying }}</pre>
      <pre>{{ data }}</pre>
      <pre>{{ error }}</pre>
    </template>
  </vuapix-provider>
</template>

<script>
import VuapixProvider from '~/store/my-vuapix';

export default {
  name: 'MyComp',

  components: {
    VuapixProvider,
  },

  data() {
    return {
      customParams: 'foobar',
    };
  },

  methods: {
    onQuery() {
      console.log('querying');
    },
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.error(error);
    },
  },
};
</script>
```