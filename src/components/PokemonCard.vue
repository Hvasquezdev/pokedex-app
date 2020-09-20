<template>
  <div class="pokemon-card">
    <span class="card-left-circle"> {{ pokemon.height / 10 }}m </span>
    <span class="card-right-circle"> {{ pokemon.weight / 10 }}kg </span>

    <header class="card-header">
      <span :class="{ 'big-num': pokemon.id > 999 }" class="pokemon-num">
        #{{ pokemon.id }}
      </span>
      <img class="card-image" :src="pokemonThumb" :alt="pokemon.name" />
    </header>

    <div class="card-body">
      <h2 class="title">
        {{ pokemon.name }}
      </h2>
      <ul class="pokemon-types">
        <pokemon-type-tag
          v-for="(type, key) in pokemon.types"
          :key="key"
          :type="type.type"
        />
      </ul>
      <h3 class="ability-name" v-if="ability">
        <strong>Ability:</strong> {{ ability }}
      </h3>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import PokemonTypeTag from '@/components/PokemonTypeTag';

export default {
  name: 'BasePokemonCard',

  components: {
    PokemonTypeTag
  },

  props: {
    pokemon: {
      type: Object,
      default: null
    }
  },

  setup(props) {
    const ability = computed(() => {
      const pokemon = props.pokemon;
      const parsedAbility = pokemon.abilities[0]?.ability?.name
        .split('-')
        .join(' ');

      return parsedAbility || '';
    });
    const pokemonThumb = computed(() => {
      const pokemon = props.pokemon;
      const altImage = pokemon.sprites.front_default;
      const imgUrl = pokemon.sprites.other['official-artwork'].front_default;

      if (!altImage && !imgUrl) {
        return findIconSprite();
      }

      return imgUrl || altImage;
    });

    const findIconSprite = () => {
      const sprites = props.pokemon.sprites.versions;

      for (const key in sprites) {
        const current = sprites[key];

        if ('icons' in current && current.icons.front_default) {
          return current.icons.front_default;
        }
      }
    };

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
  filter: drop-shadow(0px 0px 13px rgba(242, 242, 242, 0.8));
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
  color: #5f5f5d;
  background: #fff;
  width: 75px;
  height: 75px;
  position: absolute;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f2f2f2;
  top: -20%;
}
.pokemon-card .card-left-circle {
  left: -17%;
  transform: translate(50%, 50%);
}
.pokemon-card .card-right-circle {
  right: -17%;
  transform: translate(-50%, 50%);
}
.pokemon-card .card-header {
  position: relative;
  width: 100%;
  text-align: center;
}
.pokemon-card .pokemon-num {
  font-size: 110px;
  line-height: 100px;
  font-weight: bold;
  color: #e9e8e6;
  font-family: sans-serif;
  position: absolute;
  z-index: 5;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.pokemon-card .pokemon-num.big-num {
  font-size: 85px !important;
  top: 0 !important;
  line-height: 80px !important;
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
  color: #5f5f5d;
  text-align: center;
}
.pokemon-card .card-body .pokemon-types {
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  margin-top: 5px;
}
.pokemon-card .card-body .ability-name {
  text-transform: capitalize;
  font-size: 16px;
  color: #5f5f5d;
  text-align: center;
}
@media (min-width: 1024px) {
  .pokemon-card .pokemon-num {
    font-size: 125px;
  }
}
</style>
