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
			// var id1 = this.id; // Получаем идентификатор для проверки от нажатия на ту же карту
			// alert(id);

			// следит за появление 2го с классом open
			if ( $("div").hasClass("open") ) {
				$(this).addClass("open2") ;
				// if (true) {
				// 	var id2 = this.id
				// 	var id1 = $("div.open").id
				// 	alert(id2);
				// 	alert(id1);
				// }
				// var id2 = this.id
				// var id1 = ("div.open").id
				// alert(id1 id2);
			}
			else {
				$(this).addClass("open") ;
			}
		})
	});
});


// сравнение 2х атрибутов
// if $('div.open')[3] == $('div.open2')[3]{
// 	alert("Одинаковые карты");
// }
// else {
// 	alert("hfpyst карты");
// }

// $('.block').click(function(event) {
//     // $('.focus').removeClass('focus');
// 		$(this).addClass('focus');
// });

// if ( $("div").hasClass("open") ) {

// 	alert("У элемента задан класс sizeable!");

// }
