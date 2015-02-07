// var $$ = DOM7;
var fb = new Firebase("https://treesatlproject.firebaseio.com/");

var longitude;
var latitude;

$('#makeChangesButton').click(function (e) {
  date = getDate().toDateString();

  console.log(date);
  // if(e.keyCode == 13) {
    var status = $('#tStatus').val();
    var comments = $('#comments').val();
    fb.push({
      longitude: longitude,
      latitude: latitude,
      date: date,
      status: status,
      comments: comments
    });
    $('#tStatus').val('');
    $('#comments').val('');
  return false;
});

function getDate() {
  return new Date();
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  } else {
    console.log("geolocation is not supported by this browser")
    window.load = "Error.html"
  }
}

function setPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
}



function initialize() {
        var mapOptions = {
          zoom: 12,
          center: new google.maps.LatLng(33.7550, -84.3900)
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'),
                                      mapOptions);
        setMarkers(map, trees);
      }

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