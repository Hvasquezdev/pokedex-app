<template>
  <div class="home">
    <pokemon-row
      v-for="(pokemon, key) in pokemonList"
      :key="key"
      :is-grey="key % 2 === 0 ? true : false"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import store from '@/store';
import PokemonRow from '@/components/PokemonRow';
// const pokemonDummy = require('@/dummy/index.json');

export default {
  name: 'Home',

  components: {
    PokemonRow
  },

  setup() {
    // const pokemon = reactive(pokemonDummy);
    const pokemonList = computed(() => store.state.pokemonList);

    onMounted(() => {
      // eslint-disable-next-line
      // console.log('Pokemon', pokemon);
    });

    return {
      pokemonList
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
</style>
