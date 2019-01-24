module.exports = (sequelize, Sequelize) => {
	const StoreCategory = sequelize.define('storeCategory', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  categoryID: {
		  type: Sequelize.INTEGER
	  },
	  storeID:{
	  	  type: Sequelize.INTEGER
	  },
    priority:{
      type:Sequelize.INTEGER
    }
	});
	return StoreCategory;
}
