<template>
  <div class="app-wrapper">
    <main-sidebar />
    <router-view />
  </div>
</template>

<script>
import MainSidebar from '@/components/MainSidebar';

export default {
  name: 'App',

  components: {
    MainSidebar
  }
};
</script>

<style>
.app-wrapper {
  display: grid;
  grid-template-columns: 125px 1fr;
  column-gap: 80px;
  width: 100%;
  min-height: 100vh;
}
</style>
