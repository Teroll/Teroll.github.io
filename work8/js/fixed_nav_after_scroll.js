
jQuery(document).ready(function(){

    $(document).scroll(function() {
      var documentScrollTop = $(document).scrollTop();
      if (documentScrollTop > $('#header').height()) {
        $('.menu_laptop').addClass('fixedattop');
        var shiftContent = $('.menu_laptop').height();
        $('#mobile_content').css('margin-top', shiftContent + 'px');
      }
      else if ($('.menu_laptop').hasClass('fixedattop')) {
        $('.menu_laptop').removeClass('fixedattop');
      }
    });

});