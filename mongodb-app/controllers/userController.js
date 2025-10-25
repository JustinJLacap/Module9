"use strict";

const Models = require("../models");

const getUsers = (res) => {
    Models.User.find({})
        .then(data => {
            res.status(200);
            res.json({ result: 200, data: data })
        })
        .catch(err => {
            console.log(err);
            res.status(500);
            res.json({ result: 500, error: err.message })
        })
}
const createUser = (req, res) => {
    console.log("createUser Controller:data", req.body);
    new Models.User(req.body)
        .then(data => {
            res.status(200);
            res.json({ result: 200, data: data })
        })
        .catch(err => {
            console.log(err);
            res.status(500);
            res.json({ result: 500, error: err.message })
        })
}

const updateUser = (req, res) => {
    console.log("updateUser Controller:", req.params.id, req.body);
    Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
          .then(data => {
            res.status(200);
            res.json({ result: 200, data: data })
        })
        .catch(err => {
            console.log(err);
            res.status(500);
            res.json({ result: 500, error: err.message })
        })
}


const deleteUser = (req, res) => {
    Models.User.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200);
            res.json({ result: 200, data: data })
        })
        .catch(err => {
            console.log(err);
            res.status(500);
            res.json({ result: 500, error: err.message })
        })
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}