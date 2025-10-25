const { post } = require('../routes/userRoutes');

module.exports = {
    userController: require('./userController'),
    postController: require('./postController')
};