$().ready(function() {

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
});