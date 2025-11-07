let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// http://localhost:8080/api/comments/create
router.post('/create', (req, res) => {
    Controllers.commentController.createComment(req, res);
})

// http://localhost:8080/api/comments/:uid
router.get('/:uid', (req, res) => {
    Controllers.commentController.getUserComments(req, res);
})

module.exports = router;
