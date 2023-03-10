const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM status")
    .then(([status]) => status);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM status WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};
const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO status SET ?", [payload])
    .then(([res]) => res);
};
const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM status WHERE id = ?", [id])
    .then(([res]) => res);
};
const updateOne = (statusData, id) => {
  return db
    .promise()
    .query("UPDATE status SET ? Where id = ?", [statusData, id])
    .then(([res]) => res);
};
module.exports = { findAll, findOne, createOne, updateOne, deleteOne };
