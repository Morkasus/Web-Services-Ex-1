'use strict'
//var EventEmitter = require("events");
//var eventConfig = require("../config");
var fs = require("fs");

var studentFile = "./students/studentJson.json";

module.exports = class Students {
    
    constructor() {
        //super();
    }
    
//    getAllStudent() {
//        this.emit(eventConfig.AllStudents);  
//    }
//    
//    getStudentById(id) {
//        this.id = id;
//        this.emit(eventConfig.getStudentById);
//    }
//    
//    getStudentByYear(year) {
//        this.year = year;
//        this.emit(eventConfig.getStudentsByYear);
//    }

    displayStudetns() {
        console.log("===== displayStudetns =====");
        var content = fs.readFileSync(studentFile);
        console.log("Output Content : \n"+ content);
        var jsonContent = JSON.parse(content);
        return jsonContent;
    }
    
    displayStudentByID(id){
        console.log("===== display student by id("+ id +") =====");
        var content = fs.readFileSync(studentFile);
        var jsonContent = JSON.parse(content);
        var student, i;
        for(i=0; i<jsonContent.length; i++) {
            if(jsonContent[i].id == id){
                console.log(jsonContent[i]);
                student = jsonContent[i];
                break;
            } else {
                student = "Student with id " + id + " dosn't exist";
            }
        }
        return student;
    }
    
    displayStudentsByYear(year){
        console.log("===== displayStudentsByYear("+ year +") =====");
        var content = fs.readFileSync(studentFile);
        var jsonContent = JSON.parse(content), i;
        for(i=0; i < jsonContent.length; i++) {
            if(jsonContent[i].year != year){
                jsonContent.splice(i--,1);
            }
        }
        console.log("Output Content : \n"+ JSON.stringify(jsonContent));
        return jsonContent;
    }
}