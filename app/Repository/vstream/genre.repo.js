const db = require('../../config/dbconfig.js');
const Genre = db.genre;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function GenreRepo(){
}
GenreRepo.prototype.getAll=function(limit, success, failed){
  Genre.findAll({
    limit: parseInt(limit)
  }).then(genres=>{
    success(genres);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
GenreRepo.prototype.getByID=function(id, success, failed){
  Genre.findAll({
    where:{
      id:id
    },
  }).then(videos=>{
    success(videos);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
GenreRepo.prototype.insert=function(title, description, success, failed){
  Genre.create({
    title:title,
    description:description
  }).then(genre => {
    success(genre);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=GenreRepo;
