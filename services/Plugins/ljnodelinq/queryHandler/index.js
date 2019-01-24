
var insertFunc=require('../insert')
var selectFunc=require('../select')
function QueryHandler(connection){
    QueryHandler.prototype.insert=insertFunc(connection);
    QueryHandler.prototype.select=selectFunc(connection);        
}
module.exports=QueryHandler;



