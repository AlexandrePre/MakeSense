const express = require("express");

const routerStatus = express.Router();

const statusController = require("../controllers/statusControllers");

routerStatus.get("/", statusController.getAllStatus);
routerStatus.get("/:id", statusController.getOneStatus);
routerStatus.post("/", statusController.postStatus);
routerStatus.put("/:id", statusController.updateStatus);
routerStatus.delete("/:id", statusController.deleteStatus);

module.exports = routerStatus;
