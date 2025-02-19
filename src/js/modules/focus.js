/* ======================
   #FOCUS
   ====================== */

const skipLink = document.querySelector('.js-skip');

function getFocus(event) {
  event.preventDefault();
  const skipTo = '#' + this.href.split('#')[1];
  const targetElement = document.querySelector(skipTo);

  // Setting 'tabindex' to -1 takes an element out of normal
  // tab flow but allows it to be focused via javascript
  targetElement.setAttribute('tabindex', -1);
  
  targetElement.addEventListener('blur', removeTabIndex);
  targetElement.addEventListener('focusout', removeTabIndex);
  
  targetElement.focus(); // focus on the content container
}

function removeTabIndex() {
  this.removeAttribute('tabindex');
}

skipLink.addEventListener('click', getFocus);
