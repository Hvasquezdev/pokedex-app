<template>
  <div class="home">
    <base-pokemon-card :pokemon="pokemon" />
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import BasePokemonCard from '@/components/BasePokemonCard';
const pokemonDummy = require('@/dummy/index.json');

export default {
  name: 'Home',

  components: {
    BasePokemonCard
  },

  setup() {
    const pokemon = reactive(pokemonDummy);

    onMounted(() => {
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
  padding: 50px 20px 25px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
