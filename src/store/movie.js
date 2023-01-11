export default {
  // module!
  namespaced: true,
  // data!
  state: () => ({
    movies: []
  }),
  // computed!
  getters: {
    movieIds(state) {
      return state.movies.map(m =>m.imdbID)
    }
  },
  // methods!
  // 변이 (setter 느낌)
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    // state는 바로는 못가져온다.
    // searchMovies(context) {
    searchMovies({state}) {
    }
  }
}