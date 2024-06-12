const express = require("express")
const endpoints = require('./../Constants/endpoints');
const courseController = require("../Controllers/courses.controller");

const courseRouter = express.Router() ;

courseRouter.get(endpoints.courses.getAll , courseController.getAll)
courseRouter.get(endpoints.courses.getOne , courseController.getOne)
courseRouter.delete(endpoints.courses.delete , courseController.delete)
courseRouter.post(endpoints.courses.post , courseController.post)
courseRouter.patch(endpoints.courses.update , courseController.update)

module.exports = courseRouter