const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// http://localhost:8081/api/comments/
router.get('/', (req, res) => {
    Controllers.commentController.getComments(res);
})

// http://localhost:8081/api/comments/create
router.post('/create', (req, res) => {
    console.log(req.body);
    Controllers.commentController.createComment(req, res);
})

// http://localhost:8081/api/comments/:uid
router.get('/:uid', (req, res) => {
    Controllers.commentController.getUsersComments(req,res);
})


module.exports = router;