export const state = () => ({
  navOpen: false,
  openedChapter: null,
});

export const getters = {
  navOpen: (state) => state.navOpen,
  allArticles: (state, getters, rootState, rootGetters) => rootGetters.articles,
  currentBook: (state, getters, rootState, rootGetters) => (
    rootGetters.articleBySlug(rootGetters.currentSlug).book
  ),
  chaptersByBook: (state, getters) => (
    (book) => getters.allArticles
      .reduce((chapters, { chapter }) => ((
        chapter.book !== book
        || chapters.find((chap) => chap.slug === chapter.slug)
      ) ? chapters : [...chapters, chapter]), [])
      .sort((c1, c2) => (c1.order < c2.order) ? -1 : 1)
  ),
  articlesByChapter: (state, getters) => (
    (chap) => getters.allArticles
      .filter(({ chapter }) => chapter.slug === chap.slug)
      .sort((a1, a2) => (a1.order < a2.order) ? -1 : 1)
  ),
  openedChapter: (state) => state.openedChapter,
};

export const actions = {
  toggleNav({ commit }, open) {
    commit('toggleNav', open)
  },
};

export const mutations = {
  setOpenedChapter(state, openedChapter) {
    state.openedChapter = openedChapter;
  },
  toggleNav(state, open) {
    state.navOpen = open;
  }
};