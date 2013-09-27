/*
'User.js'
*/

/**
data                           = {
	firstName:'First Name',
	'User.js'
	lastName:'Last Name',
	username:'user@123',
	email:'email123@abc.com',
	password:'pswd@123',
	age:21
}
*/

function User(data){
  
	var UserSchema                = require('./schemas/UserSchema')
	, userSchema                  = new UserSchema()
	, UserModel                   = userSchema.mongoose.model('User', userSchema.schema);
	
	console.log('data data.password : '+data.password);
	
	UserModel.schema.path('email').validate(function (value) {
		var emailRegex               = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/i;
	  return emailRegex.test(value);
	}, 'Invalid email');
	
	UserModel.schema.pre('save', function (next) {
	    var self = this;
	    UserModel.find({email : self.email}, function (err, docs) {
	        if (!docs.length){
	            next()
	        }else{
	            console.log('user exists: ',self.email);
	        }
	    });
	}) ;
	
	this.encryptPassword(data.password, data.password);
	
	this.user                     = new UserModel(data);
	
	
	
	console.log('this.model.fields : '+this.user);
	console.log('this.model.password : '+this.user.password);
}

User.prototype.validate        = function (callBack){
	
	console.log(err.errors.email.type)
	console.log(err.errors.email.message)
	
}

User.prototype.encryptPassword = function (encryptPassword, password){
	
	var crypto                    = require('crypto')
	, shaSum                      = crypto.createHash('sha256');
	
	console.log('befor shaSum : '+password);
	
	shaSum.update(password);
	console.log('after shaSum : '+encryptPassword);
	
	encryptPassword               = shaSum.digest('hex')
	
}

User.prototype.save            = function (callBack){
	
	this.user.save(function (err) {
		
		if (err) {
			console.error(err); // we should handle this
		}
		callBack(err);		
	});
}

User.prototype.model           = this.user;
module.exports                 = User;
