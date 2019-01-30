const db = require('../../config/dbconfig.js');
const OAuthAccessToken = db.oauthAccessToken;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function VerificationCodeRepo(){
}
OAuthAccessTokenRepo.prototype.findByAuthenticationID=function(id, success, failed){
  OAuthAccessToken.findOne({
    where:{
      id:id,
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
OAuthAccessTokenRepo.prototype.insert=function(id, token, authentication_id, username, client_id, authentication, refresh_token, success, failed){
  OAuthAccessToken.create({
    id:id,
    token:token,
    authentication_id:authentication_id,
    username:username,
    client_id:client_id,
    authentication:authentication,
    refresh_token:refresh_token
  }).then(oauthc => {
    success(oauthc)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=OAuthAccessTokenRepo;
