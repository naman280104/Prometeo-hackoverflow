const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config');

// using the middleware 
app.use(bodyParser.json());
app.use(cors())

// importing the routes
const authRoute = require('./routes/user')
const fileRoute = require('./routes/csvFile')
const gauthRoute = require('./routes/auth')


app.use('/api/user', authRoute);
app.use('/api/files', fileRoute)
app.use('/auth', gauthRoute)

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