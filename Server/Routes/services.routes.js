const express = require("express")
const endpoints = require('./../Constants/endpoints');
const serviceController = require("../Controllers/services.controller");
const serviceMiddleware = require("../Middlewares/services.middlewares");

const serviceRouter = express.Router() ;

serviceRouter.get(endpoints.services.getAll , serviceController.getAll)
serviceRouter.get(endpoints.services.getOne , serviceController.getOne)
serviceRouter.delete(endpoints.services.delete , serviceController.delete)
serviceRouter.post(endpoints.services.post, serviceMiddleware , serviceController.post)
serviceRouter.patch(endpoints.services.update , serviceController.update)

module.exports = serviceRouter