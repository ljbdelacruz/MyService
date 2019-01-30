const db = require('../../config/dbconfig.js');
const UserCredentials = db.userCredentials;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function UserCredentialsRepo(){
}
UserCredentialsRepo.prototype.findByID=function(user_id, success, failed){
  UserCredentials.findOne({
    where:{
      user_id:user_id
    }
  }).then(userCredentials => {
    if (!userCredentials){
      failed(JSON.stringify({statusCode:404, description:"Not Found"}));
    }else{
      success(userCredentials);
    }
  }).catch(err => {
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
UserCredentialsRepo.prototype.insert=function(user_id, password, salt, type, success, failed){
  UserCredentials.create({
    user_id:user_id,
    password:password,
    salt: salt,
    type:type
  }).then(userCredentials => {
    success(userCredentials)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=UserCredentialsRepo;
