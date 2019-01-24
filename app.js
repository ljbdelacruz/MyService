var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//user router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var storesRouter=require('./routes/store');
var loginRouter=require('./routes/login');
var categoryRouter=require('./routes/category');
var bodyParser = require('./node_modules/body-parser');
var app = express();

//Setup use node_modules
app.use(bodyParser.json())
//setup DB
const db = require('./app/config/dbconfig.js');
const env = require('./app/config/global.js');
var Role = require('./app/seeders/role.seeder.js');
var UserSeed=require('./app/seeders/user.seeder.js');

if(env.migrate == true) {
	db.sequelize.sync({force: true}).then(() => {
		console.log("Seed Success");
		Role.seed();
		UserSeed.seed();
	});
}
require('./app/routes/v1.js')(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
// app.use('/stores', storesRouter);
// app.use('/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next){
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
const port = env.http;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//setup db connection
// var global=require('./services/global');
// var connection=require('./services/Plugins/ljnodelinq');
// connection.mysqlConfig(global.host, global.username, global.password, global.db, function(conn){
//   //success
//   var apis=require('./services/data');
//   connection.selectFunc(conn);
//   connection.insertFunc(conn);
// }, function(){
//   //failed
// });
