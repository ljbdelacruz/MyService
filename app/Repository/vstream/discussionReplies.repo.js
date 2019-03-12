const db = require('../../config/dbconfig.js');
const DiscussionReplies = db.discussionReplies;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function DiscussionRepliesRepo(){
}
DiscussionRepliesRepo.prototype.getAll=function(limit, success, failed){
  DiscussionReplies.findAll({
    limit: parseInt(limit)
  }).then(discussionsReplies=>{
    success(discussionsReplies);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
DiscussionRepliesRepo.prototype.getByID=function(id, success, failed){
  DiscussionReplies.findAll({
    where:{
      discussionID:id
    },
  }).then(discussionsReply=>{
    success(discussionsReply);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
DiscussionRepliesRepo.prototype.insert=function(discussionID, upVotes, downVotes, createdAt, updatedAt, success, failed){
  DiscussionReplies.create({
    discussionID:discussionID,
    upVotes:upVotes,
    downVotes:downVotes,
    createdAt:createdAt,
    updatedAt:updatedAt
  }).then(discussionReply => {
    success(discussionReply);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=DiscussionRepliesRepo;
