<template>
  <div class="pokemon-card">
    <span class="card-left-circle"> {{ pokemon.height }}m </span>
    <span class="card-right-circle"> {{ pokemon.weight }}kg </span>

    <header class="card-header">
      <span class="pokemon-num">
        #150
      </span>
      <img class="card-image" :src="pokemonThumb" :alt="pokemon.name" />
    </header>

    <div class="card-body">
      <h2 class="title">
        {{ pokemon.name }}
      </h2>
      <ul class="pokemon-types">
        <li v-for="(type, key) in pokemon.types" :key="key">
          {{ type.type.name }}
        </li>
      </ul>
      <h3>
        {{ ability }}
      </h3>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'BasePokemonCard',

  props: {
    pokemon: {
      type: Object,
      default: null
    }
  },

  setup(props) {
    const ability = computed(() => {
      const pokemon = props.pokemon;
      const parsedAbility = pokemon.abilities[0].ability.name
        .split('-')
        .join(' ');

      return parsedAbility;
    });
    const pokemonThumb = computed(() => {
      const pokemon = props.pokemon;
      return pokemon.sprites.other['official-artwork'].front_default;
    });

    return {
      ability,
      pokemonThumb
    };
  }
};
</script>

<style scoped>
.pokemon-card {
  width: 90%;
  max-width: 350px;
  height: 250px;
  border-radius: 14px;
  background: #fff;
  filter: drop-shadow(0px 0px 13px rgba(243, 243, 243, 0.8));
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.pokemon-card .card-left-circle,
.pokemon-card .card-right-circle {
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #363636;
  background: #fff;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f3f3f3;
  top: -28%;
}
.pokemon-card .card-left-circle {
  left: -28%;
  transform: translate(50%, 50%);
}
.pokemon-card .card-right-circle {
  right: -28%;
  transform: translate(-50%, 50%);
}
.pokemon-card .card-header {
  position: relative;
  width: 100%;
  text-align: center;
}
.pokemon-card .pokemon-num {
  font-size: 125px;
  line-height: 100px;
  font-weight: bold;
  color: #f3f3f3;
  font-family: sans-serif;
  position: absolute;
  z-index: 5;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.pokemon-card .card-image {
  width: 100px;
  margin-top: 20px;
  position: relative;
  z-index: 10;
  object-fit: contain;
}
.pokemon-card .card-body {
  font-family: 'Nunito', sans-serif;
  text-align: center;
}
.pokemon-card .card-body .title {
  font-weight: bold;
  text-transform: capitalize;
  font-size: 18px;
  color: #363636;
  text-align: center;
}
.pokemon-card .card-body .pokemon-types {
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  margin-top: 5px;
}
.pokemon-card .card-body .pokemon-types li {
  background: #f0d279;
  padding: 3px 8px;
  border-radius: 4px;
  margin: 5px;
}
</style>
