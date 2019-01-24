const db = require('../config/dbconfig.js');
const VerificationCode = db.verificationcode;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function VerificationCodeRepo(){
}
//find VC
VerificationCodeRepo.prototype.login=function(user_id, code, success, failed){
  VerificationCode.findOne({
    where: {
      user_id: user_id,
      code: code,
    }
  }).then(vc => {
    if (!vc){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }
    success(JSON.stringify(vc));
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
//inserts VC
VerificationCodeRepo.prototype.insertUser=function(user_id, code, validated, success, failed){
  	VerificationCode.create({
      user_id: user_id,
      code: code,
      validated: validated
    }).then(vc => {
      success(vc);
  	}).catch(err => {
      failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  	})
}
//updates VC
VerificationCodeRepo.prototype.update=function(object, success, failed){
  VerificationCode.findOne({
    where: {id: object.id},
    attributes: ['id', 'user_id', 'code', 'validated'],
  }).then(vc =>{
      vc.update(
      object
    ).then(vc =>{
      success(vc);
      // success(JSON.stringify({statusCode:200, "data": user, "status": 'OK'}))
    }).catch(err => {
      failed(JSON.stringify({statusCode:500, "description": "Can not update user","error": err}))
    })
  }).catch(err => {
    failed(JSON.stringify({statusCode:500, "description": "Can not update user or user does not exists","error": err}))
  })
}



module.exports=VerificationCodeRepo;
