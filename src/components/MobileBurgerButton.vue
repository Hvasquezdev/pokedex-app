<template>
  <button @click="onClick" class="burger-button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.333 469.333">
      <g class="top-bar">
        <path
          d="M53.333 106.667H416c29.417 0 53.333-23.927 53.333-53.333S445.417 0 416 0H53.333C23.917 0 0 23.927 0 53.333s23.917 53.334 53.333 53.334z"
          fill="#2a3f88"
        />
        <path
          d="M53.333 21.333H416c17.646 0 32 14.354 32 32s-14.354 32-32 32H53.333c-17.646 0-32-14.354-32-32s14.355-32 32-32z"
          fill="#fec00d"
        />
      </g>

      <g class="mid-bar">
        <path
          d="M53.333 288H416c29.417 0 53.333-23.927 53.333-53.333S445.417 181.333 416 181.333H53.333C23.917 181.333 0 205.26 0 234.667S23.917 288 53.333 288z"
          fill="#2a3f88"
        />
        <path
          d="M53.333 202.667H416c17.646 0 32 14.354 32 32s-14.354 32-32 32H53.333c-17.646 0-32-14.354-32-32s14.355-32 32-32z"
          fill="#fec00d"
        />
      </g>

      <g class="bottom-bar" style="position: absolute;">
        <path
          d="M53.333 469.333H416c29.417 0 53.333-23.927 53.333-53.333S445.417 362.667 416 362.667H53.333C23.917 362.667 0 386.594 0 416s23.917 53.333 53.333 53.333z"
          fill="#2a3f88"
        />
        <path
          d="M53.333 384H416c17.646 0 32 14.354 32 32s-14.354 32-32 32H53.333c-17.646 0-32-14.354-32-32s14.355-32 32-32z"
          fill="#fec00d"
        />
      </g>
    </svg>
  </button>
</template>

<script>
import { TimelineMax } from 'gsap';
import { watch, ref } from 'vue';

export default {
  name: 'MobileBurgerButton',

  setup(props, { emit }) {
    let isOpen = ref(false);
    let isOpening = false;
    let tl = null;

    const onClick = () => {
      if (isOpening === true) {
        return;
      }

      if (isOpen.value) {
        tl.reverse();
        isOpen.value = false;
      } else {
        isOpening = true;
        tl = new TimelineMax();

        tl.add('close');
        tl.to(
          '.top-bar',
          {
            y: 180,
            transformOrigin: '50% 50%',
            duration: 0.3
          },
          'close'
        ).to(
          '.top-bar',
          {
            rotate: 50,
            duration: 0.3
          },
          'close+=0.3'
        );

        tl.to(
          '.mid-bar',
          {
            opacity: 0,
            duration: 0.3
          },
          'close+=0.1'
        );

        tl.to(
          '.bottom-bar',
          {
            y: -180,
            transformOrigin: '50% 50%',
            duration: 0.3
          },
          'close'
        ).to(
          '.bottom-bar',
          {
            rotate: -50,
            duration: 0.3,
            onComplete: () => {
              isOpen.value = true;
              isOpening = false;
            }
          },
          'close+=0.3'
        );
      }
    };

    // Watchers
    const isOpenWatch = watch(isOpen, newVal => {
      emit('open-toggle', newVal);
    });

    return {
      onClick,
      isOpenWatch
    };
  }
};
</script>

<style>
.burger-button {
  cursor: pointer;
  border: navajowhite;
  padding: 0;
  box-shadow: none;
  background: transparent;
  width: 50px;
  height: 50px;
  outline: none;
}
</style>
