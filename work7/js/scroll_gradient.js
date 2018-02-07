$('#target').scroll(function(){
        if ( $('#target').scrollTop() > 0 ) {
            $('.shadow').addClass('shadow1');
        } 
        else {
            $('.shadow').removeClass('shadow1');
        }
    })
