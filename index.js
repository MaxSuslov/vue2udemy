// var data = {
//   status: "Critical",
// };

Vue.component("my-cmp", {
  // data should be a function and return an Object, if used inside of a component. So it will change only the current object to which the click on button "Change" is applied (not in both places at the same time!)
  data: function () {
    return { status: "Critical" };
  },

  // this cheat will work, but will change the data in both places (pointing to the same object - data source)
  // data: function () {
  //   return data;
  // },
  template:
    "<p>Server status: {{ status }} (<button @click='changeStatus'>Change</button>)</p>",
  methods: {
    changeStatus: function () {
      this.status = "Normal";
    },
  },
});

new Vue({
  el: "#app",
});
