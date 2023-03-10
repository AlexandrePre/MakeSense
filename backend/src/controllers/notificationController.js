const notificationModel = require("../models/notification");

const notificationController = {
  getNotification: (req, res) => {
    notificationModel.findAll().then((notification) => res.send(notification));
  },
  getOneNotification: (req, res) => {
    const { id } = req.params;
    notificationModel
      .findOne(id)
      .then((notification) => {
        if (notification[0]) {
          res.send(notification[0]);
        } else {
          res.status(404).send("USER NOT FOUND");
        }
      })
      .catch((err) => res.send(err));
  },
  postNotification: (req, res) => {
    notificationModel.createOne(req.body).then((notification) => {
      if (notification.affectedRows !== 0) {
        notificationModel
          .findOne(notification.insertId)
          // eslint-disable-next-line no-shadow
          .then(([notification]) => res.send(notification));
      } else {
        res.send("RIEN EST CREE");
      }
    });
  },

  updateNotification: (req, res) => {
    const { id } = req.params;
    notificationModel
      .putOne(req.body, id)
      .then((notification) => {
        if (notification.affectedRows === 0) {
          res.status(404).send("Not Found");
        } else {
          res.send(notification);
        }
      })
      .catch((err) => res.send(err));
  },
};

module.exports = notificationController;
