const db = require('../config/db.config.js');
const config = require('../config/config.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

// User table
const User = db.user;

// Save new user detail in database
exports.signup = (req, res) => {	
	User.create({
		full_name: req.body.full_name,
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8)
	}).then(user => {
		res.send({
			status: 1,
			message: "User registered successfully!"
		});
	}).catch(err => {
		res.status(500).send({
			status: 0,
			message: err
		});
	});
}

exports.signin = (req, res) => {
	User.findOne({
		where: {
			username: req.body.username
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send({
				status: 0, 
				message: "User not found!"
			});
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ 
				status: 0, 
				message: "Invalid password!" 
			});
		}
		
		var token = jwt.sign({ id: user.id }, config.secret, {
		  expiresIn: 3600 // expires in 1 hours
		});
		
		res.status(200).send({ 
			status: 1, 
			accessToken: token,
			message: "User login successfully!" 
		});
		
	}).catch(err => {
		res.status(500).send({
			status: 0, 
			message: err
		});
	});
}