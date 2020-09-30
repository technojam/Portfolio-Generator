const passport = require("passport");
const GooleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GooleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({
        userId: profile.id,
      }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
          console.log("existing");
        } else {
          console.log("bsdk");
          new User({
            userId: profile.id,
            username: profile.displayName,
            picture: profile._json.picture,
            email: profile._json.email,
            password: profile.id,
          })
            .save()
            .then((user) => {
              done(null, user);
            });
        }
      });
    }
  )
);

//for facebaook
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK_APP_ID,
      clientSecret: keys.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({
        userId: profile.id,
      }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
          console.log("existing");
        } else {
          console.log("bsdk");
          new User({
            userId: profile.id,
            username: profile.displayName,
            picture: profile._json.picture,
            email: profile._json.email,
            password: profile.id,
          })
            .save()
            .then((user) => {
              done(null, user);
            });
        }
      });
    }
  )
);
