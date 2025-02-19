// Wait for DOM to be ready
function initPrivacy() {
  const privacy = document.querySelector('.js-privacy');
  const privacyButton = document.querySelector('.js-privacy__button');
  
  if (!privacy || !privacyButton) {
    console.error('Privacy elements not found');
    return;
  }

  function writeCookie(key, value, days) {
    const date = new Date();
    
    // Default at 365 days.
    days = days || 365;

    // Get unix milliseconds at current time plus number of days
    date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000

    document.cookie = `${key}=${value}; expires=${date.toGMTString()}; path=/`;

    return value;
  }

  function setPrivacy(e) {
    privacyButton.blur();
    privacy.classList.toggle('u-hidden');
    writeCookie('PrivacyNotice', 'NerdlabCookieNotice');
  }

  privacyButton.addEventListener('click', setPrivacy);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPrivacy);
} else {
  initPrivacy();
}
