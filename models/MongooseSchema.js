function MongooseSchema(){
	
	if(!(this instanceof MongooseSchema)) return new MongooseSchema();
	
	this.mongoose                       = require('mongoose');
	this.Schema                         = this.mongoose.Schema;
	console.log('Mongoose this.Schema '+this.Schema);
}

MongooseSchema.prototype.getSchema   = function(properties){
	var schema                          = new this.Schema(properties);
	return schema;
};

MongooseSchema.prototype.constructor = MongooseSchema;
module.exports                       = MongooseSchema;
