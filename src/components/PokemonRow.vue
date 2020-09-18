<template>
  <div :class="{ 'is-grey': isGrey }" class="pokemon-row">
    <pokemon-card :pokemon="pokemon" />

    <ul class="pokemon-stats-list">
      <li v-for="(stat, key) in pokemon.stats" :key="key">
        <pokemon-progress-bar :progress="stat" />
      </li>
    </ul>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard';
import PokemonProgressBar from '@/components/PokemonProgressBar';

export default {
  name: 'PokemonRow',

  components: {
    PokemonCard,
    PokemonProgressBar
  },

  props: {
    pokemon: {
      type: Object,
      default: null
    },
    isGrey: Boolean
  }
};
</script>

<style scoped>
.pokemon-row {
  padding: 50px 25px;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 360px);
  row-gap: 20px;
  align-items: center;
  justify-content: center;
}
.pokemon-row .pokemon-card {
  margin: 0 auto;
}
.pokemon-row .pokemon-stats-list {
  display: flex;
  flex-direction: column;
}
.pokemon-row .pokemon-stats-list > * {
  width: 100%;
}
.pokemon-row .pokemon-stats-list > *:not(:last-child) {
  margin-bottom: 10px;
}
.pokemon-row.is-grey {
  background-color: #f7f7f7;
}
@media (min-width: 768px) {
  .pokemon-row {
    grid-template-columns: 370px 1fr;
  }
}
@media (min-width: 1024px) {
  .pokemon-row {
    padding: 50px 70px;
    grid-template-columns: 400px 1fr;
  }
  .pokemon-row .pokemon-card {
    margin: 0;
  }
}
@media (min-width: 1260px) {
  .pokemon-row {
    grid-template-columns: 450px 1fr;
  }
}
</style>
