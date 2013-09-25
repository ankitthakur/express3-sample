var Register = function(app, express){
  
  this.displayName = 'Register';
  
  var setup;
  
  setup = function(app, express){
	  
	  var path = require('path')
	  
	  , RegisterConfig = require('./configs')
	  , loginConfig = new RegisterConfig(app, express)
	  
	  , RegisterRoutes = require('./routes')
	  , loginRoutes = new RegisterRoutes(app);
	  
  };
  
  
  setup(app, express);
}

module.exports = Register;