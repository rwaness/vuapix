# VUAPIX
**Headless state management to handle API calls for Vue.js based on vuex**

website documentation coming soon ... 🚀

---

## Instalation

```sh
npm i vuex vuapix
```

---

## Usage

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

Plug into store :

```js[~/store/index.js]
import Vue from 'vue';
import Vuex from 'vuex';
import vuapix from './vuapix';

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
  ],
});
```

Access data from components :

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

---

## Todo
- create request / response helpers
- enhance vuapix context
- improve usage with vuex-orm