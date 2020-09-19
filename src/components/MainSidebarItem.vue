<template>
  <button class="main-sidebar-item" :style="styles">
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
    },
    selected: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const isSelected = computed(() => props.selected === props.type.name);
    const styles = computed(() => {
      return {
        backgroundColor: `var(--${props.type.name.toLowerCase()})`,
        boxShadow:
          isSelected.value === true
            ? `0px 0px 4px var(--${props.type.name.toLowerCase()})`
            : 'none'
      };
    });

    return {
      styles
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
  transition: box-shadow 0.3s;
}
</style>
