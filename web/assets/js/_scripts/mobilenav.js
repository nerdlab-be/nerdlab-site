/* ======================
   #MOBILE NAVIGATION
   https://inclusive-components.design/menus-menu-buttons/
   ====================== */

var html = $('html');
var nav = $('.js-nav');
var navButton = $('.js-nav-toggle');

function toggleNav() {
  var expanded = $(this).attr('aria-expanded') === 'true';

  html.toggleClass('has-nav');
  nav.toggleClass('is-visible').focus();
  $(this).attr('aria-expanded', !expanded).blur();

  if (nav.hasClass('is-visible')) {
    $('.js-nav a').removeAttr("tabindex");

  } else {
    $('.js-nav a').prop('tabIndex', -1);
  }
}

navButton.on('click', toggleNav);
