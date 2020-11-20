import { buildTree, breadcrumbBuilder, matchPath } from '@/utils';

export const state = () => ({
  open: true,
  drawer: false
});

export const getters = {
  // navbar state
  open: (state) => state.open,
  drawer: (state) => state.drawer,
  // all articles
  articles: (state, getters, rootState, rootGetters) => (
    [...rootGetters.articles].sort((a1, a2) => a1.pos < a2.pos ? -1 : 1)
  ),
  // sorted articles
  tree: (state, getters) => buildTree(getters.articles),
  // breadcrumb
  breadcrumb: (state, getters, rootState, rootGetters) => (
    breadcrumbBuilder(rootGetters.currentPath, getters.tree)
  ),
  // curent chapter
  currentChapter: (state, getters, rootState, rootGetters) => (
    getters.tree.find((chapter) => matchPath(rootGetters.currentPath, chapter))
  ),
  // previous / next articles
  currentArticleIndex: (state, getters, rootState, rootGetters) => (
    getters.articles.findIndex(({ slug }) => rootGetters.currentPath === slug)
  ),
  previousArticle: (state, getters) => getters.articles[getters.currentArticleIndex - 1],
  nextArticle: (state, getters) => getters.articles[getters.currentArticleIndex + 1],
};

export const actions = {
  toggle({ commit, getters }, force) {
    commit('toggle', typeof force === 'undefined' ? !getters.open : force);
  },
  toggleDrawer({ commit, getters }, force) {
    commit('toggleDrawer', typeof force === 'undefined' ? !getters.drawer : force);
  },
};

export const mutations = {
  toggle(state, open) {
    state.open = open;
  },
  toggleDrawer(state, drawer) {
    state.drawer = drawer;
  },
};