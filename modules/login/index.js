var Login = function (app, express) {
    
    'use strict';
    
    this.displayName = 'Login';
    
    var setup;
    
    setup = function (app, express) {
        
        var path = require('path'),
            LoginConfig = require('./configs'),
            LoginRoutes = require('./routes'),
            loginConfig = new LoginConfig(app, express),
            loginRoutes = new LoginRoutes(app);
      
    };
    
    setup(app, express);
    
};

module.exports = Login;