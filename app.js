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
var userModel = new User({username:'username', password:'password', email:'thakur'});

userModel.save(function(data, err){
	console.log('err: '+err);
})

app.listen(3001);

console.log('app is listening to 3001');