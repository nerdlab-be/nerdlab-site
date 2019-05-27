$('.js-gallery').slick({
  focusOnSelect: true,
  edgeFriction: 2,
  mobileFirst: true,
  variableWidth: true,
  arrows: false,
  lazyLoad: 'progressive',

  responsive: [{
    breakpoint: 767,
    settings: {
      centerMode: true
    }
  }]
});
