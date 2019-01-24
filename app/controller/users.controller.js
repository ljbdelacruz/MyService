
var userRepo=require('../Repository/users.repo.js');
exports.login = (req, res) => {
  if (req.body != undefined){
    var repo=new userRepo();
    console.log(req.body);
    repo.login(req.body.username, req.body.password, function(data){
      res.send(JSON.stringify({mdata:data}));
    }, function(err){
      res.send(err);
    })
  }else{
    res.send("No Data");
  }

}
