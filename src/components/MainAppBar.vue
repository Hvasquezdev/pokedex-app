<template>
  <header class="main-app-bar">
    <img :src="require('@/assets/logo.png')" alt="Pokemon" width="200" />
    <mobile-burger-button @open-toggle="onOpenToggle" />
  </header>
</template>

<script>
import MobileBurgerButton from '@/components/MobileBurgerButton';

export default {
  name: 'MainAppBar',

  components: {
    MobileBurgerButton
  },

  setup(props, { emit }) {
    const onOpenToggle = val => {
      emit('open-toggle', val);
    };

    return {
      onOpenToggle
    };
  }
};
</script>

<style>
.main-app-bar {
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 15px rgba(242, 242, 242, 0.6);
}
.main-app-bar .burger-button {
  position: absolute;
  right: 20px;
}
@media (min-width: 1024px) {
  .main-app-bar .burger-button {
    display: none;
  }
}
</style>
