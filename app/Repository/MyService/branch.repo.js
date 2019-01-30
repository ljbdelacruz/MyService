const db = require('../../config/dbconfig.js');
const Branches = db.branches;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function BranchRepo(){
}
BranchRepo.prototype.getByCategoryID=function(sid, success, failed){
  Branches.findOne({
    where:{
      store_id:sid
    },
  }).then(branches=>{
    success(branches);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
BranchRepo.prototype.getByLocation=function(sid, long, lat, success, failed){
  Branches.findOne({
    where:{
      store_id:sid,
    },
  }).then(branches=>{
    success(branches);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}


BranchRepo.prototype.insert=function(cid, sid, priority){
  Branches.create({
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
