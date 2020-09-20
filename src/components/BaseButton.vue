<template>
  <button
    :class="classNames"
    class="base-button"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'button'
    },
    block: Boolean,
    disabled: Boolean
  },

  setup(props) {
    const classNames = computed(() => {
      return {
        'is-block': props.block,
        'is-disabled': props.disabled
      };
    });

    return {
      classNames
    };
  }
};
</script>

<style>
.base-button {
  box-shadow: none;
  border: none;
  background-color: #c0c0c0;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  text-transform: capitalize;
  font-family: 'Nunito', sans-serif;
  transition: box-shadow 0.3s;
}
.base-button.is-block {
  width: 100%;
}
.base-button.is-disabled {
  opacity: 0.85;
  pointer-events: none;
}
</style>
