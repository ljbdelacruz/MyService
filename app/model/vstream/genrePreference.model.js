module.exports = (sequelize, Sequelize) => {
	const Genre = sequelize.define('genre', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  userID:{
		  type: Sequelize.INTEGER
	  },
	  genreID: {
	  	  type: Sequelize.INTEGER
	  },
	});
	return Genre;
}
