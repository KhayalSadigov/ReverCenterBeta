const express = require("express")
const endpoints = require('./../Constants/endpoints');
const courseController = require("../Controllers/courses.controller");
const courseMiddleware = require("../Middlewares/courses.middlewares");

const courseRouter = express.Router() ;

courseRouter.get(endpoints.courses.getAll , courseController.getAll)
courseRouter.get(endpoints.courses.getOne , courseController.getOne)
courseRouter.delete(endpoints.courses.delete , courseController.delete)
courseRouter.post(endpoints.courses.post, courseMiddleware , courseController.post)
courseRouter.patch(endpoints.courses.update , courseController.update)

module.exports = courseRouter