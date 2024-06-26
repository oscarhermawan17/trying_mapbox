const MAPBOX_ACCESS_TOKEN = "token"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  })
  map.addControl(directionControls, "top-left")
}

function successLocation(positions) {
  setupMap([positions.coords.longitude, positions.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48]) // When Error, Map will be pointing on Manchester
}
