// Добавляет 1й и 2й открытой карте классы
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			var count_open2 = $('.open2').length;
			// Не дает нажимать на открытую карту
			if ($(this).hasClass("open") || $(this).hasClass("open2") || $(this).hasClass("open_forever")){
			}
			// следит за появление 2го div с классом open
			else if ( $("div").hasClass("open") && count_open2 == 0 ) {
				$(this).addClass("open2") ;
			}
			// следит за 3м и последующими нажатиями
			else if ( count_open2 == 1 ) {
				$(this).addClass("open3") ;
			}
			// присваивает первой открытой карте класс
			else {
				$(this).addClass("open") ;
			}
		})
	});
});
