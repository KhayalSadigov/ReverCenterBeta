const serviceValidation = require("../Validation/services.validation");

function serviceMiddleware(req, res, next) {
  let { value, error } = serviceValidation.validate(req.body);
  if (!error) {
    next();
  }
  else{
    res.send(false)
  }
}

module.exports = serviceMiddleware ;