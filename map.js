// var $$ = DOM7;

function initialize() {
        var mapOptions = {
          zoom: 12,
          center: new google.maps.LatLng(33.7550, -84.3900)
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'),
                                      mapOptions);

        setMarkers(map, trees);
      }

      /**
       * Data for the markers consisting of a name, a LatLng and a zIndex for
       * the order in which these markers should display on top of each
       * other.
       */
      var trees = [
        ['Tree 1', 33.7580, -84.3700],
        ['Tree 2', 33.750, -84.3910],
        ['Tree 3', 33.7630, -84.4000],
        ['Tree 4', 33.7340, -84.3820],
        ['Tree 5', 33.7250, -84.3610]
      ];

      function setMarkers(map, locations) {

        var image = 'images/flagSmall.png';

        var contentString;

        for (var i = 0; i < locations.length; i++) {
          var tree = locations[i];
          var myLatLng = new google.maps.LatLng(tree[1], tree[2]);
          
          var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              icon: image,
              animation: google.maps.Animation.DROP
          });

          contentString = "Hi";

          google.maps.event.addListener(marker, 'click', getInfoCallback(map, contentString));

        }
      }

      function getInfoCallback(map, content) {
          var infowindow = new google.maps.InfoWindow({content: content});
          return function() {
            infowindow.setContent(content); 
            infowindow.open(map, this);
        };
      }