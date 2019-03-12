const db = require('../../config/dbconfig.js');
const GenrePreference = db.genrePreference;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function GenrePreferenceRepo(){
}
GenrePreferenceRepo.prototype.getAll=function(limit, success, failed){
  GenrePreference.findAll({
    limit: parseInt(limit)
  }).then(genres=>{
    success(genres);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
GenrePreferenceRepo.prototype.getByID=function(id, success, failed){
  GenrePreference.findAll({
    where:{
      userID:id
    },
  }).then(genrePreferences=>{
    success(genrePreferences);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
GenrePreferenceRepo.prototype.insert=function(userID, genreID, success, failed){
  GenrePreference.create({
    userID:userID,
    genreID:genreID
  }).then(genrePreference => {
    success(genrePreference);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
module.exports=GenreRepo;
