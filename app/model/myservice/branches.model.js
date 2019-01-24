module.exports = (sequelize, Sequelize) => {
	const Branches = sequelize.define('branches', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  store_id:{
		  type: Sequelize.INTEGER
	  },
	  longitude: {
	  	  type: Sequelize.FLOAT
	  },
    latitude: {
        type: Sequelize.FLOAT
    }
	});

	return Branches;
}
