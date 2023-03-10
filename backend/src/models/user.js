const database = require("../../config");

/* Model User pour chaque donnée de la table User */

/* Modes pour récupérer les USERS */

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM user")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM user WHERE id =?", [Number(id)])
    .then(([res]) => res);
};

const findByEmail = (email) => {
  return database
    .promise()
    .query("SELECT * FROM user WHERE email =?", [email])
    .then(([res]) => res);
};
const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO user SET ?", [payload])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE FROM user WHERE id = ?", [id])
    .then(([res]) => res);
};

const updateOne = (payload, id) => {
  return database
    .promise()
    .query("UPDATE user SET ? WHERE id = ?", [payload, id])
    .then(([res]) => res);
};
const updateImage = (url, id) => {
  return database
    .promise()
    .query("UPDATE user SET image = ? WHERE id = ?", [url, id])
    .then(([res]) => res);
};
const updateConnected = (connect, id) => {
  return database
    .promise()
    .query("UPDATE user SET is_connect = ? WHERE id = ?", [connect, id])
    .then(([res]) => res);
};
const updateDisconnect = (disConnect, id) => {
  return database
    .promise()
    .query("UPDATE user SET is_connect = ? WHERE id = ?", [disConnect, id])
    .then(([res]) => res);
};
module.exports = {
  findAll,
  findOne,
  createOne,
  findByEmail,
  deleteOne,
  updateOne,
  updateImage,
  updateConnected,
  updateDisconnect,
};
