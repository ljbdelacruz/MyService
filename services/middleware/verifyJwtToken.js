//Load Config
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const db = require('../config/db.config.js');

//Load Models
const Role = db.role;
const User = db.user;

//Check if JWT is valid
verifyToken = (req, res, next) =>
{
	let token = req.headers['authorization'];

	if (!token)
	{
		return res.status(403).send(
		{
			auth: false,
			message: 'No token provided.'
		});
	}

	jwt.verify(token, config.secret, (err, decoded) =>
	{
		if (err)
		{
			return res.status(500).send(
			{
				auth: false,
				message: 'Fail to Authorization. Error -> ' + err
			});
		}
		req.userId = decoded.id;
		next();
	});
}

//Admin Role Filtering
isAdmin = (req, res, next) => {
	User.findByPk(req.userId)
		.then(user =>
		{
			user.getRoles().then(roles =>
			{
				for (let i = 0; i < roles.length; i++)
				{
					if (roles[i].name.toUpperCase() === "ADMIN")
					{
						next();
						return;
					}
				}

				res.status(403).send("Require Admin Role!");
				return;
			})
		})
}

//Moderator Role Filtering
isModOrAdmin = (req, res, next) => {
	User.findByPk(req.userId)
		.then(user =>
		{
			user.getRoles().then(roles =>
			{
				for (let i = 0; i < roles.length; i++)
				{
					if (roles[i].name.toUpperCase() === "MODERATOR")
					{
						next();
						return;
					}

					if (roles[i].name.toUpperCase() === "ADMIN")
					{
						next();
						return;
					}
				}

				res.status(403).send("Require Moderator or Admin Roles!");
			})
		})
}

const authJwt = {};

authJwt.verifyToken = verifyToken;
authJwt.isAdmin = isAdmin;
authJwt.isModOrAdmin = isModOrAdmin;

module.exports = authJwt;