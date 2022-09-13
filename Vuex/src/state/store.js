import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// .store() is a method containing an object where we configure that store
export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  // "getters" like "state" are reserved names, we should not change the naming here.
  // Inside of getters we can name them as we wish, add as many getters as you want. doubleCounter here is a function, which should return something (we are going to access this value in the end)
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    counterString: (state) => {
      return state.counter + ' Clicks';
    },
    value: (state) => {
      return state.value;
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    },
    updateValue({ commit }, payload) {
      commit('updateValue', payload);
    }
  }
});
