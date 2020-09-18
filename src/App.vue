<template>
  <div class="app-wrapper">
    <main-app-bar @open-toggle="onToggleMenu" />
    <main-sidebar :is-open="state.isSidebarOpen" />
    <router-view />
  </div>
</template>

<script>
import MainSidebar from '@/components/MainSidebar';
import MainAppBar from '@/components/MainAppBar';
import { reactive } from 'vue';

export default {
  name: 'App',

  components: {
    MainSidebar,
    MainAppBar
  },

  setup() {
    const state = reactive({
      isSidebarOpen: false
    });

    const onToggleMenu = val => {
      state.isSidebarOpen = val;
    };

    return {
      state,
      onToggleMenu
    };
  }
};
</script>

<style>
.app-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
@media (min-width: 1024px) {
  .app-wrapper {
    padding-left: 125px;
  }
}
</style>
