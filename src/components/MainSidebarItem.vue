<template>
  <button class="main-sidebar-item" :style="bgColor">
    {{ type.name }}
  </button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'MainSidebarItem',

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
.main-sidebar-item {
  box-shadow: none;
  border: none;
  background-color: #f3f3f3;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  text-transform: capitalize;
  font-family: 'Nunito', sans-serif;
}
</style>
