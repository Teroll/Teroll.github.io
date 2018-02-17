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
			var obj=document.getElementById('points');
			// alert(sum1);
			// alert(sum2);
			if (sum1==sum2) {
				// alert("равны");
				// подсчет очков
				$("div.open").addClass("open_forever");
				$("div.open2").addClass("open_forever");
				var count_open = $('.open_forever').length;
				alert(count_open);

				obj.innerHTML++;

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
				obj.innerHTML--;
			}
		})
	});
});