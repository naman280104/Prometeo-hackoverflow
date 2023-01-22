const jwt = require('jsonwebtoken');
require('dotenv/config')

function verify (req, res, next){
    const token = req.header('auth-token')
    if(!token) return res.status(401).send("Acess denied");

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        verified = req.user;
        next();
    }catch(error){
        res.send(error)
    }
}