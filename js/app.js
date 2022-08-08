let data = {
  title: "The VueJS Instance",
  showParagraph: false,
};

Vue.component("hello", {
  template: "<h2>Component template</h2>",
});

// vm is picked up here for "view model / Vue model", just use an arbitrary variable name
let vm1 = new Vue({
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle("The VueJS Instance (Updated)");
      this.$refs.myButton.innerText = "Test";
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

vm1.$mount("#app1");
// Accessing the Vue instance from outside. Commented out to get rid of annoying alerts caused by watch method
// setTimeout(function () {
//   vm1.title = "Changed by Timer!";
//   vm1.show();
// }, 3000);

// This property is being added from outside, so it won't be passed to the constructor and cannot use the Vue internal methods, hence it's not reactive
vm1.newProp = "Is not added to the constructor";
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = "Something else";

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

let vm3 = new Vue({
  template: "<h1>Hello!</h1>",
});

vm3.$mount("#app3");
// Another way of mounting, with Vanilla JS - mounting without el argument
vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);
