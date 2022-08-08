// This way a component is declared globally and accessible from the both Vue instances (there will be the same content doubled)
// Vue.component("my-cmp", {
//   data: function () {
//     return { status: "Critical" };
//   },
//   template:
//     "<p>Server status: {{ status }} (<button @click='changeStatus'>Change</button>)</p>",
//   methods: {
//     changeStatus: function () {
//       this.status = "Normal";
//     },
//   },
// });

// Another way is to register components locally, they will be accessible only from the particular Vue instance
let cmp = {
  data: function () {
    return { status: "Critical" };
  },
  template:
    "<p>Server status: {{ status }} (<button @click='changeStatus'>Change</button>)</p>",
  methods: {
    changeStatus: function () {
      this.status = "Normal";
    },
  },
};
new Vue({
  el: "#app",
  components: {
    "my-cmp": cmp,
  },
});

// Even if there are the same tags inside of #app2 (<my-cmp>), the component is registered locally only in the first instance and hence is not accessible from this second instance, nothing will be displayed here
new Vue({
  el: "#app2",
});
