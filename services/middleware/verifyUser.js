//Load Config
const db = require('../config/db.config.js');
const config = require('../config/config.js');

//Load Role List
const ROLEs = config.ROLEs;

//Load Models
const User = db.user;
const Role = db.role;

//Registration Validation
checkDuplicateMobileOrEmail = (req, res, next) =>
{
	//Check if mobile is in use
	User.findOne(
	{
		where:
		{
			mobile: req.body.mobile
		}
	}).then(user =>
	{
		if (user)
		{
			res.status(400).send("Fail -> Mobile is already taken!");
			return;
		}

		//Check if email is in use
		User.findOne(
		{
			where:
			{
				email: req.body.email
			}
		}).then(user =>
		{
			if (user)
			{
				res.status(400).send("Fail -> Email is already in use!");
				return;
			}

			next();
		});
	});
}

//Check if Role is valid
checkRolesExisted = (req, res, next) =>
{
	for (let i = 0; i < req.body.roles.length; i++)
	{
		if (!ROLEs.includes(req.body.roles[i].toUpperCase()))
		{
			res.status(400).send("Fail -> Does NOT exist Role = " + req.body.roles[i]);
			return;
		}
	}
	next();
}

const verifyUser = {};

verifyUser.checkDuplicateMobileOrEmail = checkDuplicateMobileOrEmail;
verifyUser.checkRolesExisted = checkRolesExisted;

module.exports = verifyUser;