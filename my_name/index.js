var express = require('express')
var app = express()


app.get('/name', function (req, res) {
  res.send('Vasa Amadea')
})

app.get('/name/first', function (req, res) {
  res.send('Vasa')
})

app.get('/name/last', function (req, res) {
  res.send('Amadea')
})

app.listen(3000)
