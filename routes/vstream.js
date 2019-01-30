var express = require('express');
var body=require('body-parser')
const uuidv1=require('uuid/v1')
var apis=require('../services/data');
var repo=require('../app/Repository')
var router = express.Router();


router.get('/movies/:title/:limit', function(req, res, next){
  repo.vstream.showsRepo.prototype.getByTitle(req.params.title, req.params.limit, function(shows){
    res.send(shows);
  }, function(err){
    res.send(err);
  })
})


module.exports = router;
