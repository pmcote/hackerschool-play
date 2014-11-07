// Packages
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// Mongoose instance and connection to our mongolab database
// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://hfid:team42@proximus.modulusmongo.net:27017/ape5Gywe');

// Models, where we pull in the models for mongoDB data
var Test = require('./models/test');

// bodyParser, whoot
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', __dirname + '/public');
app.set('view engine', 'jade');

var port = process.env.PORT || 3000; // set our port

// Routing
var router = express.Router(); // get an instance of the express Router

// Test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.render('index');	
});

app.use('/', router);

// Server
app.listen(port);
console.log('Server listening on', port);

// // API Routes, if we end up needing them
// router.route('/tests')
// 	// create a test at POST https://localhost:300/api/test
// 	.post(function (req, res){

// 		var test = new Test(); // create a new instance of test
// 		test.name = req.body.name; // what is this test's name in the request?

// 		test.save(function (err) { // yey 4 err hndlng doh
// 			if (err) res.send(err);
// 			res.json({message: 'Test created'});
// 		});
// 	})

// 	.get(function (req, res) {
// 		Test.find(function (err, tests) {
// 			if (err) res.send(err);
// 			res.json(tests)
// 		})
// 	});

// router.route('/bears/:bear_id')

// 	// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
// 	.get(function(req, res) {
// 		Bear.findById(req.params.bear_id, function(err, bear) {
// 			if (err)
// 				res.send(err);
// 			res.json(bear);
// 		});
// 	})

// 	.put(function(req, res) {

// 		// use our bear model to find the bear we want
// 		Bear.findById(req.params.bear_id, function(err, bear) {

// 			if (err)
// 				res.send(err);

// 			bear.name = req.body.name; 	// update the bears info

// 			// save the bear
// 			bear.save(function(err) {
// 				if (err)
// 					res.send(err);

// 				res.json({ message: 'Bear updated!' });
// 			});

// 		});
// 	})

// 	.delete(function(req, res) {
// 		Bear.remove({
// 			_id: req.params.bear_id
// 		}, function(err, bear) {
// 			if (err)
// 				res.send(err);

// 			res.json({ message: 'Successfully deleted' });
// 		});
// 	});
