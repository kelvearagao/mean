// CommonJS module partner - exportar módulo.
module.exports = function(app) {
	var index = require('../controllers/index.server.controller');

	// app.VERB - define uma ou mais middleware functions para determinata requisição HTTTP
	// VERB pode ser get, post etc.

	app.get('/', index.render);
}