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
  res.render('users', {user: req.user});
}

function login(req, res){
  res.render('login', {user: req.user});
}

function profile(req, res){
  res.render('profile', { user: req.user });
}

function logout(req, res){
  req.logout();
  res.redirect('/');
}

// function authenticate(req, res){
//   passport.authenticate('facebook',{scope:'email'});
// }




module.exports = users
