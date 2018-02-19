// Создаем массив карт 
var Ncard = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11, 12, 13, 14, 15, 16, 17, 18,19,20,21, 22, 23, 24, 25, 26, 27, 28,29,30,31, 32, 33, 34, 35, 36, 37, 38,39,40,41, 42, 43, 44, 45, 46, 47, 48,49,50,51,52];
var Nslot = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18];
// перемешиваем его
function compareRandom(a, b) {
  return Math.random() - 0.5;
}
Ncard.sort(compareRandom);
// Обрезаем массив карт до 9шт
Ncard.splice(9, 43);
// создает  удвоенный  массив
var DoubleNcard = Ncard.concat(Ncard);
// перемешиваем удвоенный массив
function compareRandom(a, b) {
  return Math.random() - 0.5;
}
DoubleNcard.sort(compareRandom);

// выводит карту для бокса с id зависящим от переменной масива
$(document).ready(function() {
	for (var i = 0; i < DoubleNcard.length; i++) {

		$("#box-" + Nslot[i]).addClass("card-" + DoubleNcard[i]) ;

	}  
});