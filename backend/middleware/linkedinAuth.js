const LinkedinStrategy = require('passport-linkedin-oauth2');
const passport = require('passport');

passport.use(new LinkedinStrategy({
    clientID: process.env.LINKEDIN_CLIENT,
    clientSecret: process.env.LINKEDIN_SECRET
}))

passport.serializeUser();
passport.deserializeUser();