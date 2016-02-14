var config = require('./config'),
	express	= require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverrride = require('method-override'),
	session = require('express-session');

module.exports = function() {
	var app = express();

	// app.use() - Cria um Express Middleware.

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === "production") {
		app.use(compress())
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverrride());

	// configure the session
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	// cofigure the Express application views folder
	app.set('views', './app/views');
	// configure template engine
	app.set('view engine', 'ejs');

	require('../app/routes/index.server.routes.js')(app);

	// Serving statics files
	app.use(express.static('./public'));

	return app;
}