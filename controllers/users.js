const User = require('../models/user');
const Pet = require('../models/pet');
const passport = require('passport');

const users = {
  mypets,
  logout
  };

function mypets(req, res){
  Pet.find({}, function(err, pets) {
    if (err) return res.redirect('/');
    res.render('mypets', {user: req.user, pets:pets, active:false});
  }
)}

function logout(req, res){
  req.session.destroy(function(err){
    res.clearCookie('connect.sid');
    res.redirect('/');
  })
}




module.exports = users
