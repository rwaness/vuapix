import { buildTree } from '@/utils/format';

export const state = () => ({
  navOpen: false,
});

export const getters = {
  navOpen: (state) => state.navOpen,
  articles: (state, getters, rootState, rootGetters) => rootGetters.articles,
  tree: (state, getters) => buildTree(getters.articles),
};

export const actions = {
  toggleNav({ commit }, open) {
    commit('toggleNav', open)
  },
};

export const mutations = {
  toggleNav(state, open) {
    state.navOpen = open;
  }
};