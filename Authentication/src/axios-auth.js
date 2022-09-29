import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-update-auth-a79e9-default-rtdb.europe-west1.firebasedatabase.app/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance