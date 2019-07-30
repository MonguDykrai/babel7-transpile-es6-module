var express = require('express')
var history = require('connect-history-api-fallback')
var app = express()

app.use(history())
app.use(express.static('dist'))

const port = 8888

app.listen(port, function() {
  console.log(`http://localhost:${port}`)
})
