// vm is picked up here for "view model / Vue model", just use an arbitrary variable name
let vm1 = new Vue({
  el: "#app1",
  data: {
    title: "The VueJS Instance",
    showParagraph: false,
  },
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

setTimeout(function () {
  vm1.title = "Changed by Timer!";
}, 3000);

let vm2 = new Vue({
  el: "#app2",
  data: {
    title: "The second instance",
  },
  methods: {
    changeTitle: function () {
      vm1.title = "Changed!";
    },
  },
});
