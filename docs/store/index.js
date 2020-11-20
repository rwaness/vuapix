import packageJson from '../../package.json';
import { formatArticle } from '@/utils';

export const state = () => ({
  version: '',
  articles: [],
  currentPath: '/',
});

export const getters = {
  version: (state) => state.version,
  articles: (state) => state.articles,
  currentPath: (state) => state.currentPath,
  articleBySlug: (state, getters) => (slug) => {
    const articles = getters.articles.filter((article) => article.slug.startsWith(slug));
    return (articles.length === 1)
      ? articles[0]
      : articles.sort((a1, a2) => (a1.pos < a2.pos) ? -1 : 1).shift();
  },
};

export const actions = {
  // INIT SERVER
  async nuxtServerInit({ commit }, { $content }) {
    commit('setVersion', packageJson.version);
    const articles = await $content('/', { deep: true }).only(['path', 'title']).fetch();
    commit('setArticles', articles.map(formatArticle));
  },
  // INIT HOME
  async initIndexPage({ dispatch }) {
    await dispatch('nav/toggle', false);
  },
  // INIT DOC
  async initDocPage({ commit, dispatch }, { path }) {
    commit('setCurrentPath', path);
    await dispatch('nav/toggle', true);
  },
  // OTHERS COMMON ACTIONS
  clickBackdrop({ dispatch }) {
    dispatch('nav/toggleDrawer', false);
  },
};

export const mutations = {
  setVersion(state, version) {
    state.version = version;
  },
  setArticles(state, articles) {
    state.articles = articles;
  },
  setCurrentPath(state, path) {
    state.currentPath = path;
  }
};