var express = require('express'), 		
		http = require('http'),
    routes = require('./routes'); 

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000)
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'))
	//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/[]');
})

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});