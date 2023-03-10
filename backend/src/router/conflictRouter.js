const express = require("express");

const conflictRouter = express.Router();

const conflictControllers = require("../controllers/conflictControllers");

conflictRouter.get("/:id", conflictControllers.getAllConflict);
conflictRouter.post("/", conflictControllers.postConflict);
conflictRouter.delete("/:id", conflictControllers.deleteConflict);
conflictRouter.put("/:id", conflictControllers.updateConflict);

module.exports = conflictRouter;
