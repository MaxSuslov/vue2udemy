import Vue from 'vue';
import App from './App.vue';

Vue.filter('toLowercase');

new Vue({
  el: '#app',
  render: (h) => h(App)
});
