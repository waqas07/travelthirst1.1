L.Mapzen.apiKey = 'mapzen-tz62jVK';

var map = L.Mapzen.map('map', {
  tangramOptions: {
    scene: L.Mapzen.BasemapStyles.Zinc
  }

});

var locator = L.Mapzen.locator();
locator.addTo(map);

var control = L.Routing.control({
  waypoints: [
    L.latLng(34.188708, 73.2344722),             
    L.latLng(34.2040076, 73.2387225)
  ],
  // You can get your own Mapzen turn-by-turn & search API key from the Mapzen developer portal (https://mapzen.com/developers/)
  geocoder: L.Control.Geocoder.mapzen('mapzen-tz62jVK'),
  fitSelectedRoutes: true,
  reverseWaypoints: true,
  router: L.Routing.mapzen('valhalla-PVA4Y8g', {costing: 'auto'}),
  formatter: new L.Routing.mapzenFormatter(),
  summaryTemplate:'<div class="route-info {costing}">{distance}, {time}</div>'
}).addTo(map);



L.Routing.errorControl(control).addTo(map);