const express = require("express");

const UserDecisionRouter = express.Router();

const decisionUserController = require("../controllers/decisionUserController");

UserDecisionRouter.get("/:id", decisionUserController.getDecisionUser);

module.exports = UserDecisionRouter;
