var mysqlConfig=require('./mysqlconfig');
var selectFunc=require('./select')
var insertFunc=require('./insert');

module.exports={
    mysqlConfig:mysqlConfig,
    selectFunc:selectFunc,
    insertFunc:insertFunc
}