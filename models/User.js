/*
'User.js'
*/

/**
data                    = {
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
  
	var UserSchema         = require('./UserSchema')
	, userSchema           = new UserSchema()
	, UserModel            = userSchema.mongoose.model('User', userSchema.schema);
	
	UserModel.schema.path('email').validate(function (value) {
		var emailRegex        = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/i;
	  return emailRegex.test(value);
	}, 'Invalid email');
	
	this.user              = new UserModel(data);
	
	
	
	console.log('this.model.fields : '+this.user);
	console.log('this.model.password : '+this.user.password);
}

User.prototype.validate = function (callBack){
	
	console.log(err.errors.email.type)
	console.log(err.errors.email.message)
	
}

User.prototype.save     = function (callBack){
	
	console.log('start saving');
	console.log('callBack '+callBack);
	console.log('schema '+this.user.schema);
	this.user.save(function (err) {
		
		console.log(err.errors.email.type);
		console.log(err.errors.email.message);
		;
		console.log('callBack');
		if (err) {
			console.error(err); // we should handle this
		}
		callBack(err);		
	});
}

User.prototype.model    = this.user;

module.exports          = User;
