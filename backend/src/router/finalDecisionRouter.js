const express = require("express");

const finalDecisiontRouter = express.Router();

const finalDecisionControllers = require("../controllers/finalDecisionController");

finalDecisiontRouter.get("/:id", finalDecisionControllers.getAllFinalDecision);
finalDecisiontRouter.post("/", finalDecisionControllers.postFinalDecision);
finalDecisiontRouter.delete(
  "/:id",
  finalDecisionControllers.deleteFinalDecision
);
finalDecisiontRouter.put("/:id", finalDecisionControllers.updateFinalDecision);

module.exports = finalDecisiontRouter;
