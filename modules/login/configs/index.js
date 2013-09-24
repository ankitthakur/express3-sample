var LoginConfig = function(app){
  
	this.displayName = 'LoginConfig';
  
	var routes;
  
	setup = function(app, viewDir){
  	  
		var cons	= require('consolidate')
		, swig		= require('swig')
		, path		= require('path')
		, VIEWS_DIR	= path.join(__dirname+'../../views');
		
		console.log(VIEWS_DIR);
		app.configure(function(){
			app.engine('html', cons.swig);
  	  
			app.set('view engine', 'html');
			app.set('views', VIEWS_DIR);
			/* 
			Swig will cache templates for you, but you can disable
			that and use Express's caching instead, if you like:
			*/
			app.set('view cache', false);
		});
	}
	
  
	setup(app);
}

module.exports = LoginConfig;