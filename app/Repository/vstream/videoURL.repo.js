const db = require('../../config/dbconfig.js');
const VideoURL = db.videoURL;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function VideoURLRepo(){
}
VideoURLRepo.prototype.getByTitle=function(shows_id, success, failed){
  VideoURL.findAll({
    where:{
      shows_id:shows_id
    },
  }).then(videos=>{
    success(videos);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}

VideoURLRepo.prototype.insert=function(shows_id, title, summary, url, previewImage, success, failed){
  VideoURL.create({
    shows_id: shows_id,
    title:title,
    summary:summary,
    url: url,
    previewImage:previewImage
  }).then(video => {
    success(video);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=VideoURLRepo;
