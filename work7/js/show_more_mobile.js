jQuery(document).ready(function(){

	$(function() {
		$("#show_more_mobile").click(function() {
			$(".page2_mobile").toggleClass("show_page");
			$("#show_more_mobile").toggleClass("hide_page");
			// $("#show_more_mobile_2").toggleClass("show_page");
			if (localStorage.getItem('.page2_mobile') == 'show_page') {
				localStorage.removeItem(".page2_mobile", "show_page");
			} else {
				localStorage.setItem(".page2_mobile", "show_page");
			}
		})
	});
});
