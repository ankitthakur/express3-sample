var RegisterRoutes = function (app) {
    
    'use strict';
    
    this.displayName = 'RegisterRoutes';
    
    var routes,
        RegisterViewModel = {
            Register: 'Register',
            Username: 'Username',
            username: 'Enter Username',
            Email: 'Email',
            email: 'Enter Email',
            Password: 'Password',
            password: 'Enter Password',
            ConfirmPassword: 'Confirm Password',
            confirmpassword: 'ReEnter Password',
            submit: 'Submit',
            cancel: 'Cancel'
        };
    
    routes = function (app) {
        
        app.get('/register', function (req, res) {
            res.render('html/register', RegisterViewModel);
        });
        
    
        app.post('/register', function (req, res) {
            
            var User = require('../../../models/User'),
                userModel = new User({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email
                });
    
            userModel.save(function (err) {
                
                if (err !== null) {
                    RegisterViewModel.err = err.message;
                    res.render('html/register', RegisterViewModel);
                } else {
                    res.send(req.params);
                }
            });
        });
    
    };
    
    routes(app);
};

module.exports = RegisterRoutes;