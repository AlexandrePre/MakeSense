/* eslint-disable camelcase  */

const db = require("../../config");

const findAllnotice = (id) => {
  return db
    .promise()
    .query(
      "SELECT notice.content, user.lastname, user.firstname FROM notice INNER JOIN user ON user.id = notice.id_user WHERE notice.id_decision = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const findOneNotice = (id) => {
  return db
    .promise()
    .query(
      "SELECT notice.content FROM notice INNER JOIN decision  ON decision.id = notice.id_decision WHERE notice.id_decision = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const FindOneNoticeByEmail = (email) => {
  return db
    .promise()
    .query(
      "SELECT * FROM notice LEFT JOIN user ON notice.id_user = user.id WHERE email = ?",
      [email]
    )
    .then(([res]) => res);
};

const createOneNotice = ({ id_decision, id_user, content, date }) => {
  return db
    .promise()
    .query(
      "INSERT INTO notice (id_decision,id_user,content,date) VALUES (?,?,?,?)",
      [id_decision, id_user, content, date]
    )
    .then(([res]) => res);
};

const modifyNotice = ({ noticeData, id }) => {
  return db
    .promise()
    .query("UPDATE notice SET ? WHERE id = ?", [noticeData, id])
    .then(([res]) => res);
};

const deleteOneNotice = (id) => {
  return db
    .promise()
    .query("DELETE FROM notice WHERE id = ?", [id])
    .then(([res]) => res);
};

module.exports = {
  findAllnotice,
  findOneNotice,
  createOneNotice,
  modifyNotice,
  deleteOneNotice,
  FindOneNoticeByEmail,
};
