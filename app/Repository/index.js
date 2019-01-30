const usersRepo=require('./users.repo.js');
const rolesRepo=require('./roles.repo.js');
const accessToken=require('./accesstoken.repo.js');
const verificationCode=require('./verificationCode.repo.js');
const category=require('./category.repo.js');
const subCategory=require('./subCategory.repo.js');
const storeCategory=require('./MyService/storeCategory.repo.js');

usersRepo();
rolesRepo();
accessToken();
verificationCode();
//category
category();
subCategory();
storeCategory();
const security=require('./Security');
const vstream=require('./vstream');
module.exports={
  usersRepo:usersRepo,
  rolesRepo:rolesRepo,
  accesstoken:accessToken,
  verificationCode:verificationCode,
  category:category,
  subCategory:subCategory,
  storeCategory:storeCategory,
  security:security,
  vstream:vstream
}


//logic - > getByCategory -> getByStores included on this category-> get branch on stores ->
//check if the branches is within the search parameter and the location of the user
