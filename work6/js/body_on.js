// Скрывает карты через некоторое время
function timer(){
var obj=document.getElementById('timer_inp');
obj.innerHTML--;
    if (obj.innerHTML==0){
    	// Скрывает карты
    	// $(".box").addClass("imageRotateHorizontal");//анимация переворота
        $(".box").addClass("body");
        // Скрывает таймер
        $(".timer").addClass("hide");
        setTimeout(function(){},1000);
    } else {
        setTimeout(timer,1000);
    }
}
setTimeout(timer,1000);