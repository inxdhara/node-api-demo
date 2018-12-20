const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const db = require('../config/db.config.js');

verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token'];
  
	if (!token){
		return res.status(403).send({ 
			status: 0, 
			message: 'No token provided.' 
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
				status: 0, 
				message: err
			});
		}		
		req.userId = decoded.id;
		next();
	});
}

const authJwt = {};
authJwt.verifyToken = verifyToken;

module.exports = authJwt;