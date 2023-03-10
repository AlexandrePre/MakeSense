const express = require("express");

const noticeRouter = express.Router();

const noticeController = require("../controllers/noticeController");

noticeRouter.get("/:id", noticeController.getAllNotice);
noticeRouter.get("/email", noticeController.getOneNoticeByEmail);
noticeRouter.post("/", noticeController.createOneNotice);
noticeRouter.put("/:id", noticeController.modifyNotice);
noticeRouter.delete("/:id", noticeController.deleteNotice);

module.exports = noticeRouter;
