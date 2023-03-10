/* eslint-disable camelcase */
const db = require("../../config");

const findSix = () => {
  return db
    .promise()
    .query(
      "SELECT decision.id, title, lastname, firstname, image, status, status.id AS nbStatus FROM decision INNER JOIN user ON user.id = decision.id_user INNER JOIN status ON decision.id_status = status.id  ORDER BY decision.id DESC LIMIT 3;"
    )
    .then(([decision]) => decision);
};

const findAll = () => {
  return db
    .promise()
    .query(
      "SELECT decision.id, title, lastname, firstname, image, status, status.id AS nbStatus FROM decision INNER JOIN user ON user.id = decision.id_user INNER JOIN status ON decision.id_status = status.id "
    )
    .then(([decision]) => decision);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM decision WHERE id = ?", [id])
    .then(([res]) => res);
};
const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO decision SET ?", [payload])
    .then(([res]) => res);
};
const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM decision WHERE id = ?", [id])
    .then(([res]) => res);
};
const updateOne = (id_status, id) => {
  return db
    .promise()
    .query("UPDATE decision SET id_status=? Where id = ?", [id_status, id])
    .then(([res]) => res);
};
module.exports = {
  findSix,
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
