//Открывает карту по клику
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			$(this).removeClass("body");
		})
	});
});
