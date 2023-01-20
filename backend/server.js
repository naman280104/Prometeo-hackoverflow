const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser')
require('dotenv/config');

// using the middleware 
app.use(bodyParser.json());

// importing the routes
const authRoute = require('./routes/user')
app.use('/api/', authRoute);

// connecting with the database
const uri = process.env.DB_CONNECTION
const connect = async() =>{
    try {
        mongoose.connect(uri)
        console.log("DB connected")
    } catch (err) {
        console.log(err);
    }
}

connect();




app.listen(PORT, () => console.log("THE SERVER IS LISTENING"))