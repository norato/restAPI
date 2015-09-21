// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var clientSchema = new mongoose.Schema({
	Id        : String,
	Active    : Boolean,
	UserLimit : Number
});

// Return Model
module.exports = restful.model('Client', clientSchema);