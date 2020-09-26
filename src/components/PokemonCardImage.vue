<template>
  <pokeball-icon v-if="loading" class="image-loader" />
  <img
    v-else
    class="card-image"
    :src="url"
    :alt="imgAlt"
    :width="width"
    :height="height"
  />
</template>

<script>
import { onMounted, ref } from 'vue';
import PokeballIcon from '@/components/PokeballIcon';

export default {
  name: 'PokemonCardImage',

  components: {
    PokeballIcon
  },

  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    imgAlt: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    }
  },

  setup(props) {
    const url = ref(null);
    const loading = ref(false);

    onMounted(() => {
      loading.value = true;

      const img = new Image();
      img.onload = () => {
        url.value = img.src;
        loading.value = false;
      };

      img.src = props.imgUrl;
    });

    return {
      url,
      loading
    };
  }
};
</script>

<style>
.image-loader {
  width: 70px;
  height: 70px;
  margin-top: 30px;
  position: relative;
  z-index: 10;
}
.card-image {
  width: 100px;
  margin-top: 20px;
  position: relative;
  z-index: 15;
  object-fit: contain;
}
</style>
