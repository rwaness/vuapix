Access :

```js[~/store/my-vuapix/index.js]
import Vuapix from 'vuapix';
import module1 from './module1.js';
import module2 from './module2/index.js';

const myVuapix = new Vuapix('my-vuapix', {
  module1,
  module2,
});
export const {
  hasModule,
  registerModule,
  unregisterModule,
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} = myVuapix;
export default myVuapix;
```

Usage :

```html[~/components/my-comp.vue]
<template>
  <div class="my-comp">
    <pre>{{ entryX }}</pre>
    <pre>{{ entryY }}</pre>
    <pre>{{ entryZ }}</pre>
  </div>
</template>

<script>
import { mapGetters } from '~/store/my-vuapix';

export default {
  name: 'MyComp',

  computed: {
    ...mapGetters('module1', [
      'entryX',
      'entryY',
      'entryZ',
    ]),
  },
};
</script>
```
