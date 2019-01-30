module.exports = (sequelize, Sequelize) => {
	const BranchMenu = sequelize.define('branchMenu', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement:true,
	  },
	  branch_id:{
		type: Sequelize.INTEGER,
	  },
	  title:{
		type: Sequelize.STRING,
	  },
	  description:{
		type: Sequelize.STRING,
	  },
	  price:{
		type: Sequelize.FLOAT,
	  },
	  status:{
		type: Sequelize.INTEGER
	  }
	});
	return BranchMenu;
}


//massage = BranchMenu.where(x=>x.title.contains('massage'))
//get list of store menu and request
// is near the users prefered location then return those stores
