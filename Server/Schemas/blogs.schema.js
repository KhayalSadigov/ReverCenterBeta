const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    ownerId : String,
    title: String,
    description: String,
    cover : String,
    status : String,
    date : String
})

module.exports = blogSchema ;