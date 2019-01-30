module.exports = (sequelize, Sequelize) => {
	const Genre = sequelize.define('genre', {
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
	});
	return Genre;
}
