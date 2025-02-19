if (document.querySelector('.js-ticker')) {
  let tickerWidth;
  let counter = 0;

  function tickerLoop() {
    tickerWidth = document.querySelector('.js-ticker').offsetWidth;
    counter = 0;
  }

  tickerLoop();

  window.onresize = tickerLoop;

  const distance = 1;

  setInterval(() => {
    if (counter >= (tickerWidth/2)) {
      counter = 0;
    } else {
      counter += distance;
    }
    const transform = `translate(-${counter}px, -50%)`;
    document.querySelector('.js-ticker').style.transform = transform;
  }, 30);
}
