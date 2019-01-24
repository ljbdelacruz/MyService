var objects=require('../response/commonResponse')
var connections=require('./mysqlconfig')
var object=require('../response/commonResponse')
function CategoryRepo(selectFunc, insertFunc){
    CategoryRepo.prototype.selectFunc=selectFunc;
    CategoryRepo.prototype.insertFunc=insertFunc;
}
CategoryRepo.prototype.All=function(success, failed){
    CategoryRepo.prototype.selectFunc.prototype.selectAll("Category", function(row, fields){
        console.log(row); 
        success(row);       
    }, function(err){
        console.log(err);
        failed(err);
    })
}
module.exports=CategoryRepo;
