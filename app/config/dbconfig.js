//Load ENV Vars
const env = require('./global.js');
//Init Sequelize for ORM
const Sequelize = require('../../node_modules/sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  logging: env.debug,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
// db.user = require('../model/users.model.js')(sequelize, Sequelize);

// db.role = require('../model/role.model.js')(sequelize, Sequelize);
// db.verificationcode=require('../model/verificationCode.model.js')(sequelize, Sequelize);
// db.accesstoken=require('../model/token.model.js')(sequelize, Sequelize);
db.category=require('../model/category.model.js');
db.subcategory=require('../model/subCategory.model.js');
//myservice db
// db.stores=require('../model/myservice/stores.model.js')(sequelize, Sequelize);
// db.storeCategory=require('../model/myservice/storeCategory.model.js')(sequelize, Sequelize)
// db.branches=require('../model/myservice/branches.model.js')(sequelize, Sequelize);

//security
db.userProfile=require('../model/security/UserProfile.model.js')(sequelize, Sequelize);
db.userCredentials=require('../model/security/UserCredentials.model.js')(sequelize, Sequelize);
db.verificationCode=require('../model/security/VerificationCodes.model.js')(sequelize, Sequelize)
db.oAuthAccessToken=require('../model/security/OAuthAccessToken.model.js')(sequelize, Sequelize);
db.oAuthClientDetails=require('../model/security/OAuthClientDetails.model.js')(sequelize, Sequelize);
db.oAuthClientToken=require('../model/security/OAuthClientToken.model.js')(sequelize, Sequelize);
db.oAuthCode=require('../model/security/OAuthCode.model.js')(sequelize, Sequelize);
db.oAuthRefreshToken=require('../model/security/OAuthRefreshToken.model.js')(sequelize, Sequelize);
//borutoStreamer
db.shows=require('../model/vstream/shows.model.js')(sequelize, Sequelize);
db.videoURL=require('../model/vstream/videoURL.model.js')(sequelize, Sequelize);
db.genre=require('../model/vstream/genre.model.js')(sequelize, Sequelize);
db.showGenre=require('../model/vstream/showGenre.model.js')(sequelize, Sequelize);
db.showReview=require('../model/vstream/showreview.model.js')(sequelize, Sequelize);



//Relationship ORM
//Users and roles
// db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
// db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
//Category and subCategory
// db.subcategory.belongsToMany(db.category, { through: 'category_sub', foreignKey: 'subCategoryID', otherKey: 'categoryID'})
// db.category.belongsToMany(db.subcategory, { through: 'category_sub', foreignKey: 'categoryID', otherKey: 'subCategoryID'})
//Stores and Category
// db.category.belongsToMany(db.stores, {through: 'store_category', foreignKey: 'categoryID', otherKey: 'storeID'})





module.exports = db;
