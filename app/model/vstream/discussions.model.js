module.exports = (sequelize, Sequelize) => {
	const Discussions = sequelize.define('discussions', {
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
    showID:{
      type: Sequelize.STRING
    },
    createdByUserID:{
      type: Sequelize.STRING
    },
    createdAt:{
      type:Sequelize.DATE
    },
    updatedAt:{
      type:Sequelize.DATE
    }
	});
	return Discussions;
}
