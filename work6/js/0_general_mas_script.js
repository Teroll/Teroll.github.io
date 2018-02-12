// Создаем массив карт 
var Ncard = [1, 2, 3, 4, 5];
var Nslot = [1, 2, 3, 4, 5, 6, 7, 8];
// перемешиваем его
function compareRandom(a, b) {
  return Math.random() - 0.5;
}
Ncard.sort(compareRandom);
// Обрезаем массив карт до 9шт
Ncard.splice(4, 2); // начиная с позиции 3, удалить 2 элементa
// создает  удвоенный  массив
var DoubleNcard = Ncard.concat(Ncard);
// перемешиваем удвоенный массив
function compareRandom(a, b) {
  return Math.random() - 0.5;
}
DoubleNcard.sort(compareRandom);
// Вывод
// alert( DoubleNcard );

// выводит карту для бокса с id зависящим от переменной масива
$(document).ready(function() {
	for (var i = 0; i < DoubleNcard.length; i++) {
		// alert( Ncard[i] );
		// $("#box-" + Ncard[i]).addClass("card-0") ;
		$("#box-" + Nslot[i]).addClass("card-" + DoubleNcard[i]) ;

	}  
});

