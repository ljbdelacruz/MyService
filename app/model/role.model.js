module.exports = (sequelize, Sequelize) => {
	const Role = sequelize.define('roles', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  description: {
	  	  type: Sequelize.STRING
	  },
		applicationid: {
			type: Sequelize.STRING
		}
	});
	return Role;
}
