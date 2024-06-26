const mailValidation = require("../Validation/mails.validation");

function mailMiddleware(req, res, next) {
  let { value, error } = mailValidation.validate(req.body);
  if (!error) {
    next();
  }
  else{
    res.send(false)
  }
}

module.exports = mailMiddleware ;