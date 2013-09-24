var Register = function(app){
  
  this.displayName = 'Register';
  
  var setup;
  
  setup = function(app){
    
	console.log(__dirname);
	
	var path = require('path')
	
	, RegisterConfig = require('./configs')
    
	, registerConfig = new RegisterConfig(app)
	
    , RegisterRoutes = require('./routes')
    
	, registerRoutes = new RegisterRoutes(app);
	
  };
  
  
  setup(app);
}

module.exports = Register;