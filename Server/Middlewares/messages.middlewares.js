const messageValidation = require("../Validation/messages.validation");

function messageMiddleware(req, res, next) {
  let { value, error } = messageValidation.validate(req.body);
  if (!error) {
    next();
  }
  else{
    res.send(false)
  }
}

module.exports = messageMiddleware ;