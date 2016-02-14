// CommonJS module partner - exportar função.
exports.render = function(req, res) {
	
	if(req.session.lastVisit) {
		console.log(req.session);
		console.log(req.session.lastVisit);
	}

	req.session.lastVisit = new Date();
	req.session.user = "Kelve Aragão";

	res.render('index', {
		title: 'Hello World'
	});

	//res.send('Hello World');
}