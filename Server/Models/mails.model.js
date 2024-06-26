const mongoose = require('mongoose');
const mailSchema = require('../Schemas/mails.schema');

const Mails = mongoose.model("Mails" , mailSchema)

module.exports = Mails