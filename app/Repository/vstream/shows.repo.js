const db = require('../../config/dbconfig.js');
const Shows = db.shows;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function ShowsRepo(){
}
ShowsRepo.prototype.getByTitle=function(title, limit, success, failed){
  Shows.findAll({
    where:{
      title: {
				[Op.like]: "%"+title+"%",
			},
    },
    limit: parseInt(limit)
  }).then(branches=>{
    success(branches);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
ShowsRepo.prototype.insert=function(title, description, profileImage, videoPromo, isSeries, success, failed){
  Shows.create({
    title:title,
    description:description,
    profileImage:profileImage,
    videoPromo:videoPromo,
    isSeries:isSeries,
  }).then(show => {
    success(show);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

module.exports=ShowsRepo;
