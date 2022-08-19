<template>
  <div class="row">
    <!-- .native event modifier allows to treat the click on the inner html elements as a click on <app-qoute> itself (which is not a part of the DOM) -->
    <app-quote
      v-for="(quote, index) in quotes"
      @click.native="deleteQuote(index)"
      >{{ quote }}</app-quote
    >
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    appQuote: Quote,
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    },
  },
};
</script>

<style>
</style>