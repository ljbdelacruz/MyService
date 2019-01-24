var express = require('express');
var body=require('body-parser')
var apis=require('../services/data');
var repo=require('../app/Repository')
var router = express.Router();
//User Route
router.post('/user/auth', function(req, res, next){
  repo.usersRepo.prototype.login(req.body.username, req.body.password, function(data){
    console.log(data);
    res.send(data);
  }, function(err){
    console.log(err);
  })
})
router.post('/user/register', function(req, res, next){
  //validate data before inserting into db records
  //do password encryption here
  repo.usersRepo.prototype.insertUser(req.firstname, req.lastname, req.mobile, req.email, req.password, 0, function(message){
      res.send(message);
  }, function(err){
      res.send(err);
  })
})
//END HERE



module.exports = router;
