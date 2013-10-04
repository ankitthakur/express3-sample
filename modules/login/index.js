var Login = function (app, express) {
    
    'use strict';
    
    this.displayName = 'Login';
    
    var setup;
    
    setup = function (app, express) {
        
        var path = require('path'),
            LoginConfig = require('./configs'),
            LoginRoutes = require('./routes');
        
        this.loginConfig = new LoginConfig(app, express);
        this.loginRoutes = new LoginRoutes(app);
      
    };
    
    setup(app, express);
    
};

module.exports = Login;