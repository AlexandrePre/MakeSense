const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userControllers");
const userValidationMiddleware = require("../middleware/validator");
const emailAlreadyExistsMiddleware = require("../middleware/emailAlreadyExist");
const credentialsCheck = require("../middleware/credentialsCheck");
const { upload } = require("../helpers/multers");
const { checkImage } = require("../middleware/checkImage");
const authorization = require("../helpers/authentification");

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getOneUSer);
userRouter.get("/logout", authorization, userController.logout);
userRouter.post(
  "/",
  emailAlreadyExistsMiddleware,
  userValidationMiddleware,
  credentialsCheck,
  userController.createUser
);

userRouter.post("/login", credentialsCheck, userController.login);
userRouter.delete("/:id", userController.deleteUser);
userRouter.put(
  "/upload/:id",
  upload.single("upload"),
  checkImage,
  userController.updateImage
);
userRouter.put("/:id", userController.updateUser);
userRouter.put("/connect/:id", userController.updateConnected);
userRouter.put("/disconnect/:id", userController.updateDisconnect);

module.exports = userRouter;
