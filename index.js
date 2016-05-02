var express = require('express');
var bodyParser = require('body-parser');
var University = require("./university");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
var port = process.env.PORT || 3000;

var university = new University();

app.all('*', function(req, res, next) {
    req.next();
});

app.get('/allstudents', function(req, res){
    res.send(university.getAllExcellenceStudent());
    res.end();
});

app.get('/student/:id', function(req, res){
    var id = req.params.id;
    res.send(university.ExcellenceStudentByID(id));
    res.end();
});


app.get('/studentsyear/:year', function(req, res){
    var year = req.params.year;
    res.send(university.getExcellenceByYear(year));
    res.end();
});

app.listen(port);
console.log("listening on port " + port);