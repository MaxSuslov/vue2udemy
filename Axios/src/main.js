import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

// We don't write Vue.use(axios) here, because it's a third-party package, we can use it just like this
// defaults object contains default global axios settings (applied to any request), which otherwise can be set up as additional argument (object) directly in the request (for a specific request only)
axios.defaults.baseURL = 'https://axios-e474e-default-rtdb.europe-west1.firebasedatabase.app'

// You can define your custom headers here, and axios will merge them with its default headers
axios.defaults.headers.common['Authorization'] = 'someGenericTOKEN'

// If we have some specific needs, we can target e.g. the get() request and this header will be added to get requests. Accept[s] is wrong to see the difference and not overwride the default 'Accept' header
axios.defaults.headers.get['Accepts'] = 'application/json'

// In interceptors you should select request or response by using the .use() method, which takes a function as an argument
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request interceptor', config)
  config.headers['SOMETHING'] = 'Something added by interceptor'
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response interceptor', res)
  return res
})
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
