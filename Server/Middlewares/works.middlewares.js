const workValidation = require("../Validation/works.validation");

function workMiddleware(req, res, next) {
  let { value, error } = workValidation.validate(req.body);
  if (!error) {
    next();
  }
  else{
    res.send(false)
  }
}

module.exports = workMiddleware ;