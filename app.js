var express= require('express')
, app = express()

// configs
, Conf = require('./config/config')
, config = new Conf(app, express)

//modules
// login module
, Login = require('./modules/login')
, login = new Login(app, express);

// 
// // register module
// , Register = require('./modules/register')
// , register = new Register(app, express);


app.listen(1985);

console.log('app is listening to 1985');