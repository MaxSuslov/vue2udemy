import Vue from 'vue';
import App from './App.vue';

// The first argument is the name of the directive (should be called as v-customname)
// The second argument is an object with configuration (based on 5 hooks)
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';

    // binding is the information about our directive, and value is whatever we enter between the quotation marks v-highlight="'red'" to be able to set the value from outside
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    // modifiers is an object, it can have multiple modifiers chained in App.vue
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: (h) => h(App)
});
