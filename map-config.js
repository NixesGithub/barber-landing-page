// Configuración del mapa de Google Maps para Mateusz Barber
// Ubicación: Plaza de Toros de Valencia

const MAP_CONFIG = {
    // Coordenadas de la Plaza de Toros de Valencia
    center: {
        lat: 39.4699,
        lng: -0.3743
    },
    
    // Zoom del mapa
    zoom: 15,
    
    // Estilo personalizado del mapa (tema oscuro que coincide con el diseño)
    styles: [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "lightness": -80
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#263c3f"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6b9a76"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#38414e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#212a37"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9ca5b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1f2835"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#f3d19c"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2f3948"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#515c6d"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "lightness": -20
                }
            ]
        }
    ],
    
    // Marcador personalizado para la peluquería
    marker: {
        position: {
            lat: 39.4699,
            lng: -0.3743
        },
        title: "Mateusz Barber - Peluquería Roho",
        icon: {
            url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#d4af37"/>
                    <path d="M12 15h16v2H12zm0 4h16v2H12zm0 4h16v2H12z" fill="#1a1a1a"/>
                    <circle cx="20" cy="20" r="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 20)
        }
    },
    
    // Información del marcador
    infoWindow: {
        content: `
            <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 10px 0; color: #d4af37; font-family: 'Playfair Display', serif;">
                    Mateusz Barber
                </h3>
                <p style="margin: 0 0 5px 0; color: #333;">
                    <strong>Peluquería Roho</strong><br>
                    C. de Castelló 22<br>
                    Ruzafa, Valencia
                </p>
                <p style="margin: 5px 0 0 0; color: #666; font-size: 12px;">
                    Especialista en cortes masculinos
                </p>
            </div>
        `
    }
};

// Función para inicializar el mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: MAP_CONFIG.center,
        zoom: MAP_CONFIG.zoom,
        styles: MAP_CONFIG.styles,
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
    });
    
    // Crear marcador personalizado
    const marker = new google.maps.Marker({
        position: MAP_CONFIG.marker.position,
        map: map,
        title: MAP_CONFIG.marker.title,
        icon: MAP_CONFIG.marker.icon
    });
    
    // Crear ventana de información
    const infoWindow = new google.maps.InfoWindow({
        content: MAP_CONFIG.infoWindow.content
    });
    
    // Mostrar información al hacer clic en el marcador
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
    
    return map;
}

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MAP_CONFIG;
}
