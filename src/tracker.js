import { find } from 'lodash'
import places from './places'
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds'
import isBefore from 'date-fns/is_before'

const interpolate = (a, b, percent) => a + percent * (b - a)

const PLACES = places.map(place => ({
  ...place,
  when: new Date(Date.UTC.apply(Date.UTC, place.when))
}))

// All of the date were parsed as UTC; convert to PHX time for ease of use
PLACES.forEach(place => place.when.setHours(place.when.getHours() + 7))

window.initMap = () => {
  const now = new Date()

  let nextLocationIndex = PLACES.findIndex(p => !isBefore(p.when, now))
  if (nextLocationIndex === -1) {
    nextLocationIndex = PLACES.length - 1
  }

  let prevLocationIndex = nextLocationIndex - 1;
  if (prevLocationIndex === -1) {
    prevLocationIndex = 0
  }
  if (nextLocationIndex === (PLACES.length - 1)) {
    prevLocationIndex = nextLocationIndex
  }

  const prevLocation = PLACES[prevLocationIndex]
  const nextLocation = PLACES[nextLocationIndex]

  const diff = differenceInMilliseconds(prevLocation.when, nextLocation.when)
  const diffPercent = diff !== 0
    ? differenceInMilliseconds(prevLocation.when, now) / diff
    : 0

  const currentLocation = {
    lat: interpolate(prevLocation.lat, nextLocation.lat, diffPercent),
    lng: interpolate(prevLocation.lng, nextLocation.lng, diffPercent),
  }

  const pastLocations = PLACES.filter(p => isBefore(p.when, now))
  const futureLocations = PLACES.filter(p => !isBefore(p.when, now))

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: currentLocation,
    mapTypeId: 'terrain'
  })

  const pastLocationLine = new google.maps.Polyline({
    path: pastLocations.map(({ lat, lng }) => ({ lat, lng })).concat([currentLocation]),
    geodesic: true,
    strokeColor: '#00FF00',
    strokeOpacity: 1.0,
    strokeWeight: 4
  })
  pastLocationLine.setMap(map)

  const futureLocationLine = new google.maps.Polyline({
    path: [currentLocation].concat(futureLocations.map(({ lat, lng }) => ({ lat, lng }))),
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 4
  })
  futureLocationLine.setMap(map)


  new google.maps.Marker({
    title: "Follow Santa as he recruits Phoenix politicians",
    map,
    icon: {
      url: 'https://s3.amazonaws.com/walt/santa.png?2',
      origin: new google.maps.Point(0, 0),
      size: new google.maps.Size(40, 39),
      anchor: new google.maps.Point(18, 17)
    },
    position: { lat: currentLocation.lat, lng: currentLocation.lng },
    zIndex: 1
  })

  // Create Markers
  let openPopup = null

  PLACES.forEach(({ lat, lng, title, content }, i) => {
    setTimeout(() => {
      const popup = new google.maps.InfoWindow({
        content
      })

      const marker = new google.maps.Marker({
        title,
        map,
        icon: 'https://s3.amazonaws.com/walt/marker.png',
        position: { lat, lng },
        animation: google.maps.Animation.DROP,
        zIndex: 2
      })

      marker.addListener('click', function () {
        openPopup && openPopup.close()
        popup.open(map, marker)
        openPopup = popup
      });
    }, 750 + i * 100)
  })
}

