<template>
  <base-button class="main-sidebar-item" :style="styles" block>
    {{ type.name }}
  </base-button>
</template>

<script>
import { computed } from 'vue';
import BaseButton from '@/components/BaseButton';

export default {
  name: 'MainSidebarItem',

  components: {
    BaseButton
  },

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
