/* eslint-disable camelcase  */
// (voir avec David pour le camelcase ..)
const finalDecisionModel = require("../models/finalDecisionModel");

const finalDecisionController = {
  getAllFinalDecision: (req, res) => {
    const { id } = req.params;
    finalDecisionModel
      .findAll(id)
      .then((notice) => res.send(notice))
      .catch((err) => res.send(err));
  },

  postFinalDecision: (req, res) => {
    const { id_decision, id_user, content } = req.body;
    finalDecisionModel
      .createOne({
        id_decision,
        id_user,
        content,
      })
      .then((result) =>
        res.status(201).send({
          id: result.insertId,
          content,
        })
      )
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  deleteFinalDecision: (req, res) => {
    const { id } = req.params;
    finalDecisionModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`decision ${id} not found`);
        }
        return res.status(200).send(`decision ${id} deleted`);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  updateFinalDecision: (req, res) => {
    const { id } = req.params;
    const decisionData = req.body;
    finalDecisionModel
      .updateOne(decisionData, id)
      .then((decision) => res.send(decision))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
module.exports = finalDecisionController;
