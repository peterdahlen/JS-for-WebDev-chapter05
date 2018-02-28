var gMapAPIKey = 'AIzaSyCxbuSSpadS-nSXOQw39ARTGjvqgnzDmO8';

var map;
function initMap() {
	var storeLocationVine = {lat: 34.1031131, lng: -118.326343};
		storeLocationDodgers = {lat: 34.0745409, lng: -118.2408881}
		centerPoint = {lat: 34.0937772394951, lng: -118.27888622568359};

	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : centerPoint,
		'zoom' : 11,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});
	
	var popupContentVine = 'H+ Sport Hollywood<br>';
	    popupContentVine += '1750 Vine St<br>';
		popupContentVine += 'Los Angeles, CA';
		
	var popupContentDodgers = 'H+ Sport Dodgers Stadium<br>';
	    popupContentDodgers += '1000 Vin Scully Ave<br>';
	    popupContentDodgers += 'Los Angeles, CA';
	
	var infowindowVine = new google.maps.InfoWindow({
		content: popupContentVine
	});

	var infowindowDodgers = new google.maps.InfoWindow({
		content: popupContentDodgers
	});
	
	var markerVine = new google.maps.Marker({
		'position': storeLocationVine,
		'map': map,
		'title': 'H+ Sport in Hollywood, Vine Street'
	});

	var markerDodgers = new google.maps.Marker({
		'position': storeLocationDodgers,
		'map': map,
		'title': 'H+ Sport in Dodger Stadium'
	});
	
	markerVine.addListener('click', function() {
		infowindowVine.open(map, markerVine);
	});

	markerDodgers.addListener('click', function() {
		infowindowDodgers.open(map, markerDodgers);
	});
}