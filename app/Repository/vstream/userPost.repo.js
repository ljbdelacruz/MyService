const db = require('../../config/dbconfig.js');
const UserPost = db.userPost;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function UserPostRepo(){
}
UserPostRepo.prototype.getLimit=function(limit, success, failed){
  UserPost.findAll({
    limit: parseInt(limit)
  }).then(branches=>{
    success(branches);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
UserPostRepo.prototype.getByID=function(id, success, failed){
  UserPost.findOne({
    where:{
      id:id,
    }
  }).then(show=>{
    success(show);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
UserPostRepo.prototype.insert=function(title, description, profileImage, videoPromo, isSeries, success, failed){
  UserPost.create({
    title:title,
    description:description,
    profileImage:profileImage,
    videoPromo:videoPromo,
    isSeries:isSeries,
  }).then(show =>{
    success(show);
  }).catch(err=>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

module.exports=UserPostRepo;
