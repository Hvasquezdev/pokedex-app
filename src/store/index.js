import { createStore } from 'vuex';

export default createStore({
  state: {
    pokemonList: []
  },
  mutations: {
    SET_POKEMON_LIST(state, pokemon) {
      state.pokemonList = pokemon;
      // eslint-disable-next-line
      pokemon.forEach(item => console.log('Pokemon', item));
    }
  },
  actions: {},
  modules: {}
});
