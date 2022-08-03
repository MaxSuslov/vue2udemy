new Vue({
  el: "#exercise",
  data: {
    value: 0,
  },
  computed: {
    result: function () {
      // return this.value != 37 ? "Not there yet" : "Done";
      return this.value == 37 ? "Done" : "Not there yet";
    },
  },
  watch: {
    result: function () {
      // We bind 'this' keyword to allow access to it from the callback function
      vm = this;
      setTimeout(function () {
        vm.value = 0;
      }, 5000);
    },
  },
});