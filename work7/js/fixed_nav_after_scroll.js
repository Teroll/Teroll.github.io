$(document).scroll(function() {
  var documentScrollTop = $(document).scrollTop();
  if (documentScrollTop > $('#header').height()) {
    $('#navbar').addClass('fixedattop');
    // $('#navbar').addClass('logo_mobile_compact');
    var shiftContent = $('#navbar').height();
    $('#content').css('margin-top', shiftContent + 'px');
  }
  else if ($('#navbar').hasClass('fixedattop')) {
    $('#navbar').removeClass('fixedattop');
    $('#navbar').removeClass('logo_mobile_compact');
    $('#logo_button').removeClass('logo_mobile_open');
    $('#content').css('margin-top', '0px');
  }
});