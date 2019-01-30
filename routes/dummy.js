var express = require('express');
var body=require('body-parser')
const uuidv1=require('uuid/v1')
var repo=require('../app/Repository')
var router = express.Router();
//User Route
router.get('/shows/:title', function(req, res, next){
  console.log("TITLE");
  console.log(req.params.title);
  repo.borutoStreamer.showsRepo.prototype.getByTitle(req.params.title, function(shows){
    res.send(JSON.stringify({"shows":shows}));
  }, function(err){
    res.send("Error");
  })
})
//dummy user
router.post('/user/auth', function(req, res, next){
  res.send(JSON.stringify({ "access_token":"1ee", "expires_in":200, "refresh_token":"1ee", "scope":"dummy", "token_type":"Bearer"}))
})

router.get('/movies', function(req, res, next){
  res.send(JSON.stringify([
    {id:"1ee", title:"Avengers End Game", summary:"Sample 1", posterImage:"https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},
    {id:"2ee", title:"Avengers War thor", summary:"Sample 1", posterImage:"https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},
    {id:"3ee", title:"Avengers Infinity War", summary:"Sample 1", posterImage: "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}
  ]))
})
router.get('/movies/:id', function(req, res, next){
  res.send(JSON.stringify({id:req.params.id, title:"Avengers end game", summary:"Sample 1", posterImage:"https://www.google.com.ph/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=&url=https%3A%2F%2Fwegotthiscovered.com%2Fmovies%2Fits-the-end-game-for-earths-mightiest-heroes-in-avengers-4-fan-poster%2F&psig=AOvVaw3plDZtEyUK32McOqvGL495&ust=1548763664911537",
  promoImage:"", promoVideo:""}));
})



//END HERE



module.exports = router;
