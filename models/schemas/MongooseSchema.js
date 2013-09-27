function MongooseSchema(){
	
	if(!(this instanceof MongooseSchema)) return new MongooseSchema();
	
	this.mongoose                       = require('mongoose');
	this.Schema                         = this.mongoose.Schema;
	MongooseConfig = require('../../config/mongooseConfig');
	mongoConfig = new MongooseConfig();
	this.url = mongoConfig.mongoUrl;
	
	this.mongoose.connect(this.url, function (err) {
	  // if we failed to connect, abort
	  if (err) throw err;

	  // we connected ok
	  example();
	});
	
	this.connection = this.mongoose.Connection;
	
}

MongooseSchema.prototype.getSchema   = function(properties){
	var schema                          = new this.Schema(properties);
	return schema;
};

MongooseSchema.prototype.constructor = MongooseSchema;
module.exports                       = MongooseSchema;
