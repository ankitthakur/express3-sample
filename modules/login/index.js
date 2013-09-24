var Login = function(app, express){
  
  this.displayName = 'Login';
  
  var setup;
  
  setup = function(app, express){
	  
	  var path = require('path')
	  
	  , LoginConfig = require('./configs')
	  , loginConfig = new LoginConfig(app)
	  
	  , LoginRoutes = require('./routes')
	  , loginRoutes = new LoginRoutes(app);
	  
  };
  
  
  setup(app);
}

module.exports = Login;