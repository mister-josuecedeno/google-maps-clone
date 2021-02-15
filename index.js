// Mapbox Code
mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9zdWVjZWRlbm8iLCJhIjoiY2tsNzN6MDJjMXBjeDJ3bGNkNjF4MDBzZCJ9.m_wUUQjs4B-EDAHI_ZYR7Q';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enabaleHighAccuracy: true,
});

function successLocation(position) {
  // console.log(position);
  const { latitude, longitude } = position.coords;
  setupMap([longitude, latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, 'top-left');
}
