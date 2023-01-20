const session = require('express-session')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv/config')

// using the passport strategy
passport.use(new GoogleStrategy({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}))

passport.ini