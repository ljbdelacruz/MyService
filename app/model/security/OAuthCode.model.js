module.exports = (sequelize, Sequelize) => {
	const OAuthCode = sequelize.define('oauth_code', {
	  id: {
        type: Sequelize.STRING,
        primaryKey: true
	  },
	  //
	  code: {
		type: Sequelize.STRING
	  },
	  authentication:{
		type: Sequelize.STRING
	  }
	  //uuid generated bcrypt
	});
	return OAuthCode;
}
