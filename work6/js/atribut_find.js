// jQuery(document).ready(function(){
// 	var id2 = $("div.open2").id
// 	var id1 = $("div.open").id
// 	alert(id2);
// 	alert(id1);
// });

// сравнение 2х атрибутов

// if (true) {
// 	var id2 = this.id
// 	var id1 = $("div.open").id
// 	alert(id2);
// 	alert(id1);
// }
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			// следит за появление 2го с классом open
			var id1 = $("div.open").attr("class")
			var id2 = $("div.open2").attr("class")

			// var id1 = $("div.open").id
			// alert(id2[27]);
			// alert(id2[28]);

			// alert(id1[27]);
			// alert(id1[28]);

			// суммируем значения класса отвечающие за номер карты
			var sum1 = id1[27] + id1[28];
			var sum2 = id2[27] + id2[28];
			// var obj=document.getElementById('points');
			// alert(sum1);
			// alert(sum2);
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



				$("div.open").removeClass("open");
				$("div.open2").removeClass("open2");
			}
			else{
				// alert("НЕ равны");
				$("div.open").addClass("body");
				$("div.open2").addClass("body");
				
				$("div.open").removeClass("imageRotateHorizontal");
				$("div.open2").removeClass("imageRotateHorizontal");

				$("div.open").removeClass("open");
				$("div.open2").removeClass("open2");

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