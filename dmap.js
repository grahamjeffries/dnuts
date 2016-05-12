
var map = L.map('dmap', {
    center: [45.213, -69.30176],
    zoom: 7
});

L.tileLayer('https://api.mapbox.com/styles/v1/gjeffries/cio4k0fg20059akkwif4ul9kb/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2plZmZyaWVzIiwiYSI6ImNpbzFnY2Q5ODFhaTd1Z2x5Nzh5cmV0YWUifQ.oOXh4iccp59ElAtUZVjeAw').addTo(map);

function onEachFeature(feature, layer) {
    var popupContent = "<div class=name>" + feature.properties.name + "</div>" +
        "<div class=address>" + feature.properties.street + "<br>" + feature.properties.town + "</div>" +
        "<div class=desc>" + feature.properties.desc + "</div>";

    layer.bindPopup(popupContent);

    layer.on('mouseover', function (e) {
        this.openPopup();
    });
    layer.on('mouseout', function (e) {
        this.closePopup();
    });

}

L.geoJson(dnutShops, {
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: L.icon({
        			iconUrl: feature.properties.icon,
        			iconSize: [30, 30],
        			iconAnchor: [16, 37],
        			popupAnchor: [0, -28]
        		})
            });
    }
}).addTo(map);
