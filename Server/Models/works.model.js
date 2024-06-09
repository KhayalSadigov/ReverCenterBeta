const mongoose = require('mongoose');
const workSchema = require('../Schemas/works.schema');

const Works = mongoose.model("Works" , workSchema)

module.exports = Works