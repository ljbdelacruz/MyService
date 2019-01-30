module.exports = (sequelize, Sequelize) => {
	const OAuthClientToken = sequelize.define('oauth_client_token', {
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
	  username:{
			type: Sequelize.STRING
		},
	  //uuid generated bcrypt
	  client_id:{
			type: Sequelize.STRING
	  }
	});
	return OAuthClientToken;
}
