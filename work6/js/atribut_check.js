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



jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			// следит за появление 2го с классом open
			if ( $("div").hasClass("open") ) {
				alert("У элемента задан класс open");

			}
			$(this).addClass("open") ;
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
