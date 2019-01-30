module.exports = (sequelize, Sequelize) => {
	const UserProfile = sequelize.define('userProfile', {
	  id: {
        type: Sequelize.INTEGER,
				autoIncrement: true,
        primaryKey: true
	  },
	  firstname: {
		  type: Sequelize.STRING
	  },
	  lastname: {
		  type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
	  },
	  contactNumber: {
		  type: Sequelize.STRING
	  },
	  status:{
		type: Sequelize.INTEGER
	  }
	});

	return UserProfile;
}
