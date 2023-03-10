/* eslint-disable camelcase */
const db = require("../../config");

const findOne = (id, user) => {
  return db
    .promise()
    .query(
      "SELECT  decision.id AS nbdec, us1.id, authorization.id_decision, authorization.id_user, status.id AS nbStatus FROM decision  INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user INNER JOIN status ON decision.id_status = status.id INNER JOIN user AS us2 on us2.id = decision.id_user  WHERE decision.id=? AND us1.id=?;",
      [id, user]
    )
    .then((decision) => decision);
};

const findSix = (id) => {
  return db
    .promise()
    .query(
      "SELECT decision.id AS nbdec, decision.title,us2.id, us2.image, us1.id, us2.lastname, us2.firstname, status, status.id AS nbStatus FROM decision  INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user INNER JOIN status ON decision.id_status = status.id INNER JOIN user AS us2 on us2.id = decision.id_user  WHERE us1.id=? ORDER BY decision.id DESC LIMIT 3; ",
      [id]
    )
    .then(([decision]) => decision);
};

const findAllDecision = (id) => {
  return db
    .promise()
    .query(
      "SELECT  decision.id AS nbdec, decision.title,us2.id,us2.image, us1.id, us2.lastname, us2.firstname, status, status.id AS nbStatus FROM decision  INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user INNER JOIN status ON decision.id_status = status.id INNER JOIN user AS us2 on us2.id = decision.id_user  WHERE us1.id=?;",
      [id]
    )
    .then(([decision]) => decision);
};

const findAllDecisionNotification = (id) => {
  return db
    .promise()
    .query(
      "SELECT authorization.notification AS notification,decision.id AS nbdec, authorization.id AS nbauth, decision.title,us2.id,us2.image, us1.id, us2.lastname, us2.firstname, status, status.id AS nbStatus FROM decision  INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user INNER JOIN status ON decision.id_status = status.id INNER JOIN user AS us2 on us2.id = decision.id_user  WHERE us1.id=? AND authorization.notification=1;",
      [id]
    )
    .then(([res]) => res);
};

const countNotifcation = (id) => {
  return db
    .promise()
    .query(
      "SELECT count(authorization.notification) AS notification, decision.id AS nbdec, decision.title,us2.id,us2.image, us1.id, us2.lastname, us2.firstname, status, status.id AS nbStatus FROM decision  INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user INNER JOIN status ON decision.id_status = status.id INNER JOIN user AS us2 on us2.id = decision.id_user  WHERE us1.id=? AND authorization.notification=1;",
      [id]
    )
    .then(([res]) => res);
};

module.exports = {
  findSix,
  findAllDecision,
  countNotifcation,
  findAllDecisionNotification,
  findOne,
};
