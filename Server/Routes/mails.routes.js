const express = require("express")
const endpoints = require('./../Constants/endpoints');
const mailController = require("../Controllers/mails.controller");
const mailMiddleware = require("../Middlewares/mails.middlewares");

const mailRouter = express.Router() ;

mailRouter.get(endpoints.mails.getAll , mailController.getAll)
mailRouter.get(endpoints.mails.getOne , mailController.getOne)
mailRouter.delete(endpoints.mails.delete , mailController.delete)
mailRouter.post(endpoints.mails.post, mailMiddleware , mailController.post)
mailRouter.patch(endpoints.mails.update , mailController.update)

module.exports = mailRouter