import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

// routes is a shortcut for routes: routes
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // if the user comes by clicking "back" button, we should better bring him to where he left
    if (savedPosition) {
      return savedPosition;
    }
    // if the hash (id) is defined in the destination
    if (to.hash) {
      return { selector: to.hash };
    }
    // return { x: 0, y: 700 };
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});
