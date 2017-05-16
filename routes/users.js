const express = require('express');
const router = express.Router();
const passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
const users = require('../controllers/users');

// router.get('/', users.index);
// router.get('/profile', users.profile);

router.get('/',function(req, res) {
  res.render('users', { user: req.user });
});

router.get('/login', function(req, res){
  res.render('login');
});

router.get('/login/facebook', passport.authenticate('facebook',{scope:'email'}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/users/login' }), function(req, res) {
    res.redirect('/');
});

router.get('/profile', require('connect-ensure-login').ensureLoggedIn(), function(req, res){
  res.render('profile', { user: req.user });
});

// router.post('/logoutFromFacebook', function(req, res) {
//     res.redirect('https://www.facebook.com/logout.php?next='+'http://localhost:3000'+'/logout&access_token='+req.body['accessToken']);
// });

router.get('/logout',function(req, res){
  req.logout();
  res.redirect('/');
})

module.exports = router;



