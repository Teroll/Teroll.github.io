// Добавляет 1й и 2й открытой карте классы
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {

			// Не дает нажимать на открытую карту
			if ($(this).hasClass("open") || $(this).hasClass("open2")){
				 // alert("уже жал сюда")
			}
			// следит за появление 2го div с классом open
			else if ( $("div").hasClass("open") ) {
				$(this).addClass("open2") ;
				// alert(id1);
			}
			// присваивает первой открытой карте класс
			else {
				$(this).addClass("open") ;
				// alert(id1);
			}
		})
	});
});
