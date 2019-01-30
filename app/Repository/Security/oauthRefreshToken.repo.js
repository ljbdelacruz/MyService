const db = require('../../config/dbconfig.js');
const OAuthRefreshToken = db.oauthRefreshToken;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function OAuthRefreshTokenRepo(){
}
OAuthRefreshTokenRepo.prototype.findByUID=function(user_id, success, failed){
  OAuthRefreshToken.findOne({
    where:{
      user_id:user_id,
    }
  }).then(vc => {
    if (!vc){
      failed(JSON.stringify({statusCode:404, description:"Not Found"}));
    }else{
      success(vc);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
OAuthRefreshTokenRepo.prototype.insert=function(id, token, authentication, success, failed){
  OAuthRefreshToken.create({
    id:id,
    token:token,
    authentication:authentication
  }).then(oauthrt =>{
    success(oauthrt)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=OAuthRefreshTokenRepo;
