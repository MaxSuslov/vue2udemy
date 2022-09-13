import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

// .store() is a method containing an object where we configure that store
export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
});
