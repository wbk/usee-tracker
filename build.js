const fs = require('fs')
const path = require('path')

const IN = path.resolve(__dirname, 'dist/tracker.js')
const OUT = path.resolve(__dirname, 'dist/snippet.html')

const snippet = `<div id="map"></div>
<script>
  ${fs.readFileSync(IN)}
</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC5nrnwZenEbvnakw4HYs1raZBFQky3U7w&callback=initMap">
</script>`

fs.writeFileSync(OUT, snippet)

console.log(`${OUT} written.`)