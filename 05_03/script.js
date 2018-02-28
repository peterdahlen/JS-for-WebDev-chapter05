var gMapAPIKey = 'AIzaSyCxbuSSpadS-nSXOQw39ARTGjvqgnzDmO8';

var map;
function initMap() {
	var storeLocation = {lat: 34.1031252, lng: -118.3263873};
	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : storeLocation,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false,
	});

	var marker = new google.maps.Marker({
		'position' : storeLocation,
		'map' : map,
		'title' : 'H+ Sport in Los Angeles'
	  });
}