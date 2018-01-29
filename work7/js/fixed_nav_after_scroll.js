$(document).scroll(function() {
  var documentScrollTop = $(document).scrollTop();
  if (documentScrollTop > $('#header').height()) {
    $('#navbar').addClass('fixedattop');
    // $('#navbar').addClass('logo_mobile_compact');
    var shiftContent = $('#navbar').height();
    $('#mobile_content').css('margin-top', shiftContent + 'px');
  }
  else if ($('#navbar').hasClass('fixedattop')) {
    $('#navbar').removeClass('fixedattop');
    $('#navbar').removeClass('logo_mobile_compact');
    $('#logo_button').removeClass('logo_mobile_open');
    $('#logo').removeClass('show');
    $('#mobile_content').css('margin-top', '0px');
  }
});

// $(window).resize(function() {
//   width = $(window).width();
//   if (width <= 600) {
//    $(document).scroll(function() {
//     var documentScrollTop = $(document).scrollTop();
//     if (documentScrollTop > $('#header').height()) {
//       $('#navbar').addClass('fixedattop');
//     // $('#navbar').addClass('logo_mobile_compact');
//     var shiftContent = $('#navbar').height();
//     $('#mobile_content').css('margin-top', shiftContent + 'px');
//   }
//   else if ($('#navbar').hasClass('fixedattop')) {
//     $('#navbar').removeClass('fixedattop');
//     $('#navbar').removeClass('logo_mobile_compact');
//     $('#logo_button').removeClass('logo_mobile_open');
//     $('#logo').removeClass('show');
//     $('#mobile_content').css('margin-top', '0px');
//   }
// });
//  }
// });