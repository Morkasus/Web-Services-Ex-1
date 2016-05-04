'use strict'
var fs = require("fs");
var mongoose = require('mongoose');
var Student = require('./student.js');
mongoose.connect('mongodb://db_usr:db_pass@ds023550.mlab.com:23550/db_ringapp2016mor');



//JSON File
var studentFile = "./university/data/studentJson.json";
var excellence = 90;


//Class Students
module.exports = class Students {
    
    constructor() {}
    
    //Return Json object with all excellence students
    getAllExcellenceStudent() {
        console.log("------ Display All Excellence Students -------");
        var students = this.readJson(), i;
        for(i=0; i < students.length; i++) {
            if(students[i].average < excellence){
                students.splice(i--,1);
            }
        }
        console.log(JSON.stringify(students) + "\n");
        return students;
    }
    
    
    //Return Json object contain student with requested id
    ExcellenceStudentByID(id){
        console.log("------ Display Student ID = " + id + "-------");
        var jsonContent = this.readJson();
        var student = [], i;
        for(i=0; i<jsonContent.length; i++) {
            if(jsonContent[i].id == id){
                console.log(JSON.stringify(jsonContent[i]) + "\n");
                student = jsonContent[i];
                break;
            } 
        }
        return student;
    }
    
    //Return Json object contain all excellence students in requested year
    getExcellenceByYear(year){
        console.log("------- Display All Excellence Students in " + year + " -------");
        var students = this.readJson(), i;
        for(i=0; i < students.length; i++) {
            if(students[i].year != year || students[i].average < excellence){
                students.splice(i--,1);
            }
        }
        console.log(JSON.stringify(students) + "\n");
        return students;
    }

    //Helper method read Json that contain all students
    readJson(){
        var content = fs.readFileSync(studentFile);
        return JSON.parse(content);
    }
}