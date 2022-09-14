import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

// We don't write Vue.use(axios) here, because it's a third-party package, we can use it just like this
// defaults object contains default global axios settings (applied to any request), which otherwise can be set up as additional argument (object) directly in the request (for a specific request only)
axios.defaults.baseURL = 'https://axios-e474e-default-rtdb.europe-west1.firebasedatabase.app'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
