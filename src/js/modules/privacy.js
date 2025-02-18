$(document).ready(function(){
  var privacy = $('.js-privacy');
  var privacyButton = $('.js-privacy__button');

  function writeCookie(key, value, days) {
    var date = new Date();

    // Default at 365 days.
    days = days || 365;

    // Get unix milliseconds at current time plus number of days
    date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000

    window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

    return value;
  };

  function setPrivacy(e) {
    privacyButton.blur();
    privacy.toggleClass('u-hidden');
    writeCookie('PrivacyNotice','NerdlabCookieNotice');
  }

  privacyButton.on('click', setPrivacy);
});
