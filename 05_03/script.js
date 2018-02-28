var gMapAPIKey = 'AIzaSyCxbuSSpadS-nSXOQw39ARTGjvqgnzDmO8';

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('hplus-map'), {
		center: {lat: 34.1031252, lng: -118.3263873},
		zoom: 8
	});
}