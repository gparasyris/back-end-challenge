// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
// var morgan     = require('morgan');

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8008; // set our port
var mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/demo'); // connect to our database

// create router
var router = express.Router();
router.use(function(req, res, next) {
	console.log('router initialized.');
	next();
});

var userRoutes = require('./routes/user')
// register routes
app.use('/user', userRoutes);

// port attached
app.listen(port);
console.log('Node JS server listening to port ' + port);
