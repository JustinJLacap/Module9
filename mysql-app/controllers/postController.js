"user strict";

const { Model } = require("sequelize");
const Models = require("../models");

const getPosts = (res) => {
  Models.Post.findAll({})
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

const getUsersPosts = (req, res) => {
  Models.Post.findAll( { where: {userId: req.params.uid},
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

const createPost = (req, res) => {
  console.log("createPost Controller", req.body);
  Models.Post.create(req.body)
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
  getPosts,
  getUsersPosts,
  createPost
}









