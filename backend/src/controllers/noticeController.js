/* eslint-disable camelcase  */

const noticeModel = require("../models/noticeModel");

const noticeController = {
  getAllNotice: (req, res) => {
    const { id } = req.params;
    noticeModel
      .findAllnotice(id)
      .then((notice) => res.send(notice))
      .catch((err) => res.send(err));
  },

  getOneNotice: (req, res) => {
    const { id } = req.params;
    noticeModel
      .findOneNotice(id)
      .then((notice) => {
        if (notice.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(notice[0]);
        }
      })
      .catch((err) => res.send(err));
  },

  getOneNoticeByEmail: (req, res) => {
    const { email } = req.query;
    noticeModel
      .FindOneNoticeByEmail(email)
      .then((notice) => res.send(notice))
      .catch((err) => res.send(err));
  },

  createOneNotice: (req, res) => {
    const { id_user, content, date, id_decision } = req.body;
    noticeModel
      .createOneNotice({ id_decision, id_user, content, date })
      .then((notice) => res.send(notice))
      .catch((err) => res.send(err));
  },

  modifyNotice: (req, res) => {
    const { id } = req.params;
    const noticeData = req.body;
    noticeModel
      .modifyNotice({ noticeData, id })
      .then((notice) => res.send(notice))
      .catch((err) => res.send(err));
  },

  deleteNotice: (req, res) => {
    const { id } = req.params;
    noticeModel
      .deleteOneNotice(id)
      .then((notice) => {
        if (notice.affectedRows !== 1) {
          return res.status(404).send(`notice ${id} not found`);
        }
        return res.status(200).send(`notice ${id} deleted`);
      })
      .catch((err) => res.send(err));
  },
};

module.exports = noticeController;
