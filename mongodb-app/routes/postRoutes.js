let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// http://localhost:8080/api/posts/create
router.post('/create', (req, res) => {
    Controllers.postController.createPost(req, res);
})

// http://localhost:8080/api/posts/:uid
router.get('/:uid', (req, res) => {
    Controllers.postController.getUserPosts(req, res);
})

module.exports = router;
