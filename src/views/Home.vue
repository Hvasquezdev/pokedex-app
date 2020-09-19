<template>
  <div class="home">
    <template v-if="loadingList">
      <div class="status-indicator">
        <pokeball-icon />
        <p class="list-status">
          Loading pokemon list
        </p>
      </div>
    </template>

    <template v-else-if="pokemonList.length <= 0">
      <div class="status-indicator">
        <pikachu-icon />
        <p v-if="!selectedType" class="list-status">
          Select a pokemon type to load the list of pokemon
        </p>
        <p v-else class="list-status">
          Oops! there are not pokemon of this type yet, try selecting another
          one
        </p>
      </div>
    </template>

    <div v-show="pokemonList.length" class="pokemon-list-wrapper">
      <pokemon-row
        v-for="(pokemon, key) in pokemonList"
        :key="key"
        :delay="key"
        :is-grey="key % 2 === 0 ? true : false"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import store from '@/store';
import PokemonRow from '@/components/PokemonRow';
import PokeballIcon from '@/components/PokeballIcon';
import PikachuIcon from '@/components/PikachuIcon';
// const pokemonDummy = require('@/dummy/index.json');

export default {
  name: 'Home',

  components: {
    PokemonRow,
    PokeballIcon,
    PikachuIcon
  },

  setup() {
    // const pokemon = reactive(pokemonDummy);
    const pokemonList = computed(() => store.state.pokemonList.value);
    const loadingList = computed(() => store.state.pokemonList.loading);
    const selectedType = computed(() => store.state.selectedType?.name);

    onMounted(() => {
      // eslint-disable-next-line
      // console.log('Pokemon', pokemon);
    });

    return {
      pokemonList,
      loadingList,
      selectedType
    };
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.home .status-indicator {
  margin: auto;
  text-align: center;
}
.home .status-indicator .list-status {
  font-size: 24px;
  font-weight: bold;
  margin-top: 25px;
  color: #5f5f5d;
  max-width: 400px;
}
.home .pokemon-list-wrapper {
  width: 100%;
}
</style>
