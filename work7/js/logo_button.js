        jQuery(document).ready(function(){

        	$(function() {
        		$("#logo_button").click(function() {
        			$("#navbar").toggleClass("logo_mobile_compact");
        			$("#logo_button").toggleClass("logo_mobile_open");
        		})
        	});
        });