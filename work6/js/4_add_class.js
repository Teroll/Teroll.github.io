// Обрезаем массив карт до 9шт
var Ncard = [ 1, 2, 3, 4, 5 ]
Ncard.splice(3, 2); // начиная с позиции 3, удалить 2 элементa
// alert( Ncard );

// for (var i = 0; i < Ncard.length; i++) {
//   alert( Ncard[i] );
// }


// выводит карту для бокуса с id зависящим от переменной масива
$(document).ready(function() {
	for (var i = 0; i < Ncard.length; i++) {
		// alert( Ncard[i] );
		// $("#box-" + Ncard[i]).addClass("card-0") ;
		$("#box-" + Ncard[i]).addClass("card-" + Ncard[i]) ;

	}  
});


// $("#box-7").addClass("card-0");