<template>
  <div class="slide-interface">
    <div
      class="card"
      :style="{
        backgroundImage: `url(${slideData.imgUrl})`
      }"
    >
      <div
        class="additional-data"
        :style="style"
      >
        <div
          v-if="slideData.chart || slideData.contentImg || slideData.content"
          class="hover-block"
          :class="{'hover-block_chart': slideData.chart}"
        >
          <line-chart
            v-if="slideData.chart"
            :data="slideData.chart"
          />
          <div
            v-else-if="slideData.contentImg"
            class="hover-block_img"
            :style="{
              backgroundImage: `url(${slideData.contentImg.url})`,
              width: `${this.slideData.contentImg.styles.width}px`,
              height: `${this.slideData.contentImg.styles.height}px`,
            }"
          />
          <div v-else-if="slideData.content">
            {{ slideData.content.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '../chars/lineChart';

export default {
  name: 'SlideInterface',
  props: {
    slideData: Object,
  },
  components: {
    LineChart,
  },
  computed: {
    style() {
      return {
        cursor: 'pointer',
        width: `${this.slideData.styles.width}px`,
        height: `${this.slideData.styles.height}px`,
        transform:
          `translate(${this.slideData.styles.translateX}%, ${this.slideData.styles.translateY}%)`,
      };
    },
  },
};
</script>
