module.exports = (sequelize, Sequelize) => {
	const GenrePreference = sequelize.define('genrePreference', {
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
	return GenrePreference;
}
