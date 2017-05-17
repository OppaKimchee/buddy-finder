const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const usersController = require('../controllers/users');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

router.get('/', usersController.index);

// router.get('/login', usersController.login);

router.get('/login/facebook', passport.authenticate('facebook',{scope:'email'}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/users/login' }), function(req, res) {
    res.redirect('/');
});

router.get('/profile', ensureLoggedIn('/users/login'), usersController.profile);

router.get('/logout', usersController.logout);

module.exports = router;



