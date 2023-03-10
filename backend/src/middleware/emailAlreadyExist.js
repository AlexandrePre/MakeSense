const userModel = require("../models/user");

const emailAlreadyExistsMiddleware = (req, res, next) => {
  userModel.findByEmail(req.body.email).then(([user]) => {
    if (!user) {
      return next();
    }
    return res.send(`this email ${req.body.email} already exist`);
  });
};

module.exports = emailAlreadyExistsMiddleware;
