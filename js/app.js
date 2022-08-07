let data = {
  title: "The VueJS Instance",
  showParagraph: false,
};

// vm is picked up here for "view model / Vue model", just use an arbitrary variable name
let vm1 = new Vue({
  el: "#app1",
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle("The VueJS Instance (Updated)");
    },
    updateTitle: function (title) {
      this.title = title;
    },
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title: function (value) {
      alert("Title changed, new value: " + value);
    },
  },
});

// Accessing the Vue instance from outside. Commented out to get rid of annoying alerts caused by watch method
// setTimeout(function () {
//   vm1.title = "Changed by Timer!";
//   vm1.show();
// }, 3000);

// This property is being added from outside, so it won't be passed to the constructor and cannot use the Vue internal methods, hence it's not reactive
vm1.newProp = "Is not added to the constructor";
console.log(vm1.$data === data);

// Another Vue instance
let vm2 = new Vue({
  el: "#app2",
  data: {
    title: "The second instance",
  },
  methods: {
    changeTitle: function () {
      // Normal reference to a proxied property
      vm1.title = "Changed!";
      // Another way of accessing instance properties
      vm1.$data.title = "Changed!";
    },
  },
});
