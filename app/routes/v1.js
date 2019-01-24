
module.exports = function(app) {
  const user=require('../controller/users.controller.js');
  //users auth
  console.log("Prototype");
  console.log(user.prototype);
  app.post('/api/v1/login', user.login);
}
