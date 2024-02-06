const express = require("express");
const users = express.Router();
const {isLogin, isHeadOfficeOnly, isHeadOfficeAndAdmin} = require("../Middlewares/authorization")
const {getStudentData,getStudentProfile, registerStudent, editStudentData, editStudentDataByEmployee, deleteStudentData} = require("../Handlers/users.handler")

// users.post("/student", registerStudent)
users.get("/student",isLogin, getStudentData)
users.get("/profile",isLogin, getStudentProfile)
users.patch("/profile",isLogin, editStudentData)
users.patch("/profile/:student_id",isLogin, editStudentDataByEmployee)
users.delete("/:student_id",isLogin, deleteStudentData)

module.exports = users