<template>
  <div class="app-wrapper">
    <main-app-bar @open-toggle="onToggleMenu" />
    <main-sidebar
      :is-open="state.isSidebarOpen"
      @load-pokemon-list="onLoadPokemonList"
    />
    <router-view />
  </div>
</template>

<script>
import MainSidebar from '@/components/MainSidebar';
import MainAppBar from '@/components/MainAppBar';
import { reactive, watch } from 'vue';
import { getByType } from '@/hooks/usePokemon';
import store from '@/store';

export default {
  name: 'App',

  components: {
    MainSidebar,
    MainAppBar
  },

  setup() {
    const state = reactive({
      isSidebarOpen: false,
      pokemon: []
    });

    const onToggleMenu = val => {
      state.isSidebarOpen = val;
    };

    const onLoadPokemonList = type => {
      const [data, setData] = getByType(type.url);
      setPokemonType(type);
      setPokemonList({ loading: true, value: [] });

      watch(
        () => data.response,
        newVal => {
          setPokemonList({ loading: false, value: newVal });
        }
      );

      setData();
    };

    const setPokemonList = payload => {
      store.commit('SET_POKEMON_LIST', payload);
    };

    const setPokemonType = type => {
      store.commit('SET_POKEMON_TYPE', type);
    };

    return {
      state,
      onToggleMenu,
      onLoadPokemonList
    };
  }
};
</script>

<style>
.app-wrapper {
  /* Pokemon type colors */
  --normal: rgb(168, 167, 122, 0.8);
  --fire: rgb(238, 129, 48, 0.8);
  --water: rgb(99, 144, 240, 0.8);
  --electric: rgb(247, 207, 43, 0.8);
  --grass: rgb(122, 199, 76, 0.8);
  --ice: rgb(150, 217, 214, 0.8);
  --fighting: rgb(194, 46, 40, 0.8);
  --poison: rgb(163, 62, 161, 0.8);
  --ground: rgb(226, 191, 101, 0.8);
  --flying: rgb(169, 143, 243, 0.8);
  --psychic: rgb(249, 85, 135, 0.8);
  --bug: rgb(166, 185, 26, 0.8);
  --rock: rgb(182, 161, 54, 0.8);
  --ghost: rgb(115, 87, 151, 0.8);
  --dragon: rgb(111, 53, 252, 0.8);
  --dark: rgb(112, 87, 70, 0.8);
  --steel: rgb(183, 183, 206, 0.8);
  --fairy: rgb(214, 133, 173, 0.8);
  --shadow: rgb(112, 88, 152, 0.8);
  --unknown: rgb(199, 199, 199, 0.8);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-family: 'Nunito', sans-serif;
}
@media (min-width: 1024px) {
  .app-wrapper {
    padding-left: 150px;
  }
}
</style>
