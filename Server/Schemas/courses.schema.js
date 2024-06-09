const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title : String,
    description : String,
    src : String,
    price : Number,
    discount: Number,
    time : Number, //Month
    startTime : Date ,
    status : Boolean //Active/Deactive 
})

module.exports = courseSchema ;