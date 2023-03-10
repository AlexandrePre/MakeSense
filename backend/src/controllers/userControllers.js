/* eslint-disable camelcase */
const { validationResult } = require("express-validator");
const userModel = require("../models/user");
const { jwtSign } = require("../helpers/jwt");
const { passwordHash, passwordVerify } = require("../helpers/password");

const userController = {
  updateUser: async (req, res) => {
    const { id } = req.params;
    // eslint-disable-next-line camelcase

    /*    console.log(bio); */
    /* const hashedPassword = await passwordHash(password); */

    userModel
      .updateOne(req.body, id)
      .then((user) => res.send(user))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  login: (req, res, next) => {
    const { email, password } = req.body;

    userModel
      .findByEmail(email)
      .then(async ([user]) => {
        if (!user) {
          res.status(401).send({ error: "invalid email" });
        } else {
          const {
            id,
            firstname,
            lastname,
            password: hash,
            is_admin,
            image,
            is_connect,
          } = user;
          if (await passwordVerify(hash, password)) {
            const token = jwtSign(
              {
                id,
                firstname,
                lastname,
                email,
                is_admin,
                image,
                is_connect,
              },
              { expiresIn: "1h" }
            );

            res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: true,
              })
              .status(200)
              .send({
                id,
                firstname,
                lastname,
                email,
                is_admin,
                image,
                is_connect,
              });
          } else {
            res.status(401).send({ error: "invalid password" });
          }
        }
      })
      .catch((err) => next(err));
  },

  logout: (_, res) => {
    return res.clearCookie("access_token").sendStatus(200);
  },

  getUsers: (req, res, next) => {
    userModel
      .findAll()
      .then((users) => res.send(users))
      .catch((err) => next(err));
  },

  getOneUSer: (req, res, next) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then((user) => {
        if (user[0]) {
          res.send(user[0]);
        } else {
          res.status(404).send("User not found");
        }
      })
      .catch((err) => next(err));
  },

  // eslint-disable-next-line consistent-return
  createUser: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // eslint-disable-next-line camelcase
    const { firstname, lastname, email, is_admin, bio, password } = req.body;

    const hashedPassword = await passwordHash(password);

    userModel
      .createOne({
        firstname,
        lastname,
        email,
        bio,
        // eslint-disable-next-line camelcase
        is_admin,
        password: hashedPassword,
      })
      .then((response) => {
        if (response.affectedRows !== 0) {
          userModel.findOne(response.insertId).then((result) =>
            res.status(201).send({
              message: "user created",
              id: result.insertId,
              email,
              firstname,
              lastname,
            })
          );
        } else {
          res.send("USER NOT CREATED");
        }
      })
      .catch((err) => next(err));
  },

  deleteUser: (req, res, next) => {
    const { id } = req.params;
    userModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`user ${id} not found`);
        }
        return res.status(200).send(`user ${id} deleted`);
      })
      .catch((err) => next(err));
  },

  updateImage: (req, res, next) => {
    // je récupere grâce à multer mon fichier dans req.file

    // je crée le chemin d'accès avec mon process.env pour la sécurité
    // et j'envoie en BDD grâce à mon model !

    const imgSrc = `${process.env.BACKEND_URL}/uploads/${req.file.filename}`;
    const { id } = req.params;

    userModel
      .updateImage(imgSrc, id)
      .then((response) => {
        if (response.affectedRows !== 0) {
          return res.status(200).send("image uploaded successfully");
        }

        return res.status(404).send("error uploading image");
      })
      .catch((err) => next(err));
    //
  },
  updateConnected: (req, res, next) => {
    const connect = true;
    const { id } = req.params;

    userModel
      .updateConnected(connect, id)
      .then((response) => {
        if (response.affectedRows !== 0) {
          return res.status(200).send("User connected");
        }

        return res.status(404).send("error connecting user");
      })
      .catch((err) => next(err));
  },
  updateDisconnect: (req, res, next) => {
    const disConnect = false;
    const { id } = req.params;

    userModel
      .updateDisconnect(disConnect, id)
      .then((response) => {
        if (response.affectedRows === 0) {
          return res.status(200).send("User disconnect");
        }

        return res.status(404).send("error connecting user");
      })
      .catch((err) => next(err));
  },
};

module.exports = userController;
