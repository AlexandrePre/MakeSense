const database = require("../../config");

const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO notification SET ?", [payload])
    .then(([res]) => res);
};

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM notification")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM notification WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};

module.exports = { findAll, createOne, findOne };
