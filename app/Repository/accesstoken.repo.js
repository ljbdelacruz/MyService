const db = require('../config/dbconfig.js');
const AccessToken = db.accesstoken;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function AccessTokenRepo(){
}
AccessTokenRepo.prototype.findByID=function(user_id, token, application_id, success, failed){
  AccessToken.findOne({
    where:{
      user_id:user_id,
      token:token,
      application_id:application_id
    }
  }).then(at => {
    if (!at){
      failed(JSON.stringify({statusCode:404, description:"Not Found"}));
    }else{
      success(at);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
AccessTokenRepo.prototype.insert=function(user_id, token, time, application_id, success, failed){
  AccessToken.create({
    user_id:user_id,
    token:token,
    time: time,
    application_id:application_id
  }).then(role => {
    success(JSON.stringify({statusCode:200, description: "Roles Added!", data:role}));
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=AccessTokenRepo;
