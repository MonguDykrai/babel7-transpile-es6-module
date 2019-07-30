const express = require("express")
const history = require("connect-history-api-fallback")
const app = express()

app.use(history())
app.use(express.static('dist'))

const port = 8888

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})