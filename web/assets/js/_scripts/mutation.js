var heroElement = $('.js-hero-watch');
var heroWatcher = scrollMonitor.create( heroElement, -80 );

heroWatcher.enterViewport(function() {
  if (heroElement.hasClass('is-visible')) {
  } else {
    heroWatcherIntro();
    heroElement.addClass('is-visible');
  }
});

function heroWatcherIntro() {
  var heroIn = anime.timeline({
    duration: 900,
    delay: function(el, i) { return i * 250 },
    loop: 0,
    easing: 'easeInOutSine'
  });

  heroIn
    .add({
      targets: '.js-hero-watch .s-m-left',
      scale: [0,1]
    })
    .add({
      targets: '.js-hero-watch .s-m-right',
      scale: [0,1],
      offset: 400,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-u',
      opacity: [0,1],
      offset: 0,
      duration: 10,
    })
    .add({
      targets: '.js-hero-watch .s-u',
      stroke: ["#fff","#BD79A3"],
      offset: 0,
      duration: 100,
    })
    .add({
      targets: '.js-hero-watch .s-u',
      strokeDashoffset: [anime.setDashoffset, 0],
      offset: 200,
      duration: 1400,
    })
    .add({
      targets: '.js-hero-watch .s-u',
      fill: ["#fff","#BD79A3"],
      offset: 700,
      duration: 100
    })
    .add({
      targets: '.js-hero-watch .s-t-middle',
      scaleX: [0,1],
      offset: 300
    })
    .add({
      targets: '.js-hero-watch .s-t-center',
      scaleY: [0,1],
      offset: 300
    })
    .add({
      targets: '.js-hero-watch .s-a',
      opacity: [0,1],
      offset: 0,
      duration: 10,
    })
    .add({
      targets: '.js-hero-watch .s-a',
      stroke: ["#fff","#5242A6"],
      offset: 0,
      duration: 100,
    })
    .add({
      targets: '.js-hero-watch .s-a',
      strokeDashoffset: [anime.setDashoffset, 0],
      offset: 400,
      duration: 1000,
    })
    .add({
      targets: '.js-hero-watch .s-a',
      fill: ["#fff","#5242A6"],
      offset: 1000,
      duration: 200
    })
    .add({
      targets: '.js-hero-watch .s-talt-top',
      scaleY: [0,1],
      offset: 300
    })
    .add({
      targets: '.js-hero-watch .s-talt-center',
      scaleY: [0,1],
      offset: 300
    })
    .add({
      targets: '.js-hero-watch .s-i-1',
      scale: [0,1],
      offset: 0,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-i-2',
      scale: [0,1],
      offset: 300,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-i-3',
      scale: [0,1],
      offset: 100,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-i-4',
      scale: [0,1],
      offset: 150,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-i-5',
      scale: [0,1],
      offset: 450,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-i-6',
      scale: [0,1],
      offset: 100,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-i-7',
      scale: [0,1],
      offset: 0,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-i-8',
      scale: [0,1],
      offset: 450,
      duration: 500
    })
    .add({
      targets: '.js-hero-watch .s-o-bottom',
      translateY: [100,0],
      offset: 100
    })
    .add({
      targets: '.js-hero-watch .s-o-top',
      translateY: [100,0],
      offset: 500
    })
    .add({
      targets: '.js-hero-watch .s-n-left',
      scale: [0,1],
      offset: 300,
      duration: 300
    })
    .add({
      targets: '.js-hero-watch .s-n-right',
      scaleY: [0,1],
      offset: 500
    })
}

var introElement = $('.js-intro-watch');
var introWatcher = scrollMonitor.create( introElement, -80 );

introWatcher.enterViewport(function() {
  if (introElement.hasClass('is-visible')) {
  } else {
    introWatcherIntro();
  }
});

introWatcher.exitViewport(function() {
  if (introElement.hasClass('is-visible')) {} else {
    introElement.addClass('is-visible');
  }
});

function introWatcherIntro() {
  var introIn = anime.timeline({
    duration: 900,
    delay: function(el, i) { return i * 250 },
    loop: 0,
    easing: 'easeInOutSine'
  });

  introIn
    .add({
      targets: '.js-intro-watch .s-m-left',
      scale: [0,1]
    })
    .add({
      targets: '.js-intro-watch .s-m-right',
      scale: [0,1],
      offset: 400,
      duration: 500
    })
    .add({
      targets: '.js-intro-watch .s-o2-left',
      rotate: [0,360],
      scale: [1,.5,1],
      offset: 400,
    })
    .add({
      targets: '.js-intro-watch .s-o2-center',
      scale: [0,1],
      offset: 400,
      duration: 500
    })
}

var programElement = $('.js-program-watch');
var programWatcher = scrollMonitor.create( programElement, -80 );

programWatcher.enterViewport(function() {
  if (programElement.hasClass('is-visible')) {
  } else {
    programWatcherIntro();
  }
});

