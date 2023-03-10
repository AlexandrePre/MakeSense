const express = require("express");

const authorizationRouter = express.Router();

const authorizationController = require("../controllers/auhtorizationController");

authorizationRouter.get("/", authorizationController.getAuthorizations);
authorizationRouter.post(
  "/authorizationDecision",
  authorizationController.getAllAuthoByDecision
);
authorizationRouter.post(
  "/authorizationExpert",
  authorizationController.getAllAuthoByExpert
);
authorizationRouter.get("/:id", authorizationController.getOneAuthorization);
authorizationRouter.post("/", authorizationController.postAuthorizations);
authorizationRouter.delete("/:id", authorizationController.deleteAuthorization);
authorizationRouter.put("/:id", authorizationController.updateAuthorization);
authorizationRouter.put(
  "/notification/:id",
  authorizationController.updateNotification
);

module.exports = authorizationRouter;
