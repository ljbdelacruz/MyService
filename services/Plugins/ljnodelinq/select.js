function SelectQuery(connection){
    //selectedQuery.prototype = makes the connection variable accessible to the prototype functionalities in the class
    SelectQuery.prototype.connection=connection;
}
SelectQuery.prototype.selectAll=function(table, success, failed){
    SelectQuery.prototype.connection.query("SELECT * FROM "+table+";", function(err, row, fields){
        if (err == null){
            success(row, fields);
        }else{
            failed(err);
        }
    })
}
SelectQuery.prototype.selectCondition=function(table, condition, success, failed){
    SelectQuery.prototype.connection.query("SELECT * FROM "+table+" WHERE "+condition, function(err, row, fields){
        if (err == null){
            success(row, fields);
        }else{
            failed(err);
        }
    })
}
SelectQuery.prototype.Limit=function(table, condition){
    SelectQuery.prototype.connection.query("SELECT * FROM "+table+" LIKE "+condition, function(err, row, fields){
        if (err == null){
            success(row, fields);
        }else{
            failed(err);
        }
    });
}
SelectQuery.prototype.Like=function(table, condition){
    SelectQuery.prototype.connection.query("SELECT * FROM "+table+" LIKE "+condition, function(err, row, fields){
        if (err == null){
            success(row, fields);
        }else{
            failed(err);
        }
    })
}
module.exports=SelectQuery;

