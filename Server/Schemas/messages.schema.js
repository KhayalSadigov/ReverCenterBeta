const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    title: String,
    content : String,
    email : String ,
    status : Boolean,
})

module.exports = messageSchema ;