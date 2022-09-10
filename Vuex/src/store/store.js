import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// .store() is a method containing an object where we configure that store
export const store = new Vuex.Store({
  state: {
    counter: 0
  }
});
