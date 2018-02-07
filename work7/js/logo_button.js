        jQuery(document).ready(function(){

        	$(function() {
        		$("#logo_button").click(function() {
        			$("#navbar").toggleClass("logo_mobile_compact");
        			$("#logo_button").toggleClass("logo_mobile_open");
        			$("#logo").toggleClass("show");
        		})
        	});
        	// затемнение текста
        	$('#target').scroll(function(){
        		if ( $('#target').scrollTop() > 0 ) {
        			$('.shadow').addClass('shadow1');
        		} 
        		else {
        			$('.shadow').removeClass('shadow1');
        		}
        	})

        });