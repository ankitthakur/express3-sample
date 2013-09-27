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
	    UserModel.find({email : self.email, password: self.password}, function (err, docs) {
	        if (!docs.length){
	            next()
	        }else{
	            console.log('user exists: ',self.email);
	        }
	    });
	}) ;
	
	data.password = this.encryptPassword(data.password);
	
	this.user                     = new UserModel(data);
	
	
	
	console.log('this.model.fields : '+this.user);
	console.log('this.model.password : '+this.user.password);
}

User.prototype.validate        = function (callBack){
	
	console.log(err.errors.email.type)
	console.log(err.errors.email.message)
	
}

User.prototype.encryptPassword = function (password){
	
	var crypto                    = require('crypto')
	, shasum                      = crypto.createHash('sha256');
	
	console.log('befor shaSum : '+password);
	
	shasum.update(password);
	
	password               = shasum.digest('hex');
	
	console.log('after shaSum : '+password);
	
	return password;
}

User.prototype.save            = function (callBack){
	
	this.user.save(function (err) {
		
		if (err) {
			console.error(err); // we should handle this
		}
		callBack(err);		
	});
}

User.prototype.isExist = function(email, password, callBack){
    
	password = this.encryptPassword(password);
	
	UserModel.find({email : email, password: password}, function (err, docs) {
        if (!docs.length){
            next()
        }else{
            console.log('user exists: ',self.email);
        }
    });
}

User.prototype.model           = this.user;
module.exports                 = User;
