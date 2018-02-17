// Сравнение 2х открытых карт и присвоение очков
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			// следит за появлением 2го с классом open
			var id1 = $("div.open").attr("class")
			var id2 = $("div.open2").attr("class")

			// суммируем значения класса отвечающие за номер карты
			var sum1 = id1[27] + id1[28];
			var sum2 = id2[27] + id2[28];
			
			// При угадывании карт добавляет очки
			if (sum1==sum2) {
				// классы для подсчета очков
				$("div.open").addClass("open_forever");
				$("div.open2").addClass("open_forever");
				// подсчет очков
				var count_close = $('.body').length;//число закрытых карт
				var points_open = count_close * 21 // 42 * на число НЕ открытых пар
				// замена очков на новое значение
				$('#points').each(function () {
					var newPrice = ( +($(this).text()) + points_open );
					$(this).text( newPrice );  
				});
				// уберает маркеры открытия
				$("div.open").removeClass("open");
				$("div.open2").removeClass("open2");

				// Финальный экран
				var count_open = $('.open_forever').length;//число открытых карт
				if (count_open == 18){
					// скрываем карты
					$("div.container").addClass("hide");
					// показываем финальный счет
					$("div.end_game").addClass("show");
					// берем значения счета
					$('#points').each(function () {
					var newPrice = $(this).text();
					$('#final_points').text( newPrice );  
				});
				}
			}
			// Не угадал
			else{
				// переворачивает карты
				$("div.open").addClass("body");
				$("div.open2").addClass("body");
				// восстанавливает анимацию
				$("div.open").removeClass("imageRotateHorizontal");
				$("div.open2").removeClass("imageRotateHorizontal");
				// уберает маркеры открытия
				$("div.open").removeClass("open");
				$("div.open2").removeClass("open2");
				// подсчет очков
				var count_open = $('.open_forever').length;//число открытых карт
				var points_close = count_open * 21 // 42 * на число открытых пар
				// замена очков на новое значение
				$('#points').each(function () {
					var newPrice = ( +($(this).text()) - points_close );
					$(this).text( newPrice );  
				});
			}
		})
	});
});