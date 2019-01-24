
module.exports = (sequelize, Sequelize) => {
	const VerificationCode = sequelize.define('verificationcode', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  user_id:{
		  type: Sequelize.INTEGER
	  },
	  code: {
	  	  type: Sequelize.STRING
	  },
    validated: {
        type: Sequelize.INTEGER
    }
	});

	return VerificationCode;
}
