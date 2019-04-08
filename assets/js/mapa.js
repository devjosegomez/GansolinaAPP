var tablaInfo = document.querySelector("#carta");
tablaInfo.style.marginLeft = "-500px";

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpZ29iZXJ0byIsImEiOiJjaXZhMzdvczYwMHBmMnRwM3FiMm9zdm93In0.IZ2gxgJ4vqWLx_bdMz7BTA';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-103.347013, 20.684649],
    zoom: 12

});


let element = document.createElement('div');
element.className = "marker";

element.addEventListener("click", function () {
    if (tablaInfo.style.marginLeft == "-500px") {
        tablaInfo.style.marginLeft = "0px"
    } else {
        tablaInfo.style.marginLeft = "-500px"
    }
});

let marker = new mapboxgl.Marker(element).setLngLat({
    lng: -103.347013,
    lat: 20.684649
})
    .addTo(map);


map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

map.addControl(new mapboxgl.NavigationControl());
    

