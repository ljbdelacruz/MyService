module.exports = (sequelize, Sequelize) => {
	const UserCredentials = sequelize.define('userCredentials', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  user_id: {
		type: Sequelize.INTEGER
	  },
	  password: {
		  type: Sequelize.STRING
	  },
	  salt: {
	  	  type: Sequelize.STRING
	  },
	  type:{
		type: Sequelize.INTEGER
	  }
	});
	
	return UserCredentials;
}
