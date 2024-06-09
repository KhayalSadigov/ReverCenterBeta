const mongoose = require('mongoose');
const serviceSchema = require('../Schemas/services.schema');

const Services = mongoose.model("Services" , serviceSchema)

module.exports = Services