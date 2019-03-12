module.exports = (sequelize, Sequelize) => {
	const ShowVideoReview = sequelize.define('showVideoReview', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
    videoID:{
      type: Sequelize.INTEGER
    },
    showID:{
      type: Sequelize.INTEGER
    },
    review:{
      type:Sequelize.STRING
    },
    userID:{
      type:Sequelize.STRING
    },
    starReview:{
      type: Sequelize.INTEGER
    }
	});
	return ShowVideoReview;
}
