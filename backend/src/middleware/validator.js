const { check } = require("express-validator");

const userValidationMiddleware = [
  check("email").isEmail().withMessage("Please enter a valid email address"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least"),
];

module.exports = userValidationMiddleware;
