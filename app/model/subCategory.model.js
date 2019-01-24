module.exports = (sequelize, Sequelize) => {
	const SubCategory = sequelize.define('subCategory', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  description: {
		  type: Sequelize.STRING
	  },
	  categoryID: {
	  	  type: Sequelize.INTEGER
	  },
	});
	return SubCategory;
}
