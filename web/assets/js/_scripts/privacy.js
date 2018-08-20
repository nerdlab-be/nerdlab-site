$(document).ready(function(){
  var privacy = $('.js-privacy');
  var privacyButton = $('.js-privacy__button');

  function setCookie(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : ("; expires="+exdate.toUTCString()));
    document.cookie=c_name + "=" + c_value;
  }

  function setPrivacy(e) {
    privacyButton.blur();
    privacy.toggleClass('u-hidden');
    setCookie('PrivacyNotice','Nerdlab cookie notice');
  }

  privacyButton.on('click', setPrivacy);
});
