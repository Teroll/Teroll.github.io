// document.getElementById('raz').onclick = function() {
//   var a = this.attributes;
//   for (var i=0; i<a.length; i++) {
//     alert(a[i].name + " = " + a[i].value);
//   }
// }
// jQuery(document).ready(function(){
// 	$(function() {
// 		$(".box").click(function(event) {
// 			alert(this.getAttribute("class"));
// 			$(this).addClass("open") ;
// 		})
// 	});
// });

// Добавляет 1й и 2й открытой карте классы
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			// следит за появление 2го с классом open
			if ( $("div").hasClass("open") ) {
				$(this).addClass("open2") ;
				alert("У элемента задан класс open");
			}
			// $(this).addClass("open") ;
			else {
				$(this).addClass("open") ;

			}
		})
	});
});
// $('.block').click(function(event) {
//     // $('.focus').removeClass('focus');
// 		$(this).addClass('focus');
// });

// if ( $("div").hasClass("open") ) {

// 	alert("У элемента задан класс sizeable!");

// }
