import { buildTree } from '@/utils/format';

export const state = () => ({
  open: false,
});

export const getters = {
  open: (state) => state.open,
  articles: (state, getters, rootState, rootGetters) => (
    [...rootGetters.articles].sort((a1, a2) => a1.pos < a2.pos ? -1 : 1)
  ),
  tree: (state, getters) => buildTree(getters.articles),
};

export const actions = {
  toggle({ commit, getters }, force) {
    commit('toggle', typeof force === 'undefined' ? !getters.open : force)
  },
};

export const mutations = {
  toggle(state, open) {
    state.open = open;
  }
};