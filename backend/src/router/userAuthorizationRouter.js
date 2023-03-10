const express = require("express");

const userAuthorizationRouter = express.Router();

const userAuthorizationController = require("../controllers/userAuthorizationController");

userAuthorizationRouter.get(
  "/",
  userAuthorizationController.getAllUserAuthorization
);

module.exports = userAuthorizationRouter;
