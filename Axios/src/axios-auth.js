import axios from 'axios'

// const name is up to you
const instance = axios.create({
  baseURL: 'https://axios-e474e-default-rtdb.europe-west1.firebasedatabase.app'
})

// this .defaults will be applied only to the current instance, not to the global instance
instance.defaults.headers.common['SOME_HEADER_FROM_CUSTOM_INSTANCE'] = 'somethinggggg'

export default instance