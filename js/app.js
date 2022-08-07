new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      let max = 10;
      let min = 3;
      // Math.random() returns a random float between 0 and 1 (not including 1), so it would be 0-0.999999, multiplied by max = 0-9.999999, +1 = 1-10,99999
      // Math.floor() sets 10.9999 to 10
      // Math.max(returns the highest argument) - use 1-10 but if lower than min, use min
      let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      // We reduce monster's health by damage we apply by our attack
      this.monsterHealth -= damage;
      // Check if the monster is already dead
      if (this.monsterHealth <= 0) {
        alert("You won!");
        this.gameIsRunning = false;
        // return here to stop executing the code below and exit the function
        return;
      }

      // Let's assume that the monster brings more damage to us (is stronger)
      this.min = 5;
      this.max = 12;
      // recalculate damage based on higher boundaries
      damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;
      // Check if you are dead
      if (this.playerHealth <= 0) {
        alert("You lost!");
        this.gameIsRunning = false;
        // No return statement since no code below here
      }
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {},
  },
});
