const db = require('../config/dbconfig.js');
const Category = db.category;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function CategoryRepo(){}
//find by id and application_id
CategoryRepo.prototype.findByID=function(id, application_id, success, failed){
  Category.findOne({
    where: {
      id: id,
      application_id: application_id,
    }
  }).then(category => {
    if (!category){
      failed(JSON.stringify({status:404, description:'User Not Found'}))
    }else{
      success(category);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
CategoryRepo.prototype.insert=function(description, application_id, success, failed){
  Category.create({
    description:description,
    applicationID:application_id
  }).then(category => {
    success(category);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=CategoryRepo;
