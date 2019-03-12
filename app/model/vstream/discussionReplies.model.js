module.exports = (sequelize, Sequelize) => {
	const DiscussionReplies = sequelize.define('discussionReplies', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
    discussionID:{
      type: Sequelize.INTEGER
    },
    upVotes:{
      type: Sequelize.INTEGER
    },
    downVotes:{
      type:Sequelize.INTEGER
    },
    createdAt:{
      type:Sequelize.DATE
    },
    updatedAt:{
      type:Sequelize.DATE
    }
	});
	return DiscussionReplies;
}
