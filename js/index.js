new Vue({
	el: "#app", 
  data: {
  	title: "Hello World!", 
    link: "http://google.com",
    finishedLink: '<a href="http://yahoo.com">Yahoo</a>'
  },
  methods: {
  	sayHello: function() {
    	return this.title;
    }
  }
});