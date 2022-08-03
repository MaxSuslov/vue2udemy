new Vue({
  el: "#exercise",
  data: {
    value: "",
  },
  methods: {
    alert: function () {
      alert("Hello, Sir!");
    },
    getKeyPressed: function (event) {
      this.value = event.target.value;
    },
  },
});
