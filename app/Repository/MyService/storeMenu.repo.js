const db = require('../../config/dbconfig.js');
const StoreMenu = db.storeMenu;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function StoreMenuRepo(){
}
StoreMenuRepo.prototype.getByBranchID=function(id, success, failed){
  StoreMenu.findOne({
    where:{
      branch_id:id
    },
  }).then(branches=>{
    success(branches);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
StoreMenuRepo.prototype.insert=function(branch_id, title, description, price, status, isAvailable, success, failed){
  StoreMenu.create({
    branch_id:branch_id,
    title:title,
    description:description,
    price:price,
    status:status,
    isAvailable:isAvailable
  }).then(data => {
    success(data);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}



module.exports=StoreMenuRepo;
