const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discount: Number,
    src: String
})

module.exports = serviceSchema ;