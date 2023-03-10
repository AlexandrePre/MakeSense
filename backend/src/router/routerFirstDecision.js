const express = require("express");

const routerFirstDecision = express.Router();

const firstdecisionController = require("../controllers/firstDecisionController");

routerFirstDecision.get("/:id", firstdecisionController.getAllFirstDecision);
routerFirstDecision.post("/", firstdecisionController.postFirstDecision);
routerFirstDecision.delete("/:id", firstdecisionController.deleteFirstDecision);
routerFirstDecision.put("/:id", firstdecisionController.updateDecision);

module.exports = routerFirstDecision;
