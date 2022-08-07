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
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      if (this.checkWin()) {
        return;
      }

      this.playerHealth -= this.calculateDamage(5, 12);
      this.checkWin();
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {},
    // Math.random() returns a random float between 0 and 1 (not including 1), so it would be 0-0.999999, multiplied by max = 0-9.999999, +1 = 1-10,99999
    // Math.floor() sets 10.9999 to 10
    // Math.max(returns the highest argument) - use 1-10 but if lower than min, use min
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
