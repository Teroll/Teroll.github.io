// 4. Пишем скрипт который создаст и отобразит карту Google Maps на странице.

// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 55.165842, lng: 61.410163},

        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 16,

        // Добавляем свои стили для отображения карты
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
    });

    // Создаем маркер на карте
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

    // Создаем наполнение для информационного окна
    // var contentString = '<div id="content">'+
    //       '<div id="siteNotice">'+
    //       '</div>'+
    //       '<h1 id="firstHeading" class="firstHeading">I am - Брендинговое агентство</h1>'+
    //       '<div id="bodyContent">'+
    //       '<p>Госуда́рственный академи́ческий Большо́й теа́тр Росси́и, или просто Большой театр — один из крупнейших' +
    //       'в России и один из самых значительных в мире театров оперы и балета.</p>'+
    //       '<p><b>Веб-сайт:</b> <a href="http://www.bolshoi.ru/" target="_blank">bolshoi.ru</a>'+
    //       '</p>'+
    //       '</div>'+
    //       '</div>';

    // Создаем информационное окно
    // var infowindow = new google.maps.InfoWindow({
    //    content: contentString,
    //    maxWidth: 400
    // });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    // marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    // });

}