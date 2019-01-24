const db = require('../../config/dbconfig.js');
const Store = db.store;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function StoreRepo(){
}
StoreRepo.prototype.getByID=function(id, success, failed){
  Store.findOne({
    where:{
      id:id
    },
    order: sequelize.literal('max(priority) DESC')
  }).then(store=>{
    success(store);
  }).catch(err=>{
    failed(JSON.stringify({status:505, description: "Error -> "+err}))
  })
}
StoreRepo.prototype.insert=function(name, description, storeLogo, category_id, success, failed){
  Store.create({
    name:name,
    description:description,
    storeLogo:storeLogo,
    category_id:category_id,
  }).then(data => {
    success(data);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}


module.exports=StoreRepo;
