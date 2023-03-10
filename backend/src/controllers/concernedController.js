/* eslint-disable camelcase  */

const concernedModel = require("../models/concernedModel");

const concernedController = {
  getAllUsers: (req, res) => {
    concernedModel
      .findAllUsers()
      .then((notice) => res.send(notice))
      .catch((err) => res.send(err));
  },
};

module.exports = concernedController;
