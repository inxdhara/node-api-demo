const db = require('../config/db.config.js');
const User = db.user;
const Op = db.Sequelize.Op

// Get user detail by user id
exports.userContent = (req, res) => {
	User.findOne({
		where: {id: req.userId},
		attributes: ['full_name', 'username', 'email'],
	}).then(user => {
		res.status(200).json({
			status: 1, 
			message: "success",
			data: user
		});
	}).catch(err => {
		res.status(500).json({
			status: 0,
			message: err
		});
	})
}

// Get all user data
exports.allUserContent = (req, res) => {
	User.findAll({
		where: {
			id: {
				[Op.ne]: req.userId,	
			}
		},
		attributes: ['full_name', 'username', 'email'],
	}).then(users => {
		res.status(200).json({
			status: 1, 
			message: "success",
			data: users
		});
	}).catch(err => {
		res.status(500).json({
			status: 0,
			message: err
		});
	})
}