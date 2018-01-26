        jQuery(document).ready(function(){

        	$(function() {
        		$("#logo_cross").click(function() {
        			$('#navbar').removeClass('logo_mobile_compact');
        			$('#logo_cross').removeClass('logo_mobile_compact');
        			$('#logo_button').removeClass('logo_mobile_open');
        		})
        	});
        });