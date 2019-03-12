var express = require('express');
var body=require('body-parser')
const uuidv1=require('uuid/v1')
var repo=require('../app/Repository')
var router = express.Router();

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
// /security/user/auth
router.post('/user/auth', function(req, res, next){
  repo.security.userProfile.prototype.findByEmail(req.body.email, 1, function(userProf){
    //verify userCredentials
    repo.security.userCredentials.prototype.FindByID(userProf.id, function(userCreds){
      let password=bcrypt.hashSync(req.body.password+userCreds.salt);
      if (password == userCreds.password){
        //success
        //send success message auth successfully
        //create accessToken
        res.send("Success Auth");
      }else{
        res.send(JSON.stringify({statusCode:404, description:"Password Invalid"}));
      }
    }, function(err){
      res.send(err);
    })
  }, function(err){
    res.send(err);
  })
})

// /security/user/auth
router.post('/user/register', function(req, res, next){
  repo.security.userProfile.prototype.insert(req.body.firstname, req.body.lastname, req.body.email, req.body.contactNumber, 0, function(userProf){
    let salt=uuidv1();
    let password=bcrypt.hashSync(req.body.password+salt);
    repo.security.userCredentials.prototype.insert(userProf.id, password, salt, req.body.type, function(userCreds){
      //success setting up user
      //setup user devices
      setupUserDevice(req.header.fcm, req.header.deviceID, userProf.id, req.header.appID, function(){
        res.send(JSON.stringify({statusCode:200, description:"Success Auth"}))
      }, function(err){
        res.send(err);
      })
    }, function(err){
      res.send(err);
    })
  }, function(err){
    res.send(err);
  })
})

function setupUserDevice(fcmID, deviceID, userID, appID, success, failed){
  repo.security.userDevice.prototype.insert(fcmID, userID, deviceID, appID, function(userDevice){
    success(userDevice);
  }, function(err){
    failed(err);
  })
}
function validateUserDevice(id, success, failed){
  repo.security.userDevice.prototype.findByUserID(id, function(userDevice){
      success(userDevice);
  }, function(err){
    failed(err);
  })
}

module.exports = router;
