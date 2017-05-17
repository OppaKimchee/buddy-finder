const User = require('../models/user');
const passport = require('passport');

const users = {
  index,
  login,
  // authenticate,
  profile,
  logout
  };

function index(req, res) {
  res.render('users', {user: req.user, active:false});
}

function login(req, res){
  res.render('login', {user: req.user, active:false});
}

function profile(req, res){
  res.render('profile', {user: req.user, active:false});
}

function logout(req, res){
  req.session.destroy(function(err){
    res.clearCookie('connect.sid');
    res.redirect('/');
  })
}

// function authenticate(req, res){
//   passport.authenticate('facebook',{scope:'email'});
// }




module.exports = users
