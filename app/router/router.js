const verifySignUp = require('../middleware/verifySignUp');
const authJwt = require('../middleware/verifyJwtToken');
const userController = require('../controller/user.controller.js');
const authController = require('../controller/auth.controller.js');

module.exports = function(app) {
	app.post('/api/signup', [verifySignUp.checkDuplicateUserNameOrEmail], authController.signup);
	app.post('/api/signin', authController.signin);
	app.get('/api/user', [authJwt.verifyToken], userController.userContent);
}