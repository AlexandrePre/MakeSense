/* eslint-disable camelcase */
const userDecisionModel = require("../models/userDecisionModels");

const decisionUserController = {
  getDecisionUser: (req, res) => {
    const { id } = req.params;
    userDecisionModel
      .findOneDecision(id)
      .then((decision) => res.send(decision))
      .catch((err) => res.send(err));
  },
};
module.exports = decisionUserController;
