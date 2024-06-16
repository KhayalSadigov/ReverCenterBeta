const courseValidation = require("../Validation/courses.validation");

function courseMiddleware(req, res, next) {
  let { value, error } = courseValidation.validate(req.body);
  if (!error) {
    next();
  }
  else{
    res.send(false)
  }
}

module.exports = courseMiddleware ;