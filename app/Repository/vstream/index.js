const showsRepo=require('./shows.repo.js');
const videoURL=require('./videoURL.repo.js');
const genre=require('./genre.repo.js');
const showGenre=require('./genre.repo.js');
showsRepo();
videoURL();
genre();
showGenre();
module.exports={
  showsRepo:showsRepo,
  videoURL:videoURL,
  genre:genre,
  showGenre:showGenre
}
