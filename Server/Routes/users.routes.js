const express = require("express")
const endpoints = require('./../Constants/endpoints');
const userController = require("../Controllers/users.controller");

const userRouter = express.Router() ;

userRouter.get(endpoints.users.getAll , userController.getAll)
userRouter.get(endpoints.users.getOne , userController.getOne)
userRouter.delete(endpoints.users.delete , userController.delete)
userRouter.post(endpoints.users.post , userController.post)
userRouter.patch(endpoints.users.update , userController.update)

module.exports = userRouter