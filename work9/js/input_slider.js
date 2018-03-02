$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 1980,
        max: 2018,
        values: [ 1990, 2018 ],
        slide: function( event, ui ) {
            $( "#amount" ).val(+ ui.values[ 0 ] + " year - " + ui.values[ 1 ] + " year" );
        }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " year - " +
       + $( "#slider-range" ).slider( "values", 1 ) + " year" );
} );