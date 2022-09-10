import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// .http without $ - use .$http only from inside of your Vue instances!
Vue.http.options.root =
  'https://vue-http-aebd5-default-rtdb.europe-west1.firebasedatabase.app/';

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if ((request.method = 'POST')) {
    request.method = 'PUT';
  }
  next((response) => {
    response.json = () => {
      return { messages: response.body };
    };
  });
});

new Vue({
  el: '#app',
  render: (h) => h(App)
});
