const express = require("express");

const AuthorisationUserDecisionRouter = express.Router();

const authorizationDecisionUserController = require("../controllers/authorizationDecisionUserController");

AuthorisationUserDecisionRouter.get(
  "/notification/:id",
  authorizationDecisionUserController.countDecision
);

AuthorisationUserDecisionRouter.get(
  "/six/:id/",
  authorizationDecisionUserController.getSixDecisions
);

AuthorisationUserDecisionRouter.get(
  "/single/:id/:user",
  authorizationDecisionUserController.getFindOne
);

AuthorisationUserDecisionRouter.get(
  "/notification/detail/:id",
  authorizationDecisionUserController.getDecisionUserNotif
);

AuthorisationUserDecisionRouter.get(
  "/:id",
  authorizationDecisionUserController.getDecisionUser
);

module.exports = AuthorisationUserDecisionRouter;
