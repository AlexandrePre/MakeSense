const database = require("../../config");

const findAll = (id) => {
  return database
    .promise()
    .query(
      "SELECT firstdecision.content FROM firstdecision WHERE firstdecision.id_decision = ?",
      [id]
    )
    .then(([res]) => res);
};

const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO firstdecision SET ?", [payload])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE FROM firstdecision WHERE id = ?", [id])
    .then(([res]) => res);
};

const updateOne = (firstdecisionData, id) => {
  return database
    .promise()
    .query("UPDATE firstdecision SET ? Where id = ?", [firstdecisionData, id])
    .then(([res]) => res);
};

module.exports = { findAll, createOne, deleteOne, updateOne };
