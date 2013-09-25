var RegisterRoutes = function(app){
  
	this.displayName = 'RegisterRoutes';
  
	var routes,
	
	RegisterViewModel = {
		Register:'Register',
		Username:'Username',
		username:'Enter Username',
		Email:'Email',
		email:'Enter Email',
		Password:'Password',
		password:'Enter Password',
		ConfirmPassword:'Confirm Password',
		confirmpassword:'ReEnter Password',
		submit:'Submit',
		cancel:'Cancel'
	};
  
	routes = function(app){
		
		app.get('/register', function(req, res){
			res.render('html/register',RegisterViewModel);
		});
		

		app.post('/register', function(req, res) {
			console.log(req.body);
			res.send(req.params);
		});
	
	};
  
	routes(app);
}

module.exports = RegisterRoutes;