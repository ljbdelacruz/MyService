module.exports = (sequelize, Sequelize) => {
	const ShowReview = sequelize.define('showReview', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
    user_id:{
      type:Sequelize.INTEGER
    },
    review:{
      type:Sequelize.STRING
    },
    created_at:{
      type:Sequelize.DATE
    },
    star:{
      type:Sequelize.INTEGER
    }
	});
	return ShowReview;
}
