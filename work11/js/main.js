$().ready(function() {


	var v1 = 400
	var v2 = 200

	var mass = [
    	['P', 999, 200, "0.05-0.1", "0.2-0.3"],
    	['M', 999, 250, "0.05-0.1", "0.2-0.3"],
    	['K', 999, 500, "0.05-0.1", "0.2-0.3"],
    	['N', 999, 500, "0.05-0.1", "0.2-0.3"],
    	['S', 999, 70, "0.05-0.1", "0.2-0.3"],
    	['H', 999, 120, "0.05-0.1", "0.2-0.3"]
    	];

	// if (true) {}
	// 	// калькулятор металла
 //   $( ".calc button" ).click(function() {
 //   	var x = $(".calc input[name='x']").val()
 //   	var y = $(".calc input[name='y']").val()
 //   	var z = $(".calc input[name='z']").val()
 //   	var n = $(".calc input[name='n']").val()
 //   	var select = $(".calc option:selected").val();
   	
 //   	var sum = (((y * z * x)  / 1000) * 8 )/ 1000 * n

 //   	console.log(sum)
 //   	$( ".calc .sum" ).append( sum + ' кг');
 //   });


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

    // $( ".calc-item" ).click(function() {
    // 		var id = $(this).attr("data-id")
    // 		var massId = "mass" + id
    // 		console.log(mass12)
    // 		console.log()
    // });

    // блок 1-------------------

    // точение
    $( ".calc-item[data-id='11']").click(function() {
    	var mass = [
    	['P', 400, 200, "0.05-0.1", "0.2-0.3"],
    	['M', 150, 250, "0.05-0.1", "0.2-0.3"],
    	['K', 1200, 500, "0.05-0.1", "0.2-0.3"],
    	['N', 2000, 500, "0.05-0.1", "0.2-0.3"],
    	['S', 200, 70, "0.05-0.1", "0.2-0.3"],
    	['H', 250, 120, "0.05-0.1", "0.2-0.3"]
    	];
    	console.log(mass)
    });
    
    // Канавка
    $( ".calc-item[data-id='12']").click(function() {
    	var mass = [
    	['P', 150, 200, "0.05-0.1", "0.2-0.3"],
    	['M', 150, 250, "0.05-0.1", "0.2-0.3"],
    	['K', 150, 500, "0.05-0.1", "0.2-0.3"],
    	['N', 150, 500, "0.05-0.1", "0.2-0.3"],
    	['S', 150, 70, "0.05-0.1", "0.2-0.3"],
    	['H', 150, 120, "0.05-0.1", "0.2-0.3"]
    	];
    	console.log(mass)
    });

    // Резьба
    $( ".calc-item[data-id='13']").click(function() {
    	var mass = [
    	['P', 120, 200, "Шаг", "0.2-0.3"],
    	['M', 120, 250, "Шаг", "0.2-0.3"],
    	['K', 120, 500, "Шаг", "0.2-0.3"],
    	['N', 120, 500, "Шаг", "0.2-0.3"],
    	['S', 120, 70, "Шаг", "0.2-0.3"],
    	['H', 120, 120, "Шаг", "0.2-0.3"]
    	];
    	console.log(mass)
    });

    // Сверление
    $( ".calc-item[data-id='14']").click(function() {
    	var mass = [
    	['P', 200, 200, "0.05-0.1", "0.2-0.3"],
    	['M', 200, 250, "0.05-0.1", "0.2-0.3"],
    	['K', 200, 500, "0.05-0.1", "0.2-0.3"],
    	['N', 200, 500, "0.05-0.1", "0.2-0.3"],
    	['S', 200, 70, "0.05-0.1", "0.2-0.3"],
    	['H', 200, 120, "0.05-0.1", "0.2-0.3"]
    	];
    	console.log(mass)
    });

    // Метчик
    $( ".calc-item[data-id='15']").click(function() {
    	var mass = [
    	['P', 400, 200, "0.05-0.1", "0.2-0.3"],
    	['M', 150, 250, "0.05-0.1", "0.2-0.3"],
    	['K', 1200, 500, "0.05-0.1", "0.2-0.3"],
    	['N', 2000, 500, "0.05-0.1", "0.2-0.3"],
    	['S', 200, 70, "0.05-0.1", "0.2-0.3"],
    	['H', 250, 120, "0.05-0.1", "0.2-0.3"]
    	];
    	console.log(mass)
    });

    // Фреза
    $( ".calc-item[data-id='16']").click(function() {
    	var mass = [
    	[1, 2, 3],
    	[4, 5, 6],
    	[7, 8, 9]
    	];
    	console.log(mass)
    });

    // блок 2 --------------------

    // Сталь
    $( ".calc-item[data-id='21']").click(function() {
    	// var massMaterial = mass[1][1]
    	console.log(mass)
    });

    // Нержавейка
    $( ".calc-item[data-id='22']").click(function() {
    	// var massMaterial = mass[1][1]
    	console.log(mass)
    });

    // Чугун
    $( ".calc-item[data-id='23']").click(function() {
    	// var massMaterial = mass[1][1]
    	console.log(mass)
    });

    // Алюминий
    $( ".calc-item[data-id='24']").click(function() {
    	// var massMaterial = mass[1][1]
    	console.log(mass)
    });

    // Сталь
    $( ".calc-item[data-id='25']").click(function() {
    	// var massMaterial = mass[1][1]
    	console.log(mass)
    });

    // Жаропрочные сплавы
    $( ".calc-item[data-id='26']").click(function() {
    	// var massMaterial = mass[1][1]
    	console.log(mass)
    });
});