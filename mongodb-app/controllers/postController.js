'use strict';

const Models = require("../models");

const getUserPosts = (req, res) => {
    Models.Post.find({ userID: req.params.uid }).populate({ path: 'userID' })
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

    const createPost = (req, res) => {
        console.log("createPost Controller:data", req.body);
        new Models.Post(req.body)
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
        createPost,
        getUserPosts
    }