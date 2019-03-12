const db = require('../../config/dbconfig.js');
const Discussion = db.discussion;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function DiscussionRepo(){
}
DiscussionRepo.prototype.getAll=function(limit, success, failed){
  Discussion.findAll({
    limit: parseInt(limit)
  }).then(discussions=>{
    success(discussions);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
DiscussionRepo.prototype.getByShowID=function(id, success, failed){
  Discussion.findAll({
    where:{
      showID:id
    },
  }).then(discussions=>{
    success(discussions);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
DiscussionRepo.prototype.insert=function(title, description, showID, createdByUserID, createdAt, updatedAt, success, failed){
  Discussion.create({
    title:title,
    description:description,
    showID:showID,
    createdByUserID:createdByUserID,
    createdAt:createdAt,
    updatedAt:updatedAt
  }).then(genre => {
    success(genre);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=DiscussionRepo;
