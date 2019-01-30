const db = require('../../config/dbconfig.js');
const BranchMenu = db.branchMenu;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function BranchMenuRepo(){
}
BranchMenuRepo.prototype.getByBranchID=function(id, success, failed){
  BranchMenu.findOne({
    where:{
      branch_id:id
    },
  }).then(branches=>{
    success(branches);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
BranchMenuRepo.prototype.insert=function(branch_id, title, description, price, status, success, failed){
  BranchMenu.create({
    branch_id:branch_id,
    title:title,
    description:description,
    price:price,
    status:status
  }).then(data => {
    success(data);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}



module.exports=BranchMenuRepo;
