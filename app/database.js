//require('dotenv').config();

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
});

var dbConn = mongoose.connection;

dbConn.on('error', console.error.bind(console, 'DB Connection Error: '));
dbConn.once('open', function () {
    console.log("DB Connected!");
});