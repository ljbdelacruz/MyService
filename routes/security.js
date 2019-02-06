var express = require('express');
var body=require('body-parser')
const uuidv1=require('uuid/v1')
var repo=require('../app/Repository')
var router = express.Router();

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

//movies

router.post('/user/auth/', function(req, res, next){
  repo.security.userProfile.prototype.findByEmail(req.body.email, 1, function(userProf){
    //verify userCredentials
    repo.security.userCredentials.prototype.FindByID(userProf.id, function(userCreds){
      let password=bcrypt.hashSync(req.body.password+userCreds.salt);
      if password == userCreds.password{
        //success

      }
    }, function(err){
      res.send(err);
    })
  }, function(err){
    res.send(err);
  })
})

router.post('/user/register', function(req, res, next){
  repo.security.userProfile.prototype.insert(req.body.firstname, req.body.lastname, req.body.email, req.body.contactNumber, 0, function(userProf){
    let salt=uuidv1();
    let password=bcrypt.hashSync(req.body.password+salt);
    repo.security.userCredentials.prototype.insert(userProf.id, password, salt, req.body.type, function(userCreds){
      res.send()
    }, function(err){
      res.send(err);
    })
  }, function(err){
    res.send(err);
  })

})


module.exports = router;
