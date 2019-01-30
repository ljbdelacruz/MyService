var express = require('express');
var body=require('body-parser')
const uuidv1=require('uuid/v1')
var apis=require('../services/data');
var repo=require('../app/Repository')
var router = express.Router();
//User Route
router.post('/user/auth', function(req, res, next){
  repo.security.userProfile.prototype.findByEmail(req.body.username, 1, function(userP){
    repo.security.userCredentials.prototype.findByID(userP.id, function(userC){
      console.log(userC);
      if (userC.password == req.body.password) {
        res.send(userC);
      }else{
        res.send("Please enter valid username/password");
      }
      res.send(userC);
    }, function(err){
      res.send(err);
    })
  }, function(err){
    console.log(err);
    res.send(err);
  })
  // repo.usersRepo.prototype.login(req.body.username, req.body.password, function(data){
  //   res.send(JSON.stringify({ "access_token":"1ee", "expires_in":200, "refresh_token":"1ee", "scope":"dummy", "token_type":"Bearer"}))
  // }, function(err){
  //   console.log(err);
  //   res.send(err);
  // })
})
router.post('/user/register', function(req, res, next){
  //before inserting please check for the input if valid
  //validate data before inserting into db records
  //do password encryption here
  repo.security.userProfile.prototype.insert(req.body.firstname, req.body.lastname, req.body.email, req.body.contactNumber, 0, function(resp){
    console.log(resp);
    repo.security.userCredentials.prototype.insert(resp.id, req.body.password, uuidv1(), 1, function(uc){
      console.log(uc);
      res.send("Success creating user");
    }, function(err){
      res.send(err);
    })
  }, function(err){
    res.send(err);
  })
})
//END HERE



module.exports = router;
