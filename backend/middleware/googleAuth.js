const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv/config')

// using the passport strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scope: ['proflile']
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

