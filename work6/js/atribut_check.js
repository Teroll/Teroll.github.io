// Добавляет 1й и 2й открытой карте классы
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			var id1 = this.id; // Получаем идентификатор для проверки от нажатия на ту же карту
			// alert(id);

			// следит за появление 2го с классом open
			if ( $("div").hasClass("open") ) {
				$(this).addClass("open2") ;
				// alert(id1);
			}
			// else if ($(this).hasClass("open")){
			// 	// $(this).addClass("open") ;
			// 	 alert("уже жал сюда")
			// }
			else {
				$(this).addClass("open") ;
				// alert(id1);
			}
		})
	});
});
