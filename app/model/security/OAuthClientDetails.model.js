module.exports = (sequelize, Sequelize) => {
	const OAuthClientDetails = sequelize.define('oauthClientDetails', {
	  id: {
        type: Sequelize.STRING,
        primaryKey: true
	  },
	  resource_id: {
		type: Sequelize.STRING
	  },
	  client_secret: {
		type: Sequelize.STRING
	  },
	  scope: {
	    type: Sequelize.STRING
	  },
	  authorized_grant_type: {
	    type: Sequelize.STRING
	  },
	  web_server_direct_uri: {
	    type: Sequelize.STRING
	  },
	  authorities: {
	    type: Sequelize.STRING
	  },
	  access_token_validity:{
	    type: Sequelize.STRING
	  },
	  refresh_token_validity:{
	    type: Sequelize.STRING
	  },
	});
	return OAuthClientDetails;
}
