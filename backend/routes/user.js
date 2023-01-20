const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {validateRegistration} = require('../middleware/validation')
const passport = require('passport')

router.get('/registration/', async(req, res)=>{
    res.send({name: "JohnDoe"})
})


// making a new user using the POST api

router.post('/registration/',  async (req, res)=>{

    // validating the user given
    const result = await validateRegistration.validateAsync(req.body)
    console.log(result);

    // checking for existing usernames and emails
    const checkEmail = await User.findOne({email: req.body.email})
    const checkUsername = await User.findOne({username: req.body.username})

    if(checkEmail) return res.status(400).send("Email already exists")
    if(checkUsername) return res.status(400).send("Username already exists")

    // hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    })

    try {
        const newUser = await user.save()
        res.send(newUser); 
    } catch (error) {
        console.log(error);
    }
})


// working with google authentication

router.get('registration/google/failed', (req, res)=>{
    res.send("authentication failed");
})

router.get('/registration/google', 
    passport.authenticate('google', {
        successRedirect: "",
        failureRedirect: "registration/google/failed",
    })
)


// working with linkedin authentication
router.get('registration/linkedin/failed', (req, res) => {
    res.send("authentication failed");
})


router.get('/registration/linkedin', 
    passport.authenticate('linkedin', {
        successRedirect: "", 
        failureRedirect: "",
    })
)

module.exports = router;