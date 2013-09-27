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
			
			/*
var User = require ('./models/User');
var userModel = new User({username:'username1', password:'password1', email:'thakur1@gmail.com'});

userModel.save(function(err) {
    console.log('err: ');
	console.log('err: '+err);
	console.log('err: ');
});
			*/
			res.send(req.params);
		});
	
	};
  
	routes(app);
}

module.exports = RegisterRoutes;