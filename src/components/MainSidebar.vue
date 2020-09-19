<template>
  <aside :class="{ 'is-open': isOpen }" class="main-sidebar">
    <template v-if="response?.results">
      <main-sidebar-item
        v-for="(type, key) in response.results"
        :key="key"
        :type="type"
        :selected="selected"
        @click="onClick(type)"
      />
    </template>
  </aside>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useFetch } from '@/hooks/useFetch';
import store from '@/store';
import MainSidebarItem from '@/components/MainSidebarItem';

export default {
  name: 'MainSidebar',

  components: {
    MainSidebarItem
  },

  props: {
    isOpen: Boolean
  },

  setup(props, { emit }) {
    const [data, setData] = useFetch('https://pokeapi.co/api/v2/type');

    const loading = computed(() => data.loading);
    const error = computed(() => data.error);
    const response = computed(() => data.response);
    const selected = computed(() => store.state.selectedType.name || '');

    onMounted(() => {
      setData();
    });

    const onClick = type => {
      if (type.name === selected.value) {
        return;
      }

      emit('load-pokemon-list', type);
    };

    return {
      loading,
      error,
      response,
      onClick,
      selected
    };
  }
};
</script>

<style>
.main-sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 10px;
  background-color: #fff;
  box-shadow: 6px 0px 25px rgba(242, 242, 242, 0.6);
  width: 125px;
  position: fixed;
  overflow-y: scroll;
  z-index: 99;
  transform: translateX(-100%);
  transition: transform 0.25s;
}
.main-sidebar.is-open {
  transform: translateX(0%);
}
.main-sidebar .main-sidebar-item:not(:last-child) {
  margin-bottom: 10px;
}
@media (min-width: 1024px) {
  .main-sidebar,
  .main-sidebar.is-open {
    left: 0;
    transform: translateX(0%);
    width: 150px;
  }
}
</style>
