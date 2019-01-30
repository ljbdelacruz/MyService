const db = require('../../config/dbconfig.js');
const UserProfile = db.userProfile;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function UserProfileRepo(){
}
UserProfileRepo.prototype.findByEmail=function(email, status, success, failed){
  UserProfile.findOne({
    where:{
      email:email,
      status:status
    }
  }).then(userProfile => {
    if (!userProfile){
      failed(JSON.stringify({statusCode:404, description:"Not Found"}));
    }else{
      success(userProfile);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
UserProfileRepo.prototype.insert=function(firstname, lastname, email, contactNumber, status, success, failed){
  UserProfile.create({
    firstname:firstname,
    lastname:lastname,
    email:email,
    contactNumber:contactNumber,
    status:status
  }).then(userProfile => {
    success(userProfile)
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=UserProfileRepo;
