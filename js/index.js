new Vue({
  el: "#app",
  data: {
    color: "grey",
    width: 100,
  },
  computed: {
    myStyle: function () {
      return {
        // If you have dash or space in property name, use quotes or camelCase
        "background-color": this.color,
        // backgroundColor: this.color,
        width: this.width + "px",
      };
    },
  },
});