var express = require('express');
var body=require('body-parser')
var apis=require('../services/data')
var storeModel=require('../services/model/storesModel')
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next){
  res.send('respond with a resource');
});
router.get('/category/:id', function(req, res, next){
  apis.storesAPI.prototype.GetByCategoryID(req.params.id, function(row, fields){
    res.send(JSON.stringify({data:row}));
  }, function(err){
    res.send(JSON.stringify({message:"error fetching list"}));
  })
})
router.post('/new', function(req, res, next){
  let model=new storeModel()
  model.toObject(req.body);
  apis.storesAPI.prototype.NewObject(model, function(){
    res.send(JSON.stringify({message:"inserted new store"}));
  }, function(err){
    res.send(JSON.stringify({message:"failed inserting"}))        
  })
})



module.exports = router;
