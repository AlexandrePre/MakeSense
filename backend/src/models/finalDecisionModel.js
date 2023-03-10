const db = require("../../config");

const findAll = (id) => {
  return db
    .promise()
    .query(
      "SELECT finaldecision.content FROM finaldecision  WHERE finaldecision.id_decision = ?",
      [id]
    )
    .then(([decision]) => decision);
};
const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO finaldecision SET ?", [payload])
    .then(([res]) => res);
};
const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM finaldecision WHERE id = ?", [id])
    .then(([res]) => res);
};
const updateOne = (decisionData, id) => {
  return db
    .promise()
    .query("UPDATE finaldecision SET ? Where id = ?", [decisionData, id])
    .then(([res]) => res);
};
module.exports = { findAll, createOne, updateOne, deleteOne };
