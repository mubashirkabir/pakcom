var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('config');
var mongoose = require('mongoose');
var cors = require('cors');
var productRouter = require('./routes/product.routes');
var categoryRouter = require('./routes/category.routes');
var locationRouter = require('./routes/location.routes');
var ratesRouter = require('./routes/rates.routes');
var planRouter = require('./routes/plan.routes');
var userRouter = require('./routes/users.routes');
var blogsRouter = require('./routes/blogs.routes');
var notificationRouter = require('./routes/notification.routes')


var app = express();
create_db_connection();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/location', locationRouter);
app.use('/rates', ratesRouter);
app.use('/plan', planRouter);
app.use('/user', userRouter);
app.use('/blogs', blogsRouter);
app.use('/notification', notificationRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

function create_db_connection(uri) {
  mongoose.connect("mongodb://localhost:27017/pakcom", { useNewUrlParser: "true" });
  mongoose.connection.on("error", (err) => {
    console.log("err", err);
  });

  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
  });

}
