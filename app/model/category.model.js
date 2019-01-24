module.exports = (sequelize, Sequelize) => {
	const Category = sequelize.define('category', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  description: {
		  type: Sequelize.STRING
	  },
    //this will determine which category data belongs to
	  applicationID: {
	  	  type: Sequelize.STRING
	  }
	});
	return Category;
}
