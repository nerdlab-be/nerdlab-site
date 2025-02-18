if ($('.js-ticker').length) {
  function tickerLoop(){
    tickerWidth = document.querySelector(".js-ticker").offsetWidth;
    counter = 0;
  }

  tickerLoop();

  window.onresize = function(event) {
    tickerLoop();
  };

  var distance = 1;

  setInterval(function(){
    if (counter >= (tickerWidth/2)) {
      counter = 0;
    } else{
      counter += distance;
    }
    var huh = "translate(-" + counter + "px, -50%)";
    $(".js-ticker").css('transform', huh);
  }, 30);
}
