const mongoose = require('mongoose');
const messageSchema = require('../Schemas/messages.schema');

const Messages = mongoose.model("Messages" , messageSchema)

module.exports = Messages