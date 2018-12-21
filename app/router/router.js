const verifySignUp = require('../middleware/verifySignUp');
const authJwt = require('../middleware/verifyJwtToken');
const userController = require('../controller/user.controller.js');
const newsController = require('../controller/news.controller.js');
const authController = require('../controller/auth.controller.js');
const CandidatePoliticalCareerController = require('../controller/candidate_political_career.controller');
const Event = require('../controller/event.controller');

module.exports = function(app) {
	// Register user
	app.post('/api/signup', verifySignUp.checkDuplicateUserNameOrEmail, authController.signup);

	// Login user
	app.post('/api/signin', authController.signin);

	// Get user data by id
	app.get('/api/getUserById', [authJwt.verifyToken], userController.userContent);

	// Get all users data
	app.get('/api/getAllUserData', [authJwt.verifyToken], userController.allUserContent);

	// Get user news listing data
	app.post('/api/home/news', [authJwt.verifyToken], newsController.newsContent);

	// Get user news listing data
	app.post('/api/home/news', [authJwt.verifyToken], newsController.newsContent);

	// Get candidate_political_career detail data
	app.post('/api/candidate/social-activities', [authJwt.verifyToken], CandidatePoliticalCareerController.candidatePoliticalCareerContent);

	// Get candidate_political_career detail data
	app.post('/api/event-listing', [authJwt.verifyToken], Event.newsContent);
}