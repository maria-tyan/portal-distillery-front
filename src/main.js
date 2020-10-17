import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog, faArrowLeft, faArrowRight, faThumbsUp, faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';

library.add(faCog, faArrowLeft, faArrowRight, faThumbsUp, faThumbsDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
