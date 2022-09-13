import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

// .store() is a method containing an object where we configure that store
export const store = new Vuex.Store({
  state: {
    value: 0
  },
  // "getters" like "state" are reserved names, we should not change the naming here.
  // Inside of getters we can name them as we wish, add as many getters as you want. doubleCounter here is a function, which should return something (we are going to access this value in the end)
  getters: {
    value: (state) => {
      return state.value;
    }
  },
  mutations: {
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    updateValue({ commit }, payload) {
      commit('updateValue', payload);
    }
  },
  modules: {
    // aka counter: counter
    counter
  }
});
