<template>
  <li :style="bgColor" class="pokemon-type-tag">
    {{ type.name }}
  </li>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'PokemonTypeTag',

  props: {
    type: {
      type: Object,
      default: null
    }
  },

  setup(props) {
    const bgColor = computed(() => {
      return {
        backgroundColor: `var(--${props.type.name.toLowerCase()})`
      };
    });

    return {
      bgColor
    };
  }
};
</script>

<style>
.pokemon-type-tag {
  background: #f0d279;
  font-weight: bold;
  text-transform: capitalize;
  color: #fff;
  padding: 3px 8px;
  border-radius: 4px;
  margin: 5px;
}
</style>
