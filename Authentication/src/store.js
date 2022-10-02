import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null, 
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    // we get expiresIn (3600) seconds (1 hour token expiration time) and multiply it by 1000 (milliseconds)
    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
    // Alternatively, dispatch('logout') here - this would also redirect the user to /signin
        commit('clearAuthData')
      }, expirationTime * 1000)
    },
    signup({commit, dispatch}, authData) {
      axios.post('/accounts:signUp?key=AIzaSyCqAR2rGDkBDn2aZ9EKzYViO-bg2oCWYBo', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          const now = new Date()
      // .getTime() automatically converts time into ms
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
      // Storing token in localStorage (using browser API) to persist the logged in state after reloading the page
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch('storeUser', authData)
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    login({commit, dispatch}, authData) {
      axios.post('/accounts:signInWithPassword?key=AIzaSyCqAR2rGDkBDn2aZ9EKzYViO-bg2oCWYBo', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res)
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        dispatch('storeUser', authData)
        dispatch('setLogoutTimer', res.data.expiresIn)
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        dispatch('setLogoutTimer', res.data.expiresIn)
      })
        .catch(error => console.log(error))
    },
// Check if the user is still logged in (if the token is expired or not), when the app is started (see created() hook in App.vue)
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    },
    logout ({commit}) {
      commit('clearAuthData')
    // localStorage.clear() would be also an option if we want to completely clear it, but if we have multiple items we don't want destroy, use .removeItem('item') instead
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/signin')
    },
    storeUser({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    },
    fetchUser({commit, state}) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
      .then(res => {
        console.log(res)
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        commit('storeUser', users[0])
      })
      .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    }
  }
})