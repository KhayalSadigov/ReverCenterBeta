const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema({
    mail : String,
    status : Boolean
})

module.exports = mailSchema ;