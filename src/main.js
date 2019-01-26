import 'amfe-flexible';
import Vue from 'vue';
import App from './App';
import {
  router
} from './router';
import './assets/font/iconfont.css';
import './assets/css/common.css';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});