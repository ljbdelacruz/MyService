module.exports = (sequelize, Sequelize) => {
	const OAuthAccessToken = sequelize.define('oauthAccessToken', {
	  id: {
        type: Sequelize.STRING,
        primaryKey: true
	  },
	  //
	  token: {
			type: Sequelize.STRING
	  },
	  authentication_id: {
			type: Sequelize.STRING
	  },
	  username: {
	    type: Sequelize.STRING
	  },
	  client_id: {
	    type: Sequelize.STRING
	  },
	  authentication: {
	    type: Sequelize.STRING
	  },
	  refresh_token: {
	    type: Sequelize.STRING
	  }
	});
	return OAuthAccessToken;
}
