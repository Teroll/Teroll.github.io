// document.getElementById('raz').onclick = function() {
//   var a = this.attributes;
//   for (var i=0; i<a.length; i++) {
//     alert(a[i].name + " = " + a[i].value);
//   }
// }
jQuery(document).ready(function(){
	$(function() {
		$(".box").click(function(event) {
			alert(this.getAttribute("class"));
			$(this).addClass("open") ;
		})
	});
});