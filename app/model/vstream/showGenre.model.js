module.exports = (sequelize, Sequelize) => {
	const ShowGenre = sequelize.define('showGenre', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  shows_id:{
		  type: Sequelize.INTEGER
	  },
	  genre_id: {
	  	  type: Sequelize.INTEGER
	  },
	});
	return ShowGenre;
}
