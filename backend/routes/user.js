const router = require('express').Router()

router.get('/registration', (req, res)=>{
    res.send("This is the registration page")
})

module.exports = router;