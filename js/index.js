new Vue({
  el: "#exercise",
  data: {
    name: "Max",
    age: 44,
    mainkun:
      "https://i.pinimg.com/736x/38/c8/a7/38c8a7c492a91571dc1665527371c929.jpg",
  },
  methods: {
    randomFloat: function () {
      let float = Math.random();
      return float;
    },
  },
});

// ------ Alternative randomFloat solution customized -------
// function getRandomFloat(min, max, decimals) {
//   const str = (Math.random() * (max - min) + min).toFixed(decimals);

//   return parseFloat(str);
// }

// console.log(getRandomFloat(1.5, 3.5, 2)); // 👉️ 1.96
// console.log(getRandomFloat(1.5, 3.5, 3)); // 👉️ 2.036
// console.log(getRandomFloat(1.5, 3.5, 4)); // 👉️ 3.0045