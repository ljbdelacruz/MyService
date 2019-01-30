const db = require('../../config/dbconfig.js');
const VerificationCode = db.verificationCode;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function VerificationCodeRepo(){
}
VerificationCodeRepo.prototype.findByUID=function(user_id, success, failed){
  VerificationCode.findOne({
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
VerificationCodeRepo.prototype.insert=function(user_id, verificationCode, verificationToken, created_at, token_validity, success, failed){
  VerificationCode.create({
    user_id:user_id,
    verificationCode:verificationCode,
    verificationToken:verificationToken,
    created_at:created_at,
    token_validity:token_validity
  }).then(vc => {
    success(vc)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=VerificationCodeRepo;
