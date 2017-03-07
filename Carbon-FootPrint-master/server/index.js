var express = require('express')
var app = express()
var http = require('http')

var server = http.createServer(app).listen(3000, function() {
  console.log("Server listening on port 3000")
})

app.use('/', express.static(__dirname + '/../client/'))

app.get('/a', function (req, res) {
  res.send('Hello A!')
})