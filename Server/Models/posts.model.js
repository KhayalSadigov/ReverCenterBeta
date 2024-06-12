const mongoose = require('mongoose');
const postSchema = require('../Schemas/posts.schema');

const Posts = mongoose.model("Posts" , postSchema )

module.exports = Posts