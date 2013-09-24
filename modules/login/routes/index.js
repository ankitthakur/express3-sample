var LoginRoutes = function(app){
  
	this.displayName = 'LoginRoutes';
  
	var routes,
	
	LoginViewModel = {
		Login:'Login',
		Email:'Email',
		email:'Enter Email',
		Password:'Password',
		password:'Enter Password',
		submit:'Submit',
		cancel:'Cancel'
	};
  
	routes = function(app){
		
		console.log(__dirname);
	  
		app.get('/login', function(req, res){
			
			res.render('login',LoginViewModel);
		});

		app.post('/login', function(req, res) {
			console.log(req.body);
			res.send(req.params);
		});
	
	};
  
	routes(app);
}

module.exports = LoginRoutes;