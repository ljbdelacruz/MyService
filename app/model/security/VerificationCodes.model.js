module.exports = (sequelize, Sequelize) => {
	const VerificationCodes = sequelize.define('verificationCodes', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  user_id: {
		  type: Sequelize.INTEGER
	  },
	  verificationCode: {
	  	  type: Sequelize.STRING
	  },
	  verificationToken: {
	  	  type: Sequelize.STRING
	  },
	  created_at: {
		  type: Sequelize.DATE
	  },
	  token_validity:{
		  type: Sequelize.DATE
	  }
	});
	return VerificationCodes;
}
