import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// .store() is a method containing an object where we configure that store
export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  // "getters" like "state" are reserved names, we should not change the naming here.
  // Inside of getters we can name them as we wish, add as many getters as you want. doubleCounter here is a function, which should return something (we are going to access this value in the end)
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    counterString: (state) => {
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    }
  },
  // no issue with the same naming as in mutations, these are another objects, holding functions/methods, which are our actions
  actions: {
    // context is an argument which is passed by vuex automatically. Context gives us access to .commit() method. It is an extra step, instead of doing it inside of the component. Context object has a lot of methods of our store (not all features, but all we need here)
    increment: (context) => {
      context.commit('increment');
    }
  }
  // another syntax (ES6 destructuring feature)
  // actions: {
  //   increment: ({ commit }) => {
  //     commit('increment');
  //   }
  // }
});
