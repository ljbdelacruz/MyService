const db = require('../config/dbconfig.js');
const Role = db.role;
//Init Sequelize Operation
const Op = db.Sequelize.Op;

function RolesRepo(){
}
RolesRepo.prototype.findByID=function(id, success, failed){
  Role.findOne({
    where: {
      id: id,
    }
  }).then(role => {
    if(!role){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(role);
    }
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
RolesRepo.prototype.insert=function(name, description, success, failed){
  Role.create({
    name: firstname,
    description: lastname,
  }).then(role => {
    success(JSON.stringify({statusCode:200, description: "Roles Added!", data:role}));
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
RolesRepo.prototype.byApplicationID=function(appid, success, failed){
  Role.findOne({
    applicationid:appid
  }).then(roles=>{
    if (!roles){
      failed(JSON.stringify({statusCode:404, description:"data not found"}));
    }else{
      success(roles);
    }
  })
}







module.exports=RolesRepo;
