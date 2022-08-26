import Vue from 'vue';
import App from './App.vue';

// The first argument is the name of the directive (should be called as v-customname)
// The second argument is an object with configuration (based on 5 hooks)
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'green';
  }
});

new Vue({
  el: '#app',
  render: (h) => h(App)
});
