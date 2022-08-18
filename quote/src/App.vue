<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">What a wonderful quote</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
export default {
  data: function () {
    return {
      quoteTitle: "The Quote",
    };
  },
  components: {
    appQuote: Quote,
  },
};
</script>

<style>
</style>
