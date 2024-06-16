const postValidation = require("../Validation/posts.validation");

function postMiddleware(req, res, next) {
  let { value, error } = postValidation.validate(req.body);
  if (!error) {
    next();
  }
  else{
    res.send(false)
  }
}

module.exports = postMiddleware ;