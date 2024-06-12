const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : String,
    biography : String,
    password : String,
    role : String,
    wishlist : Array,
    mail : String,
    rank : Number
})

module.exports = userSchema ;