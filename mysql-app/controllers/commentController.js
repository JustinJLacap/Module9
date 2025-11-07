"user strict";

const { Model } = require("sequelize");
const Models = require("../models");

const getComments = (res) => {
  Models.Comment.findAll({})
    .then((data) => {
      res.status(200);
      res.json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({ result: 500, error: err.message });
    });
};

const getUsersComments = (req, res) => {
  Models.Comment.findAll( { where: {userId: req.params.uid},
    include: Models.User
  })
  .then((data) => {
      res.status(200);
      res.json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({ result: 500, error: err.message });
    });
}

const createComment = (req, res) => {
  console.log("createComment Controller", req.body);
  Models.Comment.create(req.body)
    .then((data) => {
      res.status(200);
      res.json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  getUsersComments,
  createComment
}