// var $$ = DOM7;
var fb = new Firebase("https://treesatlproject.firebaseio.com/");

function initialize() {
        var mapOptions = {
          zoom: 12,
          center: new google.maps.LatLng(33.7550, -84.3900)
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'),
                                      mapOptions);

              fb.push({
                cLatitude: "33.5230",
                cLongitude: "-84.3700",
                treeStatus: "Maintanence needed",
                comments: "Needs watering",
                dates: {
                  mulchDate: "01/01/01",
                  pruneDate: "03/12/07",
                  fertilizedDate: "12/14/12",
                  insectideDate: "09/12/13"
                }
             });

              fb.push({
                cLatitude: "33.5190",
                cLongitude: "-84.3700",
                treeStatus: "Good",
                comments: "Needs mulch",
                dates: {
                  mulchDate: "01/01/10",
                  pruneDate: "03/12/23",
                  fertilizedDate: "12/14/90",
                  insectideDate: "09/12/89"
                }
             });

        setMarkers(map, trees);
      }

      /**
       * Data for the markers consisting of a name, a LatLng and a zIndex for
       * the order in which these markers should display on top of each
       * other.
       */

      var trees = [
        ['Tree 1', 33.7580, -84.3700, "description1"],
        ['Tree 2', 33.750, -84.3910, "description2"],
        ['Tree 3', 33.7630, -84.4000, "description3"],
        ['Tree 4', 33.7340, -84.3820, "description4"],
        ['Tree 5', 33.7250, -84.3610, "description5"]
      ];

      function setMarkers(map, locations) {

        var image = 'images/flagSmall.png';

        var contentString;

        for (var i = 0; i < locations.length; i++) {
          var temp = locations[i];
          var x;
          fb.child("status").on("value", function(snapshot) {
            x = snapshot.val();
          });
          temp[3] = x;
        }

        for (var i = 0; i < locations.length; i++) {
          var tree = locations[i];
          var myLatLng = new google.maps.LatLng(tree[1], tree[2]);
          
          var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              icon: image,
              animation: google.maps.Animation.DROP
          });

          contentString = tree[3];

          google.maps.event.addListener(marker, 'click', function() {
            window.location = "profile.html";
          });

        }
      }

      function getInfoCallback(map, content) {
          var infowindow = new google.maps.InfoWindow({content: content});
          return function() {
            infowindow.setContent(content);
            infowindow.open(map, this);
        };
      }