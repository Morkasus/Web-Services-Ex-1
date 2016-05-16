var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
	firstName: {type:String, index:1, required:true},
    lastName: {type: String, required:true},
	id: {type:Number, required:true, unique:true}, 
	average: {type: Number, required:true},
	year: {type: Number, required:true}
}, {collection: 'students'});

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;