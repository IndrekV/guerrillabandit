var fruits;
var randomizeFruits = function () {
  for (var i = fruits.length - 1; i >= 0; i--) {
    fruits[i].style.left = (Math.floor((Math.random() * 70) + 10)) + "%";
    fruits[i].style.top = (Math.floor((Math.random() * 70) + 10)) + "%";
  };

  setTimeout(randomizeFruits, 1000);
};

document.addEventListener('DOMContentLoaded', function () {

  fruits = document.querySelectorAll(".fruit");

  //randomizeFruits();
});