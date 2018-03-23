var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./mongodb/db');
var config = require('./config');
var routers = require('./routes/index');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || config.port;

routers(app);

var router = express.Router();
// // middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});
//
// router.get('/', function(req, res) {
//   res.json({ message: 'Welcome to our apis!' });
// })
// router.get('/test', function(req, res) {
//   res.json({ message: 'Welcome to test api!' });
// })

app.listen(port);
console.log('post ' + port + ' is openning.');
