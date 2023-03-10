/* eslint-disable camelcase  */

const db = require("../../config");

const findAllUserAuthorization = () => {
  return db
    .promise()
    .query(
      "SELECT DISTINCT user.id, user.firstname, authorization.is_expert FROM user JOIN authorization ON user.id = authorization.id_user"
    )
    .then(([res]) => res);
};

module.exports = { findAllUserAuthorization };

// user.id, user.firstname, user.lastname, user.image, authorization.is_expert