programWatcher.exitViewport(function() {
  if (programElement.hasClass('is-visible')) {} else {
    programElement.addClass('is-visible');
  }
});

function programWatcherIntro() {
  var programIn = anime.timeline({
    duration: 900,
    delay: function(el, i) { return i * 250 },
    loop: 0,
    easing: 'easeInOutSine'
  });

  programIn
    .add({
      targets: '.js-program-watch .s-o2-right',
      scale: [0,1],
      offset: 400,
      duration: 500
    })
    .add({
      targets: '.js-program-watch .s-o2-center',
      scale: [0,1],
      offset: 400,
      duration: 500
    })
    .add({
      targets: '.js-program-watch .s-talt-top',
      scaleY: [0,1],
      offset: 300
    })
    .add({
      targets: '.js-program-watch .s-talt-center',
      scaleY: [0,1],
      offset: 300
    })
    .add({
      targets: '.js-program-watch .s-triangle',
      scaleY: [0,1],
      offset: 1200
    })
    .add({
      targets: '.js-program-watch .s-t-middle',
      scaleX: [0,1],
      offset: 300
    })
    .add({
      targets: '.js-program-watch .s-t-center',
      scaleY: [0,1],
      offset: 300
    })
}

var subscribeElement = $('.js-subscribe-watch');
var subscribeWatcher = scrollMonitor.create( subscribeElement, -80 );

subscribeWatcher.enterViewport(function() {
  if (subscribeElement.hasClass('is-visible')) {
  } else {
    subscribeWatcherIntro();
  }
});

subscribeWatcher.exitViewport(function() {
  if (subscribeElement.hasClass('is-visible')) {} else {
    subscribeElement.addClass('is-visible');
  }
});

function subscribeWatcherIntro() {
  var subscribeIn = anime.timeline({
    duration: 900,
    delay: function(el, i) { return i * 250 },
    loop: 0,
    easing: 'easeInOutSine'
  });

  subscribeIn
    .add({
      targets: '.js-subscribe-watch .s-o3-center',
      scale: [0,1],
      duration: 300
    })
    .add({
      targets: '.js-subscribe-watch .s-o3',
      scale: [0,1],
      offset: 200
    })
}

var socialElement = $('.js-social-watch');
var socialWatcher = scrollMonitor.create( socialElement, -80 );

socialWatcher.enterViewport(function() {
  if (socialElement.hasClass('is-visible')) {
  } else {
    socialWatcherIntro();
  }
});

socialWatcher.exitViewport(function() {
  if (socialElement.hasClass('is-visible')) {} else {
    socialElement.addClass('is-visible');
  }
});

function socialWatcherIntro() {
  var socialIn = anime.timeline({
    duration: 900,
    delay: function(el, i) { return i * 250 },
    loop: 0,
    easing: 'easeInOutSine'
  });

  socialIn
    .add({
      targets: '.js-social-watch .s-m2-left',
      scale: [0,1]
    })
    .add({
      targets: '.js-social-watch .s-m2-right',
      scale: [0,1],
      offset: 100
    })
    .add({
      targets: '.js-social-watch .s-i-1',
      scale: [0,1],
      offset: 0,
      duration: 500
    })
    .add({
      targets: '.js-social-watch .s-i-2',
      scale: [0,1],
      offset: 300,
      duration: 500
    })
    .add({
      targets: '.js-social-watch .s-i-3',
      scale: [0,1],
      offset: 100,
      duration: 500
    })
    .add({
      targets: '.js-social-watch .s-i-4',
      scale: [0,1],
      offset: 150,
      duration: 500
    })
    .add({
      targets: '.js-social-watch .s-i-5',
      scale: [0,1],
      offset: 450,
      duration: 500
    })
    .add({
      targets: '.js-social-watch .s-i-6',
      scale: [0,1],
      offset: 100,
      duration: 500
    })
    .add({
      targets: '.js-social-watch .s-i-7',
      scale: [0,1],
      offset: 0,
      duration: 500
    })
    .add({
      targets: '.js-social-watch .s-i-8',
      scale: [0,1],
      offset: 450,
      duration: 500
    })
}

var footerElement = $('.js-footer-watch');
var footerWatcher = scrollMonitor.create( footerElement, -80 );

footerWatcher.enterViewport(function() {
  if (footerElement.hasClass('is-visible')) {
  } else {
    footerWatcherIntro();
  }
});

footerWatcher.exitViewport(function() {
  if (footerElement.hasClass('is-visible')) {} else {
    footerElement.addClass('is-visible');
  }
});

function footerWatcherIntro() {
  var footerIn = anime.timeline({
    duration: 900,
    delay: function(el, i) { return i * 250 },
    loop: 0,
    easing: 'easeInOutSine'
  });

  footerIn
    .add({
      targets: '.js-footer-watch .s-o2-left',
      rotate: [0,360],
      scale: [1,.5,1],
      offset: 400,
    })
    .add({
      targets: '.js-footer-watch .s-o2-center',
      scale: [0,1],
      offset: 400,
      duration: 500
    })
}
