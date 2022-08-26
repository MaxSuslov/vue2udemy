import Vue from 'vue';
import App from './App.vue';

// The first argument is the name of the directive (should be called as v-customname)
// The second argument is an object with configuration (based on 5 hooks)
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';

    // binding is the information about our directive, and value is whatever we enter between the quotation marks v-highlight="'red'" to be able to set the value from outside
    el.style.backgroundColor = binding.value;
  }
});

new Vue({
  el: '#app',
  render: (h) => h(App)
});
