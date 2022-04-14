require('dotenv').config();
require('./database');

var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(express.static('static'));

app.listen(process.env.SERVER_PORT, function () {
    console.log("app.js Started!");
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/test_main.html");
});

app.get((req, res) => {
    res.status(404).send('Not Founds');
});