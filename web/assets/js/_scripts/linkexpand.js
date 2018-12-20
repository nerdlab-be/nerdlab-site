/* ======================
   #EXPAND LINK TO PARENT
   ====================== */

function expandLink() {
  var linkExpand = $('.js-link-expand');
  var down = void 0;
  var up = void 0;

  $('.js-link-expand').css( 'cursor', 'pointer' );

  linkExpand.on('mousedown', function (e) {
    return down = +new Date();
  });

  linkExpand.on('mouseup', function (e) {
    up = +new Date();
    if (up - down < 200) {
      var link = $(this).closest('.js-link-expand-holder').find('.js-link-expand__target');
      link[0].click();
    }
  });
}

expandLink();
