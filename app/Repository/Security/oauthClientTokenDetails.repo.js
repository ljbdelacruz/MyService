const db = require('../../config/dbconfig.js');
const OauthClientTokenDetails = db.oauthClientTokenDetails;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function VerificationCodeRepo(){
}
OauthClientTokenDetailsRepo.prototype.findByResourceID=function(resource_id, success, failed){
  OauthClientTokenDetails.findOne({
    where:{
      resource_id:resource_id,
    }
  }).then(oauthctd => {
    if (!oauthctd){
      failed(JSON.stringify({statusCode:404, description:"Not Found"}));
    }else{
      success(oauthctd);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
OauthClientTokenDetailsRepo.prototype.insert=function(id, resource_id, client_secret, scope, authorized_grant_type, web_server_direct_uri, authorities, access_token_validity, refresh_token_validity, success, failed){
  OauthClientTokenDetails.create({
    id:id,
    resource_id:resource_id,
    client_secret:client_secret,
    scope:scope,
    authorized_grant_type:authorized_grant_type,
    web_server_direct_uri:web_server_direct_uri,
    authorities:authorities,
    access_token_validity:access_token_validity,
    refresh_token_validity:refresh_token_validity
  }).then(oauthct => {
    success(oauthct)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=OauthClientTokenDetailsRepo;
