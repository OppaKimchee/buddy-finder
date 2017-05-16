var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

// facebook oauth
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK,
  profileFields: ['id','displayName', 'photos', 'email']
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(JSON.stringify(profile,null,2))
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    User.findOne({'facebookId': profile.id}, function(err, user){
      if(err) return cb(err);
      if(user) {
        return cb(null, user);
      }
      else {
        let newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          facebookId: profile.id,
          // avatar: profile.photos
        });
        newUser.save(function(err){
          if(err) return cb(err);
          return cb(null, newUser);
        });
      }
    })
  }
));


// FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });


passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id)
    .populate('pets').exec(function(err, user) {
    cb(null, user);
  });
});

