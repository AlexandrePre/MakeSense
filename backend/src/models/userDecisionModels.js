/* eslint-disable camelcase */
const db = require("../../config");

const findOneDecision = (id) => {
  return db
    .promise()
    .query(
      "SELECT * FROM decision LEFT JOIN user ON user.id=decision.id_user INNER JOIN status ON decision.id_status = status.id WHERE decision.id = ?",
      [id]
    )
    .then(([decision]) => decision);
};

module.exports = { findOneDecision };
