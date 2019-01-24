const db = require('../../config/dbconfig.js');
const StoreCategory = db.storeCategory;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function StoreCategoryRepo(){
}
StoreCategoryRepo.prototype.getByCategoryID=function(cid, success, failed){
  StoreCategory.findOne({
    where:{
      categoryID:cid
    },
    order: sequelize.literal('max(priority) DESC')
  }).then(sc=>{
    success(sc);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
StoreCategoryRepo.prototype.insert=function(cid, sid, priority){
  StoreCategory.create({
    categoryID:cid,
    storeID:sid,
    priority:priority
  }).then(data => {
    success(data);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}



module.exports=StoreCategoryRepo;
