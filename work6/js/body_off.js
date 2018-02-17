//Открывает карту по клику
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			$(this).addClass("imageRotateHorizontal");//анимация переворота
			$(this).removeClass("body");
		})
	});
});
