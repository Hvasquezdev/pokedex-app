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

      <base-button
        v-if="hasMoreToLoad"
        :disabled="updatingPagination"
        class="load-more"
        @click="updatePokemonList"
      >
        <span v-if="!updatingPagination">
          Load more
        </span>
        <span v-else class="loading-wrapper">
          Loading
          <pokeball-icon />
        </span>
      </base-button>
    </div>
  </div>
</template>

<script>
import { computed, watch, nextTick, ref } from 'vue';
import { getListByUrl } from '@/hooks/usePokemon';
import store from '@/store';
import PokemonRow from '@/components/PokemonRow';
import PokeballIcon from '@/components/PokeballIcon';
import PikachuIcon from '@/components/PikachuIcon';
import BaseButton from '@/components/BaseButton';

export default {
  name: 'Home',

  components: {
    PokemonRow,
    PokeballIcon,
    PikachuIcon,
    BaseButton
  },

  setup() {
    const updatingPagination = ref(false);

    const pokemonList = computed(() => store.state.pokemonList.value);
    const loadingList = computed(() => store.state.pokemonList.loading);
    const paginationList = computed(() => store.state.pokemonPagination);
    const hasMoreToLoad = computed(
      () => paginationList.value.total !== paginationList.value.totalLoaded
    );
    const selectedType = computed(() => store.state.selectedType?.name);
    const selectedTypePokemonList = computed(
      () => store.state.selectedTypePokemonList
    );
    const pokemonListToLoad = computed(() => {
      const pagination = paginationList.value;
      const perPage = pagination.perPage;
      const total = pagination.total;
      const listStart = pagination.totalLoaded;
      const listEnd = listStart + perPage < total ? listStart + perPage : total;

      return selectedTypePokemonList.value.slice(listStart, listEnd);
    });

    const updatePokemonList = () => {
      if (!hasMoreToLoad.value || updatingPagination.value) {
        return;
      }

      const [list, setList] = getListByUrl(pokemonListToLoad.value);
      updatingPagination.value = true;

      watch(
        () => list.response,
        newVal => {
          const updatedList = [...pokemonList.value, ...newVal];
          const htmlWrapper = document.querySelector('html');
          const currentOffset = htmlWrapper.scrollTop;

          // update current pagination
          store.commit('SET_POKEMON_PAGINATION', {
            ...paginationList.value,
            totalLoaded: (paginationList.value.totalLoaded += newVal.length)
          });

          // Update the current list with the new pokemon list
          store.commit('SET_POKEMON_LIST', {
            loading: false,
            value: updatedList
          });

          // Keep scroll position after add new items
          nextTick(() => {
            htmlWrapper.scrollTop = currentOffset;
            updatingPagination.value = false;
          });
        }
      );

      setList();
    };

    return {
      updatingPagination,
      pokemonList,
      pokemonListToLoad,
      loadingList,
      hasMoreToLoad,
      selectedType,
      paginationList,
      updatePokemonList
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
.home .load-more {
  display: flex;
  margin: 20px auto;
  color: #fff;
  background: rgb(249, 240, 71);
  background: -moz-linear-gradient(
    90deg,
    rgba(249, 240, 71, 1) 0%,
    rgba(15, 216, 80, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(249, 240, 71, 1) 0%,
    rgba(15, 216, 80, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(249, 240, 71, 1) 0%,
    rgba(15, 216, 80, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f9f047",endColorstr="#0fd850",GradientType=1);
}
.home .load-more span {
  padding: 0 15px;
  display: flex;
  align-items: center;
}
.home .load-more .pokeball-icon {
  width: 25px;
  height: 25px;
  margin-left: 15px;
}
</style>
