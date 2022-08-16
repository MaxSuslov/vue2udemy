<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <!-- Executing a custom event from the child -->
    <button @click="resetName">Reset Name</button>
    <!-- Executing a callback function sent as a prop from the parent -->
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    myName: {
      type: String,
    },
    resetFn: Function,
    userAge: Number,
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = "Max";
      this.$emit("nameWasReset", this.myName);
    },
  },
  //   Built-in Vue lifecycle hook: once the instance is created
  created() {
    // $on('eventName', callbackFunction taking the (data) from the event as argument. A listener that should run from the creating of this component on
    eventBus.$on("ageWasEdited", (age) => {
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
