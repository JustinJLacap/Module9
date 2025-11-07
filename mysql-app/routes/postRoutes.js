const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// http://localhost:8081/api/posts/
router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
})

// http://localhost:8081/api/posts/create
router.post('/create', (req, res) => {
    Controllers.postController.createPost(req, res);
})

// http://localhost:8081/api/posts/:uid
router.get('/:uid', (req, res) => {
    Controllers.postController.getUsersPosts(req,res);
})


module.exports = router;