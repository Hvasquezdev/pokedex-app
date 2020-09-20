<template>
  <div ref="pokemonRow" :class="{ 'is-grey': isGrey }" class="pokemon-row">
    <pokemon-card :pokemon="pokemon" />

    <ul class="pokemon-stats-list">
      <template v-if="pokemon.stats.length">
        <li v-for="(stat, key) in pokemon.stats" :key="key">
          <pokemon-progress-bar
            :animation-end="animationEnd"
            :delay="key"
            :progress="stat"
          />
        </li>
      </template>
      <li class="unknown-stats" v-else>
        Unknown stats
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
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
    delay: {
      type: Number,
      default: 0
    },
    isGrey: Boolean
  },

  setup(props) {
    const pokemonRow = ref(null);
    const animationEnd = ref(false);

    onMounted(() => {
      gsap.set(pokemonRow.value, {
        x: '-100%'
      });

      gsap.to(pokemonRow.value, {
        x: '0%',
        duration: 0.5,
        delay: 0 + props.delay / 15,
        ease: 'sine.out',
        onComplete: () => (animationEnd.value = true)
      });
    });

    return {
      pokemonRow,
      animationEnd
    };
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
.pokemon-row .pokemon-stats-list .unknown-stats {
  font-weight: bold;
  color: #8a8984;
  font-size: 18px;
  text-align: center;
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
