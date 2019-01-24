var userAPI=require('./usersAPI');
var storesAPI=require('./storesAPI')
var category=require('./categoryRepo')
var connection=require('../Plugins/ljnodelinq');
//setup api db connector
userAPI(connection.selectFunc);
storesAPI(connection.selectFunc, connection.insertFunc);
category(connection.selectFunc, connection.insertFunc);
module.exports={
    userAPI:userAPI, 
    storesAPI:storesAPI,
    categoryRepo:category
}






