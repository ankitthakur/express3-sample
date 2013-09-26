var express= require('express')
, app = express()

// configs
, Conf = require('./config/config')
, config = new Conf(app, express)

//modules

, ViewConfig = require('./views')
, viewConfig = new ViewConfig(app, express)


// login module
, Login = require('./modules/login')
, login = new Login(app, express)

// 
// // register module
, Register = require('./modules/register')
, register = new Register(app, express);

var User = require ('./models/User');
var userModel = new User({username:'username1', password:'password1', email:'thakur1'});

userModel.save(function(err) {
    console.log('err: ');
	console.log('err: '+err);
	console.log('err: ');
});

app.listen(3001);

console.log('app is listening to 3001');