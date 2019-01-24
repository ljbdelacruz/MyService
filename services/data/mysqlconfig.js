var mysql=require('../../node_modules/node_modules/mysql');
var connections=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'soyamilk_05',
    database: 'myservicedb'
})
connections.connect(function(err) {
//    if (err) throw err;
    console.log("Connected!");
});
module.exports=connections;

