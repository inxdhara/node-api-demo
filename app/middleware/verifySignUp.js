const db = require('../config/db.config.js');
const config = require('../config/config.js');
const User = db.user;

checkDuplicateUserNameOrEmail = (req, res, next) => {
	// -> Check Username is already in use
	User.findOne({
		where: {
			username: req.body.username
		} 
	}).then(user => {
		if(user){
			res.status(400).send({
				status: 0,
				message: "Username is already exist!"
			});
			return;
		}
		
		// -> Check Email is already in use
		User.findOne({ 
			where: {
				email: req.body.email
			} 
		}).then(user => {
			if(user){
				res.status(400).send({
					status: 0,
					message: "Email is already exist!"
				});
				return;
			}				
			next();
		});
	});
}

const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;

module.exports = signUpVerify;