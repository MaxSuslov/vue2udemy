<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectedColor = 'appBlue'">
          Load Blue Template
        </button>
        <button class="btn btn-success" @click="selectedColor = 'appGreen'">
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="selectedColor = 'appRed'">
          Load Red Template
        </button>
        <hr />
        <!-- <app-blue>
          <h2>I'm beautiful</h2>
        </app-blue>
        <app-green>
          <h2>I'm beautiful</h2>
        </app-green>
        <app-red>
          <h2>I'm beautiful</h2>
        </app-red> -->
        <component :is="selectedColor">
          <h2>I'm beautiful</h2>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
  data: function () {
    return {
      selectedColor: "appGreen",
    };
  },
};
</script>

<style>
</style>
