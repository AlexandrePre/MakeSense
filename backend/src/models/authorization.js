/* eslint-disable camelcase */
const database = require("../../config");

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM authorization")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM authorization WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};

const findAuthoByDecision = (id) => {
  return database
    .promise()
    .query(
      "SELECT us1.image, us1.lastname, us1.firstname, authorization.id_decision FROM decision INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user WHERE authorization.id_decision = ? and authorization.is_expert = ?;",
      [id, false]
    )
    .then(([res]) => res);
};

const findAuthoByExpert = (id) => {
  return database
    .promise()
    .query(
      "SELECT us1.image, us1.lastname, us1.firstname, authorization.id_decision FROM decision INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user WHERE authorization.id_decision = ? and authorization.is_expert = ?;",
      [id, true]
    )
    .then(([res]) => res);
};

const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO authorization SET ?", [payload])
    .then(([res]) => res);
};
const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE from authorization WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};
const putOne = (payload, id) => {
  return database
    .promise()
    .query("UPDATE authorization  SET ? WHERE id = ?", [payload, Number(id)])
    .then(([res]) => res);
};

const putNotif = (id) => {
  return database
    .promise()
    .query("UPDATE authorization SET notification = 0 WHERE id=?", [id])
    .then(([res]) => res);
};

module.exports = {
  findAll,
  createOne,
  findOne,
  deleteOne,
  putOne,
  findAuthoByDecision,
  findAuthoByExpert,
  putNotif,
};
