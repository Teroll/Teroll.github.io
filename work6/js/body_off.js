//Открывает карту по клику
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			
			$(this).css({"transform": "rotateY(360deg)", "transition": "transform 2.2s linear"});
			$(this).removeClass("body");
		})
	});
});
