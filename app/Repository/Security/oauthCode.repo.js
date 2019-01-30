const db = require('../../config/dbconfig.js');
const OAuthCode = db.oauthCode;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function VerificationCodeRepo(){
}
OAuthCodeRepo.prototype.findByAuthentication=function(authentication, success, failed){
  OAuthCode.findOne({
    where:{
      authentication:authentication,
    }
  }).then(oauthc => {
    if (!oauthc){
      failed(JSON.stringify({statusCode:404, description:"Not Found"}));
    }else{
      success(oauthc);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
OAuthCodeRepo.prototype.insert=function(id, code, authentication, success, failed){
  OAuthCode.create({
    id:id,
    code:code,
    authentication:authentication
  }).then(oauthc => {
    success(oauthc)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=OAuthCodeRepo;
