'use strict';

const Models = require("../models");

const getUserComments = (req, res) => {
    Models.Comment.find({ userID: req.params.uid }).populate({ path: 'userID' })
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

    const createComment = (req, res) => {
        console.log("createComment Controller:data", req.body);
        new Models.Comment(req.body)
            .save()
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
        createComment,
        getUserComments
    }