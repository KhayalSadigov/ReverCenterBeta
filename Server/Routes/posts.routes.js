const express = require("express")
const endpoints = require('./../Constants/endpoints');
const postController = require("../Controllers/posts.controller");

const postRouter = express.Router() ;

postRouter.get(endpoints.posts.getAll , postController.getAll)
postRouter.get(endpoints.posts.getOne , postController.getOne)
postRouter.delete(endpoints.posts.delete , postController.delete)
postRouter.post(endpoints.posts.post , postController.post)
postRouter.patch(endpoints.posts.update , postController.update)

module.exports = postRouter