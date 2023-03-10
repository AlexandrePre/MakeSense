const express = require("express");
const routerDecision = require("./routerDecision");
const routerFirstDecision = require("./routerFirstDecision");
const userRouter = require("./userRouter");
const noticeRouter = require("./noticeRouter");
const statusRouter = require("./routerStatus");
const UserDecisionRouter = require("./routerDecicionUser");
const conflictRouter = require("./conflictRouter");
const finalDecisionRouter = require("./finalDecisionRouter");
const authorizationRouter = require("./authorizationRouter");
const AuthorisationUserDecisionRouter = require("./routerAuthorizationDecisionUser");
const userAuthorizationRouter = require("./userAuthorizationRouter");
const DecisionUserRouter = require("./routerUserDecision");
const notificationRouter = require("./notificationRouter");

const router = express.Router();

router.use("/notification", notificationRouter);
router.use("/decision", routerDecision);
router.use("/user/authorization", userAuthorizationRouter);
router.use("/user", userRouter);
router.use("/notice", noticeRouter);
router.use("/status", statusRouter);
router.use("/user/decision", UserDecisionRouter);
router.use("/decision/user", DecisionUserRouter);
router.use("/conflict", conflictRouter);
router.use("/finalDecision", finalDecisionRouter);
router.use("/firstdecsion", routerFirstDecision);
router.use("/authorization", authorizationRouter);
router.use("/decision/authorization/user", AuthorisationUserDecisionRouter);

module.exports = router;
