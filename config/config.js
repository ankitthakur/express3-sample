var Conf = function(app, express){
  
  this.displayName = 'Conf';
  
  var setup;
  
  setup = function(app, express){
	
	/* express config */
    var ExpressConfig, expressConfig;
    ExpressConfig = require('./expressConfig');
    expressConfig = new ExpressConfig(app, express);
	
    /* mongoose config */
    var  MongooseConfig, mongooseConfig;
	MongooseConfig = require('./mongooseConfig');
    mongooseConfig = new MongooseConfig();
	
    /* error config */
	var ErrorsConfig, errorConfig;
    ErrorsConfig = require('./errorConfig');
    return errorConfig = new ExpressConfig(app, express);
	
  };
  
  setup(app, express);
  
}

module.exports = Conf;