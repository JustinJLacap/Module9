const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// http://localhost:8081/api/users/
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

// http://localhost:8081/api/users/create
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req, res);
})

// http://localhost:8081/api/users/:id
router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res);
})

// http://localhost:8081/api/users/:id
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
})
    
 module.exports = router;