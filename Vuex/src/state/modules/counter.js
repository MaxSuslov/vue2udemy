import * as types from '../types';

const state = {
  counter: 0
};

const getters = {
  // ES6 syntax for dynamically setting the name. It will be a string at the end
  [types.DOUBLE_COUNTER]: (state) => {
    return state.counter * 2;
  },
  [types.CLICK_COUNTER]: (state) => {
    return state.counter + ' Clicks';
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
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
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
