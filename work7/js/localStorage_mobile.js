// Показать новые блоки
 $(document).ready(function() { 
      if (localStorage.getItem('.page2_mobile') == 'show_page') {
        $('.page2_mobile').addClass('show_page');
        $('#show_more_mobile').addClass('hide_page');
      }
});
// $("#show_more").click(function() {
//      $('#page2').toggleClass('show_page');
      
// });
// Скрыть кнопку показа блоков---------------------------------------
//  $(document).ready(function() { 
//       if (localStorage.getItem('#show_more') == 'hide_page') {
//         $('#show_more').addClass('hide_page');
//       }
// });

// $("#show_more").click(function() {
//      $('#show_more').toggleClass('hide_page');
//       if (localStorage.getItem('#show_more') == 'hide_page') {
//         localStorage.removeItem("#show_more", "hide_page");
//       } else {
//         localStorage.setItem("#show_more", "hide_page");
//       }
// });
// Показать блок вместо кнопки--------------------------------------------
//  $(document).ready(function() { 
//       if (localStorage.getItem('#Hidden_block') == 'show_page') {
//         $('#Hidden_block').addClass('show_page');
//       }
// });

// $("#show_more").click(function() {
//      $('#Hidden_block').toggleClass('show_page');
//       if (localStorage.getItem('#Hidden_block') == 'show_page') {
//         localStorage.removeItem("#Hidden_block", "show_page");
//       } else {
//         localStorage.setItem("#Hidden_block", "show_page");
//       }
// });
// -------------------------------------------
// jQuery(document).ready(function(){

// 	$(function() {
// 		$("#show_more").click(function() {
// 			$("#page2").toggleClass("show_page");
// 			$("#show_more").toggleClass("hide_page");
// 			$("#Hidden_block").toggleClass("show_page");
// 		})
// 	});
// });