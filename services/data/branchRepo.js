var objects=require('../response/commonResponse')
var connections=require('./mysqlconfig')
var object=require('../response/commonResponse')
function BranchRepo(selectFunc, insertFunc){
    BranchRepo.prototype.selectFunc=selectFunc;
    BranchRepo.prototype.insertFunc=insertFunc;
}
BranchRepo.prototype.GetByStoreID=function(id, success, failed){
  BranchRepo.prototype.selectFunc.prototype.selectCondition("Branch", " Branch.store_id == "+id,
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}
