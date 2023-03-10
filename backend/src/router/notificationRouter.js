const express = require("express");

const notificationRouter = express.Router();

const notificationController = require("../controllers/notificationController");

notificationRouter.get("/", notificationController.getNotification);
notificationRouter.get("/:id", notificationController.getOneNotification);
notificationRouter.post("/", notificationController.postNotification);
notificationRouter.put("/:id", notificationController.updateNotification);
module.exports = notificationRouter;
