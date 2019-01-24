module.exports = (sequelize, Sequelize) => {
	const Stores = sequelize.define('stores', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  description: {
	  	  type: Sequelize.STRING
	  },
    storeLogo:{
      type:Sequelize.STRING
    },
    category_id:{
      type:Sequelize.INTEGER
    }
	});
	return Stores;
}
