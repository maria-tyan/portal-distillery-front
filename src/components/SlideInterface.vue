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
        <div class="hover-block">
          {{ slideData.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideInterface',
  props: {
    slideData: Object,
  },
  computed: {
    style() {
      console.log({
        width: `${this.slideData.styles.width}px`,
        height: `${this.slideData.styles.height}px`,
        transform:
          `translate(${this.slideData.styles.translateX}px, ${this.slideData.styles.translateY}px)`,
      });
      return {
        cursor: 'pointer',
        width: `${this.slideData.styles.width}px`,
        height: `${this.slideData.styles.height}px`,
        transform:
          `translate(${this.slideData.styles.translateX}px, ${this.slideData.styles.translateY}px)`,
      };
    },
  },
};
</script>
