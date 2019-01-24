const db = require('../config/dbconfig.js');
const User=db.user;


exports.seed = () => {
	User.create({
		firstname: "lainel",
		lastname: "dela cruz",
		mobile: "09394242879",
		email: "ljbdelacruz123@gmail.com",
		password: "johnny05",
		status: 0,
	})
}
