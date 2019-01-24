var mysql=require('../../../node_modules/node_modules/mysql');

function MysqlConfig(host, user, password, db, success, failed){
    MysqlConfig.prototype.connections=mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: db
    });
    MysqlConfig.prototype.connections.connect(function(message){
        if (message == null) {
            console.log("Connected!");
            success(MysqlConfig.prototype.connections);
        }
        failed();
    })
}
MysqlConfig.prototype.GetConnection=function(success, failed){
}
module.exports=MysqlConfig;

