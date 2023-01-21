const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv/config')

// using the passport strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:5173/home'
},
function(accessToken, refressToken, profile, callback)
{
    callback(null, profile)
}
)
)

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser((user, done)=>{
    done(null, user)
})

