const db = require('../../config/dbconfig.js');
const UserDevices = db.userDevice;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function UserDevicesRepo(){
}
UserDevicesRepo.prototype.findByEmail=function(user_id, success, failed){
  UserDevices.findOne({
    where:{
      user_id:user_id
    }
  }).then(userProfile => {
    if (!userProfile){
      failed(JSON.stringify({statusCode:404, description:"Not Found"}));
    }else{
      success(userProfile);
    }
  }).catch(err =>{
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
UserDevicesRepo.prototype.insert=function(fcm, user_id, device_id, application_id, success, failed){
  UserDevices.create({
    fcm:fcm,
    user_id:user_id,
    device_id:device_id,
    application_id:application_id
  }).then(userProfile => {
    success(userProfile)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=UserDevicesRepo;
