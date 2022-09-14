<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        email: ''
      }
    },
    created() {
      axios.get('/users.json')
      .then(res => {
        console.log(res)
        // we extract data from the response
        const data = res.data
        const users = []
        // we schould loop through keys
        for (let key in data) {
          const user = data[key]
          // we write the cryptic id to a new property (id) to keep it and not to lose
          user.id = key
          users.push(user)
        }
        console.log(users)
        this.email = users[0].email
        })
      .catch(res => console.log(error))
    }
  }
</script>


<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>