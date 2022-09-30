import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://axios-e474e-default-rtdb.europe-west1.firebasedatabase.app'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance