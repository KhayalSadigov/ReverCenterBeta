const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    ownerId : String,
    title: String,
    content : String,
    status : Boolean,
})

module.exports = messageSchema ;