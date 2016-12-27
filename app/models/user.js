var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	firstName: String,
	lastName: String,
	location: String,
	email: String,
	facebookId: String,
});

module.exports = mongoose.model('user', UserSchema);