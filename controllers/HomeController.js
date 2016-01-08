exports.indexAction = function(req, res){
	console.log('HomeController - indexAction');
	res.render('home/index', {title: 'index action of home controller'});
}

exports.procedureAction = function(req, res){
	console.log('HomeController - procedureAction');
	res.render('home/procedure', {title: 'Procedure Page'});
}