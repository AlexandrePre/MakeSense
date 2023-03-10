const express = require("express");

const DecisionUserRouter = express.Router();

const userDecisionController = require("../controllers/userDecisionController");

DecisionUserRouter.get("/:id", userDecisionController.getDecisionUser);

module.exports = DecisionUserRouter;
