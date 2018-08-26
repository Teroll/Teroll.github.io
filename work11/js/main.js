$().ready(function() {
	var v1 = 400
	var v2 = 200

	if (true) {}
		// калькулятор металла
   $( ".calc button" ).click(function() {
   	var x = $(".calc input[name='x']").val()
   	var y = $(".calc input[name='y']").val()
   	var z = $(".calc input[name='z']").val()
   	var n = $(".calc input[name='n']").val()
   	var select = $(".calc option:selected").val();
   	
   	var sum = (((y * z * x)  / 1000) * 8 )/ 1000 * n

   	console.log(sum)
   	$( ".calc .sum" ).append( sum + ' кг');
   });


   // вешает класс на кнопку
   $( ".calc-block[data-id='1'] .calc-item" ).click(function() {
   	$(".calc-block[data-id='1'] .calc-item").removeClass("active");
   	$(this).addClass("active");
   	$(".calc-otvet").fadeOut();
   });

   $( ".calc-block[data-id='2'] .calc-item" ).click(function() {
   	$(".calc-block[data-id='2'] .calc-item").removeClass("active");
   	$(this).addClass("active");
   	$(".calc-otvet").fadeOut();
   });


    // показывает таблицу ответов
    $( ".calc-otvet_btn" ).click(function() {
    	if ($(".calc-block[data-id='1'] .active").length == 0) {
    		alert("Выберите Инструмент");
    	}
    	if ($(".calc-block[data-id='2'] .active").length == 0) {
    		alert("Выберите Материал");
    	}
    	if ($(".calc-input input").val() <= 0) {
    		alert("Укажите Диаметр");
    	}
    	if ($(".calc-block[data-id='1'] .active").length !== 0 & $(".calc-block[data-id='2'] .active").length !== 0 & $(".calc-input input").val() > 0) {
    		var d = $(".calc-input input[name='diametr']").val()

    		var sumN1 = Math.round((v1 * 1000) / (3.14 * d))
    		var sumN2 = Math.round((v2 * 1000) / (3.14 * d))
	    	// console.log(d);
	    	// console.log(sumN);
	    	$(".calc-otvet .s1").text(sumN1);
	    	$(".calc-otvet .s2").text(sumN2);


    	$(".calc-otvet").fadeIn()
    	}
    	
    });

});