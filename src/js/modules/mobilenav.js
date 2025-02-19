/* ======================
   #MOBILE NAVIGATION
   https://inclusive-components.design/menus-menu-buttons/
   ====================== */

const html = document.documentElement;
const nav = document.querySelector('.js-nav');
const navButton = document.querySelector('.js-nav-toggle');

function toggleNav() {
  const expanded = this.getAttribute('aria-expanded') === 'true';

  html.classList.toggle('has-nav');
  nav.classList.toggle('is-visible');
  nav.focus();
  this.setAttribute('aria-expanded', !expanded);
  this.blur();

  const navLinks = nav.querySelectorAll('a');
  if (nav.classList.contains('is-visible')) {
    navLinks.forEach(link => link.removeAttribute('tabindex'));
  } else {
    navLinks.forEach(link => link.setAttribute('tabindex', '-1'));
  }
}

navButton.addEventListener('click', toggleNav);
