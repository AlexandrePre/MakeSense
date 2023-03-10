/* eslint-disable camelcase  */

const userAuthorizationModel = require("../models/userAuthorizationModel");

const userAuthorizationController = {
  getAllUserAuthorization: (req, res) => {
    userAuthorizationModel
      .findAllUserAuthorization()
      .then((resp) => res.send(resp))
      .catch((err) => res.send(err));
  },
};

module.exports = userAuthorizationController;
