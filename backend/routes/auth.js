const router = require('express').Router()
const express = require('express')
const session = require('cookie-session')
const cors = require('cors')
const passport = require('passport')
const app = express();
require('../middleware/googleAuth')


router.get("/google", passport.authenticate("google", ["profile"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect:' http://127.0.0.1:5173/home',
		failureRedirect: "/login/failed",
        callbackURL: "/",
	})
);

module.exports = router