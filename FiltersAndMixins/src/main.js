import Vue from 'vue';
import App from './App.vue';

Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Global mixin - created() Hook');
  }
});

new Vue({
  el: '#app',
  render: (h) => h(App)
});
