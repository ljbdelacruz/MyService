//Authentication
function UsersAPI(selectFunc){
    UsersAPI.prototype.selectFunc=selectFunc
}
UsersAPI.prototype.authenticate=function(email, password, success, failed){
    UsersAPI.prototype.selectFunc.prototype.selectCondition("Users", "Users.email='"+email+"' && Users.password='"+password+"' LIMIT 1", function(row, fields){
        if (row.length > 0){
            success(row);
        }else{
            failed("User does not exist")
        }
    }, function(err){
        failed();
    })
}
module.exports=UsersAPI;
