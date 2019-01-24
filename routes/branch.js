var express = require('express');
var body=require('body-parser')
var apis=require('../services/data')
var storeModel=require('../services/model/storesModel')
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next){
  res.send('respond with a resource');
});
router.post('/new', function(req, res, next){

})
module.exports = router;
