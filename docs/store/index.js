import packageJson from '../../package.json';
import { formatArticle } from '@/utils';

export const state = () => ({
  version: '',
  articles: [],
  currentSlug: '/',
});

export const getters = {
  version: (state) => state.version,
  articles: (state) => state.articles,
  currentSlug: (state) => state.currentSlug,
  articleBySlug: (state, getters) => (slug) => {
    const articles = getters.articles.filter((article) => article.slug.startsWith(slug));
    return (articles.length === 1)
      ? articles[0]
      : articles.sort((a1, a2) => (a1.order < a2.order) ? -1 : 1).shift();
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
  async initDocPage({ commit, dispatch }, { slug }) {
    commit('setCurrentSlug', slug);
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
  setCurrentSlug(state, slug) {
    state.currentSlug = slug;
  }
};