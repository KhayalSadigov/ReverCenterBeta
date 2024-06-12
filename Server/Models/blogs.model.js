const mongoose = require('mongoose');
const blogSchema = require('../Schemas/blogs.schema');

const Blogs = mongoose.model("Blogs" , blogSchema )

module.exports = Blogs