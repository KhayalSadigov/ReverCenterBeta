const express = require("express")
const endpoints = require('./../Constants/endpoints');
const blogController = require("../Controllers/blogs.controller");

const blogRouter = express.Router() ;

blogRouter.get(endpoints.blogs.getAll , blogController.getAll)
blogRouter.get(endpoints.blogs.getOne , blogController.getOne)
blogRouter.delete(endpoints.blogs.delete , blogController.delete)
blogRouter.post(endpoints.blogs.post , blogController.post)
blogRouter.patch(endpoints.blogs.update , blogController.update)

module.exports = blogRouter