<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  //   watching for changes in routes.js: from which route we come and to which route we are being sent. These are the same route in this case, but we store oru new params on the "to" route (which is being loaded).
  watch: {
    '$route'(to, from) {
      this.id = to.params.id;
    },
  },
  methods: {
    navigateToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
