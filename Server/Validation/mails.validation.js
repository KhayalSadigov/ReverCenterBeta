const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const messageValidation = Joi.object({
    mail : Joi.string().email({ tlds: { allow: false } }).required(),
    status: Joi.boolean().required(),
})
module.exports = messageValidation