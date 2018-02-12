jQuery(document).ready(function(){
	$(function() {
		// element.classList.remove("box");
		$(".box").click(function(event) {
			$(this).removeClass("body");
		})
	});
});
// $('.block').click(function(event) {
//     // $('.focus').removeClass('focus');
// 		$(this).addClass('focus');
// });