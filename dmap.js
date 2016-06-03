
var southWest = L.latLng(38, -80),
    northEast = L.latLng(53, -55),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('dmap', {
  maxBounds: bounds,
  center: [45.213, -69.30176],
  zoom: 7,
  minZoom: 6,
  maxZoom: 13,
  attributionControl: false
});

var mb_url = 'https://api.mapbox.com/styles/v1/gjeffries/cioyfpaf70007b3ngg0e7v9a1/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2plZmZyaWVzIiwiYSI6ImNpbzFnY2Q5ODFhaTd1Z2x5Nzh5cmV0YWUifQ.oOXh4iccp59ElAtUZVjeAw'

L.tileLayer(mb_url, {noWrap: true}).addTo(map);

function onEachFeature(feature, layer) {
  var popupContent = "<div class=icon><img src=" + feature.properties.icon + ' align="middle"></div>' +
    "<div class=name>" + feature.properties.name + "</div>" +
    "<div class=address>" + feature.properties.street + "<br>" + feature.properties.town + "</div>" +
    "<div class=desc>" + feature.properties.desc + "</div>";

  var popupOptions = {
    'closeButton': false
  };

  layer.bindPopup(popupContent, popupOptions);

  layer.on('mouseover', function (e) {
    this.openPopup();
  });
  layer.on('mouseout', function (e) {
    this.closePopup();
  });
};

L.geoJson(dnutShops, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: L.icon({
      iconUrl: feature.properties.icon,
      iconSize: [50, 50],
      iconAnchor: [16, 37],
      popupAnchor: [0, -28]
    })
  });
  }
}).addTo(map);