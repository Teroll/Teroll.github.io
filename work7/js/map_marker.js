            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(55.165337, -73.9400), // New York
                    	55.165337, 61.409760
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                    {
                    	"stylers": [
                    	{
                    		"hue": "#ff1a00"
                    	},
                    	{
                    		"invert_lightness": true
                    	},
                    	{
                    		"saturation": -100
                    	},
                    	{
                    		"lightness": 33
                    	},
                    	{
                    		"gamma": 0.5
                    	}
                    	]
                    },
                    {
                    	"featureType": "water",
                    	"elementType": "geometry",
                    	"stylers": [
                    	{
                    		"color": "#2D333C"
                    	}
                    	]
                    }
                    ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }