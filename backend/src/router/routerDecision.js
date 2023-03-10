const express = require("express");

const routerDecision = express.Router();

const decisionController = require("../controllers/decisionController");

routerDecision.get("/", decisionController.getAllDecision);
routerDecision.get("/six", decisionController.getSixDecisions);
routerDecision.get("/:id", decisionController.getOneDecision);
routerDecision.post("/", decisionController.postDecision);
routerDecision.put("/:id", decisionController.updateDecision);
routerDecision.delete("/:id", decisionController.deleteDecision);

module.exports = routerDecision;
