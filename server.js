var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('dotenv').config();
require('./config/database');

var cors = require('cors');
var session = require('express-session');
var methodOverride = require('method-override');
var passport = require('passport');
require('./config/passport');
var NodeGeocoder = require('node-geocoder');

var pets = require('./routes/pets');
var petsApi = require('./routes/api/petsApi')
var users = require('./routes/users');

var app = express();
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
// method override
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'WDIRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(methodOverride('_method'));

app.use('/', pets);
app.use('/api', petsApi);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
