
var MongooseSchema               = require('./MongooseSchema');

var UserSchema                   = function (){
	
	if(!(this instanceof UserSchema)) return new UserSchema();
	
	var crypto                      = require('crypto')

	, mandatoryStringType           = {type:String, required:true}
	, indexedStringType             = {type:String, index:true, required:true}
	, indexedUniqueStringType       = {type:String, required:true, index: { unique: true, sparse: true }}
	, optionalStringType            = {type:String, required:false}
	, mandatoryNumberType           = {type:Number, required:true}
	, indexedNumberType             = {type:Number, index:true, required:true}
	, optionalNumberType            = {type:Number, required:false}
	
	// schema
	, UserSchemaProperties          = {
		firstName: optionalStringType
		, lastName: optionalStringType
		, username: indexedStringType
		, email: indexedUniqueStringType
		, password: mandatoryStringType
		, age: optionalNumberType
	};
	
	this.schema                     = this.getSchema(UserSchemaProperties);
	
	console.log('this.schema: '+ this.schema);
	
}

UserSchema.prototype             = new MongooseSchema();
UserSchema.prototype.constructor = UserSchema;
module.exports                   = UserSchema;
