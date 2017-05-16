const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const users = require('../controllers/users');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

router.get('/',function(req, res) {
  res.render('users', {user: req.user});
});

router.get('/login', function(req, res){
  res.render('login', {user: req.user});
});

router.get('/login/facebook', passport.authenticate('facebook',{scope:'email'}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/users/login' }), function(req, res) {
    res.redirect('/');
});

router.get('/profile', ensureLoggedIn('/users/login'), function(req, res){
  res.render('profile', { user: req.user });
});


router.get('/logout',function(req, res){
  req.logout();
  res.redirect('/');
})

module.exports = router;



