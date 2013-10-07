var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    
    // configs
    Conf = require('./config'),
    config = new Conf(app, express, mongoose),
    
    // modules
    
    ViewConfig = require('./views'),
    viewConfig = new ViewConfig(app, express),
    
    // login module
    Login = require('./modules/login'),
    login = new Login(app, express),
    
    // register module
    Register = require('./modules/register'),
    register = new Register(app, express),
    
    // register module
    ForgotPassword = require('./modules/forgotPassword'),
    forgotPassword = new ForgotPassword(app, express);
    
app.listen(3001);
    
console.log('app is listening to 3001');