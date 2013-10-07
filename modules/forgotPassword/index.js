var ForgotPassword = function (app, express) {
    
    'use strict';
    
    this.displayName = 'Forgot';
    
    var setup;
    
    setup = function (app, express) {
        
        var path = require('path'),
            ForgotConfig = require('./configs'),
            ForgotRoutes = require('./routes'),
            forgotConfig = new ForgotConfig(app, express),
            forgotRoutes = new ForgotRoutes(app);
    };
    
    setup(app, express);
};

module.exports = ForgotPassword;