/* eslint-disable camelcase  */

const db = require("../../config");

const findAllUsers = () => {
  return db
    .promise()
    .query("SELECT * FROM user")
    .then(([res]) => res);
};

module.exports = {
  findAllUsers,
};
