// Создаем массив карт и перемешиваем его
var Ncard = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}
Ncard.sort(compareRandom);

alert( Ncard ); // элементы в случайном порядке, например [3,5,1,2,4]