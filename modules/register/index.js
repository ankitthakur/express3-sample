var Register = function (app, express) {
    
    'use strict';
    
    this.displayName = 'Register';
    
    var setup;
    
    setup = function (app, express) {
        
        var path = require('path'),
            RegisterConfig = require('./configs'),
            RegisterRoutes = require('./routes'),
            loginConfig = new RegisterConfig(app, express),
            loginRoutes = new RegisterRoutes(app);
    };
    
    setup(app, express);
};

module.exports = Register;