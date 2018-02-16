//Открывает карту по клику
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			
			// $(this).css({
			// 	"transform": "rotateY(359deg)",
			// 	"transition": "transform 0.3s linear"
			// 	// @keyframes spinHorizontal {
			// 	// 	0% { transform: rotateY(0deg); }
			// 	// 	100% { transform: rotateY(360deg); }
			// 	// }
			// });
			
			$(this).addClass("imageRotateHorizontal");
			$(this).removeClass("body");
		})
	});
});
