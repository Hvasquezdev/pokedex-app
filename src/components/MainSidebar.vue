<template>
  <sidebar :class="{ 'is-open': isOpen }" class="main-sidebar">
    <button class="sidebar-button">
      Bug
    </button>
    <button class="sidebar-button">
      Bug
    </button>
    <button class="sidebar-button">
      Bug
    </button>
    <button v-for="type in 50" :key="type" class="sidebar-button">
      Bug
    </button>
  </sidebar>
</template>

<script>
export default {
  name: 'MainSidebar',

  props: {
    isOpen: Boolean
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
  padding: 10px;
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
.main-sidebar .sidebar-button {
  box-shadow: none;
  border: none;
  background-color: #f3f3f3;
  color: #363636;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
}
.main-sidebar .sidebar-button:not(:last-child) {
  margin-bottom: 10px;
}
@media (min-width: 1024px) {
  .main-sidebar,
  .main-sidebar.is-open {
    left: 0;
    transform: translateX(0%);
  }
}
</style>
