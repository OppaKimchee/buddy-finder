const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const usersController = require('../controllers/users');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

router.get('/login/facebook', passport.authenticate('facebook',{scope:'email'}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/users/login' }), function(req, res) {
    res.redirect('/');
});

router.get('/mypets', ensureLoggedIn('/users/login'), usersController.mypets);

router.get('/logout', usersController.logout);

module.exports = router;



