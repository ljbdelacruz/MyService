module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
	  firstname: {
		  type: Sequelize.STRING
	  },
	  lastname: {
		  type: Sequelize.STRING
	  },
	  mobile: {
		type: Sequelize.STRING,
		unique: true,
		required: true
	  },
	  email: {
		type: Sequelize.STRING,
		unique: true,
		required: false
	  },
	  password: {
		type: Sequelize.STRING
	  },
	  status: {
	  	allowNull: false,
	  	type: Sequelize.INTEGER
	  },
	  createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
	});

	return User;
}
