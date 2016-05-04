var express = require('express');
var bodyParser = require('body-parser');
var University = require("./university");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
var port = process.env.PORT || 3000;

//New university (student manager)
var university = new University();

//All request
app.all('*', function(req, res, next) {
    console.log("Success");
    req.next();
});

//Get all excellence students
app.get('/allstudents', function(req, res){
    res.send(university.getAllExcellenceStudent());
    res.end();
});

//Get student by id
app.get('/student/:id', function(req, res){
    var id = req.params.id;
    res.send(university.ExcellenceStudentByID(id));
    res.end();
});

//Get all excellence students by year
app.get('/studentsyear/:year', function(req, res){
    var year = req.params.year;
    res.send(university.getExcellenceByYear(year));
    res.end();
});

//Listening
app.listen(port);
console.log("listening on port " + port);