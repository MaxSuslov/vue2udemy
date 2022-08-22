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
      this.$router.push({ path: "/" });
    },
  },
};
</script>
