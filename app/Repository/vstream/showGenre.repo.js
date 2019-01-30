const db = require('../../config/dbconfig.js');
const ShowsGenre = db.showsGenre;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function ShowsRepo(){
}
ShowsGenreRepo.prototype.getShowID=function(show_id, failed){
  ShowsGenre.findAll({
    where:{
      show_id: show_id
    },
  }).then(showGenre=>{
    success(showGenre);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
ShowsGenreRepo.prototype.insert=function(show_id, genre_id, success, failed){
  ShowsGenre.create({
    show_id:show_id,
    genre_id:genre_id
  }).then(showgenre => {
    success(showgenre);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

module.exports=ShowsRepo;
