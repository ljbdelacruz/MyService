module.exports = (sequelize, Sequelize) => {
	const VideoURL = sequelize.define('videoURL', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
		title:{
			type:Sequelize.STRING
		},
		summary:{
			type:Sequelize.STRING
		},
	  shows_id:{
		  type: Sequelize.INTEGER
	  },
	  url: {
	  	  type: Sequelize.STRING
	  },
    previewImage: {
        type: Sequelize.STRING
    }
	});
	return VideoURL;
}
