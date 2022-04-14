var express = require('express')

var app = express()

app.use(express.static('static'))

app.listen(5000, function () {
    console.log("app.js Started!")
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/test_main.html")
})