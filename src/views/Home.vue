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
          imgUrl: 'http://localhost:8080/img/Most_popular_name.248a3289.png',
          styles: {
            width: 100,
            height: 200,
            translateX: 100,
            translateY: 100,
          },
        },
        {
          id: '1',
          content: 'Slide2',
          imgUrl: 'http://localhost:8080/img/Most_talkative.cb7a55d1.png',
          styles: {
            width: 250,
            height: 100,
            translateX: 100,
            translateY: 100,
          },
        },
        {
          id: '2',
          content: 'Slide3',
          imgUrl: 'http://localhost:8080/img/Weather.2fb05b2e.png',
          styles: {
            width: 200,
            height: 200,
            translateX: 100,
            translateY: 100,
          },
        },
        {
          id: '3',
          content: 'Slide4',
          imgUrl: 'http://localhost:8080/img/Vacation.6a808b57.png',
          styles: {
            width: 200,
            height: 200,
            translateX: 100,
            translateY: 100,
          },
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
