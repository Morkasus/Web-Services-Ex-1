var express = require('express');
var University = require("./university");

var app = express();
var port = process.env.PORT || 3000;

//New university (student manager)
var university = new University();

//
//var mongoose = require('mongoose');
//var Student = require('./student');
//mongoose.connect('mongodb://db_usr:db_pass@ds023550.mlab.com:23550/db_ringapp2016mor');
//
//mongoose.connection.once('open', function() {
//    //console.log(Student);
//    Student.find({}, function(err, student) {
//        console.log("find");
//        if (err) throw err;
//        console.log(student);
//        mongoose.disconnect();
//    });
//});




//All request
app.all('*', function(req, res, next) {
    console.log("Success");
    req.next();
});

//Get all excellence students
app.get('/allstudents', function(req, res){
    university.getAllExcellenceStudent(function(data){
        res.send(data);      
    });
});

//Get student by id
app.get('/student/:id', function(req, res){
    var id = req.params.id;
    university.ExcellenceStudentByID(id, function(data){
        res.send(data);                                     
    });
});

//Get all excellence students by year
app.get('/studentsyear/:year', function(req, res){
    var year = req.params.year;
    university.getExcellenceByYear(year, function(data){
        res.send(data);
    });
});

//Listening
app.listen(port);
console.log("listening on port " + port);