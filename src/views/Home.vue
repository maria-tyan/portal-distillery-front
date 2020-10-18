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
          contentImg: {
            url: '/img/here_meme_2.97cb3440.jpeg',
            styles: {
              width: 600,
              height: 600,
            },
          },
          imgUrl: '/img/Here_channel.44e73815.png',
          styles: {
            width: 600,
            height: 600,
            translateX: 34,
            translateY: 10,
          },
        },
        {
          id: '1',
          content: {
            text: '+25 новых сообщений',
          },
          imgUrl: '/img/Most_talkative.abab0eb5.png',
          styles: {
            width: 250,
            height: 85,
            translateX: -75,
            translateY: 315,
          },
        },
        {
          id: '2',
          contentImg: {
            url: '/img/351-3519746_toasty-toasty-mortal-kombat-meme.9a78b3a4.png',
            styles: {
              width: 600,
              height: 600,
            },
          },
          imgUrl: '/img/Weather.6c9c9c76.png',
          styles: {
            width: 600,
            height: 600,
            translateX: 70,
            translateY: 10,
          },
        },
        {
          id: '3',
          imgUrl: '/img/Vacation.58135ecc.png',
          styles: {
            width: 500,
            height: 100,
            translateX: -4,
            translateY: 280,
          },
          chart: {
            datasets: [
              {
                label: 'Vacation',
                backgroundColor: '#58555C',
                data: [13, 19, 12, 36],
              },
            ],
            labels: ['28sep-2okt', '28sep-2oct', '5oct-9oct', '12oct-16oct'],
          },
        },
        {
          id: '4',
          imgUrl: '/img/Most_popular_name.10912788.png',
          styles: {
            width: 500,
            height: 100,
            translateX: -4,
            translateY: 280,
          },
        },
        {
          id: '5',
          imgUrl: '/img/Departments.deecc6bc.png',
          styles: {
            width: 500,
            height: 100,
            translateX: -4,
            translateY: 280,
          },
        },
        {
          id: '6',
          imgUrl: '/img/Offices.44f8b31a.png',
          styles: {
            width: 500,
            height: 100,
            translateX: -4,
            translateY: 280,
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
