const express = require("express")
const endpoints = require('./../Constants/endpoints');
const messageController = require("../Controllers/messages.controller");

const messageRouter = express.Router() ;

messageRouter.get(endpoints.messages.getAll , messageController.getAll)
messageRouter.get(endpoints.messages.getOne , messageController.getOne)
messageRouter.delete(endpoints.messages.delete , messageController.delete)
messageRouter.post(endpoints.messages.post , messageController.post)
messageRouter.patch(endpoints.messages.update , messageController.update)

module.exports = messageRouter