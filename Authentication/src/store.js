import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null, 
    userId: null
  },
  mutations: {

  },
  actions: {
    signup({commit}, authData) {
      axios.post('/accounts:signUp?key=AIzaSyCqAR2rGDkBDn2aZ9EKzYViO-bg2oCWYBo', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    login({commit}, authData) {
      axios.post('/accounts:signInWithPassword?key=AIzaSyCqAR2rGDkBDn2aZ9EKzYViO-bg2oCWYBo', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  },
  getters: {

  }
})