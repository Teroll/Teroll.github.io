        jQuery(document).ready(function(){

        	$(function() {
        		$("#show_more").click(function() {
        			$("#page2").toggleClass("show_page");
        			$("#show_more").toggleClass("hide_page");
        			$("#Hidden_block").toggleClass("show_page");
        		})
        	});
        });