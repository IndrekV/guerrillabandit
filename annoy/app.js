var bgChanging = false,
  interval = 2000,
  bgs,
  randomizeBackground = function () {
    var i,  
      c = '#'+Math.floor(Math.random()*16777215).toString(16);

    bgChanging = true;

    for (i = 0; i < bgs.length; ++i) {
      bgs[i].style.backgroundColor = c;
    }

    setTimeout(randomizeBackground, interval);
  };

document.addEventListener('DOMContentLoaded', function () {
  bgs = document.querySelectorAll('.bg');
  randomizeBackground();

  document.querySelector(".screenshot").addEventListener('click', function (e) {
    interval /= 2;    
  });
});