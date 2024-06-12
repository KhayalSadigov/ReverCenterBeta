const express = require("express")
const endpoints = require('./../Constants/endpoints');
const workController = require("../Controllers/works.controller");

const workRouter = express.Router() ;

workRouter.get(endpoints.works.getAll , workController.getAll)
workRouter.get(endpoints.works.getOne , workController.getOne)
workRouter.delete(endpoints.works.delete , workController.delete)
workRouter.post(endpoints.works.post , workController.post)
workRouter.patch(endpoints.works.update , workController.update)

module.exports = workRouter