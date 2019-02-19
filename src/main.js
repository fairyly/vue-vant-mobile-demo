import 'amfe-flexible';
import Vue from 'vue';
import store from './store/index'
import App from './App';
import { router } from './router';
import 'babel-polyfill';
import Es6Promise from 'es6-promise';
require('es6-promise').polyfill();
Es6Promise.polyfill();
import './assets/font/iconfont.css';
import './assets/css/common.css';

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
