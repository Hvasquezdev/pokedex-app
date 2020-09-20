import { computed, readonly, reactive } from 'vue';
import store from '@/store';

export const usePokemonPagination = () => {
  const pokemonList = computed(() => store.state.pokemonList.value);
  const pagination = computed(() => store.state.pokemonPagination);
  const setPagination = val => store.commit('SET_POKEMON_PAGINATION', val);

  const pokemonListToLoad = computed(() => {
    const perPage = pagination.value.perPage;
    const total = pagination.value.total;
    const listStart = pagination.value.totalLoaded;
    const listEnd = listStart + perPage < total ? listStart + perPage : total;

    return pokemonList.value.slice(listStart, listEnd);
  });

  const state = reactive({
    pokemonList,
    pagination,
    pokemonListToLoad
  });

  return [readonly(state), setPagination];
};
