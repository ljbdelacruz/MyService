const db = require('../../config/dbconfig.js');
const OauthClientToken = db.oauthClientToken;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function VerificationCodeRepo(){
}
OauthClientTokenRepo.prototype.findByAuthentication=function(authentication, success, failed){
  OauthClientToken.findOne({
    where:{
      authentication:authentication,
    }
  }).then(oauthct => {
    if (!oauthct){
      failed(JSON.stringify({statusCode:404, description:"Not Found"}));
    }else{
      success(oauthct);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
OauthClientTokenRepo.prototype.insert=function(id, token, authentication_id, username, client_id, success, failed){
  OauthClientToken.create({
    id:id,
    token:token,
    authentication_id:authentication_id,
    username:username,
    client_id:client_id
  }).then(oauthct => {
    success(oauthct)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=OauthClientTokenRepo;
