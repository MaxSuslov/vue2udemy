<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr>
    <!-- We load here the sub-routes -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
        // we can pass an object here, e.g. a named route
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
