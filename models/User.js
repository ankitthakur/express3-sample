/*
'User.js'
*/

/**
data = {
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
  
	var UserSchema = require('./UserSchema')
	, userSchema = new UserSchema()
	, UserModel = userSchema.mongoose.model('User', userSchema.schema);
	
	this.model = new UserModel(data);
	
	console.log('this.model.fields : '+this.model);
	console.log('this.model.password : '+this.model.password);
}

User.prototype.validate = function (err, callback){
	
	if (!this.validator(this.model.password)) {
		next(new Error('Invalid password'));
	}
}

User.prototype.save     = function (user, callBack){
	
	this.model.save             = function (err) {
		
		if (err) 
			console.error(err); // we should handle this
		
		callBack(this.model, err);
		
	}
}

module.exports               = User;
