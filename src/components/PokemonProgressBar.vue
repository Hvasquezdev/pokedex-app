<template>
  <div class="pokemon-progress-bar-wrapper">
    <h2 class="pokemon-attribute">
      {{ progress.stat.name }}
    </h2>
    <h3 class="pokemon-attribute-value">
      {{ progress.base_stat }}
    </h3>
    <div class="pokemon-progress-bar">
      <span
        :class="className"
        class="progress-bar"
        :style="{ width: `${totalProgress}%` }"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'PokemonProgressBar',

  props: {
    progress: {
      type: Object,
      default: null
    }
  },

  setup(props) {
    let progress = ref(0);

    const totalProgress = computed(() => {
      const max = 252;
      const percent = 100;

      return (progress.value / max) * percent;
    });
    const className = computed(() => {
      if (totalProgress.value < 25) {
        return 'is-five';
      }

      if (totalProgress.value >= 25 && totalProgress.value < 50) {
        return 'is-twentyfive';
      }

      if (totalProgress.value >= 50 && totalProgress.value < 75) {
        return 'is-fifty';
      }

      if (totalProgress.value >= 75 && totalProgress.value < 100) {
        return 'is-seventyfive';
      }

      return 'is-onehundred';
    });

    onMounted(() => {
      const timeOut = setTimeout(() => {
        progress.value = props.progress.base_stat;
        clearTimeout(timeOut);
      }, 250);
    });

    return {
      totalProgress,
      className
    };
  }
};
</script>

<style scoped>
.pokemon-progress-bar-wrapper {
  display: grid;
  grid-template-columns: 140px 50px 1fr;
  padding: 0 20px;
  column-gap: 10px;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}
.pokemon-progress-bar-wrapper .pokemon-attribute {
  font-size: 16px;
  font-weight: bold;
  color: #8a8984;
  text-transform: capitalize;
  text-align: right;
}
.pokemon-progress-bar-wrapper .pokemon-attribute-value {
  font-size: 14px;
  color: #545452;
  text-align: center;
  font-weight: 600;
}
.pokemon-progress-bar {
  border-radius: 4px;
  width: 100%;
  height: 16px;
  display: flex;
  background-color: #f3f3f3;
  -webkit-box-shadow: 0px 0px 3px rgba(243, 243, 243, 0.8);
  box-shadow: 0px 0px 3px rgba(243, 243, 243, 0.8);
}
.pokemon-progress-bar .progress-bar {
  width: 10%;
  height: 100%;
  border-radius: 4px;
  -webkit-transition: 0.25s linear;
  -moz-transition: 0.25s linear;
  -o-transition: 0.25s linear;
  transition: 0.25s linear;
  -webkit-transition-property: width, background;
  -moz-transition-property: width, background;
  -o-transition-property: width, background;
  transition-property: width, background;
}
.pokemon-progress-bar .progress-bar.is-five {
  background: rgb(229, 96, 90);
  background: -moz-linear-gradient(
    90deg,
    rgba(229, 96, 90, 1) 0%,
    rgba(226, 54, 62, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(229, 96, 90, 1) 0%,
    rgba(226, 54, 62, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(229, 96, 90, 1) 0%,
    rgba(226, 54, 62, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e5605a",endColorstr="#e2363e",GradientType=1);
}
.pokemon-progress-bar .progress-bar.is-twentyfive {
  background: rgb(248, 173, 70);
  background: -moz-linear-gradient(
    90deg,
    rgba(248, 173, 70, 1) 0%,
    rgba(252, 157, 27, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(248, 173, 70, 1) 0%,
    rgba(252, 157, 27, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(248, 173, 70, 1) 0%,
    rgba(252, 157, 27, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f8ad46",endColorstr="#fc9d1b",GradientType=1);
}
.pokemon-progress-bar .progress-bar.is-fifty {
  background: rgb(253, 211, 74);
  background: -moz-linear-gradient(
    90deg,
    rgba(253, 211, 74, 1) 0%,
    rgba(245, 194, 6, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(253, 211, 74, 1) 0%,
    rgba(245, 194, 6, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(253, 211, 74, 1) 0%,
    rgba(245, 194, 6, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fdd34a",endColorstr="#f5c206",GradientType=1);
}
.pokemon-progress-bar .progress-bar.is-seventyfive {
  background: rgb(249, 240, 71);
  background: -moz-linear-gradient(
    90deg,
    rgba(249, 240, 71, 1) 0%,
    rgba(15, 216, 80, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(249, 240, 71, 1) 0%,
    rgba(15, 216, 80, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(249, 240, 71, 1) 0%,
    rgba(15, 216, 80, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f9f047",endColorstr="#0fd850",GradientType=1);
}
.pokemon-progress-bar .progress-bar.is-onehundred {
  background: rgb(15, 216, 80);
  background: -moz-linear-gradient(
    90deg,
    rgba(15, 216, 80, 1) 0%,
    rgba(93, 163, 59, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(15, 216, 80, 1) 0%,
    rgba(93, 163, 59, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(15, 216, 80, 1) 0%,
    rgba(93, 163, 59, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0fd850",endColorstr="#5da33b",GradientType=1);
}

@media (min-width: 768px) {
  .pokemon-progress-bar-wrapper {
    padding-right: 0;
  }
}
@media (min-width: 1024px) {
  .pokemon-progress-bar-wrapper {
    grid-template-columns: 180px 70px 1fr;
    padding: 0;
  }
  .pokemon-progress-bar-wrapper .pokemon-attribute {
    font-size: 18px;
  }
  .pokemon-progress-bar-wrapper .pokemon-attribute-value {
    font-size: 16px;
  }
}
</style>
