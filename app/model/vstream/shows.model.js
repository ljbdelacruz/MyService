module.exports = (sequelize, Sequelize) => {
	const Shows = sequelize.define('shows', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  title:{
		  type: Sequelize.STRING
	  },
	  description: {
	  	  type: Sequelize.STRING
	  },
    profileImage: {
        type: Sequelize.STRING
    },
		videoPromo:{
			type: Sequelize.STRING
		},
		isSeries: {
        type: Sequelize.INTEGER
    },
	});
	return Shows;
}
