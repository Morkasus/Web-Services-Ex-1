'use strict'
var fs = require("fs");

//DB Connection
var mongoose = require('mongoose');
var Student = require('./student.js');
mongoose.connect('mongodb://db_usr:db_pass@ds023550.mlab.com:23550/db_ringapp2016mor');

//JSON File
var studentFile = "./university/data/studentJson.json";
var excellence = 90;
var con  = mongoose.connection;

con.on('error', function(err){
    console.log("Connection failed" + err);
});

con.once('open', function(){
    console.log('Connected to mLab');
});


//Class Students
module.exports = class Students {
    
    constructor() {}
    
    //Return Json object with all excellence students
    getAllExcellenceStudent(callBackFunction) {
        console.log("------ Display All Excellence Students -------");
        if(con.readyState){
            Student.find({}, {'_id': false})
                .where('average').gt(90).exec(function(err, students) {
                    if (err) throw err;
                    console.log(students);
                    callBackFunction(students);
                    mongoose.disconnect();
            });
        }
    }
    
    
    //Return Json object contain student with requested id
    ExcellenceStudentByID(id, callBackFunction){
        console.log("------ Display Student ID = " + id + "-------");
        if(con.readyState){
            Student.find({"id" : id}, {'_id': false}, function(err, student) {
                    if (err) throw err;
                    console.log(student);
                    callBackFunction(student);
                    mongoose.disconnect();
            });
        }
    }
    
    //Return Json object contain all excellence students in requested year
    getExcellenceByYear(year, callBackFunction){
        console.log("------- Display All Excellence Students in " + year + " -------");
        if(con.readyState){
            Student.find({"year" : year}, {'_id': false})
                .where('average').gt(90).exec(function(err, students) {
                    if (err) throw err;
                    console.log(students);
                    callBackFunction(students);
                    mongoose.disconnect();
            });
        }
    }

    //Helper method read Json that contain all students
    readJson(){
        var content = fs.readFileSync(studentFile);
        return JSON.parse(content);
    }
}



