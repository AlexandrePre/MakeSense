/* eslint-disable camelcase  */
// (voir avec David pour le camelcase ..)
const statusModels = require("../models/statusModels");

const statusController = {
  getAllStatus: (_, res) => {
    statusModels
      .findAll()
      .then((status) => res.send(status))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  getOneStatus: (req, res) => {
    const { id } = req.params;
    statusModels
      .findOne(id)
      .then((status) => {
        if (status.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(status[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  postStatus: (req, res) => {
    const { status } = req.body;
    statusModels
      .createOne({
        status,
      })
      .then((result) =>
        res.status(201).send({
          id: result.insertId,
          status,
        })
      )
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  deleteStatus: (req, res) => {
    const { id } = req.params;
    statusModels
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`status ${id} not found`);
        }
        return res.status(200).send(`status ${id} deleted`);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  updateStatus: (req, res) => {
    const { id } = req.params;
    const statusData = req.body;
    statusModels
      .updateOne(statusData, id)
      .then((status) => res.send(status))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
module.exports = statusController;
