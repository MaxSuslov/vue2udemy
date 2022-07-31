new Vue({
	el: "#app", 
  data: {
  	counter: 0,
    secondCounter: 0
  }, 
  methods: {
    result() {
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  }
});