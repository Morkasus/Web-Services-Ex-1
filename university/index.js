'use strict'
var fs = require("fs");

//JSON File
var studentFile = "./university/data/studentJson.json";
var excellence = 90;

module.exports = class Students {
    
    constructor() {}
    
    getAllExcellenceStudent() {
        console.log("------ Display All Excellence Students -------");
        var content = fs.readFileSync(studentFile);
        var students = JSON.parse(content), i;
        for(i=0; i < students.length; i++) {
            if(students[i].average < excellence){
                students.splice(i--,1);
            }
        }
        console.log(JSON.stringify(students) + "\n");
        return students;
    }
    
    ExcellenceStudentByID(id){
        console.log("------ Display Student ID = " + id + "-------");
        var content = fs.readFileSync(studentFile);
        var jsonContent = JSON.parse(content);
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
    
    getExcellenceByYear(year){
        console.log("------- Display All Excellence Students in " + year + " -------");
        var content = fs.readFileSync(studentFile);
        var students = JSON.parse(content), i;
        for(i=0; i < students.length; i++) {
            if(students[i].year != year || students[i].average < excellence){
                students.splice(i--,1);
            }
        }
        console.log(JSON.stringify(students) + "\n");
        return students;
    }
}