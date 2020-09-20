import { createStore } from 'vuex';

export default createStore({
  state: {
    pokemonList: {
      loading: false,
      value: []
    },
    pokemonPagination: {
      currentPage: 1,
      perPage: 20,
      total: 0,
      totalLoaded: 0
    },
    selectedTypePokemonList: [],
    selectedType: {}
  },
  mutations: {
    SET_POKEMON_LIST(state, payload) {
      state.pokemonList = payload;
      console.log(state.pokemonList);
    },
    SET_POKEMON_TYPE(state, type) {
      state.selectedType = type;
    },
    SET_POKEMON_TYPE_POKEMON_LIST(state, list) {
      state.selectedTypePokemonList = list;
    },
    SET_POKEMON_PAGINATION(state, pagination) {
      state.pokemonPagination = pagination;
    }
  },
  actions: {},
  modules: {}
});
