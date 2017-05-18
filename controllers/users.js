const User = require('../models/user');
const passport = require('passport');

const users = {
  profile,
  logout
  };

function profile(req, res){
  res.render('profile', {user: req.user, active:false});
}

function logout(req, res){
  req.session.destroy(function(err){
    res.clearCookie('connect.sid');
    res.redirect('/');
  })
}




module.exports = users
