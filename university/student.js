var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
	firstName: {type:String, required:true},
    lastName: {type:String, required:true},
	id: {type:Number, index:1, required:true, unique:true}, 
	avarage: {type: String, required:true},
	year: {type: String, required:true}
}, {collection: 'students'});

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;