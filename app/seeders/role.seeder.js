const db = require('../config/dbconfig.js');
const Role = db.role;

exports.seed = () => {
	Role.create({
		id: 1,
		name: "ADMIN"
	});

	Role.create({
		id: 2,
		name: "MODERATOR"
	});

	Role.create({
		id: 3,
		name: "USER"
	});
}
