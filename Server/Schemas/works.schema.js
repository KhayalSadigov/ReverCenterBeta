const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    ownerid : String,
    title: String,
    description: String,
    price: Number,
    tel: String,
    email: String,
    src: Array
})

module.exports = workSchema ;