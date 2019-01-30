module.exports = (sequelize, Sequelize) => {
	const OAuthRefreshToken = sequelize.define('oauth_refresh_token', {
	  id: {
        type: Sequelize.STRING,
        primaryKey: true
	  },
	  //uuid generated bcrypt
	  token: {
			type: Sequelize.STRING
	  },
	  authentication:{
			type: Sequelize.STRING
	  }
	  //uuid generated bcrypt
	});
	return OAuthRefreshToken;
}
