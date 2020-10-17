<template>
  <div
    class="home"
  >
    <transition name="animated-block" mode="out-in">
      <SlideInterface
        :key="currentSlide"
        :slideData="data[currentSlide]"
      />
    </transition>
    <SlideControls
      :currentSlide="currentSlide"
      @prev-slide="prevSlide"
      @next-slide="nextSlide"
      @like-slide="likeSlide"
      @dislike-slide="dislikeSlide"
    />
  </div>
</template>

<script>
import SlideInterface from '../components/SlideInterface.vue';
import SlideControls from '../components/SlideControls.vue';

export default {
  name: 'Home',
  components: {
    SlideInterface,
    SlideControls,
  },
  data() {
    return {
      currentSlide: 0,
      // data format is array of objects with properties: id and content
      data: [
        {
          id: '0',
          content: 'Slide1',
          imgUrl: '<%= BASE_URL %>Here_channel.png',
        },
        {
          id: '1',
          content: 'Slide2',
          imgUrl: '../public/Most_popular_name.png',
        },
        {
          id: '2',
          content: 'Slide3',
          imgUrl: '../assets/Most_popular_name.png',
        },
        {
          id: '3',
          content: 'Slide4',
        },
      ],
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 < 0)
        ? this.data.length - 1 : this.currentSlide - 1;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1 >= this.data.length) ? 0 : this.currentSlide + 1;
    },
    likeSlide() {
      console.log('like');
    },
    dislikeSlide() {
      console.log('dislike');
    },
  },
};
</script>
