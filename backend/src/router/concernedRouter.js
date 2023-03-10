const express = require("express");

const concernedRouter = express.Router();

const concernedController = require("../controllers/concernedController");

concernedRouter.get("/", concernedController.getAllUsers);

module.exports = concernedRouter;
