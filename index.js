var express = require('express');
var bodyParser = require('body-parser');
var Students = require("./students");
//var eventsConfig = require("./config");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
var port = process.env.PORT || 3000;

var studManager = new Students();
//studManager.on(eventsConfig.AllStudents, studManager.displayStudetns);
//studManager.on(eventsConfig.getStudentsByYear, studManager.displayStudentsByYear);
//studManager.on(eventsConfig.getStudentById, studManager.displayStudentByID);

app.all('*', function(req, res, next) {
    console.log("successed login");
    req.next();
});

app.get('/students', function(req, res){
    console.log("AllStudents");
    res.send(studManager.displayStudetns());
    res.end();
});

app.get('/getstudentid/:id', function(req, res){
    var id = req.params.id;
    res.send(studManager.displayStudentByID(id));
    res.end();
});

app.get('/getstudentyear/:year', function(req, res){
    var year = req.params.year;
    res.send(studManager.displayStudentsByYear(year));
    res.end();
});

app.listen(port);
console.log("listening on port " + port);