const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    ownerId : String,
    title: String,
    description: String,
    price: Number,
    tel: String,
    email: String,
    src: Array,
    status: Boolean
})

module.exports = workSchema ;