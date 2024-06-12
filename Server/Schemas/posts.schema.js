const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    ownerId : String,
    content : String,
    likes : Array,
    comment : Array
})

module.exports = postSchema ;