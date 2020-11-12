---
order: 2
---

### Instantiation

Basic usage :

```js[~/store/vuapix/index.js]
import Vuapix from 'vuapix';
import module1 from './module1.js';
import module2 from './module2/index.js';

export default Vuapix({
  module1,
  module2,
});
```

Advanced usage :

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

Plug into store :

```js[~/store/index.js]
import Vue from 'vue';
import Vuex from 'vuex';
import vuapix from './vuapix';
import myVuapix from './my-vuapix';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  actions: {
  },
  mutations: {
  },
  modules: {
  },
  plugins: [
    vuapix,
    myVuapix,
  ],
});
```

### Component Provider

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
    rerturn {
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

### Mixins

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
  }
};
</script>
```

### Helpers

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