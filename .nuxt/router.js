import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60c7ef31 = () => interopDefault(import('../docs/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _46c7b3be = () => interopDefault(import('../docs/pages/_.vue' /* webpackChunkName: "pages/_" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _60c7ef31,
    name: "index"
  }, {
    path: "/*",
    component: _46c7b3be,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
