window.onload = function() {
  L.mapbox.accessToken = 'pk.eyJ1IjoiYWpvaG5zb24wNTIiLCJhIjoiY2lqMjl3aGZqMDAwNnVia3BvbzZndTVxcSJ9.lgDF359V9thO7NOh3x_GEQ';
  var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([38.906, -77.012], 12);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'ajohnson052.oo8808h2',
    accessToken: 'pk.eyJ1IjoiYWpvaG5zb24wNTIiLCJhIjoiY2lqMjl3aGZqMDAwNnVia3BvbzZndTVxcSJ9.lgDF359V9thO7NOh3x_GEQ'
  }).addTo(map);

  var colorRisks = function() {
    for (var i = 0; i < data.features.length; i++) {
      try {
        var streetSeg = data.features[i].properties.STREETSEGI;
        var riskVal = risk[streetSeg].RISK_INDEX;
        var stColor = '';

        if (riskVal == 1) {
          stColor = 'green';
        } else if (riskVal == 2) {
          stColor = 'orange';
        } else if (riskVal == 3) {
          stColor = 'red';
        } else {
          stColor = 'grey';
        };

        var features = L.geoJson(data.features[i], {
          style: function(feature) {
            return {
              color: stColor
            };
          }
        }).addTo(map);
      } catch (e) {
        // console.log('caught!')
      };
    };
  };
  colorRisks();
};
