import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

// routes is a shortcut for routes: routes
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});
