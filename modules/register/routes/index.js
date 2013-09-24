var RegisterRoutes = function(app){
  
  this.displayName = 'RegisterRoutes';
  
  var routes;
  
  routes = function(app){
	
	console.log(__dirname);
	
	app.get('/register', function(req, res){
		res.render('register');
	});

	app.post('/register', function(req, res) {
		res.send(req.params);
	});
	
  };
  
  routes(app);
}

module.exports = RegisterRoutes;