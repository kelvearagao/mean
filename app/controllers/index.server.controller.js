// CommonJS module partner - exportar função.
exports.render = function(req, res) {
	/*
	if(req.session.lastVisit) {
		console.log(req.session);
		console.log(req.session.lastVisit);
	}

	req.session.lastVisit = new Date();
	req.session.user = "Kelve Aragão";
	*/

	req.user = {fullName:"Francisco Kelve Souza de Aragão"};

	res.render('index', {
		title: 'Hello World',
		user: JSON.stringify(req.user)
	});

	//res.send('Hello World');
}