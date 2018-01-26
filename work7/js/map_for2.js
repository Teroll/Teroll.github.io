
function initMap() {
    var latlng = new google.maps.LatLng(55.165842,61.410163);
    var latlng2 = new google.maps.LatLng(55.165842,61.410163);

    var myOptions = {
        zoom: 16,
        center: latlng,
        // mapTypeId: google.maps.MapTypeId.ROADMAP
        styles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
            ]
        }
        ]
    };

    var myOptions2 =  {
        zoom: 16,
        center: latlng2,
        // mapTypeId: google.maps.MapTypeId.SATELLITE
        styles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
            ]
        }
        ]
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    
    var map2 = new google.maps.Map(document.getElementById("map_mobile"), myOptions2);



   var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 55.165337, lng: 61.409760},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'I am - Брендинговое агентство',

        // Укажем свою иконку для маркера
        icon: 'https://teroll.github.io/work7/img/map_logo3.png',
        
        // https://teroll.github.io/work7/img
    });

    var marker2 = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 55.165337, lng: 61.409760},
        
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map2,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'I am - Брендинговое агентство',

        // Укажем свою иконку для маркера
        icon: 'https://teroll.github.io/work7/img/map_logo3.png',
        // icon: 'http://rightblog.ru/wp-content/uploads/2016/07/theatre_icon.png'
    });
}

// google.maps.event.addDomListener(window, 'load', initialize);
