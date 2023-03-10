/* eslint-disable camelcase */
const db = require("../../config");

const findAllDecision = (id) => {
  return db
    .promise()
    .query(
      "SELECT decision.id, user.firstname, user.image, user.lastname, decision.title, status.status FROM decision LEFT JOIN user ON user.id=decision.id_user INNER JOIN status ON decision.id_status = status.id WHERE user.id = ?",
      [id]
    )
    .then(([decision]) => decision);
};

module.exports = { findAllDecision };
