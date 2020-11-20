import { buildTree } from '@/utils';

export const state = () => ({
  open: true,
  drawer: false
});

export const getters = {
  open: (state) => state.open,
  drawer: (state) => state.drawer,
  articles: (state, getters, rootState, rootGetters) => (
    [...rootGetters.articles].sort((a1, a2) => a1.pos < a2.pos ? -1 : 1)
  ),
  tree: (state, getters) => buildTree(getters.articles),
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