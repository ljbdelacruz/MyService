
module.exports = (sequelize, Sequelize) => {
	const AccessToken = sequelize.define('accesstoken', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  user_id:{
		  type: Sequelize.INTEGER
	  },
	  token: {
	  	  type: Sequelize.STRING
	  },
    time: {
        type: Sequelize.INTEGER
    },
		application_id:{
			type: Sequelize.STRING
		}
	});

	return AccessToken;
}
