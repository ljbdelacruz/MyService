const db = require('../config/dbconfig.js');
const SubCategory = db.category;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function SubCategoryRepo(){}
//find by id and application_id
SubCategoryRepo.prototype.findByID=function(id, cat_id, success, failed){
  SubCategory.findOne({
    where: {
      id: id,
      categoryID: cat_id,
    }
  }).then(scategory => {
    if (!scategory){
      failed(JSON.stringify({status:404, description:'User Not Found'}))
    }else{
      success(scategory);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
SubCategoryRepo.prototype.findByCategory=function(id, success, failed){
  SubCategory.findOne({
    where: {
      categoryID: id,
    }
  }).then(scategory => {
    if (!scategory){
      failed(JSON.stringify({status:404, description:'User Not Found'}))
    }else{
      success(scategory);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
SubCategoryRepo.prototype.insert=function(description, categoryID, success, failed){
  SubCategory.create({
    description:description,
    categoryID:categoryID
  }).then(category => {
    success(category);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}



module.exports=SubCategoryRepo;
