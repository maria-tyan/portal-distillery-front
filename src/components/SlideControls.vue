<template>
  <div class="controls">
    <font-awesome-icon
      icon="arrow-left"
      class="controls__item"
      @click="$emit('prev-slide')" />
    <font-awesome-icon
      icon="arrow-right"
      class="controls__item"
      @click="$emit('next-slide')" />
    <font-awesome-icon
      icon="thumbs-up"
      class="controls__item"
      @click="$emit('like-slide')" />
    <font-awesome-icon
      icon="thumbs-down"
      class="controls__item"
      @click="$emit('dislike-slide')" />
  </div>
</template>

<script>
export default {
  name: 'SlideControls',
  props: {
    currentSlide: Number,
  },
  methods: {
    prevSlide() {
      console.log('click', 'prevSlide');
      this.$emit('custom-event');
    },
  },
};
</script>
