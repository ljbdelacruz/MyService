const db = require('../config/dbconfig.js');
const User = db.user;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function UserRepo(){

}
//auth user
UserRepo.prototype.login=function(username, password, success, failed){
  User.findOne({
    where: {
      email: username,
      password: password,
    }
  }).then(user => {
    if (!user){
      failed(JSON.stringify({status:404, description:'User Not Found'}))
    }
    success(user);
  }).catch(err => {
    // res.status(500).send('Error -> ' + err);
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  });
}
//inserts user
UserRepo.prototype.insertUser=function(firstname, lastname, mobile, email, password, status, success, failed){
  	User.create({
      firstname: firstname,
      lastname: lastname,
      mobile: mobile,
      email: email,
      password: password,
      status: status,
    }).then(user => {
  			user.setRoles(3).then(() => {
          success(JSON.stringify({statusCode:200, description:"User registered successfully!"}))
        });
  	}).catch(err => {
      failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  	})
}
//updates User
UserRepo.prototype.updateUser=function(object, success, failed){
  User.findOne({
    where: {id: object.id},
    attributes: ['id', 'firstname', 'lastname', 'mobile', 'email', 'status'],
  }).then(user =>{
      user.update(
      object
    ).then(user =>{
      success(JSON.stringify({statusCode:200, "data": user, "status": 'OK'}))
    }).catch(err => {
      failed({statusCode:500, "description": "Can not update user","error": err})
    })
  }).catch(err => {
    failed(JSON.stringify({statusCode:500, "description": "Can not update user or user does not exists","error": err}))
  })
}



module.exports=UserRepo;
