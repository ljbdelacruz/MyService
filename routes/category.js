var express = require('express');
var body=require('body-parser')
var apis=require('../services/data')
var storeModel=require('../services/model/storesModel')
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next){
  res.send('respond with a resource');
});
router.get('/all', function(req, res, next){
  apis.categoryAPI.All(function(row, field){
    res.send(JSON.stringify({data:row}));    
  }, function(err){
    res.send(JSON.stringify({message:"Error cannot process request"}))
  })
})



module.exports = router;
