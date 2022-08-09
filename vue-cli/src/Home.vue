<template>
  <div>
    <app-server-status v-for="server in 5"> </app-server-status>
  </div>
</template>

<script>
// Importing a newly created component (ServerStatus is just an arbitrary name) to be able to use its template/data/methods
import ServerStatus from "./ServerStatus.vue";
// Registering it as a local component
export default {
  components: {
    "app-server-status": ServerStatus,
  },
};
</script>
