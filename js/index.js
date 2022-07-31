new Vue({
	el: "#app", 
  data: {
  	counter: 0,
    result: ''
  }, 
  methods: {
    increase: function() {
      this.counter++;
      this.result = this.counter < 5 ? 'Less than 5' : 'Greater than 5';
    },
    decrease: function() {
      this.counter--;
      this.result = this.counter < 5 ? 'Less than 5' : 'Greater than 5';
    }
  }
});