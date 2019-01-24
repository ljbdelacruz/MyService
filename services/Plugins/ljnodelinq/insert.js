
//connection=mysqlConfig
function InsertFunc(connection){
    InsertFunc.prototype.connections=connection;
}
InsertFunc.prototype.Insert=function(tableProp, values, success, failed){
    console.log("Insert nodelinq func");
    InsertFunc.prototype.connections.query("INSERT INTO "+tableProp+" "+values, function(err, res, field){
        if (err == null){
            success(res, field);
        }else{
            failed(err);
        }
    })
}
module.exports=InsertFunc;