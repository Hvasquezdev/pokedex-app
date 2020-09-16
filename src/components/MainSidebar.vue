<template>
  <sidebar class="main-sidebar">
    <button class="sidebar-button">
      Bug
    </button>
    <button class="sidebar-button">
      Bug
    </button>
    <button class="sidebar-button">
      Bug
    </button>
    <button class="sidebar-button">
      Bug
    </button>
  </sidebar>
</template>

<script>
export default {
  name: 'MainSidebar'
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
  box-shadow: 4px 0px 4px rgba(243, 243, 243, 0.8);
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
</style>
