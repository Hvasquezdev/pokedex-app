<template>
  <div class="home">
    <pokemon-row
      v-for="poke in 5"
      :key="poke"
      :is-grey="poke % 2 === 0 ? true : false"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import PokemonRow from '@/components/PokemonRow';
const pokemonDummy = require('@/dummy/index.json');

export default {
  name: 'Home',

  components: {
    PokemonRow
  },

  setup() {
    const pokemon = reactive(pokemonDummy);

    onMounted(() => {
      // eslint-disable-next-line
      console.log('Pokemon', pokemon);
    });

    return {
      pokemon
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
