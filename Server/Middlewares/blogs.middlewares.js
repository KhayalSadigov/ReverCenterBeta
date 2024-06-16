const blogValidation = require("../Validation/blogs.validation");

function blogMiddleware(req, res, next) {
  let { value, error } = blogValidation.validate(req.body);
  if (!error) {
    next();
  }
  else{
    res.send(false)
  }
}

module.exports = blogMiddleware ;
