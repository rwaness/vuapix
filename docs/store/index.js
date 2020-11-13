import { formatArticle } from '@/utils/format';

export const state = () => ({
  articles: [],
  currentSlug: '/',
});

export const getters = {
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
    const articles = await $content('/', { deep: true }).only(['path']).fetch();
    commit('setArticles', articles.map(formatArticle));
  },
  // INIT HOME
  initIndexPage({ dispatch }) {
    dispatch('nav/toggleNav', false);
  },
  // INIT DOC
  initDocPage({ commit, dispatch }, { slug }) {
    commit('setCurrentSlug', slug);
    dispatch('nav/toggleNav', true);
  },
};

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
  setCurrentSlug(state, slug) {
    state.currentSlug = slug;
  }
};