import { createStore } from 'vuex';

export default createStore({
  state: {
    pokemonList: {
      loading: false,
      value: []
    },
    selectedType: {}
  },
  mutations: {
    SET_POKEMON_LIST(state, payload) {
      state.pokemonList = payload;
    },
    SET_POKEMON_TYPE(state, type) {
      state.selectedType = type;
    }
  },
  actions: {},
  modules: {}
});
