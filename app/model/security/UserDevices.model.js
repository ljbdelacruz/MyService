module.exports = (sequelize, Sequelize) => {
	const UserDevices = sequelize.define('userDevices', {
	  id: {
        type: Sequelize.INTEGER,
				autoIncrement: true,
        primaryKey: true
	  },
    user_id:{
        type:Sequelize.INTEGER
    },
    fcm:{
      type: Sequelize.STRING
    },
    device_id: {
      type:Sequelize.STRING
    },
    application_id:{
      type: Sequelize.STRING
    }
	});

	return UserDevices;
}
