jQuery(document).ready(function(){

	$(function() {
		$("#show_more").click(function() {
			$("#page2").toggleClass("show_page");
			// $("#show_more").toggleClass("hide_page");
			$("#Hidden_block").toggleClass("show_page");
			if (localStorage.getItem('#page2') == 'show_page') {
				localStorage.removeItem("#page2", "show_page");
			} else {
				localStorage.setItem("#page2", "show_page");
			}
		})
	});
});