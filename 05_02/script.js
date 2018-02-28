var gMapAPIKey = 'AIzaSyB83WFuNR6gwzDl_JdXbceWeITa-avHcxI';

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('hplus-map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

