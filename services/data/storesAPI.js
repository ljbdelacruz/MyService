var objects=require('../response/commonResponse')
var connections=require('./mysqlconfig')
var object=require('../response/commonResponse')

function StoresAPI(selectFunc, insertFunc){
    StoresAPI.prototype.selectFunc=selectFunc;
    StoresAPI.prototype.insertFunc=insertFunc;
}
StoresAPI.prototype.GetByName=function(name, limit, success, failed){
    StoresAPI.prototype.selectFunc.prototype.selectCondition("Stores", "Stores.name='"+name+"' LIMIT "+limit, function(row, fields){
        console.log(row);
    }, function(err){
        console.log(err);
    })
}
StoresAPI.prototype.GetByCategoryID=function(id, success, failed){
    StoresAPI.prototype.selectFunc.prototype.selectCondition("Stores", "Stores.category_id="+id, function(row, fields){
        success(row);
    }, function(err){
        failed(err);
    })
}

StoresAPI.prototype.New=function(name, description, storeLogo, category_id, success, failed){
    StoresAPI.prototype.insertFunc.prototype.Insert("stores(name, description, storeLogo, category_id)", "values('"+name+"', '"+description+"', '"+storeLogo+"', "+category_id+")", function(row, fields){
        success();
    }, function(err){
        failed(err);
    })
}
StoresAPI.prototype.NewObject=function(object, success, failed){
    StoresAPI.prototype.New(object.name, object.description, object.storeLogo, object.category_id, success, failed);
}




module.exports=StoresAPI;