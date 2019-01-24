var express = require('express');
var body=require('body-parser')
var apis=require('../services/data');
var repo=require('../app/Repository')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
  res.send('respond with a resource');
});
router.post('/auth/:username/:password', function(req, res, next){
  // apis.userAPI.prototype.authenticate(req.params.username, req.params.password, function(data){
  //   res.send(JSON.stringify({code:100, message:"Success", data:data}));
  // }, function(message){
  //   res.send(JSON.stringify({code:500, message:message}));
  // })
  res.send("Test");
})
router.post('/auth2', function(req, res, next){
  repo.usersRepo.prototype.login(req.body.username, req.body.password, function(data){
    res.send(data);
  }, function(err){
    res.send(err);
  })
})
router.post('/register', function(req, res, next){
  //validate data before inserting into db records
  //do password encryption here
  repo.usersRepo.prototype.insertUser(req.firstname, req.lastname, req.mobile, req.email, req.password, 0, function(message){
      res.send(message);
  }, function(err){
      res.send(err);
  })
})
router.post('/updateProfile', function(req, res, next){
  //check for access token
})

module.exports = router;
